import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Illustration, type SceneKey } from "@/components/illustrations";

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
  scene,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  crumbs?: { label: string; href?: string }[];
  scene?: SceneKey;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream via-[#f3eeff] to-cream px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-[520px] w-[520px] rounded-full bg-lilac/40 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-violet/10 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(rgba(76,29,149,0.18)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
      />
      <div
        className={`relative mx-auto grid max-w-[1440px] items-center gap-12 ${scene ? "lg:grid-cols-[1.25fr_0.9fr]" : ""}`}
      >
        <div>
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
        {scene && (
          <div className="relative hidden lg:block">
            <div
              aria-hidden
              className="absolute inset-6 -z-10 rotate-3 rounded-[2rem] bg-gradient-to-br from-violet/30 to-lilac/40 blur-xl"
            />
            <Illustration
              scene={scene}
              className="overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(76,29,149,0.5)]"
            />
          </div>
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
