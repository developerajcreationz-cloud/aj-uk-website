"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";

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

const TOTAL = PROJECTS.length;
const HOLD = 0.19;
const TRANS = 0.08;
// HOLD * TOTAL + TRANS * (TOTAL - 1) === 1

function slideRange(index: number) {
  const holdStart = index * (HOLD + TRANS);
  const holdEnd = holdStart + HOLD;
  return { holdStart, holdEnd };
}

function Slide({
  project,
  index,
  scrollYProgress,
  priority,
}: {
  project: Project;
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  priority?: boolean;
}) {
  const { holdStart, holdEnd } = slideRange(index);

  // A single scalar per slide: -1 = off to the right (not entered yet),
  // 0 = centered/held, 1 = off to the left (already exited). Deriving both
  // x and opacity from this one value keeps them from ever disagreeing.
  const local = useTransform(scrollYProgress, (t) => {
    if (t < holdStart) {
      if (index === 0) return 0;
      const enterStart = holdStart - TRANS;
      if (t <= enterStart) return -1;
      return (t - enterStart) / TRANS - 1;
    }
    if (t > holdEnd) {
      if (index === TOTAL - 1) return 0;
      const exitEnd = holdEnd + TRANS;
      if (t >= exitEnd) return 1;
      return (t - holdEnd) / TRANS;
    }
    return 0;
  });

  const x = useTransform(local, (p) => `${p * 55}%`);
  const opacity = useTransform(local, (p) => 1 - Math.abs(p));

  return (
    <motion.div style={{ x, opacity }} className="absolute inset-0">
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor-hover
        className="group relative block h-full w-full overflow-hidden rounded-2xl"
      >
        <Image
          src={project.image}
          alt={`${project.title} — ${project.category}`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 text-cream md:p-10">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-lime px-3 py-1 text-xs font-medium text-ink">
              {project.category}
            </span>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {project.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-2 text-xs text-cream/60">
                <span className="h-1 w-1 rounded-full bg-cream/60" />
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-end justify-between gap-4">
            <h3 className="font-display text-3xl font-medium leading-none tracking-tight sm:text-4xl md:text-5xl">
              {project.title}
            </h3>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cream/25 transition-all duration-500 group-hover:border-lime group-hover:bg-lime group-hover:text-ink">
              <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
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
        </div>
      </a>
    </motion.div>
  );
}

export function Work() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let closest = 0;
    let closestDist = Infinity;
    for (let i = 0; i < TOTAL; i++) {
      const { holdStart, holdEnd } = slideRange(i);
      const center = (holdStart + holdEnd) / 2;
      const dist = Math.abs(latest - center);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    }
    setActive(closest);
  });

  return (
    <section id="work" className="relative border-t border-cream/10 bg-ink text-cream">
      {/* Mobile / tablet: simple vertical stack, no scroll-pinning */}
      <div className="flex flex-col gap-6 px-6 py-20 md:px-10 lg:hidden">
        <WorkIntro active={0} />
        <div className="flex flex-col gap-6">
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

      {/* Desktop: pinned scroll-driven horizontal reveal */}
      <div ref={trackRef} className="relative hidden lg:block" style={{ height: `${TOTAL * 100}vh` }}>
        <div className="sticky top-0 grid h-screen grid-cols-2">
          <WorkIntro active={active} />
          <div className="relative h-full overflow-hidden py-10 pr-10">
            {PROJECTS.map((project, i) => (
              <Slide
                key={project.title}
                project={project}
                index={i}
                scrollYProgress={scrollYProgress}
                priority={i === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkIntro({ active }: { active: number }) {
  return (
    <div className="flex flex-col justify-center gap-6 px-6 md:px-10 lg:py-0">
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
        A few recent favorites — brand systems, campaigns, and product work. More of our case
        studies are landing here soon.
      </motion.p>

      <div className="mt-2 flex items-center gap-3 font-mono text-sm text-cream/50">
        <span className="text-cream">{String(active + 1).padStart(2, "0")}</span>
        <span className="h-px w-8 bg-cream/25" />
        <span>{String(TOTAL).padStart(2, "0")}</span>
      </div>

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
  );
}
