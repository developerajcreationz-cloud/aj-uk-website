import type { Post } from "./types";

export type BlogCategory = {
  slug: string;
  label: string;
  description: string;
  /** Service page slugs whose guides belong in this category. */
  services: string[];
};

/**
 * Blog categories. They only group posts on /blog/ (anchors such as /blog/#seo); post URLs stay /blog/<slug>/.
 * A post's category comes from its parent service page, so the two never disagree.
 */
export const CATEGORIES: BlogCategory[] = [
  {
    slug: "websites",
    label: "Websites and platforms",
    description: "What websites and online stores cost, which platform to pick and how to hire a builder.",
    services: ["website-development", "wordpress-web-design", "shopify-web-design", "custom-website-development"],
  },
  {
    slug: "seo",
    label: "SEO",
    description: "SEO prices, audits and checklists for small business websites.",
    services: ["seo-growth"],
  },
  {
    slug: "ads",
    label: "Paid ads",
    description: "Google Ads and Meta Ads costs, budgets and how to choose a channel.",
    services: ["meta-google-ads", "google-ads-management", "meta-ads-management"],
  },
  {
    slug: "crm",
    label: "CRM and automation",
    description: "GoHighLevel and HubSpot pricing, comparisons and alternatives.",
    services: ["gohighlevel-crm"],
  },
  {
    slug: "brand",
    label: "Brand and design",
    description: "Branding costs, brand guidelines and identity work.",
    services: ["brand-identity"],
  },
  {
    slug: "video",
    label: "Video and social",
    description: "Video editing prices and short-form video guides.",
    services: ["video-editing"],
  },
];

export const categoryOf = (post: Pick<Post, "parent">) => CATEGORIES.find((c) => c.services.includes(post.parent));
