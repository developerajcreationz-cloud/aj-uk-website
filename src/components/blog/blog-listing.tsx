import Link from "next/link";
import { Illustration } from "@/components/illustrations";
import { Reveal } from "@/components/ui/reveal";
import { PageShell, PageHero, CtaBand } from "@/components/layout/page-shell";
import { CATEGORIES, categoryOf, livePosts } from "@/content/posts";
import type { Post } from "@/content/posts/types";
import { getService } from "@/content/services";

export const PAGE_SIZE = 10;

export const pagePath = (n: number) => (n <= 1 ? "/blog/" : `/blog/page/${n}/`);

type Props = {
  posts: Post[];
  /** Active category slug; omitted on the all-guides listing. */
  category?: string;
  page?: number;
  totalPages?: number;
};

export function BlogListing({ posts, category, page = 1, totalPages = 1 }: Props) {
  const active = CATEGORIES.find((c) => c.slug === category);
  const chips = CATEGORIES.map((c) => ({
    ...c,
    count: livePosts().filter((p) => categoryOf(p)?.slug === c.slug).length,
  })).filter((c) => c.count > 0);
  const chip = "rounded-full border px-4 py-2 text-sm transition-colors";

  return (
    <PageShell>
      <PageHero
        eyebrow="Blog"
        scene="seo"
        title={active ? active.label : "Guides to help your business grow online."}
        intro={
          active
            ? active.description
            : "Straight answers on websites, SEO, paid ads, CRM and video, with real price ranges and checklists you can use before you hire anyone."
        }
      />
      <section className="bg-cream px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-[1440px]">
          <nav aria-label="Blog categories" className="mb-12 flex flex-wrap gap-3">
            <Link
              href="/blog/"
              data-cursor-hover
              aria-current={active ? undefined : "page"}
              className={`${chip} ${active ? "border-ink/15 hover:bg-ink hover:text-cream" : "border-ink bg-ink text-cream"}`}
            >
              All guides <span className="opacity-70">({livePosts().length})</span>
            </Link>
            {chips.map((c) => (
              <Link
                key={c.slug}
                href={`/blog/category/${c.slug}/`}
                data-cursor-hover
                aria-current={c.slug === category ? "page" : undefined}
                className={`${chip} ${c.slug === category ? "border-ink bg-ink text-cream" : "border-ink/15 hover:bg-ink hover:text-cream"}`}
              >
                {c.label} <span className="opacity-70">({c.count})</span>
              </Link>
            ))}
          </nav>

          <ul className="grid gap-6 md:grid-cols-2">
            {posts.map((p, i) => (
              <li key={p.slug}>
                <Reveal dir="zoom" delay={(i % 2) * 0.1} className="h-full">
                  <Link
                    href={`/blog/${p.slug}/`}
                    data-cursor-hover
                    className="block h-full rounded-2xl border border-ink/10 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:bg-ink hover:text-cream hover:shadow-[0_30px_60px_-30px_rgba(76,29,149,0.5)]"
                  >
                    <Illustration scene={p.scene} className="mb-6 overflow-hidden rounded-2xl" />
                    <p className="text-xs uppercase tracking-wide opacity-60">
                      {categoryOf(p)?.label ?? getService(p.parent)?.title}
                    </p>
                    <h3 className="font-display mt-3 text-2xl font-medium tracking-tight md:text-3xl">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed opacity-70">{p.metaDescription}</p>
                    <p className="mt-5 text-xs opacity-60">
                      By {p.author.name}, {p.author.role} ·{" "}
                      <time dateTime={p.datePublished}>
                        {new Date(`${p.datePublished}T00:00:00Z`).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          timeZone: "UTC",
                        })}
                      </time>
                    </p>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>

          {totalPages > 1 && (
            <nav aria-label="Blog pages" className="mt-14 flex flex-wrap items-center justify-center gap-2">
              {page > 1 && (
                <Link
                  href={pagePath(page - 1)}
                  rel="prev"
                  className={`${chip} border-ink/15 hover:bg-ink hover:text-cream`}
                >
                  Previous
                </Link>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <Link
                  key={n}
                  href={pagePath(n)}
                  aria-current={n === page ? "page" : undefined}
                  aria-label={`Page ${n}`}
                  className={`${chip} ${n === page ? "border-ink bg-ink text-cream" : "border-ink/15 hover:bg-ink hover:text-cream"}`}
                >
                  {n}
                </Link>
              ))}
              {page < totalPages && (
                <Link
                  href={pagePath(page + 1)}
                  rel="next"
                  className={`${chip} border-ink/15 hover:bg-ink hover:text-cream`}
                >
                  Next
                </Link>
              )}
            </nav>
          )}
        </div>
      </section>
      <CtaBand />
    </PageShell>
  );
}
