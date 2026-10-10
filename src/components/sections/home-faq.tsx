import Link from "next/link";

const FAQS = [
  {
    q: "What does a digital agency do?",
    a: "A digital agency designs and runs the online side of a business: the brand, the website, search and paid advertising, video and the systems that follow up with leads.",
  },
  {
    q: "Which businesses do you work with?",
    a: "Mainly owner-led businesses, ecommerce brands and startups in the UK and the US. We work remotely, and overlap with both UK and US working hours.",
  },
  {
    q: "Can I buy one service on its own?",
    a: "Yes. A website, a brand identity, an ad account or a CRM setup can each be a standalone project, and they are designed to connect later.",
  },
  {
    q: "How do you price projects?",
    a: "We agree scope first and quote in writing. The pricing sections on each service page show typical market ranges so you can compare.",
  },
];

export function HomeFaq() {
  return (
    <section id="faq" className="relative overflow-hidden bg-cream px-6 py-24 md:px-10 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-lilac/30 blur-[110px]"
      />
      <div className="relative mx-auto grid max-w-[1440px] gap-12 md:grid-cols-[1fr_1.6fr] md:gap-20">
        <div className="md:sticky md:top-32 md:h-fit">
          <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-ink/50">
            <span className="h-1.5 w-1.5 rounded-full bg-violet" />
            FAQ
          </p>
          <h2 className="font-display text-[11vw] font-medium leading-[1] tracking-tight sm:text-6xl md:text-6xl">
            Common{" "}
            <em className="bg-gradient-to-r from-plum via-violet to-lilac bg-clip-text font-serif italic text-transparent">
              questions
            </em>
          </h2>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink/60 md:text-base">
            Something else on your mind? Ask us, or browse the guides.
          </p>
          <div className="mt-6 flex flex-wrap gap-5 text-sm font-medium">
            <Link href="/contact" data-cursor-hover className="border-b border-ink/25 pb-1 hover:border-ink">
              Ask a question →
            </Link>
            <Link href="/blog" data-cursor-hover className="border-b border-ink/25 pb-1 hover:border-ink">
              Browse the blog →
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="group rounded-2xl border border-ink/10 bg-white/70 px-6 py-5 transition-colors open:border-violet/40 open:bg-white md:px-8"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium md:text-xl [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-colors group-open:border-violet group-open:bg-violet group-open:text-white">
                  <span className="absolute h-0.5 w-3.5 rounded bg-current" />
                  <span className="absolute h-3.5 w-0.5 rounded bg-current transition-transform duration-300 group-open:rotate-90" />
                </span>
              </summary>
              <p className="mt-4 max-w-2xl pr-12 leading-relaxed text-ink/65">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
