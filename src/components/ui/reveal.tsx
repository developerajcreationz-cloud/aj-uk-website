"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type Dir = "up" | "left" | "right" | "zoom";

const EASE = [0.25, 1, 0.5, 1] as const;

const from = (dir: Dir) => {
  switch (dir) {
    case "left":
      return { opacity: 0, x: -48 };
    case "right":
      return { opacity: 0, x: 48 };
    case "zoom":
      return { opacity: 0, scale: 0.9, y: 16 };
    default:
      return { opacity: 0, y: 36 };
  }
};

/** Scroll reveal. `delay` is in seconds; use small steps (0.08) for staggers. Disabled for reduced motion. */
export function Reveal({
  children,
  dir = "up",
  delay = 0,
  className,
  amount = 0.2,
}: {
  children: ReactNode;
  dir?: Dir;
  delay?: number;
  className?: string;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={from(dir)}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function parseWords(text: string) {
  let accent = false;
  return text.split(" ").map((raw) => {
    if (raw.startsWith("*")) accent = true;
    const word = raw.replace(/\*/g, "");
    const isAccent = accent;
    if (raw.endsWith("*")) accent = false;
    return { word, isAccent };
  });
}

/**
 * Headline that slides in word by word. Wrap words in *asterisks* to render them as the gradient italic accent,
 * e.g. "We build *bring in customers.*". The full text stays in the DOM as normal heading text.
 */
export function SplitWords({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
  accentClassName = "bg-gradient-to-r from-plum via-violet to-lilac bg-clip-text font-serif italic text-transparent",
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  accentClassName?: string;
}) {
  const reduce = useReducedMotion();
  const words = parseWords(text);

  const wordVariants = {
    hidden: { y: reduce ? "0%" : "110%" },
    visible: (i: number) => ({
      y: "0%",
      transition: { duration: 0.85, ease: EASE, delay: delay + i * 0.06 },
    }),
  };

  return (
    <Tag className={className}>
      <motion.span initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className="inline">
        {words.map(({ word, isAccent }, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
            <motion.span custom={i} variants={wordVariants} className={cn("inline-block", isAccent && accentClassName)}>
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

/** Image frame with a wipe-in reveal and gentle scroll parallax. */
export function ParallaxFrame({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { clipPath: "inset(14% 14% 14% 14% round 28px)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 16px)", opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
      className={cn("overflow-hidden", className)}
    >
      <motion.div style={reduce ? undefined : { y, scale: 1.16 }} className="relative h-full w-full">
        {children}
      </motion.div>
    </motion.div>
  );
}
