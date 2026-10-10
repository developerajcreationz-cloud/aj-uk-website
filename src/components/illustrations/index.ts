export { Illustration, SCENE_LABELS } from "./scenes";
export type { SceneKey } from "./scenes";
import type { SceneKey } from "./scenes";

/** Which illustration represents each service page. */
export const SERVICE_SCENES: Record<string, SceneKey> = {
  "brand-identity": "brand",
  "website-development": "website",
  "wordpress-web-design": "platforms",
  "shopify-web-design": "platforms",
  "custom-website-development": "website",
  "video-editing": "video",
  "seo-growth": "seo",
  "meta-google-ads": "ads",
  "google-ads-management": "ads",
  "meta-ads-management": "ads",
  "gohighlevel-crm": "crm",
};
