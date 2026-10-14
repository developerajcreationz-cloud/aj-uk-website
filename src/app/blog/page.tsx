import type { Metadata } from "next";
import Link from "next/link";
import { Illustration } from "@/components/illustrations";
import { Reveal } from "@/components/ui/reveal";
import { PageShell, PageHero, CtaBand } from "@/components/layout/page-shell";
import { CATEGORIES, POSTS, categoryOf } from "@/content/posts";
import { getService } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Blog: Web Design, SEO, Ads & CRM Guides | AJ Creationz",
  description:
    "Practical guides with sourced price ranges, worksheets and checklists on websites, SEO, paid ads, CRM and video, for UK and US businesses to use.",
  path: "/blog/",
});

export default function BlogIndex() {
  const groups = CATEGORIES.map((c) => ({ ...c, posts: POSTS.filter((p) => categoryOf(p)?.slug === c.slug) })).filter(
    (g) => g.posts.length > 0,
  );

  return (
    <PageShell>
      <PageHero
        eyebrow="Blog"
        scene="seo"
        title="Practical guides with the numbers shown."
        intro="Each guide includes sourced price ranges for the UK and the US, a worksheet or checklist you can use, and a clear next step. Figures come from published guides and are labeled as indicative."
      />
      <section className="bg-cream px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-[1440px]">
          <nav aria-label="Blog categories" className="mb-12 flex flex-wrap gap-3">
            {groups.map((g) => (
              <Link
                key={g.slug}
                href={`#${g.slug}`}
                data-cursor-hover
                className="rounded-full border border-ink/15 px-4 py-2 text-sm transition-colors hover:bg-ink hover:text-cream"
              >
                {g.label} <span className="text-ink/60">({g.posts.length})</span>
              </Link>
            ))}
          </nav>

          <div className="space-y-16 md:space-y-24">
            {groups.map((g) => (
              <section key={g.slug} id={g.slug} aria-labelledby={`${g.slug}-heading`} className="scroll-mt-28">
                <h2 id={`${g.slug}-heading`} className="font-display text-3xl font-medium tracking-tight md:text-5xl">
                  {g.label}
                </h2>
                <p className="mt-3 max-w-2xl text-ink/60">{g.description}</p>
                <ul className="mt-8 grid gap-6 md:grid-cols-2">
                  {g.posts.map((p, i) => (
                    <li key={p.slug}>
                      <Reveal dir="zoom" delay={(i % 2) * 0.1} className="h-full">
                        <Link
                          href={`/blog/${p.slug}`}
                          data-cursor-hover
                          className="block h-full rounded-2xl border border-ink/10 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:bg-ink hover:text-cream hover:shadow-[0_30px_60px_-30px_rgba(76,29,149,0.5)]"
                        >
                          <Illustration scene={p.scene} className="mb-6 overflow-hidden rounded-2xl" />
                          <p className="text-xs uppercase tracking-wide opacity-60">{getService(p.parent)?.title}</p>
                          <h3 className="font-display mt-3 text-2xl font-medium tracking-tight md:text-3xl">
                            {p.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed opacity-70">{p.metaDescription}</p>
                          <p className="mt-5 text-xs opacity-60">
                            By {p.author.name}, {p.author.role} · Updated {p.dateModified}
                          </p>
                        </Link>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </PageShell>
  );
}
