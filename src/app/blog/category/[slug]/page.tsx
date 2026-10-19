import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogListing } from "@/components/blog/blog-listing";
import { CATEGORIES, categoryOf, livePosts } from "@/content/posts";
import { pageMetadata } from "@/lib/metadata";

/** Re-render hourly so scheduled posts appear on their date; a newly used category renders on demand. */
export const revalidate = 3600;

const withPosts = () => CATEGORIES.filter((c) => livePosts().some((p) => categoryOf(p)?.slug === c.slug));

export function generateStaticParams() {
  return withPosts().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = CATEGORIES.find((x) => x.slug === slug);
  if (!c) return {};
  return pageMetadata({
    title: `${c.label} Guides and Price Breakdowns | AJ Creationz`,
    description: `${c.description} Sourced ranges, checklists and clear next steps from the AJ Creationz team.`,
    path: `/blog/category/${c.slug}/`,
  });
}

export default async function BlogCategory({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  if (!withPosts().some((c) => c.slug === slug)) notFound();
  return <BlogListing posts={livePosts().filter((p) => categoryOf(p)?.slug === slug)} category={slug} />;
}
