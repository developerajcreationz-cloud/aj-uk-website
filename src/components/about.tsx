"use client";

import { motion } from "framer-motion";
import { Magnetic } from "@/components/magnetic";
import { TiltCard } from "@/components/tilt-card";
import { CountUp } from "@/components/count-up";

const VALUES = [
  {
    index: "01",
    title: "Senior only",
    description: "Every project is led by people who've shipped it before — no juniors learning on your dime.",
  },
  {
    index: "02",
    title: "Data-informed",
    description: "Design decisions get tested, not guessed. We measure what moves the numbers and cut what doesn't.",
  },
  {
    index: "03",
    title: "Built to scale",
    description: "Systems over one-offs — brand and code that hold up as the team, the traffic, and the ambition grow.",
  },
];

const STATS = [
  { value: 40, decimals: 0, suffix: "+", label: "Brands launched" },
  { value: 5, decimals: 1, suffix: "", label: "Average client rating" },
  { value: 3, decimals: 0, suffix: "+", label: "Years in business" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] as const, delay: i * 0.08 },
  }),
};

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-ink/10 bg-cream px-6 py-24 md:px-10 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-lime/20 to-transparent blur-[110px]"
      />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            custom={0}
          >
            <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-ink/50">
              <span className="h-1.5 w-1.5 rounded-full bg-green" />
              About us
            </p>
            <h2 className="font-display text-[11vw] font-medium leading-[1.02] tracking-tight text-ink sm:text-5xl md:text-6xl">
              A small team that
              <br />
              <em className="bg-gradient-to-r from-olive via-green to-lime bg-clip-text font-serif italic text-transparent">
                moves fast
              </em>
              .
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            custom={1}
            className="flex flex-col justify-center gap-6"
          >
            <p className="text-balance text-base leading-relaxed text-ink/65 md:text-lg">
              AJ Creationz started as a two-person studio solving one problem — most agency
              websites look impressive and convert nothing. We stayed small on purpose: every
              client works directly with the people actually designing, building, and shipping
              their project, not an account manager relaying it.
            </p>
            <Magnetic strength={0.25}>
              <a
                href="#contact"
                data-cursor-hover
                className="group inline-flex w-fit items-center gap-2 border-b border-ink/25 pb-1 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink"
              >
                Work with us
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          custom={2}
          className="mt-16 grid grid-cols-3 gap-6 border-y border-ink/10 py-8 md:mt-20 md:gap-12 md:py-10"
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl text-ink md:text-5xl">
                <CountUp value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-ink/50 md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3 md:gap-8" style={{ perspective: 1000 }}>
          {VALUES.map((value, i) => (
            <motion.div
              key={value.index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              custom={i + 3}
            >
              <TiltCard className="group h-full rounded-2xl border border-ink/10 bg-white/60 p-8 shadow-[0_1px_0_rgba(16,18,16,0.03)] transition-colors duration-300 hover:border-green/30">

                <span className="font-mono text-xs text-green">{value.index}</span>
                <h3 className="font-display mt-3 text-2xl font-medium tracking-tight text-ink md:text-3xl">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60 md:text-base">
                  {value.description}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
