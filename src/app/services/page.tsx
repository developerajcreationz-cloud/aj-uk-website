import type { Metadata } from "next";
import { PageShell, PageHero, CtaBand } from "@/components/page-shell";
import { Services } from "@/components/services";

export const metadata: Metadata = {
  title: { absolute: "Digital Marketing & Web Services UK | AJ Creationz" },
  description:
    "Brand identity, WordPress, Shopify and custom websites, video editing, SEO, Meta and Google Ads, and GoHighLevel CRM from AJ Creationz.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Everything you need to grow, in one team."
        intro="From brand and website to ads, SEO and CRM automation — pick one service or combine them."
      />
      <Services />
      <CtaBand />
    </PageShell>
  );
}
