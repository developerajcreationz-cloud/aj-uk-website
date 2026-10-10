export const SITE = {
  name: "AJ Creationz",
  url: "https://ajcreationz.co.uk",
  /** Main brand site (separate domain with different content). */
  mainSiteUrl: "https://ajcreationz.co",
  title: "Digital Agency | Web, Brand, SEO & Ads | AJ Creationz",
  description:
    "Digital agency for UK and US businesses: WordPress, Shopify and custom websites, brand identity, SEO, Meta and Google Ads, video and GoHighLevel CRM.",
  email: "grow@ajcreationz.co",
  logo: "/images/logo-full.png",
  /** Search Console HTML-tag verification. Keep this tag in the page head. */
  googleVerification: "Yp0JS38ugKIipb5Dze06h2fRRWb8XHbVmPbuiV65Ye0",
  /** Bump when page content changes materially; used for sitemap lastModified. */
  contentUpdated: "2026-10-10",
  markets: ["United Kingdom", "United States"],
  services: [
    "Brand Identity",
    "Website Development (WordPress, Shopify, Custom)",
    "Video Editing",
    "SEO & Growth",
    "Meta & Google Ads",
    "GoHighLevel CRM",
  ],
  team: [
    { name: "Ahmad Jan", role: "Creative Imagination Lead", photo: "/images/team/ahmad-jan.webp" },
    { name: "Athar", role: "Strategic Director", photo: "/images/team/athar.webp" },
    { name: "Hina", role: "Brand Architect", photo: "/images/team/hina.webp" },
    { name: "Zohaib", role: "Web Developer and SEO Specialist", photo: "/images/team/zohaib.webp" },
  ],
} as const;
