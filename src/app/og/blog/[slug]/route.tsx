import { ImageResponse } from "next/og";
import { categoryOf, getPost } from "@/content/posts";

/** Regenerate hourly, in step with the blog pages, so a scheduled post's card exists once it is live. */
export const revalidate = 3600;

/** 1200x630 share card for one blog post: category, title and author on the brand colours. */
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return new Response("Not found", { status: 404 });

  const category = categoryOf(post)?.label ?? "Guide";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        backgroundColor: "#120f1d",
        backgroundImage: "radial-gradient(circle at 85% 15%, rgba(139,92,246,0.45), transparent 55%)",
        color: "#fbfaff",
      }}
    >
      <div style={{ display: "flex", fontSize: 26, letterSpacing: 2, textTransform: "uppercase", color: "#c4b0ff" }}>
        {category}
      </div>
      <div style={{ display: "flex", fontSize: post.title.length > 55 ? 60 : 70, lineHeight: 1.1, fontWeight: 700 }}>
        {post.title}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "rgba(251,250,255,0.75)" }}>
        <span>
          By {post.author.name}, {post.author.role}
        </span>
        <span style={{ color: "#fbfaff", fontWeight: 700 }}>AJ Creationz</span>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
