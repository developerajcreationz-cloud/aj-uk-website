import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: { absolute: "Contact AJ Creationz | Get a Quote for Your Project" },
  description:
    "Tell AJ Creationz about your website, SEO, ads, video or CRM project. We work with UK and US businesses and reply within one working day.",
  alternates: { canonical: "/contact/" },
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
