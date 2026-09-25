"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Work", href: "#work", index: "01" },
  { label: "Services", href: "#services", index: "02" },
  { label: "About", href: "#about", index: "03" },
  { label: "Contact", href: "#contact", index: "04" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
          scrolled || open
            ? "bg-cream/85 backdrop-blur-md border-b border-ink/10"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-10">
          <Link href="/" data-cursor-hover className="relative z-10 flex items-center gap-2">
            <Image
              src="/images/logo-full.png"
              alt="AJ Creationz"
              width={168}
              height={82}
              priority
              className="h-9 w-auto md:h-10"
            />
          </Link>

          <div className="flex items-center gap-3 md:gap-4">
            <Link
              href="#contact"
              data-cursor-hover
              className="hidden items-center gap-2 rounded-full border border-ink/15 bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-olive md:inline-flex"
            >
              Start a project
            </Link>

            <button
              type="button"
              data-cursor-hover
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-full border border-ink/15 bg-cream/60"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                className="block h-[1.5px] w-4 bg-ink"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                className="block h-[1.5px] w-4 bg-ink"
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 44px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-30 flex flex-col justify-center bg-ink px-6 text-cream md:px-16"
          >
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 40, opacity: 0 }}
                  transition={{ duration: 0.5, delay: open ? 0.15 + i * 0.06 : 0, ease: [0.25, 1, 0.5, 1] }}
                  className="border-b border-cream/10 py-4"
                >
                  <Link
                    href={link.href}
                    data-cursor-hover
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4"
                  >
                    <span className="font-mono text-xs text-lime">{link.index}</span>
                    <span className="font-display text-[13vw] leading-none tracking-tight text-cream transition-colors duration-300 group-hover:text-lime md:text-[5.5vw]">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10 flex flex-col gap-6 text-sm text-cream/60 md:mt-16 md:flex-row md:items-center md:justify-between"
            >
              <p className="max-w-xs">
                A creative &amp; digital agency partnering with ambitious brands ready to move.
              </p>
              <div className="flex flex-col gap-1 md:items-end">
                <a href="mailto:hello@ajcreationz.com" data-cursor-hover className="text-cream transition-colors hover:text-lime">
                  hello@ajcreationz.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
