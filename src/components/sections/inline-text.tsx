import Link from "next/link";
import type { ReactNode } from "react";

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Renders text with [label](href) inline links. Internal hrefs use next/link; external open in a new tab. */
export function InlineText({ text }: { text: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const m of text.matchAll(LINK)) {
    const idx = m.index ?? 0;
    if (idx > last) out.push(text.slice(last, idx));
    const [, label, href] = m;
    const cls = "underline decoration-violet/50 underline-offset-4 hover:decoration-violet";
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
    last = idx + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}
