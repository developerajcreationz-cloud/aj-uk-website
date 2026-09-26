"use client";

import { useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

type Project = {
  title: string;
  category: string;
  tags: string[];
  image: string;
  href: string;
};

const PROJECTS: Project[] = [
  {
    title: "Call Time",
    category: "Branding",
    tags: ["Campaign", "Strategy", "Film"],
    image: "/images/work/call-time.jpg",
    href: "https://ajcreationz.co/portfolio/brand-identity/",
  },
  {
    title: "Framily Adventures",
    category: "Brand Identity",
    tags: ["Travel", "Guidelines", "Logo"],
    image: "/images/work/framily-adventures.jpg",
    href: "https://ajcreationz.co/portfolio/brandidentity/",
  },
  {
    title: "Social Media Creatives",
    category: "Social Media",
    tags: ["Advertising", "Content", "Design"],
    image: "/images/work/social-media-creatives.jpg",
    href: "https://ajcreationz.co/portfolio/social-media-kits/",
  },
  {
    title: "NayaSource",
    category: "Branding",
    tags: ["Corporate", "Identity", "Strategy"],
    image: "/images/work/nayasource.jpg",
    href: "https://ajcreationz.co/portfolio/branding/",
  },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
      <path
        d="M2 10L10 2M10 2H3.5M10 2V8.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Work() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 260, damping: 28, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 260, damping: 28, mass: 0.6 });

  const velocityX = useVelocity(springX);
  const rotate = useTransform(velocityX, [-1200, 1200], [-10, 10], { clamp: true });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHovered(null)}
      className="relative overflow-hidden border-t border-cream/10 bg-ink px-6 py-24 text-cream md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-cream/50">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              Selected work
            </p>
            <h2 className="font-display max-w-xl text-[10vw] font-medium leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
              The work
              <br />
              <em className="bg-gradient-to-r from-olive via-green to-lime bg-clip-text font-serif italic text-transparent">
                we&apos;re proud of
              </em>
            </h2>
          </div>
          <p className="max-w-sm text-balance text-sm leading-relaxed text-cream/55 md:text-base">
            A few recent favorites — brand systems, campaigns, and product work. Hover a project
            to preview it.{" "}
            <span className="text-cream/35">More case studies are landing here soon.</span>
          </p>
        </motion.div>

        {/* Desktop: hover index with a cursor-following preview */}
        <ul className="hidden border-t border-cream/10 lg:block">
          {PROJECTS.map((project, i) => (
            <li key={project.title}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                onMouseEnter={() => setHovered(i)}
                className="group flex items-center justify-between gap-8 border-b border-cream/10 py-8"
              >
                <div className="flex items-baseline gap-6 md:gap-10">
                  <span className="font-mono text-sm text-cream/40 transition-colors duration-300 group-hover:text-lime">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-4xl font-medium tracking-tight transition-colors duration-300 group-hover:text-lime md:text-6xl">
                    {project.title}
                  </h3>
                </div>

                <div className="flex shrink-0 items-center gap-8">
                  <div className="hidden flex-wrap justify-end gap-2 md:flex">
                    <span className="rounded-full border border-cream/15 px-3 py-1 text-xs text-cream/60 transition-colors duration-300 group-hover:border-lime/40 group-hover:text-cream">
                      {project.category}
                    </span>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cream/20 transition-all duration-300 group-hover:-rotate-45 group-hover:border-lime group-hover:bg-lime group-hover:text-ink">
                    <ArrowIcon />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile / tablet: simple stacked cards, no hover/cursor mechanics */}
        <div className="flex flex-col gap-6 lg:hidden">
          {PROJECTS.map((project, i) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl"
            >
              <Image
                src={project.image}
                alt={`${project.title} — ${project.category}`}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5 text-cream">
                <span className="w-fit rounded-full bg-lime px-3 py-1 text-xs font-medium text-ink">
                  {project.category}
                </span>
                <h3 className="font-display text-2xl font-medium leading-none">{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Floating cursor-following preview — desktop only */}
      <AnimatePresence>
        {hovered !== null && (
          <motion.div
            key={hovered}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            style={{ left: springX, top: springY, rotate }}
            className="pointer-events-none absolute z-20 hidden h-[240px] w-[340px] -translate-x-1/2 -translate-y-[130%] overflow-hidden rounded-2xl shadow-2xl shadow-black/50 lg:block"
          >
            <Image
              src={PROJECTS[hovered].image}
              alt=""
              fill
              sizes="340px"
              className="object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
