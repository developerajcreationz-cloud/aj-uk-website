import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { getPost } from "@/content/posts";

/** Cost and comparison guides Search Console shows Google already testing; linked from the homepage to pass it authority. */
const GUIDE_SLUGS = [
  "seo-pricing",
  "website-maintenance-cost",
  "google-ads-cost",
  "how-much-does-a-website-cost",
  "technical-seo-audit-checklist",
  "shopify-vs-wordpress",
];

export function HomeGuides() {
  const guides = GUIDE_SLUGS.map(getPost).filter((p): p is NonNullable<typeof p> => !!p);
  if (guides.length === 0) return null;

  return (
    <section id="guides" className="bg-cream px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-ink/60">
          <span className="h-1.5 w-1.5 rounded-full bg-violet" />
          Popular guides
        </p>
        <h2 className="font-display max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
          What things cost in the UK, with the maths shown
        </h2>
        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((g, i) => (
            <li key={g.slug}>
              <Reveal delay={i * 0.06}>
                <Link
                  href={`/blog/${g.slug}/`}
                  data-cursor-hover
                  className="block h-full rounded-2xl border border-ink/10 bg-white/70 p-6 transition-colors hover:bg-ink hover:text-cream"
                >
                  <h3 className="font-display text-xl font-medium">{g.title}</h3>
                  <p className="mt-2 text-sm opacity-70">{g.metaDescription}</p>
                  <span className="mt-4 inline-block text-sm">Read the guide →</span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
        <Link
          href="/blog/"
          data-cursor-hover
          className="mt-10 inline-block border-b border-ink/25 pb-1 text-sm font-medium hover:border-ink"
        >
          All guides →
        </Link>
      </div>
    </section>
  );
}
