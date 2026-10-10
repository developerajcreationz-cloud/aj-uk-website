"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { Magnetic } from "@/components/magnetic";

const TESTIMONIALS = [
  {
    quote: "I had a vision in my head but didn't know how to express it.",
    name: "Brian Amos",
    role: "Interior Design Studio Owner",
  },
  {
    quote: "None understood strategy like this.",
    name: "Edward Jordan",
    role: "Real Estate Consultant",
  },
  {
    quote: "Our audience response tripled in 30 days.",
    name: "James Hatcher",
    role: "E-commerce Brand Owner",
  },
  {
    quote: "What I loved most was how stress-free the entire process was.",
    name: "Frank Bell",
    role: "Tech Startup Founder",
  },
  {
    quote: "AJ Creationz made our brand feel human, elegant, and alive.",
    name: "Mary Ross",
    role: "Luxury Hotel Marketing Director",
  },
  {
    quote: "Travel isn't just about the places you go, it's about the people you meet along the way.",
    name: "Derachio Jackson",
    role: "Creative Director, Framily Adventures",
  },
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [constraint, setConstraint] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current || !containerRef.current) return;
      setConstraint(-Math.max(0, trackRef.current.scrollWidth - containerRef.current.offsetWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const nudge = (direction: 1 | -1) => {
    const step = 420;
    const target = Math.min(0, Math.max(constraint, x.get() + direction * -step));
    animate(x, target, { type: "spring", stiffness: 260, damping: 34 });
  };

  return (
    <section id="testimonials" className="relative overflow-hidden border-t border-cream/10 bg-ink py-24 text-cream md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-lilac/15 to-transparent blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-cream/50">
              <span className="h-1.5 w-1.5 rounded-full bg-lilac" />
              What clients say
            </p>
            <h2 className="font-display max-w-xl text-[10vw] font-medium leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
              Don&apos;t just take
              <br />
              <em className="bg-gradient-to-r from-plum via-violet to-lilac bg-clip-text font-serif italic text-transparent">
                our word for it
              </em>
              .
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Magnetic strength={0.3}>
              <button
                type="button"
                data-cursor-hover
                onClick={() => nudge(-1)}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 transition-colors duration-300 hover:border-lilac hover:text-lilac"
              >
                <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
                  <path d="M10 2L2 10M2 10H8.5M2 10V3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </Magnetic>
            <Magnetic strength={0.3}>
              <button
                type="button"
                data-cursor-hover
                onClick={() => nudge(1)}
                aria-label="Next testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 transition-colors duration-300 hover:border-lilac hover:text-lilac"
              >
                <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H3.5M10 2V8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </Magnetic>
          </div>
        </motion.div>
      </div>

      <div ref={containerRef} className="overflow-hidden px-6 md:px-10">
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: constraint, right: 0 }}
          dragElastic={0.08}
          style={{ x }}
          className="flex w-max cursor-grab gap-6 active:cursor-grabbing"
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex w-[85vw] shrink-0 flex-col justify-between rounded-2xl border border-cream/10 bg-cream/[0.03] p-8 sm:w-[420px] md:p-10"
            >
              <div>
                <p className="font-display text-xl leading-snug tracking-tight text-cream sm:text-2xl">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="mt-8">
                <p className="text-sm font-medium text-cream">{t.name}</p>
                <p className="mt-0.5 text-xs text-cream/50">{t.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
