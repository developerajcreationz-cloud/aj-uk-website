"use client";

import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";
import { useState } from "react";

const RADIUS = 18;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ScrollToTop() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const lenis = useLenis();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setVisible(latest > 0.08);
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const dashOffset = useTransform(smoothProgress, (v) => CIRCUMFERENCE * (1 - v));

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.button
      type="button"
      data-cursor-hover
      onClick={scrollToTop}
      aria-label="Back to top"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
      className="fixed bottom-6 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-cream shadow-lg shadow-black/20 md:bottom-8 md:right-8"
    >
      <svg width="40" height="40" viewBox="0 0 40 40" className="absolute inset-0 -rotate-90">
        <circle cx="20" cy="20" r={RADIUS} fill="none" stroke="rgba(251,251,248,0.15)" strokeWidth="1.5" />
        <motion.circle
          cx="20"
          cy="20"
          r={RADIUS}
          fill="none"
          stroke="#c4b0ff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          style={{ strokeDashoffset: dashOffset }}
        />
      </svg>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="relative">
        <path
          d="M6 10V2M6 2L2 6M6 2l4 4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.button>
  );
}
