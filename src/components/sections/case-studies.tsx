import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/content/projects";

export function CaseStudies() {
  return (
    <section className="bg-cream px-6 pb-20 md:px-10 md:pb-28">
      <div className="mx-auto max-w-[1440px] divide-y divide-ink/10 border-t border-ink/10">
        {PROJECTS.map((p, i) => (
          <article key={p.slug} id={p.slug} className="grid gap-8 py-14 md:grid-cols-2 md:gap-16 md:py-20">
            <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink/5 ${i % 2 ? "md:order-2" : ""}`}>
              <Image
                src={p.image}
                alt={`${p.title}: ${p.category.toLowerCase()} project by AJ Creationz`}
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                priority={i === 0}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs font-medium uppercase tracking-wide text-ink/50">{p.category}</p>
              <h2 className="font-display mt-3 text-3xl font-medium tracking-tight md:text-5xl">{p.title}</h2>
              <h3 className="mt-6 text-sm font-medium uppercase tracking-wide text-ink/50">The brief</h3>
              <p className="mt-2 leading-relaxed text-ink/70">{p.brief}</p>
              <h3 className="mt-6 text-sm font-medium uppercase tracking-wide text-ink/50">What we delivered</h3>
              <ul className="mt-2 divide-y divide-ink/10 border-y border-ink/10">
                {p.delivered.map((d) => (
                  <li key={d} className="flex gap-3 py-3 text-ink/75">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                    {d}
                  </li>
                ))}
              </ul>
              {p.approach && (
                <>
                  <h3 className="mt-6 text-sm font-medium uppercase tracking-wide text-ink/50">Design approach</h3>
                  <p className="mt-2 leading-relaxed text-ink/70">{p.approach}</p>
                </>
              )}
              {p.quote && (
                <blockquote className="mt-6 border-l-2 border-violet pl-4">
                  <p className="font-display text-lg leading-snug">&ldquo;{p.quote.text}&rdquo;</p>
                  <footer className="mt-2 text-sm text-ink/55">
                    {p.quote.name}, {p.quote.role}
                  </footer>
                </blockquote>
              )}
              <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium">
                <a
                  href={p.sourceUrl}
                  target="_blank"
                  rel="noopener"
                  className="border-b border-ink/25 pb-1 hover:border-ink"
                >
                  Full project on ajcreationz.co ↗
                </a>
                <Link href="/contact" className="border-b border-ink/25 pb-1 hover:border-ink">
                  Start a similar project →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
