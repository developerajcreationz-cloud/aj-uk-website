import type { Metadata } from "next";
import { PageShell, PageHero } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms for using the AJ Creationz website and services.",
  alternates: { canonical: "/terms/" },
};

export default function Page() {
  return (
    <PageShell>
      <PageHero eyebrow="Legal" title="Terms of Service" intro="Last updated October 2026." />
      <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 pb-28 md:px-10">
        <section>
          <h2 className="font-display text-2xl font-medium">Services</h2>
          <p className="mt-3 text-ink/70 leading-relaxed">
            Project scope, pricing and timelines are agreed in writing before work begins.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-medium">Payment</h2>
          <p className="mt-3 text-ink/70 leading-relaxed">
            Invoices are payable by the date stated on the invoice. Ad spend is paid directly to advertising platforms.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-medium">Intellectual property</h2>
          <p className="mt-3 text-ink/70 leading-relaxed">
            On full payment, you own the final deliverables. We may show completed work in our portfolio unless agreed
            otherwise.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-medium">Liability</h2>
          <p className="mt-3 text-ink/70 leading-relaxed">
            We work with care but cannot guarantee specific results such as rankings, leads or sales.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
