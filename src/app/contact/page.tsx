import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Contact } from "@/components/contact";

export const metadata: Metadata = {
  title: { absolute: "Contact AJ Creationz | Start a Project" },
  description: "Start a project with AJ Creationz. Tell us what you need and we will reply within one working day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageShell>
      <div className="bg-ink pt-20">
        <h1 className="sr-only">Contact AJ Creationz</h1>
        <Contact />
      </div>
    </PageShell>
  );
}
