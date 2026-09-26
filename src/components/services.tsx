"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    index: "01",
    title: "Brand & Identity",
    description: "Positioning, naming, logo systems, and guidelines built to hold up at any size.",
    tags: ["Strategy", "Naming", "Logo systems"],
  },
  {
    index: "02",
    title: "Web Design & Development",
    description: "High-performance, animated websites and products engineered for speed and scroll.",
    tags: ["Next.js", "Webflow", "E-commerce"],
  },
  {
    index: "03",
    title: "Motion & Interaction",
    description: "Micro-interactions, scroll storytelling, and 3D that make a site feel alive.",
    tags: ["WebGL", "Motion design", "Prototyping"],
  },
  {
    index: "04",
    title: "SEO & Growth",
    description: "Technical SEO, content systems, and measurement that compound over time.",
    tags: ["Technical SEO", "Content", "Analytics"],
  },
  {
    index: "05",
    title: "Content & Social",
    description: "Campaigns, video, and social systems built to repeat and scale.",
    tags: ["Video", "Social", "Campaigns"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] as const, delay: i * 0.06 },
  }),
};

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-ink px-6 py-24 text-cream md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          custom={0}
          className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-cream/50">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              What we do
            </p>
            <h2 className="font-display max-w-xl text-[10vw] font-medium leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
              Full-stack creative, without the noise.
            </h2>
          </div>
          <p className="max-w-sm text-balance text-sm leading-relaxed text-cream/55 md:text-base">
            Every engagement pulls from the same core disciplines — mixed and matched to what
            the brand actually needs, not a fixed package.
          </p>
        </motion.div>

        <ul className="border-t border-cream/10">
          {SERVICES.map((service, i) => (
            <motion.li
              key={service.index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              custom={i + 1}
            >
              <a
                href="#contact"
                data-cursor-hover
                className="group relative flex flex-col gap-4 border-b border-cream/10 py-8 transition-colors duration-500 md:flex-row md:items-center md:gap-10 md:py-10"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 origin-left scale-x-0 bg-lime transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100"
                />

                <span className="relative z-10 font-mono text-sm text-cream/40 transition-colors duration-500 group-hover:text-ink/60 md:w-12">
                  {service.index}
                </span>

                <h3 className="font-display relative z-10 text-3xl font-medium tracking-tight transition-colors duration-500 group-hover:text-ink sm:text-4xl md:w-[420px] md:shrink-0 md:text-5xl">
                  {service.title}
                </h3>

                <p className="relative z-10 max-w-md text-sm leading-relaxed text-cream/55 transition-colors duration-500 group-hover:text-ink/70 md:text-base">
                  {service.description}
                </p>

                <div className="relative z-10 flex flex-wrap gap-2 md:ml-auto md:justify-end">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cream/15 px-3 py-1 text-xs text-cream/60 transition-colors duration-500 group-hover:border-ink/20 group-hover:text-ink/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="relative z-10 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/15 transition-all duration-500 group-hover:border-ink/30 group-hover:bg-ink group-hover:text-cream md:flex">
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
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
