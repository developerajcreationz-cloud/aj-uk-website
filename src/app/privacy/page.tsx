import type { Metadata } from "next";
import { PageShell, PageHero } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AJ Creationz collects and uses your personal data.",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return (
    <PageShell>
      <PageHero eyebrow="Legal" title="Privacy Policy" intro="Last updated October 2026." />
      <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 pb-28 md:px-10">
        <section>
          <h2 className="font-display text-2xl font-medium">Who we are</h2>
          <p className="mt-3 text-ink/70 leading-relaxed">AJ Creationz is a UK creative and digital agency. You can contact us at hello@ajcreationz.com.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-medium">What we collect</h2>
          <p className="mt-3 text-ink/70 leading-relaxed">Details you give us through our contact form or by email (such as your name, email address and project details), and basic analytics data about how the site is used.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-medium">How we use it</h2>
          <p className="mt-3 text-ink/70 leading-relaxed">To reply to your enquiry, deliver our services, and improve the website. We do not sell your personal data.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-medium">Your rights</h2>
          <p className="mt-3 text-ink/70 leading-relaxed">Under UK GDPR you can ask to access, correct or delete your data. Email hello@ajcreationz.com and we will respond within one month.</p>
        </section>
      </div>
    </PageShell>
  );
}
