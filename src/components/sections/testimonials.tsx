"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { Magnetic } from "@/components/ui/magnetic";

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

const AVATARS = ["bg-violet", "bg-plum", "bg-emerald-600", "bg-amber-600", "bg-sky-600", "bg-rose-600"];
const avatarColor = (name: string) => AVATARS[[...name].reduce((n, c) => n + c.charCodeAt(0), 0) % AVATARS.length];

function Stars() {
  return (
    <div role="img" aria-label="5 out of 5 stars" className="mt-4 flex gap-0.5 text-[#fbbc04]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7.1L12 17.6 5.7 21.3l1.7-7.1L2 9.5l7.1-.6L12 2z" />
        </svg>
      ))}
    </div>
  );
}

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
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-cream/10 bg-ink py-24 text-cream md:py-32"
    >
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
                  <path
                    d="M10 2L2 10M2 10H8.5M2 10V3.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
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
                  <path
                    d="M2 10L10 2M10 2H3.5M10 2V8.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
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
            <figure
              key={t.name}
              className="flex w-[85vw] shrink-0 flex-col rounded-2xl bg-white p-6 text-ink shadow-[0_20px_50px_-30px_rgba(0,0,0,0.6)] sm:w-[400px] md:p-7"
            >
              <figcaption className="flex items-center gap-3">
                <span
                  aria-hidden
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-medium text-white ${avatarColor(t.name)}`}
                >
                  {t.name.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium text-ink">{t.name}</span>
                  <span className="block truncate text-xs text-ink/55">{t.role}</span>
                </span>
              </figcaption>
              <Stars />
              <blockquote className="mt-3 text-[15px] leading-relaxed text-ink/80">{t.quote}</blockquote>
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
