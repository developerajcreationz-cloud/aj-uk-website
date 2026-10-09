import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell, PageHero, CtaBand } from "@/components/page-shell";
import { SERVICES, getService } from "@/lib/services";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.title,
    description: `${s.headline} ${s.description}`,
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: `${SITE.url}/services/${service.slug}`,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: "GB",
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <PageHero
        eyebrow={`Service ${service.index}`}
        title={service.headline}
        intro={service.intro}
        crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }]}
      />

      <section className="border-t border-ink/10 bg-cream px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-2">
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-5xl">What&apos;s included</h2>
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {service.deliverables.map((d) => (
              <li key={d} className="flex items-center gap-3 py-4 text-base text-ink/75">
                <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink px-6 py-20 text-cream md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-display mb-12 text-3xl font-medium tracking-tight md:text-5xl">How we work</h2>
          <ol className="grid gap-6 md:grid-cols-3">
            {service.process.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-cream/10 p-8">
                <span className="font-mono text-sm text-lilac">0{i + 1}</span>
                <h3 className="font-display mt-4 text-2xl font-medium">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/60">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-cream px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-2">
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-5xl">Questions</h2>
          <dl className="divide-y divide-ink/10 border-y border-ink/10">
            {service.faqs.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="font-medium">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink/65">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-cream px-6 py-12 md:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-wrap gap-3">
          <span className="w-full text-xs uppercase tracking-wide text-ink/40">Other services</span>
          {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-full border border-ink/15 px-4 py-2 text-sm transition-colors hover:bg-ink hover:text-cream"
            >
              {s.title}
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </PageShell>
  );
}
