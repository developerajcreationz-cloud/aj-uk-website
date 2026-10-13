import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { Contact } from "@/components/sections/contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact AJ Creationz | Get a Quote for Your Project",
  description:
    "Tell AJ Creationz about your website, SEO, ads, video or CRM project. We work with UK and US businesses and reply within one working day. Get a quote.",
  path: "/contact/",
});

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
