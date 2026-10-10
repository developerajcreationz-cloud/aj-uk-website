import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="bg-cream px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-44">
      <div className="mx-auto max-w-[1440px]">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap gap-2 text-xs text-ink/50">
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex gap-2">
                {c.href ? (
                  <Link href={c.href} className="hover:text-ink">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-ink">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <span>/</span>}
              </span>
            ))}
          </nav>
        )}
        <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-ink/50">
          <span className="h-1.5 w-1.5 rounded-full bg-violet" />
          {eyebrow}
        </p>
        <h1 className="font-display max-w-4xl text-[11vw] font-medium leading-[1] tracking-tight sm:text-6xl md:text-7xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-8 max-w-2xl text-balance text-base leading-relaxed text-ink/60 md:text-lg">{intro}</p>
        )}
      </div>
    </section>
  );
}

export function CtaBand({ title = "Ready to start your project?" }: { title?: string }) {
  return (
    <section className="bg-ink px-6 py-20 text-cream md:px-10 md:py-28">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <h2 className="font-display max-w-2xl text-4xl font-medium tracking-tight md:text-6xl">{title}</h2>
        <Link
          href="/contact"
          data-cursor-hover
          className="inline-flex w-fit items-center gap-2 rounded-full bg-lilac px-7 py-4 text-sm font-medium text-ink transition-colors hover:bg-cream"
        >
          Get in touch <span>→</span>
        </Link>
      </div>
    </section>
  );
}
