"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  category: string;
  image: string;
};

const COLUMN_A: Project[] = [
  { title: "Call Time", category: "Brand Identity", image: "/images/work/call-time.jpg" },
  { title: "Social Media Creatives", category: "Social Media Kits", image: "/images/work/social-media-creatives.jpg" },
];

const COLUMN_B: Project[] = [
  { title: "Framily Adventures", category: "Brand Identity", image: "/images/work/framily-adventures.jpg" },
  { title: "NayaSource", category: "Branding", image: "/images/work/nayasource.jpg" },
];

function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  return (
    <a
      href="#contact"
      data-cursor-hover
      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-cream/5"
    >
      <Image
        src={project.image}
        alt={`${project.title} — ${project.category}`}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 32vw, 90vw"
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-cream">
        <div className="translate-y-1 transition-transform duration-500 group-hover:translate-y-0">
          <p className="font-display text-lg font-medium leading-tight sm:text-xl">{project.title}</p>
          <p className="mt-1 text-xs uppercase tracking-wide text-cream/60">{project.category}</p>
        </div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cream/25 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 md:translate-x-2">
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 10L10 2M10 2H3.5M10 2V8.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </a>
  );
}

function ParallaxColumn({
  items,
  y,
  className,
  priority,
}: {
  items: Project[];
  y: MotionValue<number>;
  className?: string;
  priority?: boolean;
}) {
  return (
    <motion.div style={{ y }} className={cn("flex flex-col gap-6", className)}>
      {items.map((project, i) => (
        <ProjectCard key={project.title} project={project} priority={priority && i === 0} />
      ))}
    </motion.div>
  );
}

export function Work() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  const yA = useTransform(scrollYProgress, [0, 1], [40, -140]);
  const yB = useTransform(scrollYProgress, [0, 1], [-60, 100]);

  return (
    <section id="work" className="relative border-t border-cream/10 bg-ink text-cream">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-6 px-6 py-20 md:px-10 lg:sticky lg:top-0 lg:h-screen lg:py-0">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-cream/50"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            Selected work
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-[13vw] font-medium leading-[0.95] tracking-tight sm:text-6xl md:text-7xl"
          >
            The work
            <br />
            <em className="bg-gradient-to-r from-olive via-green to-lime bg-clip-text font-serif italic text-transparent">
              we&apos;re proud of
            </em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-sm text-balance text-sm leading-relaxed text-cream/55 md:text-base"
          >
            A few recent favorites — brand systems, campaigns, and product work. More of our
            case studies are landing here soon.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            href="#contact"
            data-cursor-hover
            className="group mt-2 inline-flex w-fit items-center gap-2 border-b border-cream/25 pb-1 text-sm font-medium transition-colors duration-300 hover:border-cream"
          >
            Start your project
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </motion.a>
        </div>

        <div ref={galleryRef} className="grid grid-cols-2 gap-6 px-6 py-16 md:px-10 lg:py-32">
          <ParallaxColumn items={COLUMN_A} y={yA} priority />
          <ParallaxColumn items={COLUMN_B} y={yB} className="mt-16 lg:mt-28" />
        </div>
      </div>
    </section>
  );
}
