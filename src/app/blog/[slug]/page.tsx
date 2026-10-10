import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell, PageHero, CtaBand } from "@/components/layout/page-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { Illustration } from "@/components/illustrations";
import { InlineText } from "@/components/sections/inline-text";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { PostBlocks } from "@/components/sections/post-body";
import { POSTS, getPost } from "@/content/posts";
import { getService } from "@/content/services";
import { SITE } from "@/config/site";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: { absolute: p.metaTitle },
    description: p.metaDescription,
    alternates: { canonical: `/blog/${p.slug}/` },
    authors: [{ name: p.author.name }],
    openGraph: {
      type: "article",
      title: p.metaTitle,
      description: p.metaDescription,
      url: `/blog/${p.slug}/`,
      publishedTime: p.datePublished,
      modifiedTime: p.dateModified,
      authors: [p.author.name],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const parent = getService(post.parent);
  const url = `${SITE.url}/blog/${post.slug}/`;
  const crumbs = [{ label: "Home", href: "/" }, { label: "Blog", href: "/blog/" }, { label: post.title }];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.metaDescription,
        url,
        mainEntityOfPage: url,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        keywords: [post.primaryKeyword, ...post.secondaryKeywords].join(", "),
        author: {
          "@type": "Person",
          name: post.author.name,
          jobTitle: post.author.role,
          worksFor: { "@id": `${SITE.url}/#organization` },
        },
        publisher: { "@id": `${SITE.url}/#organization` },
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.label,
          item: c.href ? `${SITE.url}${c.href.endsWith("/") ? c.href : c.href + "/"}` : url,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  const authorProfile = SITE.team.find((m) => m.name === post.author.name);
  const related = post.related.map(getPost).filter((p): p is NonNullable<typeof p> => !!p);

  return (
    <PageShell>
      <JsonLd data={jsonLd} />
      <PageHero eyebrow={parent?.title ?? "Guide"} title={post.title} crumbs={crumbs} />

      <article className="bg-cream px-6 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-14">
          <div className="min-w-0 max-w-4xl space-y-12 text-base leading-relaxed text-ink/75 md:text-lg">
            <p className="text-sm text-ink/55">
              By <strong className="font-medium text-ink">{post.author.name}</strong>, {post.author.role} · Published{" "}
              {post.datePublished} · Updated {post.dateModified}
            </p>

            <Reveal dir="zoom">
              <Illustration scene={post.scene} className="overflow-hidden rounded-3xl" />
            </Reveal>

            <aside className="rounded-2xl border border-ink/10 bg-white/60 p-6">
              <p className="font-display text-lg font-medium text-ink">What you will get from this guide</p>
              <ul className="mt-3 space-y-2 text-base">
                {post.takeaways.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                    {t}
                  </li>
                ))}
              </ul>
            </aside>

            <div className="space-y-5">
              {post.answer.map((p) => (
                <p key={p.slice(0, 40)}>
                  <InlineText text={p} />
                </p>
              ))}
              {post.disclosure && <p className="text-sm text-ink/55">{post.disclosure}</p>}
            </div>

            {post.sections.map((s) => (
              <Reveal key={s.h2} amount={0.1}>
                <section>
                  <h2 className="font-display mb-5 text-3xl font-medium tracking-tight text-ink md:text-4xl">{s.h2}</h2>
                  <PostBlocks blocks={s.blocks} />
                </section>
              </Reveal>
            ))}

            <section className="rounded-2xl bg-ink p-8 text-cream">
              <h2 className="font-display text-2xl font-medium">{post.doNext.title}</h2>
              <p className="mt-3 text-cream/75">{post.doNext.text}</p>
              <Link
                href="/contact/"
                data-cursor-hover
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-lilac px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-cream"
              >
                Talk to us <span>→</span>
              </Link>
            </section>

            <section>
              <h2 className="font-display mb-5 text-3xl font-medium tracking-tight text-ink md:text-4xl">
                Frequently asked questions
              </h2>
              <Accordion items={post.faqs} />
            </section>

            <section className="flex items-center gap-5 rounded-2xl border border-ink/10 p-6">
              {authorProfile && "photo" in authorProfile && authorProfile.photo && (
                <Image
                  src={authorProfile.photo}
                  alt={`${post.author.name}, ${post.author.role}`}
                  width={96}
                  height={128}
                  className="h-24 w-20 shrink-0 rounded-xl object-cover object-top"
                />
              )}
              <div>
                <p className="text-xs uppercase tracking-wide text-ink/50">About the author</p>
                <p className="font-display mt-1 text-xl font-medium text-ink">{post.author.name}</p>
                <p className="text-sm text-ink/60">{post.author.role}, AJ Creationz</p>
                <Link
                  href="/about#team"
                  className="mt-2 inline-block text-sm underline underline-offset-4 hover:text-violet"
                >
                  Meet the team
                </Link>
              </div>
            </section>
          </div>

          <aside className="h-fit space-y-6 lg:sticky lg:top-28 lg:order-first">
            {parent && (
              <div className="rounded-2xl border border-ink/10 p-6">
                <p className="text-xs uppercase tracking-wide text-ink/50">Related service</p>
                <Link
                  href={`/services/${parent.slug}`}
                  className="font-display mt-2 block text-xl font-medium hover:text-violet"
                >
                  {parent.title}
                </Link>
                <p className="mt-2 text-sm text-ink/60">{parent.description}</p>
              </div>
            )}
            {related.length > 0 && (
              <div className="rounded-2xl border border-ink/10 p-6">
                <p className="text-xs uppercase tracking-wide text-ink/50">More guides</p>
                <ul className="mt-3 space-y-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/blog/${r.slug}`} className="text-sm font-medium hover:text-violet">
                        {r.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </article>
      <CtaBand />
    </PageShell>
  );
}
