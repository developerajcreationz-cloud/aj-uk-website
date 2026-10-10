import Link from "next/link";
import { TOP_LEVEL_SERVICES } from "@/content/services";

const AUDIENCES = [
  {
    title: "Owner-led and growing businesses",
    text: "Service firms, consultants and trades that need a site and a lead system that work together.",
  },
  {
    title: "Ecommerce brands",
    text: "Shopify and WooCommerce stores that need design, tracking and paid traffic that add up.",
  },
  {
    title: "Startups",
    text: "A brand, a fast launch site and the first search and ad campaigns, without hiring four suppliers.",
  },
];

const DIFFERENCES = [
  {
    title: "Prices in the open",
    text: "Every service page shows market price ranges with named sources, in pounds for UK guides and dollars for US ones, so you can judge any quote, ours included.",
  },
  {
    title: "One team, one set of numbers",
    text: "Website, SEO, ads and CRM share the same tracking, so you can see which campaign produced which customer.",
  },
  {
    title: "Rules built in",
    text: "Consent, cookie and messaging rules differ between the UK and the US. We build in UK GDPR and PECR consent, and US rules such as A2P 10DLC for SMS, and recommend legal review of the wording.",
  },
];

const FAQS = [
  {
    q: "What does a digital agency do?",
    a: "A digital agency designs and runs the online side of a business: the brand, the website, search and paid advertising, video and the systems that follow up with leads.",
  },
  {
    q: "Which businesses do you work with?",
    a: "Mainly owner-led businesses, ecommerce brands and startups in the UK and the US. We work remotely, and overlap with both UK and US working hours.",
  },
  {
    q: "Can I buy one service on its own?",
    a: "Yes. A website, a brand identity, an ad account or a CRM setup can each be a standalone project, and they are designed to connect later.",
  },
  {
    q: "How do you price projects?",
    a: "We agree scope first and quote in writing. The pricing sections on each service page show typical market ranges so you can compare.",
  },
];

export function HomeOverview() {
  return (
    <section className="bg-cream px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-5xl">What AJ Creationz does</h2>
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-ink/75 md:text-lg">
            <p>
              AJ Creationz is a digital agency that builds and runs the parts of a business that bring in customers: a
              website on WordPress, Shopify or custom code, a brand identity, SEO, Meta and Google Ads, video editing
              and a GoHighLevel CRM that follows up every enquiry. We work with businesses in the UK and the US,
              remotely, and every project has a named lead.
            </p>
            <p>
              Most small businesses buy these as separate jobs from separate suppliers, and nothing connects. We connect
              them: the site is built for search, the ads send traffic to pages that convert, and the CRM shows which
              source produced each lead.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {AUDIENCES.map((a) => (
            <div key={a.title} className="rounded-2xl border border-ink/10 bg-white/60 p-8">
              <h3 className="font-display text-xl font-medium">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{a.text}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display mt-20 text-3xl font-medium tracking-tight md:text-5xl">Our services in detail</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TOP_LEVEL_SERVICES.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                data-cursor-hover
                className="block h-full rounded-2xl border border-ink/10 p-6 transition-colors hover:bg-ink hover:text-cream"
              >
                <h3 className="font-display text-xl font-medium">{s.title}</h3>
                <p className="mt-2 text-sm opacity-70">{s.description}</p>
                <span className="mt-4 inline-block text-sm">Read the {s.keyword} guide →</span>
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="font-display mt-20 text-3xl font-medium tracking-tight md:text-5xl">Why clients choose us</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {DIFFERENCES.map((d) => (
            <div key={d.title} className="border-t border-ink/20 pt-5">
              <h3 className="font-display text-xl font-medium">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{d.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-5xl">Common questions</h2>
          <dl className="divide-y divide-ink/10 border-y border-ink/10">
            {FAQS.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="text-lg font-medium">{f.q}</dt>
                <dd className="mt-2 leading-relaxed text-ink/65">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
