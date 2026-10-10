import type { Block } from "@/content/posts/types";
import { InlineText } from "@/components/sections/inline-text";

export function PostBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p key={i}>
                <InlineText text={b.text} />
              </p>
            );
          case "h3":
            return (
              <h3 key={i} className="font-display pt-4 text-xl font-medium tracking-tight text-ink md:text-2xl">
                {b.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="divide-y divide-ink/10 border-y border-ink/10">
                {b.items.map((it) => (
                  <li key={it} className="flex gap-3 py-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                    <span>
                      <InlineText text={it} />
                    </span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-3">
                {b.items.map((it, n) => (
                  <li key={it} className="flex gap-4">
                    <span className="font-mono text-sm text-violet">{String(n + 1).padStart(2, "0")}</span>
                    <span>
                      <InlineText text={it} />
                    </span>
                  </li>
                ))}
              </ol>
            );
          case "table":
            return (
              <figure key={i} className="overflow-x-auto">
                <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                  {b.caption && (
                    <caption className="mb-2 text-left text-xs uppercase tracking-wide text-ink/50">
                      {b.caption}
                    </caption>
                  )}
                  <thead>
                    <tr className="border-b border-ink/20">
                      {b.head.map((h) => (
                        <th key={h} className="py-2 pr-4 font-medium text-ink">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r) => (
                      <tr key={r.join("|")} className="border-b border-ink/10 align-top">
                        {r.map((c, n) => (
                          <td key={n} className={`py-3 pr-4 ${n === 0 ? "font-medium text-ink" : "text-ink/70"}`}>
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {b.note && <figcaption className="mt-3 text-xs leading-relaxed text-ink/50">{b.note}</figcaption>}
              </figure>
            );
          case "callout":
            return (
              <aside key={i} className="rounded-2xl border border-violet/30 bg-lilac/10 p-6">
                <p className="font-display text-lg font-medium text-ink">{b.title}</p>
                <p className="mt-2 text-base leading-relaxed text-ink/75">
                  <InlineText text={b.text} />
                </p>
              </aside>
            );
        }
      })}
    </div>
  );
}
