import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    { p: "", priority: 1 },
    { p: "/services", priority: 0.9 },
    ...SERVICES.map((s) => ({ p: `/services/${s.slug}`, priority: 0.8 })),
    { p: "/work", priority: 0.8 },
    { p: "/about", priority: 0.7 },
    { p: "/contact", priority: 0.8 },
    { p: "/privacy", priority: 0.2 },
    { p: "/terms", priority: 0.2 },
  ];
  return paths.map(({ p, priority }) => ({
    url: `${SITE.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}
