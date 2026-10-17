export function Accordion({ items, firstOpen = true }: { items: { q: string; a: string }[]; firstOpen?: boolean }) {
  return (
    <div className="space-y-3">
      {items.map((f, i) => (
        <details
          key={f.q}
          open={firstOpen && i === 0}
          className="group rounded-2xl border border-ink/10 bg-white/70 px-5 py-4 transition-colors open:border-violet/40 open:bg-white md:px-7 md:py-5"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium text-ink md:text-lg [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-colors group-open:border-violet group-open:bg-violet group-open:text-white">
              <span className="absolute h-0.5 w-3 rounded bg-current" />
              <span className="absolute h-3 w-0.5 rounded bg-current transition-transform duration-300 group-open:rotate-90" />
            </span>
          </summary>
          <p className="mt-3 max-w-3xl pr-10 text-base leading-relaxed text-ink/65">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
