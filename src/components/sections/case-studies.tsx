import Image from "next/image";
import Link from "next/link";
import { ParallaxFrame, Reveal, SplitWords } from "@/components/ui/reveal";
import { PROJECTS } from "@/content/projects";

export function CaseStudies() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 pb-20 md:px-10 md:pb-28">
      <div className="mx-auto max-w-[1440px] divide-y divide-ink/10 border-t border-ink/10">
        {PROJECTS.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={p.slug}
              id={p.slug}
              className="group/case relative grid gap-8 py-14 md:grid-cols-2 md:gap-16 md:py-24"
            >
              <span
                aria-hidden
                className="text-outline font-display pointer-events-none absolute right-0 top-8 select-none text-[8rem] font-medium leading-none [--outline:rgba(139,92,246,0.22)] md:text-[12rem]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <ParallaxFrame
                className={`relative aspect-[4/3] rounded-2xl bg-ink/5 shadow-[0_40px_80px_-50px_rgba(76,29,149,0.6)] ${flip ? "md:order-2" : ""}`}
              >
                <Image
                  src={p.image}
                  alt={`${p.title}: ${p.category.toLowerCase()} project by AJ Creationz`}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  priority={i === 0}
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover/case:scale-105"
                />
              </ParallaxFrame>

              <div className="relative flex flex-col justify-center">
                <Reveal dir={flip ? "left" : "right"}>
                  <p className="text-xs font-medium uppercase tracking-wide text-ink/50">{p.category}</p>
                </Reveal>
                <SplitWords
                  text={p.title}
                  className="font-display mt-3 text-4xl font-medium tracking-tight md:text-6xl"
                  accentClassName=""
                />
                <Reveal delay={0.1}>
                  <h3 className="mt-6 text-sm font-medium uppercase tracking-wide text-ink/50">The brief</h3>
                  <p className="mt-2 leading-relaxed text-ink/70">{p.brief}</p>
                </Reveal>
                <Reveal delay={0.15}>
                  <h3 className="mt-6 text-sm font-medium uppercase tracking-wide text-ink/50">What we delivered</h3>
                  <ul className="mt-2 divide-y divide-ink/10 border-y border-ink/10">
                    {p.delivered.map((d, n) => (
                      <li
                        key={d}
                        className="flex gap-3 py-3 text-ink/75 transition-transform duration-300 hover:translate-x-1.5"
                      >
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                        <span style={{ transitionDelay: `${n * 40}ms` }}>{d}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
                {p.approach && (
                  <Reveal delay={0.2}>
                    <h3 className="mt-6 text-sm font-medium uppercase tracking-wide text-ink/50">Design approach</h3>
                    <p className="mt-2 leading-relaxed text-ink/70">{p.approach}</p>
                  </Reveal>
                )}
                {p.quote && (
                  <Reveal delay={0.25}>
                    <blockquote className="mt-6 border-l-2 border-violet pl-4">
                      <p className="font-display text-lg leading-snug">&ldquo;{p.quote.text}&rdquo;</p>
                      <footer className="mt-2 text-sm text-ink/55">
                        {p.quote.name}, {p.quote.role}
                      </footer>
                    </blockquote>
                  </Reveal>
                )}
                <Reveal delay={0.3}>
                  <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium">
                    <a
                      href={p.sourceUrl}
                      target="_blank"
                      rel="noopener"
                      className="border-b border-ink/25 pb-1 hover:border-ink"
                    >
                      Full project on ajcreationz.co ↗
                    </a>
                    <Link href="/contact/" className="border-b border-ink/25 pb-1 hover:border-ink">
                      Start a similar project →
                    </Link>
                  </div>
                </Reveal>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
