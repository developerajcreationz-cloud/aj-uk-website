"use client";

import type { ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { CountUp } from "@/components/count-up";
import { cn } from "@/lib/utils";

const BARS = [34, 46, 40, 58, 70, 64, 94];

/**
 * One floating card: parallax against the mouse (by `depth`), a gentle idle
 * bob, and a staggered entrance.
 */
function Layer({
  depth,
  delay,
  bob,
  springX,
  springY,
  className,
  children,
}: {
  depth: number;
  delay: number;
  bob: number;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
  className?: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const x = useTransform(springX, (v) => v * depth);
  const y = useTransform(springY, (v) => v * depth);

  return (
    <motion.div style={{ x, y }} className={cn("absolute", className)}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.25, 1, 0.5, 1] }}
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: bob, repeat: Infinity, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function HeroVisual({
  mouseX,
  mouseY,
  className,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  className?: string;
}) {
  const springX = useSpring(mouseX, { stiffness: 50, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 18 });

  const card =
    "rounded-3xl border border-ink/10 bg-white/80 shadow-[0_30px_60px_-25px_rgba(18,15,29,0.25)] backdrop-blur-md";

  return (
    <div className={cn("pointer-events-none", className)} aria-hidden>
      {/* soft halo behind the cluster */}
      <div className="absolute inset-[8%] rounded-full bg-gradient-to-br from-lilac/40 via-lilac/10 to-transparent blur-3xl" />

      {/* Reach / performance card (hero of the composition) */}
      <Layer
        depth={30}
        delay={0.8}
        bob={6}
        springX={springX}
        springY={springY}
        className="left-[4%] top-[17%] w-[58%]"
      >
        <div className={cn(card, "p-6")}>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-ink/50">
                Campaign reach
              </p>
              <p className="font-display mt-1 text-5xl font-medium leading-none tracking-tight text-ink">
                +<CountUp value={248} suffix="%" duration={2} />
              </p>
            </div>
            <span className="rounded-full bg-lilac/60 px-3 py-1 text-[11px] font-medium text-plum">
              Live
            </span>
          </div>

          <div className="mt-5 flex h-24 items-end gap-2.5">
            {BARS.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.9, delay: 1.2 + i * 0.07, ease: [0.25, 1, 0.5, 1] }}
                className={cn(
                  "flex-1 rounded-t-lg",
                  i === BARS.length - 1
                    ? "bg-ink"
                    : "bg-gradient-to-t from-violet/70 to-lilac"
                )}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[10px] uppercase tracking-wide text-ink/40">
            <span>Wk 1</span>
            <span>Wk 7</span>
          </div>
        </div>
      </Layer>

      {/* Brand film card */}
      <Layer
        depth={55}
        delay={1.0}
        bob={7}
        springX={springX}
        springY={springY}
        className="right-[0%] top-[2%] w-[38%]"
      >
        <div className="rounded-3xl bg-ink p-4 shadow-[0_30px_60px_-20px_rgba(18,15,29,0.5)]">
          <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-plum via-violet to-lilac">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cream/20 blur-xl" />
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-ink">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M4 2.5v11a.5.5 0 0 0 .77.42l8.5-5.5a.5.5 0 0 0 0-.84l-8.5-5.5A.5.5 0 0 0 4 2.5Z" />
              </svg>
            </span>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-cream/15">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "68%" }}
                transition={{ duration: 2.4, delay: 1.4, ease: "easeOut" }}
                className="h-full rounded-full bg-lilac"
              />
            </div>
            <span className="text-[10px] font-medium text-cream/60">0:42</span>
          </div>
          <p className="mt-2 text-xs font-medium text-cream">Brand film</p>
        </div>
      </Layer>

      {/* Social post card */}
      <Layer
        depth={45}
        delay={1.15}
        bob={8}
        springX={springX}
        springY={springY}
        className="bottom-[2%] left-[16%] w-[44%]"
      >
        <div className={cn(card, "p-4")}>
          <div className="flex items-center gap-2.5">
            <span className="h-8 w-8 rounded-full bg-gradient-to-br from-lilac to-violet" />
            <div className="space-y-1.5">
              <div className="h-2 w-20 rounded-full bg-ink/80" />
              <div className="h-1.5 w-12 rounded-full bg-ink/20" />
            </div>
          </div>
          <div className="mt-3 h-14 rounded-2xl bg-gradient-to-br from-cream via-lilac/40 to-violet/60" />
          <div className="mt-3 flex items-center gap-4 text-xs font-medium text-ink/70">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#e5484d">
                <path d="M12 21s-7.5-4.6-9.5-9.2C1 8.3 3 5 6.4 5c2 0 3.5 1.1 4.1 2.4h3C14.1 6.1 15.6 5 17.6 5 21 5 23 8.3 21.5 11.8 19.5 16.4 12 21 12 21Z" />
              </svg>
              12.4k
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
                <path d="M21 12a8 8 0 0 1-11.8 7L3 20l1.200-4.8A8 8 0 1 1 21 12Z" />
              </svg>
              486
            </span>
          </div>
        </div>
      </Layer>

      {/* SEO ranking card */}
      <Layer
        depth={60}
        delay={1.25}
        bob={7}
        springX={springX}
        springY={springY}
        className="right-[0%] top-[43%] w-[36%]"
      >
        <div className={cn(card, "p-4")}>
          <div className="flex items-center gap-2 rounded-full border border-ink/10 bg-cream px-3 py-1.5 text-[10px] text-ink/60">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            best agency near me
          </div>
          <div className="mt-3 flex items-start gap-2.5">
            <span className="font-display flex h-7 min-w-7 items-center justify-center rounded-lg bg-ink px-1.5 text-xs font-medium text-lilac">
              #1
            </span>
            <div className="min-w-0 flex-1 space-y-1.5">
              <p className="truncate text-[11px] font-medium text-plum">ajcreationz.co.uk</p>
              <div className="h-1.5 w-full rounded-full bg-ink/20" />
              <div className="h-1.5 w-2/3 rounded-full bg-ink/10" />
            </div>
          </div>
          <p className="mt-3 text-[10px] font-medium uppercase tracking-wide text-ink/50">
            SEO &amp; growth
          </p>
        </div>
      </Layer>

      {/* ROAS chip */}
      <Layer
        depth={70}
        delay={1.3}
        bob={5}
        springX={springX}
        springY={springY}
        className="bottom-[14%] right-[2%]"
      >
        <div className="flex items-center gap-3 rounded-full bg-lilac py-2.5 pl-2.5 pr-5 shadow-[0_20px_40px_-15px_rgba(76,29,149,0.6)]">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-lilac">
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H3.5M10 2V8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div className="leading-tight">
            <p className="font-display text-lg font-medium text-ink">3.2x ROAS</p>
            <p className="text-[10px] uppercase tracking-wide text-ink/60">Paid social</p>
          </div>
        </div>
      </Layer>

      {/* Collaborator cursor */}
      <Layer
        depth={90}
        delay={1.5}
        bob={4}
        springX={springX}
        springY={springY}
        className="left-[2%] top-[6%]"
      >
        <div className="flex items-start">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#120f1d" stroke="#fbfaff" strokeWidth="1.5" strokeLinejoin="round">
            <path d="M4 3l16 7.500-7 2.200-2.5 7.3L4 3Z" />
          </svg>
          <span className="-ml-0.5 mt-4 rounded-full bg-ink px-3 py-1 text-[11px] font-medium text-cream">
            New idea
          </span>
        </div>
      </Layer>
    </div>
  );
}
