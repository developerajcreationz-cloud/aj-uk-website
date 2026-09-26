"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Magnetic } from "@/components/magnetic";

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

// One continuous horizontal filmstrip: slide 0 is the title card, the rest
// are projects. Sizes are fixed vw units (not measured) so the scroll
// distance is a single deterministic number — no per-slide animation math
// that can fall out of sync.
const SLIDE_VW = 58;
const GAP_VW = 3;
const SLIDE_COUNT = PROJECTS.length + 1;
const TRACK_VW = SLIDE_COUNT * SLIDE_VW + (SLIDE_COUNT - 1) * GAP_VW;
const SCROLL_VW = TRACK_VW - 100;

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
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${SCROLL_VW}vw`]);

  return (
    <section id="work" className="relative border-t border-ink/10 bg-ink text-cream">
      {/* Mobile / tablet: simple vertical stack, no scroll-pinned filmstrip */}
      <div className="flex flex-col gap-10 px-6 py-20 md:px-10 lg:hidden">
        <div>
          <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-cream/50">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            Selected work
          </p>
          <h2 className="font-display text-[11vw] font-medium leading-[1.02] tracking-tight sm:text-5xl">
            The work
            <br />
            <em className="bg-gradient-to-r from-olive via-green to-lime bg-clip-text font-serif italic text-transparent">
              we&apos;re proud of
            </em>
          </h2>
          <p className="mt-4 max-w-sm text-balance text-sm leading-relaxed text-cream/55">
            A few recent favorites — brand systems, campaigns, and product work.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {PROJECTS.map((project, i) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="group relative block aspect-[4/3] w-full overflow-hidden"
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

      {/* Desktop: pinned, scroll-driven horizontal filmstrip */}
      <div
        ref={trackRef}
        className="relative hidden lg:block"
        style={{ height: `${SLIDE_COUNT * 90}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div style={{ x }} className="flex h-full items-center">
            {/* Title slide */}
            <div
              className="relative flex h-[78vh] shrink-0 flex-col justify-center bg-cream px-10 py-10 text-ink"
              style={{ width: `${SLIDE_VW}vw`, marginRight: `${GAP_VW}vw` }}
            >
              <a href="#" data-cursor-hover className="absolute left-10 top-10 text-sm text-ink/60 transition-colors hover:text-ink">
                Instagram
              </a>
              <a href="#" data-cursor-hover className="absolute right-10 top-10 text-sm text-ink/60 transition-colors hover:text-ink">
                Facebook
              </a>

              <div>
                <h2 className="font-display text-[6vw] font-medium leading-[0.95] tracking-tight text-ink xl:text-[4.2vw]">
                  The work
                  <br />
                  <em className="bg-gradient-to-r from-olive via-green to-lime bg-clip-text font-serif italic text-transparent">
                    we&apos;re proud of
                  </em>
                </h2>
                <p className="mt-6 max-w-sm text-balance text-base leading-relaxed text-ink/60">
                  A few recent favorites — brand systems, campaigns, and product work. More case
                  studies are landing here soon.
                </p>
                <Magnetic strength={0.25} className="mt-6">
                  <a
                    href="#contact"
                    data-cursor-hover
                    className="group inline-flex w-fit items-center gap-2 border-b border-ink/25 pb-1 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink"
                  >
                    Start your project
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </Magnetic>
              </div>

              <a href="#" data-cursor-hover className="absolute bottom-10 left-10 text-sm text-ink/60 transition-colors hover:text-ink">
                Youtube
              </a>
              <a href="#" data-cursor-hover className="absolute bottom-10 right-10 text-sm text-ink/60 transition-colors hover:text-ink">
                Linkedin
              </a>
            </div>

            {/* Project slides */}
            {PROJECTS.map((project, i) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className={`group relative flex h-[78vh] shrink-0 flex-col ${
                  i % 2 === 1 ? "self-end" : "self-start"
                }`}
                style={{
                  width: `${SLIDE_VW}vw`,
                  marginRight: i < PROJECTS.length - 1 ? `${GAP_VW}vw` : 0,
                }}
              >
                <div className="relative h-[58vh] w-full overflow-hidden bg-cream/5">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    fill
                    priority={i === 0}
                    sizes="60vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-center gap-3 pt-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full border border-cream/25 px-3 py-1 text-xs text-cream/70 transition-colors duration-300 group-hover:border-lime/50">
                      {project.category}
                    </span>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {project.tags.map((tag) => (
                        <span key={tag} className="flex items-center gap-1.5 text-xs text-cream/50">
                          <span className="h-1 w-1 rounded-full bg-cream/50" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-3xl font-medium tracking-tight text-cream transition-colors duration-300 group-hover:text-lime xl:text-4xl">
                      {project.title}
                    </h3>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/20 transition-all duration-300 group-hover:-rotate-45 group-hover:border-lime group-hover:bg-lime group-hover:text-ink">
                      <ArrowIcon />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
