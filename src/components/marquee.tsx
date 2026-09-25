"use client";

import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
  reverse = false,
}: {
  items: string[];
  className?: string;
  reverse?: boolean;
}) {
  const track = [...items, ...items];

  return (
    <div className={cn("group relative flex overflow-hidden", className)}>
      <div
        className={cn(
          "flex shrink-0 items-center gap-8 pr-8",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          "group-hover:[animation-play-state:paused]"
        )}
      >
        {track.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span>{item}</span>
            <span aria-hidden className="text-lime">
              ✦
            </span>
          </span>
        ))}
      </div>
      <div
        aria-hidden
        className={cn(
          "flex shrink-0 items-center gap-8 pr-8",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          "group-hover:[animation-play-state:paused]"
        )}
      >
        {track.map((item, i) => (
          <span key={`dup-${i}`} className="flex items-center gap-8 whitespace-nowrap">
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
