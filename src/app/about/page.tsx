import type { Metadata } from "next";
import { PageShell, PageHero, CtaBand } from "@/components/page-shell";
import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";

export const metadata: Metadata = {
  title: { absolute: "About AJ Creationz | Digital Agency" },
  description: "AJ Creationz is a creative and digital agency working with clients worldwide. Meet the studio and how we work.",
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
