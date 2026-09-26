"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLenis } from "lenis/react";
import { cn } from "@/lib/utils";

const BASE_DURATION = 42; // seconds per full loop while idle — deliberately slow
const MAX_SPEED_BOOST = 3.5;

export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const directionRef = useRef(1);
  const speedRef = useRef(1);

  const track = [...items, ...items];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const tween = gsap.fromTo(
      el,
      { xPercent: 0 },
      { xPercent: -50, duration: BASE_DURATION, ease: "none", repeat: -1 }
    );
    tweenRef.current = tween;

    return () => {
      tween.kill();
    };
  }, []);

  useLenis((lenis) => {
    const tween = tweenRef.current;
    if (!tween) return;

    if (lenis.direction !== 0) {
      directionRef.current = lenis.direction;
    }

    const targetSpeed = 1 + Math.min(Math.abs(lenis.velocity) * 0.6, MAX_SPEED_BOOST);
    speedRef.current += (targetSpeed - speedRef.current) * 0.06;

    tween.timeScale(directionRef.current * speedRef.current);
  });

  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      <div ref={trackRef} className="flex w-max shrink-0 items-center gap-8 pr-8 will-change-transform">
        {track.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span>{item}</span>
            <span aria-hidden className="text-lime">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
