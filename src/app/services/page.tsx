import type { Metadata } from "next";
import { PageShell, PageHero, CtaBand } from "@/components/layout/page-shell";
import { Services } from "@/components/sections/services";

export const metadata: Metadata = {
  title: { absolute: "Web Design, SEO, Ads & CRM Services | AJ Creationz" },
  description:
    "Brand identity, WordPress, Shopify and custom websites, video editing, SEO, Meta and Google Ads, and GoHighLevel CRM for UK and US businesses.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Everything you need to grow, in one team."
        intro="Websites, brand, video, SEO, paid ads and CRM automation for UK and US businesses. Each service page shows what is included, what it typically costs in the market and how we work. Pick one or combine them."
      />
      <Services />
      <CtaBand />
    </PageShell>
  );
}
