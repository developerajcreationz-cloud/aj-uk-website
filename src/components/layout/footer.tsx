"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { Magnetic } from "@/components/ui/magnetic";
import { SITE } from "@/config/site";
import { TOP_LEVEL_SERVICES } from "@/content/services";

const COMPANY = [
  { label: "Work", href: "/work/" },
  { label: "About and team", href: "/about/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
  { label: "Privacy", href: "/privacy/" },
  { label: "Terms", href: "/terms/" },
];

const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] as const, delay: i * 0.08 },
});

const linkClass = "text-sm text-cream/65 transition-colors duration-300 hover:text-lilac md:text-base";

export function Footer() {
  const lenis = useLenis();

  const scrollToTop = () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-violet/25 blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-24 h-[420px] w-[420px] rounded-full bg-lilac/15 blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 pt-20 md:px-10 md:pt-28">
        {/* Call to action */}
        <motion.div
          {...reveal()}
          className="flex flex-col gap-10 border-b border-cream/10 pb-16 md:flex-row md:items-end md:justify-between md:pb-20"
        >
          <div>
            <p className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-cream/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-lilac" />
              </span>
              Booking new projects
            </p>
            <h2 className="font-display text-[11vw] font-medium leading-[1] tracking-tight sm:text-6xl md:text-7xl">
              Have a project{" "}
              <em className="bg-gradient-to-r from-lilac via-violet to-lilac bg-clip-text font-serif italic text-transparent">
                in mind?
              </em>
            </h2>
            <Magnetic strength={0.15} className="mt-8 w-fit">
              <a
                href={`mailto:${SITE.email}`}
                data-cursor-hover
                className="group inline-flex items-center gap-3 text-2xl font-medium tracking-tight transition-colors duration-300 hover:text-lilac sm:text-3xl md:text-4xl"
              >
                {SITE.email}
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 transition-all duration-300 group-hover:rotate-45 group-hover:border-lilac group-hover:bg-lilac group-hover:text-ink md:h-12 md:w-12">
                  →
                </span>
              </a>
            </Magnetic>
          </div>

          <Magnetic strength={0.25} className="w-fit">
            <Link
              href="/contact/"
              data-cursor-hover
              className="group inline-flex items-center gap-3 rounded-full bg-lilac px-8 py-5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-cream"
            >
              Start a project
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </Magnetic>
        </motion.div>

        {/* Link columns */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] md:py-20">
          <motion.div {...reveal(0)} className="flex flex-col gap-6">
            <Image
              src="/images/logo-full-white.png"
              alt="AJ Creationz"
              width={168}
              height={82}
              className="h-11 w-auto self-start md:h-12"
            />
            <p className="max-w-xs text-sm leading-relaxed text-cream/60">
              A digital agency for websites, brand, SEO, ads, video and CRM. We work remotely with businesses in the UK
              and the US.
            </p>
          </motion.div>

          <motion.nav {...reveal(1)} aria-label="Services">
            <p className="mb-5 text-xs font-medium uppercase tracking-wide text-cream/40">Services</p>
            <ul className="flex flex-col gap-3">
              {TOP_LEVEL_SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} data-cursor-hover className={linkClass}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.nav {...reveal(2)} aria-label="Company">
            <p className="mb-5 text-xs font-medium uppercase tracking-wide text-cream/40">Company</p>
            <ul className="flex flex-col gap-3">
              {COMPANY.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} data-cursor-hover className={linkClass}>
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div {...reveal(3)}>
            <p className="mb-5 text-xs font-medium uppercase tracking-wide text-cream/40">Connect</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={`mailto:${SITE.email}`} data-cursor-hover className={linkClass}>
                  {SITE.email}
                </a>
              </li>
              {SITE.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" data-cursor-hover className={linkClass}>
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Wordmark */}
      <div aria-hidden className="relative select-none overflow-hidden">
        <p className="font-display text-outline whitespace-nowrap text-center text-[19vw] font-medium leading-[0.8] tracking-tighter [--outline:rgba(196,176,255,0.35)]">
          ajcreationz
        </p>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="relative border-t border-cream/10">
        <div className="mx-auto flex max-w-[1440px] flex-col-reverse items-center gap-5 px-6 py-6 md:flex-row md:justify-between md:px-10">
          <p className="text-xs text-cream/45">© {new Date().getFullYear()} AJ Creationz. All rights reserved.</p>
          <p className="text-xs text-cream/45">Serving businesses in the UK and the US, remotely.</p>
          <Magnetic strength={0.3}>
            <button
              type="button"
              data-cursor-hover
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-xs uppercase tracking-wide text-cream/70 transition-colors duration-300 hover:border-lilac hover:text-cream"
            >
              Back to top
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lilac text-ink transition-transform duration-300 group-hover:-translate-y-0.5">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 10V2M6 2L2 6M6 2l4 4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
