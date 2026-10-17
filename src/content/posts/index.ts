import type { Post } from "./types";
import { websiteCost } from "./website-cost";
import { seoPricing } from "./seo-pricing";
import { gohighlevelVsHubspot } from "./gohighlevel-vs-hubspot";
import { shopifyVsWordpress } from "./shopify-vs-wordpress";
import { googleAdsVsFacebookAds } from "./google-ads-vs-facebook-ads";
import { websiteMigrationSeoChecklist } from "./website-migration-seo-checklist";
import { brandGuidelinesTemplate } from "./brand-guidelines-template";
import { reelsAndTiktokEditingGuide } from "./reels-and-tiktok-editing-guide";
import { gohighlevelPricing } from "./gohighlevel-pricing";
import { googleAdsCost } from "./google-ads-cost";
import { hubspotAlternatives } from "./hubspot-alternatives";
import { technicalSeoAuditChecklist } from "./technical-seo-audit-checklist";
import { websiteMaintenanceCost } from "./website-maintenance-cost";
import { localSeoCost } from "./local-seo-cost";
import { chooseAWebDesignAgency } from "./choose-a-web-design-agency";
import { brandingCost } from "./branding-cost";
import { shopifyStoreCost } from "./shopify-store-cost";
import { videoEditingCost } from "./video-editing-cost";

export type { Post, Block } from "./types";
export { CATEGORIES, categoryOf } from "./categories";
export type { BlogCategory } from "./categories";

/** Build date (UTC, YYYY-MM-DD). A post goes live on the first build on or after its `datePublished`. */
const TODAY = new Date().toISOString().slice(0, 10);

/** Every post written, including ones whose publish date has not arrived. Add new posts here. */
const ALL_POSTS: Post[] = [
  websiteCost,
  seoPricing,
  gohighlevelVsHubspot,
  shopifyVsWordpress,
  googleAdsVsFacebookAds,
  websiteMigrationSeoChecklist,
  brandGuidelinesTemplate,
  reelsAndTiktokEditingGuide,
  gohighlevelPricing,
  googleAdsCost,
  hubspotAlternatives,
  technicalSeoAuditChecklist,
  websiteMaintenanceCost,
  localSeoCost,
  chooseAWebDesignAgency,
  brandingCost,
  shopifyStoreCost,
  videoEditingCost,
];

/** Posts that are live: newest first, scheduled ones held back until their date. */
export const POSTS: Post[] = ALL_POSTS.filter((p) => p.datePublished <= TODAY).sort((a, b) =>
  b.datePublished.localeCompare(a.datePublished),
);

/** Posts written but waiting for their publish date. */
export const SCHEDULED_POSTS: Post[] = ALL_POSTS.filter((p) => p.datePublished > TODAY);

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
export const postsForService = (serviceSlug: string) => POSTS.filter((p) => p.parent === serviceSlug);
