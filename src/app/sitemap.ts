import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";
import { SERVICES } from "@/content/services";
import { CATEGORIES, categoryOf, livePosts } from "@/content/posts";
import { PROJECTS_WITH_PAGES } from "@/content/projects";

/** Re-generate hourly so scheduled posts are listed on their publish date. */
export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = livePosts();
  const siteUpdated = new Date(SITE.contentUpdated);
  // Posts carry their own modified date; other pages use SITE.contentUpdated, bumped when their content changes.
  const paths: { p: string; priority: number; modified?: string }[] = [
    { p: "", priority: 1 },
    { p: "/services", priority: 0.9 },
    ...SERVICES.map((s) => ({ p: `/services/${s.slug}`, priority: s.parent ? 0.7 : 0.8 })),
    { p: "/work", priority: 0.8 },
    ...PROJECTS_WITH_PAGES.map((project) => ({ p: `/work/${project.slug}`, priority: 0.6 })),
    { p: "/blog", priority: 0.7 },
    ...Array.from({ length: Math.ceil(posts.length / 10) - 1 }, (_, i) => ({
      p: `/blog/page/${i + 2}`,
      priority: 0.4,
    })),
    ...CATEGORIES.filter((c) => posts.some((p) => categoryOf(p)?.slug === c.slug)).map((c) => ({
      p: `/blog/category/${c.slug}`,
      priority: 0.5,
    })),
    ...posts.map((post) => ({ p: `/blog/${post.slug}`, priority: 0.6, modified: post.dateModified })),
    { p: "/about", priority: 0.7 },
    { p: "/contact", priority: 0.8 },
    { p: "/privacy", priority: 0.2 },
    { p: "/terms", priority: 0.2 },
  ];
  return paths.map(({ p, priority, modified }) => ({
    url: `${SITE.url}${p}/`,
    lastModified: modified ? new Date(modified) : siteUpdated,
    changeFrequency: "monthly",
    priority,
  }));
}
