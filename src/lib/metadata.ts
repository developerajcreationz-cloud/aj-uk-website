import type { Metadata } from "next";
import { SITE } from "@/config/site";

/** Static 1200x630 share image (the file convention's hashed URL is redirected by trailingSlash). */
export const OG_IMAGE = {
  url: "/images/og-default.png",
  width: 1200,
  height: 630,
  alt: "AJ Creationz: websites, brand, SEO, ads and CRM",
};

type PageMeta = {
  /** Full <title>, used verbatim. */
  title: string;
  description: string;
  /** Path with trailing slash, e.g. "/services/seo-growth/". */
  path: string;
  article?: { publishedTime: string; modifiedTime: string; authors: string[] };
};

/** Metadata for one page: canonical plus matching Open Graph and Twitter cards, so none inherit the homepage's. */
export function pageMetadata({ title, description, path, article }: PageMeta): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    ...(article ? { authors: article.authors.map((name) => ({ name })) } : {}),
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE.name,
      locale: "en_GB",
      alternateLocale: ["en_US"],
      images: [OG_IMAGE],
      ...(article ? { type: "article" as const, ...article } : { type: "website" as const }),
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}
