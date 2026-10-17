import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell, PageHero, CtaBand } from "@/components/layout/page-shell";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { PROJECTS_WITH_PAGES, getProject } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/config/site";

export function generateStaticParams() {
  return PROJECTS_WITH_PAGES.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = getProject(slug)?.detail;
  if (!d) return {};
  return pageMetadata({ title: d.metaTitle, description: d.metaDescription, path: `/work/${slug}/` });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  const detail = project?.detail;
  if (!project || !detail) notFound();

  const url = `${SITE.url}/work/${project.slug}/`;
  const crumbs = [{ label: "Home", href: "/" }, { label: "Work", href: "/work/" }, { label: project.title }];
  const others = PROJECTS_WITH_PAGES.filter((p) => p.slug !== project.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        name: `${project.title}: ${project.category}`,
        description: detail.summary,
        url,
        genre: project.category,
        image: detail.gallery.map((g) => `${SITE.url}${g.src}`),
        creator: { "@id": `${SITE.url}/#organization` },
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
          { "@type": "ListItem", position: 2, name: "Work", item: `${SITE.url}/work/` },
          { "@type": "ListItem", position: 3, name: project.title, item: url },
        ],
      },
    ],
  };

  return (
    <PageShell>
      <JsonLd data={jsonLd} />
      <PageHero eyebrow={project.category} title={project.title} intro={detail.summary} crumbs={crumbs} />

      <section className="bg-cream px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16">
          <aside className="h-fit space-y-8 lg:sticky lg:top-28">
            <div>
              <h2 className="text-xs font-medium uppercase tracking-wide text-ink/60">Services</h2>
              <ul className="mt-3 divide-y divide-ink/10 border-y border-ink/10 text-sm text-ink/75">
                {detail.services.map((s) => (
                  <li key={s} className="flex gap-3 py-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener"
              className="inline-block border-b border-ink/25 pb-1 text-sm font-medium hover:border-ink"
            >
              Also on ajcreationz.co ↗
            </a>
          </aside>

          <div className="min-w-0 space-y-14">
            {detail.sections.map((section) => (
              <Reveal key={section.h2} amount={0.1}>
                <section>
                  <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">{section.h2}</h2>
                  <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-ink/70 md:text-lg">
                    {section.paragraphs.map((p) => (
                      <p key={p.slice(0, 40)}>{p}</p>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}

            {project.quote && (
              <blockquote className="border-l-2 border-violet pl-5">
                <p className="font-display text-xl leading-snug md:text-2xl">&ldquo;{project.quote.text}&rdquo;</p>
                <footer className="mt-3 text-sm text-ink/60">
                  {project.quote.name}, {project.quote.role}
                </footer>
              </blockquote>
            )}

            <section aria-labelledby="gallery-heading">
              <h2 id="gallery-heading" className="font-display text-3xl font-medium tracking-tight md:text-4xl">
                The work
              </h2>
              <div className="mt-6 columns-1 gap-5 sm:columns-2 [&>figure]:mb-5">
                {detail.gallery.map((g, i) => (
                  <figure key={g.src} className="break-inside-avoid">
                    <Image
                      src={g.src}
                      alt={g.alt}
                      width={g.width}
                      height={g.height}
                      sizes="(min-width: 1024px) 40vw, (min-width: 640px) 45vw, 100vw"
                      priority={i === 0}
                      className="h-auto w-full rounded-2xl bg-ink/5"
                    />
                    <figcaption className="mt-2 text-sm text-ink/60">{g.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-ink/10 bg-white/60 p-6">
              <h2 className="font-display text-xl font-medium">More work</h2>
              <ul className="mt-3 space-y-2 text-base">
                {others.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/work/${p.slug}/`} className="underline decoration-violet/50 underline-offset-4">
                      {p.title}
                    </Link>
                    <span className="text-ink/60"> · {p.category}</span>
                  </li>
                ))}
                <li>
                  <Link href="/work/" className="underline decoration-violet/50 underline-offset-4">
                    All projects
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      <CtaBand title={`Want a brand like ${project.title}?`} />
    </PageShell>
  );
}
