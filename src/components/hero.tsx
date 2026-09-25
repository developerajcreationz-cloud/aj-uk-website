"use client";

import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { Magnetic } from "@/components/magnetic";
import { Marquee } from "@/components/marquee";
import { RotatingBadge } from "@/components/rotating-badge";

const HEADLINE_LINES = ["Ideas, engineered", "to move your", "audience."];

const MARQUEE_ITEMS = [
  "WEB DESIGN",
  "BRAND STRATEGY",
  "MOTION & INTERACTION",
  "DEVELOPMENT",
  "SEO & GROWTH",
  "UNITED STATES",
  "UNITED KINGDOM",
];

const STATS = [
  { value: "40+", label: "Brands launched" },
  { value: "2", label: "Continents served" },
  { value: "5.0", label: "Average client rating" },
];

const lineVariants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1] as const, delay: 0.55 + i * 0.1 },
  }),
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const blobOneX = useTransform(springX, (v) => v * 40);
  const blobOneY = useTransform(springY, (v) => v * 40);
  const blobTwoX = useTransform(springX, (v) => v * -30);
  const blobTwoY = useTransform(springY, (v) => v * -30);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(relX);
    mouseY.set(relY);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-cream pt-28 md:pt-32"
    >
      {/* Background layer */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(16,18,16,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,18,16,0.06) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <motion.div
          style={{ x: blobOneX, y: blobOneY }}
          className="animate-float-slow absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-lime/70 to-green/40 blur-[90px] md:h-[560px] md:w-[560px]"
        />
        <motion.div
          style={{ x: blobTwoX, y: blobTwoY }}
          className="animate-float-slower absolute -left-24 bottom-0 h-[320px] w-[320px] rounded-full bg-gradient-to-tr from-olive/50 to-green/30 blur-[100px] md:h-[420px] md:w-[420px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream" />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-between px-6 pb-10 md:px-10"
      >
        <RotatingBadge className="absolute right-6 top-2 hidden text-ink xl:block" />

        <div className="flex flex-1 flex-col justify-center gap-8 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-4 py-2 text-xs font-medium tracking-wide text-ink/70 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-green" />
            </span>
            CREATIVE &amp; DIGITAL AGENCY — US / UK
          </motion.div>

          <h1 className="font-display max-w-5xl text-[13vw] font-medium leading-[0.95] tracking-tight text-ink sm:text-[9vw] md:text-[6.4vw] lg:text-[6vw]">
            {HEADLINE_LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span
                  custom={i}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  className="block"
                >
                  {line.split(" ").map((word, wi) =>
                    line === "to move your" && word === "move" ? (
                      <em
                        key={wi}
                        className="relative mx-1 inline-block bg-gradient-to-r from-olive via-green to-lime bg-clip-text font-serif italic text-transparent"
                      >
                        {word}
                      </em>
                    ) : (
                      <span key={wi}>{word} </span>
                    )
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="max-w-md text-balance text-base leading-relaxed text-ink/65 md:max-w-lg md:text-lg"
          >
            AJ Creationz partners with ambitious brands across the United States and United
            Kingdom — designing websites, identities, and campaigns that hold attention and
            earn results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#contact"
                data-cursor-hover
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-medium text-cream transition-colors duration-300 hover:bg-olive"
              >
                Start a project
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime text-ink transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-45">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H3.5M10 2V8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </Magnetic>

            <Magnetic strength={0.25}>
              <a
                href="#work"
                data-cursor-hover
                className="group inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink"
              >
                See our work
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-10 flex flex-col gap-8 border-t border-ink/10 pt-6 md:mt-16 md:flex-row md:items-end md:justify-between"
        >
          <div className="flex flex-wrap gap-8 md:gap-12">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl text-ink md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-ink/50">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="hidden items-center gap-3 text-xs uppercase tracking-wide text-ink/50 md:flex">
            <span className="relative flex h-8 w-4 justify-center rounded-full border border-ink/20">
              <span className="animate-scroll-line absolute top-1.5 h-2 w-[3px] rounded-full bg-ink/60" />
            </span>
            Scroll to explore
          </div>
        </motion.div>
      </motion.div>

      <div className="relative z-10 border-t border-ink/10 bg-ink py-4 text-sm font-medium tracking-wide text-cream/80">
        <Marquee items={MARQUEE_ITEMS} />
      </div>
    </section>
  );
}
