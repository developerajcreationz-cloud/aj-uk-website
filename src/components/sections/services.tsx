"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SplitWords } from "@/components/ui/reveal";
import { Illustration, SERVICE_SCENES } from "@/components/illustrations";
import { TOP_LEVEL_SERVICES as SERVICES, childrenOf } from "@/content/services";

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
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-violet/20 blur-[140px]"
      />
      <div className="relative mx-auto max-w-[1440px]">
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
              <span className="h-1.5 w-1.5 rounded-full bg-lilac" />
              What we do
            </p>
            <SplitWords
              text="Full-stack creative, *without the noise.*"
              className="font-display max-w-xl text-[10vw] font-medium leading-[1.02] tracking-tight sm:text-5xl md:text-6xl"
              accentClassName="bg-gradient-to-r from-lilac via-violet to-lilac bg-clip-text font-serif italic text-transparent"
            />
          </div>
          <div className="flex max-w-sm flex-col gap-5">
            <p className="text-balance text-sm leading-relaxed text-cream/55 md:text-base">
              Every engagement pulls from the same core disciplines, mixed and matched to what your business needs, not
              a fixed package. Open any service for what is included, market prices and our method.
            </p>
            <Link
              href="/services/"
              data-cursor-hover
              className="w-fit border-b border-cream/30 pb-1 text-sm font-medium transition-colors hover:border-cream"
            >
              View all services →
            </Link>
          </div>
        </motion.div>

        <ul className="group/list border-t border-cream/10">
          {SERVICES.map((service, i) => {
            const children = childrenOf(service.slug);
            const scene = SERVICE_SCENES[service.slug];
            return (
              <motion.li
                key={service.index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                custom={i + 1}
                className="group relative border-b border-cream/10 transition-opacity duration-300 group-hover/list:opacity-40 hover:opacity-100!"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 origin-left scale-x-0 bg-lilac transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100"
                />

                <div className="relative grid items-center gap-5 py-8 md:grid-cols-[56px_minmax(0,1.05fr)_minmax(0,1.1fr)_200px] md:gap-8 md:py-10">
                  <span className="font-mono text-sm text-cream/40 transition-colors duration-500 group-hover:text-ink/60">
                    {service.index}
                  </span>

                  <h3 className="font-display text-3xl font-medium tracking-tight transition-colors duration-500 group-hover:text-ink sm:text-4xl md:text-5xl">
                    <Link
                      href={`/services/${service.slug}`}
                      data-cursor-hover
                      className="after:absolute after:inset-0 after:content-['']"
                    >
                      {service.title}
                    </Link>
                  </h3>

                  <div className="relative z-10 flex flex-col gap-4">
                    <p className="max-w-md text-sm leading-relaxed text-cream/55 transition-colors duration-500 group-hover:text-ink/70 md:text-base">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      {children.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/services/${c.slug}`}
                          data-cursor-hover
                          className="rounded-full border border-cream/20 px-3 py-1 text-xs text-cream/75 transition-colors duration-300 hover:!border-ink hover:!bg-ink hover:!text-cream group-hover:border-ink/30 group-hover:text-ink/80"
                        >
                          {c.title}
                        </Link>
                      ))}
                      {service.tags
                        .filter(() => children.length === 0)
                        .map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-cream/15 px-3 py-1 text-xs text-cream/60 transition-colors duration-500 group-hover:border-ink/20 group-hover:text-ink/70"
                          >
                            {tag}
                          </span>
                        ))}
                      <span className="ml-1 inline-flex items-center gap-1 text-xs font-medium text-cream/80 transition-colors duration-500 group-hover:text-ink">
                        Explore service
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </div>

                  {scene && (
                    <div className="relative z-0 hidden md:block">
                      <Illustration
                        scene={scene}
                        className="overflow-hidden rounded-2xl opacity-80 transition-all duration-500 group-hover:-rotate-2 group-hover:scale-110 group-hover:opacity-100"
                      />
                    </div>
                  )}
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
