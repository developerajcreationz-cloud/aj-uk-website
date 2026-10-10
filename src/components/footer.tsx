"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { Magnetic } from "@/components/magnetic";

const SITEMAP = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Facebook", href: "#" },
];

export function Footer() {
  const lenis = useLenis();

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-ink/10 bg-cream text-ink">
      <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <Image
              src="/images/logo-full.png"
              alt="AJ Creationz"
              width={168}
              height={82}
              className="h-11 w-auto self-start md:h-12"
            />
            <p className="max-w-xs text-sm leading-relaxed text-ink/60">
              A creative &amp; digital agency partnering with ambitious brands ready to move.
            </p>
            <Magnetic strength={0.25} className="w-fit">
              <a
                href="/contact"
                data-cursor-hover
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-colors duration-300 hover:bg-plum"
              >
                Start a project
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <p className="mb-5 text-xs font-medium uppercase tracking-wide text-ink/40">Sitemap</p>
            <ul className="flex flex-col gap-3">
              {SITEMAP.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    data-cursor-hover
                    className="group inline-flex items-center gap-2 text-base text-ink/70 transition-colors duration-300 hover:text-ink"
                  >
                    <span className="h-1 w-1 rounded-full bg-ink/0 transition-colors duration-300 group-hover:bg-violet" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            <p className="mb-5 text-xs font-medium uppercase tracking-wide text-ink/40">Connect</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:grow@ajcreationz.co"
                  data-cursor-hover
                  className="text-base text-ink/70 transition-colors duration-300 hover:text-ink"
                >
                  grow@ajcreationz.co
                </a>
              </li>
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    data-cursor-hover
                    className="text-base text-ink/70 transition-colors duration-300 hover:text-ink"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-center gap-6 border-t border-ink/10 pt-8 md:mt-20 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink/40">
            <p>© {new Date().getFullYear()} AJ Creationz. All rights reserved.</p>
            <Link href="/privacy" className="hover:text-ink">Privacy</Link>
            <Link href="/terms" className="hover:text-ink">Terms</Link>
          </div>

          <Magnetic strength={0.3}>
            <button
              type="button"
              data-cursor-hover
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-xs uppercase tracking-wide text-ink/60 transition-colors duration-300 hover:border-violet hover:text-ink"
            >
              Back to top
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-cream transition-transform duration-300 group-hover:-translate-y-0.5">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M6 10V2M6 2L2 6M6 2l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
