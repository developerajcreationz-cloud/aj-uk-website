import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell, PageHero, CtaBand } from "@/components/layout/page-shell";
import { SERVICES, TOP_LEVEL_SERVICES, UK_PRICING, childrenOf, getService } from "@/content/services";
import { Illustration, SERVICE_SCENES } from "@/components/illustrations";
import { Reveal } from "@/components/ui/reveal";
import { InlineText } from "@/components/sections/inline-text";
import { Accordion } from "@/components/ui/accordion";
import { JsonLd } from "@/components/seo/json-ld";
import { livePosts } from "@/content/posts";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/config/site";

/** Re-render hourly so newly published guides appear in "From the blog". */
export const revalidate = 3600;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/services/${s.slug}/` });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const parent = service.parent ? getService(service.parent) : undefined;
  const children = childrenOf(service.slug);
  const url = `${SITE.url}/services/${service.slug}/`;

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    ...(parent ? [{ label: parent.title, href: `/services/${parent.slug}` }] : []),
    { label: service.title },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.metaDescription,
        url,
        serviceType: service.keyword,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: [
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "United States" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.label,
          ...(c.href ? { item: `${SITE.url}${c.href.endsWith("/") ? c.href : c.href + "/"}` } : { item: url }),
        })),
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

  // A pillar page also lists the guides of its child pages (for example, website development lists Shopify guides).
  const guideSlugs = [service.slug, ...childrenOf(service.slug).map((c) => c.slug)];
  const guides = livePosts().filter((p) => guideSlugs.includes(p.parent));
  const uk = UK_PRICING[service.slug];
  const related = service.related.map(getService).filter((s): s is NonNullable<typeof s> => !!s);

  return (
    <PageShell>
      <JsonLd data={jsonLd} />
      <PageHero eyebrow={`Service ${service.index}`} title={service.h1} crumbs={crumbs} />

      <section className="bg-cream px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-[2fr_1fr] md:gap-16">
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-ink/75 md:text-lg">
            {service.answer.map((p) => (
              <p key={p.slice(0, 40)}>
                <InlineText text={p} />
              </p>
            ))}
          </div>
          <div className="h-fit space-y-6">
            {SERVICE_SCENES[service.slug] && (
              <Illustration scene={SERVICE_SCENES[service.slug]} className="overflow-hidden rounded-3xl" />
            )}
            <div className="h-fit rounded-2xl border border-ink/10 p-6">
              <p className="font-display text-xl font-medium">Talk to us about {service.title}</p>
              <p className="mt-2 text-sm text-ink/60">Tell us what you need. We reply within one working day.</p>
              <Link
                href="/contact/"
                data-cursor-hover
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-plum"
              >
                Get a quote <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {children.length > 0 && (
        <section className="border-t border-ink/10 bg-cream px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="font-display mb-8 text-3xl font-medium tracking-tight md:text-4xl">Choose your service</h2>
            <ul className="grid gap-4 md:grid-cols-3">
              {children.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/services/${c.slug}/`}
                    data-cursor-hover
                    className="block h-full rounded-2xl border border-ink/10 p-6 transition-colors hover:bg-ink hover:text-cream"
                  >
                    <h3 className="font-display text-xl font-medium">{c.title}</h3>
                    <p className="mt-2 text-sm opacity-70">{c.description}</p>
                    <span className="mt-4 inline-block text-sm">Read more →</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {service.sections.map((section, i) => (
        <Reveal key={section.h2} amount={0.1}>
          <section
            key={section.h2}
            className={`px-6 py-16 md:px-10 md:py-20 ${i % 2 === 0 ? "border-t border-ink/10 bg-cream" : "bg-cream"}`}
          >
            <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
              <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">{section.h2}</h2>
              <div className="max-w-3xl space-y-4 text-base leading-relaxed text-ink/70">
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>
                    <InlineText text={p} />
                  </p>
                ))}
                {section.bullets && (
                  <ul className="divide-y divide-ink/10 border-y border-ink/10">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex gap-3 py-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                        <InlineText text={b} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>
        </Reveal>
      ))}

      {service.pricing && (
        <section className="border-t border-ink/10 bg-cream px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="font-display max-w-3xl text-3xl font-medium tracking-tight md:text-4xl">
              {service.pricing.h2}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/70">
              Market figures from published guides, not AJ Creationz quotes: pounds for the UK and dollars for the US.
              We quote every project in writing after a short call.
            </p>
            <div className={`mt-10 grid gap-10 ${uk ? "lg:grid-cols-2" : ""}`}>
              {uk && (
                <PriceTable market="United Kingdom" currency="GBP, £" intro={uk.intro} rows={uk.rows} note={uk.note} />
              )}
              <PriceTable
                market="United States"
                currency="USD, $"
                intro={service.pricing.intro}
                rows={service.pricing.rows}
                note={service.pricing.note}
              />
            </div>
          </div>
        </section>
      )}

      <section className="bg-ink px-6 py-20 text-cream md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-cream/55">Our method</p>
          <h2 className="font-display mb-12 text-3xl font-medium tracking-tight md:text-5xl">{service.method.name}</h2>
          <ol className="grid gap-6 md:grid-cols-3">
            {service.method.steps.map((step, i) => (
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
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-5xl">Frequently asked questions</h2>
          <Accordion items={service.faqs} />
        </div>
      </section>

      {guides.length > 0 && (
        <section className="border-t border-ink/10 bg-cream px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="font-display mb-8 text-3xl font-medium tracking-tight md:text-4xl">From the blog</h2>
            <ul className="grid gap-4 md:grid-cols-2">
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/blog/${g.slug}/`}
                    data-cursor-hover
                    className="block h-full rounded-2xl border border-ink/10 p-6 transition-colors hover:bg-ink hover:text-cream"
                  >
                    <h3 className="font-display text-xl font-medium">{g.title}</h3>
                    <p className="mt-2 text-sm opacity-70">{g.metaDescription}</p>
                    <span className="mt-4 inline-block text-sm">Read the guide →</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="border-t border-ink/10 bg-cream px-6 py-12 md:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-wrap gap-3">
          <span className="w-full text-xs uppercase tracking-wide text-ink/60">Related services</span>
          {[...(parent ? [parent] : []), ...related].map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}/`}
              className="rounded-full border border-ink/15 px-4 py-2 text-sm transition-colors hover:bg-ink hover:text-cream"
            >
              {s.title}
            </Link>
          ))}
          {!parent &&
            TOP_LEVEL_SERVICES.filter((s) => s.slug !== service.slug && !service.related.includes(s.slug)).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
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

function PriceTable({
  market,
  currency,
  intro,
  rows,
  note,
}: {
  market: string;
  currency: string;
  intro: string;
  rows: { label: string; range: string }[];
  note: string;
}) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white/40 p-6 md:p-8">
      <h3 className="font-display text-xl font-medium tracking-tight md:text-2xl">
        {market} <span className="text-base font-normal text-ink/55">({currency})</span>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/70">{intro}</p>
      <dl className="mt-5 divide-y divide-ink/10 border-y border-ink/10">
        {rows.map((r) => (
          <div key={r.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between sm:gap-6">
            <dt className="text-ink/75">{r.label}</dt>
            <dd className="font-medium sm:text-right">{r.range}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-xs leading-relaxed text-ink/60">
        <InlineText text={note} />
      </p>
    </div>
  );
}
