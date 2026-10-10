import type { Metadata } from "next";
import { PageShell, PageHero, CtaBand } from "@/components/layout/page-shell";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";

export const metadata: Metadata = {
  title: { absolute: "About AJ Creationz | The Digital Agency Team & Approach" },
  description:
    "AJ Creationz is a creative and digital agency for UK and US businesses. Meet the team behind the websites, SEO, ads and CRM systems.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="A small studio with big-agency standards."
        intro="We combine brand, web, video, ads and CRM so your marketing works as one system."
      />
      <About />
      <Testimonials />
      <CtaBand />
    </PageShell>
  );
}
