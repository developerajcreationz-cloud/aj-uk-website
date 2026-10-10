"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SplitWords } from "@/components/ui/reveal";
import type { ReactNode } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] as const, delay: i * 0.08 },
  }),
};

const Icon = {
  brand: (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="M5 20V11a7 7 0 0 1 14 0v9" />
      <path d="M10 20v-8a2 2 0 0 1 4 0v8" />
    </svg>
  ),
  web: (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
    </svg>
  ),
  traffic: (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 12l6-6" />
    </svg>
  ),
  crm: (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 5h18l-7 8v6l-4-2v-4z" />
    </svg>
  ),
} satisfies Record<string, ReactNode>;

const LOOP = [
  {
    label: "Brand",
    href: "/services/brand-identity",
    icon: Icon.brand,
    pos: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
  },
  {
    label: "Website",
    href: "/services/website-development",
    icon: Icon.web,
    pos: "right-0 top-1/2 translate-x-1/3 -translate-y-1/2",
  },
  {
    label: "Search and ads",
    href: "/services/meta-google-ads",
    icon: Icon.traffic,
    pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  },
  {
    label: "CRM",
    href: "/services/gohighlevel-crm",
    icon: Icon.crm,
    pos: "left-0 top-1/2 -translate-x-1/3 -translate-y-1/2",
  },
];

const AUDIENCES = [
  {
    index: "01",
    title: "Owner-led and growing businesses",
    text: "Service firms, consultants and trades that need a site and a lead system that work together.",
    href: "/services/website-development",
    cta: "Website development",
    tone: "bg-ink text-cream",
    sub: "text-cream/60",
  },
  {
    index: "02",
    title: "Ecommerce brands",
    text: "Shopify and WooCommerce stores that need design, tracking and paid traffic that add up.",
    href: "/services/shopify-web-design",
    cta: "Shopify web design",
    tone: "bg-lilac text-ink",
    sub: "text-ink/65",
  },
  {
    index: "03",
    title: "Startups",
    text: "A brand, a fast launch site and the first search and ad campaigns, without hiring four suppliers.",
    href: "/services/brand-identity",
    cta: "Brand identity",
    tone: "bg-plum text-cream",
    sub: "text-cream/65",
  },
];

function GrowthLoop() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      <div
        aria-hidden
        className="absolute inset-[8%] rounded-full bg-gradient-to-br from-lilac/60 via-violet/20 to-transparent blur-2xl"
      />
      <div
        aria-hidden
        className="animate-spin-slow absolute inset-[6%] rounded-full border border-dashed border-violet/50"
      />
      <div aria-hidden className="animate-spin-slower absolute inset-[22%] rounded-full border border-ink/10" />
      <div aria-hidden className="animate-spin-slow absolute inset-[6%]">
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-amber-400 shadow-[0_0_18px_rgba(245,185,66,0.9)]" />
      </div>

      <div className="absolute inset-[30%] flex flex-col items-center justify-center rounded-full bg-gradient-to-br from-plum to-violet text-center text-cream shadow-[0_20px_60px_-15px_rgba(76,29,149,0.6)]">
        <span className="font-display text-lg font-medium leading-tight md:text-xl">Leads</span>
        <span className="text-xs opacity-70">to</span>
        <span className="font-display text-lg font-medium leading-tight md:text-xl">customers</span>
      </div>

      <div className="absolute inset-[6%]">
        {LOOP.map((n, i) => (
          <Link
            key={n.label}
            href={n.href}
            data-cursor-hover
            style={{ animationDelay: `${i * 0.7}s` }}
            className={`animate-bob group absolute ${n.pos} flex items-center gap-2 whitespace-nowrap rounded-full border border-ink/10 bg-white/90 px-3 py-2 text-xs font-medium shadow-[0_10px_30px_-12px_rgba(18,15,29,0.35)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-cream md:px-4 md:text-sm`}
          >
            <span className="text-violet transition-colors group-hover:text-lilac">{n.icon}</span>
            {n.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function HomeIntro() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream via-[#f3eeff] to-cream px-6 py-24 md:px-10 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 h-[460px] w-[460px] rounded-full bg-lilac/30 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              custom={0}
              className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-ink/50"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-violet" />
              What AJ Creationz does
            </motion.p>

            <SplitWords
              text="We build the parts of a business that *bring in customers.*"
              className="font-display text-[11vw] font-medium leading-[1] tracking-tight sm:text-6xl md:text-7xl"
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={2}
              className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-ink/70 md:text-lg"
            >
              <p>
                AJ Creationz is a digital agency that builds and runs the parts of a business that bring in customers: a
                website on WordPress, Shopify or custom code, a brand identity, SEO, Meta and Google Ads, video editing
                and a GoHighLevel CRM that follows up every enquiry. We work with businesses in the UK and the US,
                remotely, and every project has a named lead.
              </p>
              <p>
                Most small businesses buy these as separate jobs from separate suppliers, and nothing connects. We
                connect them: the site is built for search, the ads send traffic to pages that convert, and the CRM
                shows which source produced each lead.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={3}
              className="mt-9 flex flex-wrap items-center gap-6"
            >
              <Link
                href="/services/"
                data-cursor-hover
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-medium text-cream transition-colors hover:bg-plum"
              >
                See all services
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          >
            <GrowthLoop />
            <p className="mt-6 text-center text-xs uppercase tracking-wide text-ink/45">
              One loop: brand, site, traffic, CRM
            </p>
          </motion.div>
        </div>

        <ul className="mt-20 grid gap-5 md:mt-28 md:grid-cols-3">
          {AUDIENCES.map((a, i) => (
            <motion.li
              key={a.title}
              initial={{
                opacity: 0,
                x: i === 0 ? -56 : i === 2 ? 56 : 0,
                y: i === 1 ? 56 : 0,
                scale: i === 1 ? 0.92 : 1,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, ease: [0.25, 1, 0.5, 1], delay: i * 0.08 }}
            >
              <Link
                href={a.href}
                data-cursor-hover
                className={`group relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-1.5 ${a.tone}`}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-8 -right-3 font-display text-[9rem] font-medium leading-none opacity-[0.12]"
                >
                  {a.index}
                </span>
                <div className="relative">
                  <h3 className="font-display max-w-[16ch] text-2xl font-medium leading-tight md:text-3xl">
                    {a.title}
                  </h3>
                  <p className={`mt-4 text-sm leading-relaxed md:text-base ${a.sub}`}>{a.text}</p>
                </div>
                <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-medium">
                  {a.cta}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current/30 transition-transform duration-300 group-hover:-rotate-45">
                    →
                  </span>
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
