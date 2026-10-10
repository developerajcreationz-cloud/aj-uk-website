import type { Post } from "./types";
import { websiteCost } from "./website-cost";
import { seoPricing } from "./seo-pricing";
import { gohighlevelVsHubspot } from "./gohighlevel-vs-hubspot";
import { shopifyVsWordpress } from "./shopify-vs-wordpress";
import { googleAdsVsFacebookAds } from "./google-ads-vs-facebook-ads";
import { websiteMigrationSeoChecklist } from "./website-migration-seo-checklist";
import { brandGuidelinesTemplate } from "./brand-guidelines-template";
import { reelsAndTiktokEditingGuide } from "./reels-and-tiktok-editing-guide";

export type { Post, Block } from "./types";

/** Newest first. */
export const POSTS: Post[] = [
  websiteCost,
  seoPricing,
  gohighlevelVsHubspot,
  shopifyVsWordpress,
  googleAdsVsFacebookAds,
  websiteMigrationSeoChecklist,
  brandGuidelinesTemplate,
  reelsAndTiktokEditingGuide,
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
export const postsForService = (serviceSlug: string) => POSTS.filter((p) => p.parent === serviceSlug);
