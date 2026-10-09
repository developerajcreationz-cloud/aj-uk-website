import type { Metadata } from "next";
import { PageShell, CtaBand } from "@/components/page-shell";
import { Work } from "@/components/work";

export const metadata: Metadata = {
  title: { absolute: "Our Work | Brand Identity & Web Projects" },
  description: "Selected brand identity, social media and web projects from AJ Creationz.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <PageShell>
      <div className="pt-20 bg-ink">
        <h1 className="sr-only">Our work: brand identity, web and social projects</h1>
        <Work />
      </div>
      <CtaBand title="Want results like these?" />
    </PageShell>
  );
}
