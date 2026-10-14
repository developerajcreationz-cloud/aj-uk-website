import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogListing, PAGE_SIZE, pagePath } from "@/components/blog/blog-listing";
import { POSTS } from "@/content/posts";
import { pageMetadata } from "@/lib/metadata";

const totalPages = Math.max(1, Math.ceil(POSTS.length / PAGE_SIZE));

export const dynamicParams = false;

export function generateStaticParams() {
  return Array.from({ length: totalPages - 1 }, (_, i) => ({ n: String(i + 2) }));
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
  if (!Number.isInteger(page) || page < 2 || page > totalPages) notFound();
  return (
    <BlogListing posts={POSTS.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)} page={page} totalPages={totalPages} />
  );
}
