"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 30, stiffness: 400, mass: 0.4 });
  const springY = useSpring(cursorY, { damping: 30, stiffness: 400, mass: 0.4 });
  const ringX = useSpring(cursorX, { damping: 22, stiffness: 180, mass: 0.6 });
  const ringY = useSpring(cursorY, { damping: 22, stiffness: 180, mass: 0.6 });
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
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-2 w-2 rounded-full bg-white mix-blend-difference md:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden items-center justify-center rounded-full border md:flex"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
          mixBlendMode: isPointer ? "normal" : "difference",
        }}
        animate={{
          width: isPointer ? 64 : 36,
          height: isPointer ? 64 : 36,
          scale: isDown ? 0.85 : 1,
          borderColor: isPointer ? "rgba(127,159,46,0.8)" : "rgba(255,255,255,0.9)",
          backgroundColor: isPointer ? "rgba(200,228,85,0.15)" : "rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
      />
    </>
  );
}
