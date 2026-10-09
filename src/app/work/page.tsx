import type { Metadata } from "next";
import { PageShell, CtaBand } from "@/components/page-shell";
import { Work } from "@/components/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected brand identity, social media and web projects from AJ Creationz.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <PageShell>
      <div className="pt-20 bg-ink">
        <Work />
      </div>
      <CtaBand title="Want results like these?" />
    </PageShell>
  );
}
