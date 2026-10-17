"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useSpring(cursorX, { damping: 32, stiffness: 500, mass: 0.3 });
  const dotY = useSpring(cursorY, { damping: 32, stiffness: 500, mass: 0.3 });
  const ringX = useSpring(cursorX, { damping: 24, stiffness: 200, mass: 0.5 });
  const ringY = useSpring(cursorY, { damping: 24, stiffness: 200, mass: 0.5 });
  const enabled = useRef(true);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    enabled.current = mq.matches;
    if (!mq.matches) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      setIsPointer(Boolean(target.closest("a, button, [data-cursor-hover]")));
    };

    const down = () => setIsDown(true);
    const up = () => setIsDown(false);
    const leave = () => setIsVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window !== "undefined" && !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden rounded-full bg-lilac md:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isPointer ? 0 : 7,
          height: isPointer ? 0 : 7,
          opacity: isVisible ? 1 : 0,
          scale: isDown ? 0.6 : 1,
        }}
        transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden items-center justify-center rounded-full border-2 border-lilac md:flex"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isPointer ? 56 : 30,
          height: isPointer ? 56 : 30,
          scale: isDown ? 0.85 : 1,
          backgroundColor: isPointer ? "#c4b0ff" : "rgba(196,176,255,0)",
        }}
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      >
        <motion.svg
          width="14"
          height="14"
          viewBox="0 0 12 12"
          fill="none"
          animate={{
            opacity: isPointer ? 1 : 0,
            rotate: isPointer ? 0 : -45,
            scale: isPointer ? 1 : 0.5,
          }}
          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
        >
          <path
            d="M2 10L10 2M10 2H3.5M10 2V8.5"
            stroke="#120f1d"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </>
  );
}
