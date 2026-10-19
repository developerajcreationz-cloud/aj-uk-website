import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogListing, PAGE_SIZE, pagePath } from "@/components/blog/blog-listing";
import { livePosts } from "@/content/posts";
import { pageMetadata } from "@/lib/metadata";

const totalPages = () => Math.max(1, Math.ceil(livePosts().length / PAGE_SIZE));

/** Re-render hourly so scheduled posts appear on their date; new page numbers render on demand. */
export const revalidate = 3600;

export function generateStaticParams() {
  return Array.from({ length: totalPages() - 1 }, (_, i) => ({ n: String(i + 2) }));
}

export async function generateMetadata({ params }: { params: Promise<{ n: string }> }): Promise<Metadata> {
  const { n } = await params;
  return pageMetadata({
    title: `Blog: Web Design, SEO, Ads & CRM Guides, Page ${n} | AJ Creationz`,
    description:
      "More practical guides with sourced price ranges, worksheets and checklists on websites, SEO, paid ads, CRM and video, for UK and US businesses.",
    path: pagePath(Number(n)),
  });
}

export default async function BlogPage({ params }: { params: Promise<{ n: string }> }) {
  const page = Number((await params).n);
  const pages = totalPages();
  if (!Number.isInteger(page) || page < 2 || page > pages) notFound();
  return (
    <BlogListing posts={livePosts().slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)} page={page} totalPages={pages} />
  );
}
