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
import { speedToLead } from "./speed-to-lead";
import { seoRoi } from "./seo-roi";
import { websiteLeadGeneration } from "./website-lead-generation";
import { googleAdsAudit } from "./google-ads-audit";
import { getBusinessOnGoogleMaps } from "./get-business-on-google-maps";
import { websiteBriefTemplate } from "./website-brief-template";
import { shopifyTrafficNoSales } from "./shopify-traffic-no-sales";
import { facebookLeadAdsVsLandingPage } from "./facebook-lead-ads-vs-landing-page";
import { videoAdsForSmallBusiness } from "./video-ads-for-small-business";
import { brandRefreshVsRebrand } from "./brand-refresh-vs-rebrand";

export type { Post, Block } from "./types";
export { CATEGORIES, categoryOf } from "./categories";
export type { BlogCategory } from "./categories";

/** Today's date (UTC, YYYY-MM-DD), read on every call so ISR revalidation picks up newly due posts. */
const today = () => new Date().toISOString().slice(0, 10);

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
  // Lead-generation series, four a week from 20 Oct 2026 (Mon, Tue, Thu, Fri), all by Zohaib.
  speedToLead,
  seoRoi,
  websiteLeadGeneration,
  googleAdsAudit,
  getBusinessOnGoogleMaps,
  websiteBriefTemplate,
  shopifyTrafficNoSales,
  facebookLeadAdsVsLandingPage,
  videoAdsForSmallBusiness,
  brandRefreshVsRebrand,
];

/**
 * Posts that are live, newest first. A post goes live on its `datePublished` (UTC): pages that list posts
 * set `revalidate`, so a scheduled post appears within the hour after its date without a rebuild.
 */
export const livePosts = (): Post[] =>
  ALL_POSTS.filter((p) => p.datePublished <= today()).sort((a, b) => b.datePublished.localeCompare(a.datePublished));

/** Posts written but waiting for their publish date. */
export const scheduledPosts = (): Post[] => ALL_POSTS.filter((p) => p.datePublished > today());

export const getPost = (slug: string) => livePosts().find((p) => p.slug === slug);
export const postsForService = (serviceSlug: string) => livePosts().filter((p) => p.parent === serviceSlug);
