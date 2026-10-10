import Link from "next/link";
import type { ReactNode } from "react";

const TOKEN = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

/** Renders text with **bold** and [label](href) inline links. Internal hrefs use next/link; external open in a new tab. */
export function InlineText({ text }: { text: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const m of text.matchAll(TOKEN)) {
    const idx = m.index ?? 0;
    if (idx > last) out.push(text.slice(last, idx));
    const [, bold, label, rawHref] = m;
    if (bold) {
      out.push(
        <strong key={i++} className="font-medium text-ink">
          {bold}
        </strong>,
      );
    } else {
      const cls = "underline decoration-violet/50 underline-offset-4 hover:decoration-violet";
      const href =
        rawHref.startsWith("/") && !rawHref.endsWith("/") && !rawHref.includes("#") ? `${rawHref}/` : rawHref;
      out.push(
        href.startsWith("/") ? (
          <Link key={i++} href={href} className={cls}>
            {label}
          </Link>
        ) : (
          <a key={i++} href={href} target="_blank" rel="noopener" className={cls}>
            {label}
          </a>
        ),
      );
    }
    last = idx + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}
