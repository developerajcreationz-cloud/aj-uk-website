"use client";

import { motion } from "framer-motion";
import { Magnetic } from "@/components/magnetic";

const LABEL = "CREATIVE & DIGITAL AGENCY ✦ US / UK ✦ ";
const CIRCLE_TEXT = LABEL.repeat(2);

export function RotatingBadge({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1.1, ease: [0.25, 1, 0.5, 1] }}
      className={className}
    >
      <Magnetic strength={0.15}>
        <a
          href="#work"
          data-cursor-hover
          aria-label="See our work"
          className="group relative flex h-[220px] w-[220px] items-center justify-center"
        >
          <motion.svg
            viewBox="0 0 200 200"
            className="absolute inset-0 h-full w-full [animation-play-state:running] group-hover:[animation-play-state:paused]"
            style={{ animation: "spin-slow 16s linear infinite" }}
          >
            <defs>
              <path id="badge-circle" d="M 100,100 m -84,0 a 84,84 0 1,1 168,0 a 84,84 0 1,1 -168,0" />
            </defs>
            <circle cx="100" cy="100" r="98" fill="none" stroke="rgba(16,18,16,0.1)" />
            <text fill="currentColor" className="fill-ink/70">
              <textPath href="#badge-circle" startOffset="0%">
                <tspan className="text-[10.5px] font-medium uppercase tracking-[0.15em]">
                  {CIRCLE_TEXT}
                </tspan>
              </textPath>
            </text>
          </motion.svg>

          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-ink text-cream shadow-[0_0_0_6px_rgba(251,251,248,1)] transition-colors duration-300 group-hover:bg-olive">
            <svg
              width="18"
              height="18"
              viewBox="0 0 12 12"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path
                d="M2 10L10 2M10 2H3.5M10 2V8.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <span className="animate-pulse-dot absolute right-2 top-6 h-2 w-2 rounded-full bg-lime" />
        </a>
      </Magnetic>
    </motion.div>
  );
}
