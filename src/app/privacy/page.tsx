import type { Metadata } from "next";
import { PageShell, PageHero } from "@/components/layout/page-shell";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | How AJ Creationz Uses Your Personal Data",
  description:
    "How AJ Creationz collects, uses and protects personal data from our contact form and site analytics, and how to exercise your UK GDPR rights.",
  path: "/privacy/",
});

const SECTIONS: { id?: string; h2: string; paragraphs: string[]; bullets?: string[] }[] = [
  {
    h2: "Who we are",
    paragraphs: [
      "AJ Creationz is a creative and digital agency serving clients in the UK and the US, and is the controller of the personal data described here. Contact us about anything on this page at grow@ajcreationz.co.",
    ],
  },
  {
    h2: "What we collect and why",
    paragraphs: ["We collect only what we need for each purpose:"],
    bullets: [
      "Contact form and email: your name, email address, project type and message, used to reply to your enquiry and prepare a quote. Our legal basis is your request to us and our legitimate interest in answering business enquiries.",
      "Client work: contact, billing and project details needed to deliver and invoice services under a contract.",
      "Website analytics, only if you accept cookies: pages visited, device and approximate location, used to improve the site. Our legal basis is your consent.",
    ],
  },
  {
    id: "cookies",
    h2: "Cookies and analytics",
    paragraphs: [
      "The site does not set analytics cookies unless you choose Accept in the cookie notice. If you accept, we load Google Analytics 4, which sets cookies and sends usage data to Google. If you decline, nothing is loaded or stored for analytics.",
      "You can change your mind at any time with the Cookie settings link in the footer, and you can delete cookies in your browser settings. Your choice is stored in your browser's local storage.",
    ],
  },
  {
    h2: "Who we share data with",
    paragraphs: [
      "We do not sell your personal data. We use service providers who process it for us: our hosting and email provider (Hostinger) to run the site and receive enquiries, and Google if you accept analytics cookies. Some of these providers are based outside the UK and EEA, in which case transfers rely on the safeguards they offer, such as standard contractual clauses.",
    ],
  },
  {
    h2: "How long we keep it",
    paragraphs: [
      "Enquiries that do not lead to work are kept for up to 24 months, then deleted. Records for clients are kept for as long as the contract runs and afterwards as long as tax and legal rules require. Analytics data follows Google Analytics retention settings.",
    ],
  },
  {
    h2: "Your rights",
    paragraphs: [
      "Depending on where you live (for example under GDPR or UK GDPR, or California law) you may have the right to ask to access, correct, delete or export your data, to object to processing, or to withdraw consent. Email grow@ajcreationz.co and we will respond within one month. If you are in the UK and are not happy with our response, you can complain to the Information Commissioner's Office at ico.org.uk.",
    ],
  },
  {
    h2: "Changes to this policy",
    paragraphs: ["We update this page when our practices change. The date at the top shows the latest revision."],
  },
];

export default function Page() {
  return (
    <PageShell>
      <PageHero eyebrow="Legal" title="Privacy Policy" intro="Last updated October 2026." />
      <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 pb-28 md:px-10">
        {SECTIONS.map((section) => (
          <section key={section.h2} id={section.id}>
            <h2 className="font-display text-2xl font-medium">{section.h2}</h2>
            {section.paragraphs.map((text) => (
              <p key={text} className="mt-3 text-ink/70 leading-relaxed">
                {text}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-ink/70 leading-relaxed">
                {section.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </PageShell>
  );
}
