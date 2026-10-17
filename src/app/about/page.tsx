import type { Metadata } from "next";
import { PageShell, PageHero, CtaBand } from "@/components/layout/page-shell";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About AJ Creationz | The Digital Agency Team & Approach",
  description:
    "AJ Creationz is a creative and digital agency for UK and US businesses. Meet the team behind our websites, SEO, ads, video and CRM systems and approach.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        scene="crm"
        title="A small studio with big-agency standards."
        intro="We combine brand, web, video, ads and CRM so your marketing works as one system."
      />
      <About />
      <Testimonials />
      <CtaBand />
    </PageShell>
  );
}
