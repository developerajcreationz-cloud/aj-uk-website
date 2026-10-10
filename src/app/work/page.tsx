import type { Metadata } from "next";
import { PageShell, PageHero, CtaBand } from "@/components/layout/page-shell";
import { CaseStudies } from "@/components/sections/case-studies";
import { Testimonials } from "@/components/sections/testimonials";
import { PROJECTS } from "@/content/projects";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: "Our Work | Brand Identity, UI/UX & Social Case Studies" },
  description:
    "Brand identity, UI/UX and social media projects by AJ Creationz: NayaSource, Framily Adventures, Call Time and more, with the brief and what we delivered.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: PROJECTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: p.title,
        genre: p.category,
        description: p.brief,
        url: `${SITE.url}/work#${p.slug}`,
        creator: { "@id": `${SITE.url}/#organization` },
      },
    })),
  };
  return (
    <PageShell>
      <JsonLd data={jsonLd} />
      <PageHero
        eyebrow="Work"
        title="Projects we have built and the briefs behind them."
        intro="Four projects from our portfolio, each with the brief we were given and what we delivered. We list outcomes only where we can state them accurately."
      />
      <CaseStudies />
      <Testimonials />
      <CtaBand title="Want a project like these?" />
    </PageShell>
  );
}
