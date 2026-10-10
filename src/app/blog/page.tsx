import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, PageHero, CtaBand } from "@/components/layout/page-shell";
import { POSTS } from "@/content/posts";
import { getService } from "@/content/services";

export const metadata: Metadata = {
  title: { absolute: "Guides on Web Design, SEO, Ads and CRM | AJ Creationz" },
  description:
    "Practical guides with sourced price ranges, worksheets and checklists on websites, SEO, paid ads, CRM and video, for UK and US businesses.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Guides"
        title="Practical guides with the numbers shown."
        intro="Each guide includes sourced price ranges for the UK and the US, a worksheet or checklist you can use, and a clear next step. Figures come from published guides and are labeled as indicative."
      />
      <section className="bg-cream px-6 pb-24 md:px-10 md:pb-32">
        <ul className="mx-auto grid max-w-[1440px] gap-6 md:grid-cols-2">
          {POSTS.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                data-cursor-hover
                className="block h-full rounded-2xl border border-ink/10 p-8 transition-colors hover:bg-ink hover:text-cream"
              >
                <p className="text-xs uppercase tracking-wide opacity-60">{getService(p.parent)?.title}</p>
                <h2 className="font-display mt-3 text-2xl font-medium tracking-tight md:text-3xl">{p.title}</h2>
                <p className="mt-3 text-sm leading-relaxed opacity-70">{p.metaDescription}</p>
                <p className="mt-5 text-xs opacity-60">
                  By {p.author.name}, {p.author.role} · Updated {p.dateModified}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </PageShell>
  );
}
