import type { Metadata } from "next";
import { BlogListing, PAGE_SIZE } from "@/components/blog/blog-listing";
import { livePosts } from "@/content/posts";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Blog: Web Design, SEO, Ads & CRM Guides | AJ Creationz",
  description:
    "Practical guides with sourced price ranges, worksheets and checklists on websites, SEO, paid ads, CRM and video, for UK and US businesses to use.",
  path: "/blog/",
});

/** Re-render hourly so scheduled posts appear on their date without a rebuild. */
export const revalidate = 3600;

export default function BlogIndex() {
  const posts = livePosts();
  return (
    <BlogListing
      posts={posts.slice(0, PAGE_SIZE)}
      page={1}
      totalPages={Math.max(1, Math.ceil(posts.length / PAGE_SIZE))}
    />
  );
}
