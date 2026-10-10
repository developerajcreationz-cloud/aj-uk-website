"use client";

import { motion } from "framer-motion";

const REASONS = [
  {
    index: "01",
    title: "Prices in the open",
    text: "Every service page shows market price ranges with named sources, in pounds for UK guides and dollars for US ones, so you can judge any quote, ours included.",
  },
  {
    index: "02",
    title: "One team, one set of numbers",
    text: "Website, SEO, ads and CRM share the same tracking, so you can see which campaign produced which customer.",
  },
  {
    index: "03",
    title: "Rules built in",
    text: "Consent, cookie and messaging rules differ between the UK and the US. We build in UK GDPR and PECR consent, and US rules such as A2P 10DLC for SMS, and recommend legal review of the wording.",
  },
];

export function HomeWhy() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-24 md:px-10 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-lilac/30 blur-[120px]"
      />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="mb-14 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-ink/50">
              <span className="h-1.5 w-1.5 rounded-full bg-violet" />
              The difference
            </p>
            <h2 className="font-display text-[11vw] font-medium leading-[1] tracking-tight sm:text-6xl md:text-7xl">
              Why clients{" "}
              <em className="bg-gradient-to-r from-plum via-violet to-lilac bg-clip-text font-serif italic text-transparent">
                choose us
              </em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/60 md:text-base">
            Three habits that make the work easier to judge and easier to trust.
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {REASONS.map((r, i) => (
            <motion.li
              key={r.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-white/70 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-violet/40 hover:shadow-[0_30px_60px_-30px_rgba(76,29,149,0.35)] md:p-10"
            >
              <span
                aria-hidden
                className="text-outline font-display block text-[7rem] font-medium leading-none transition-all duration-500 [--outline:rgba(139,92,246,0.55)] group-hover:[--outline:#8b5cf6] md:text-[9rem]"
              >
                {r.index}
              </span>
              <span
                aria-hidden
                className="mt-4 block h-1 w-12 rounded-full bg-gradient-to-r from-plum to-lilac transition-all duration-500 group-hover:w-24"
              />
              <h3 className="font-display mt-6 text-2xl font-medium tracking-tight md:text-3xl">{r.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/65 md:text-base">{r.text}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
