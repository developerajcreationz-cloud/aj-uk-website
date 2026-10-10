import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import Script from "next/script";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { Cursor } from "@/components/layout/cursor";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE } from "@/config/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: "%s — AJ Creationz" },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "digital agency",
    "creative agency",
    "web design agency",
    "branding agency",
    "SEO agency",
    "website design",
    "Shopify web design agency",
    "WordPress web design agency",
    "Google Ads agency",
    "Meta ads agency",
    "GoHighLevel CRM",
    "video editing",
    "AJ Creationz",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  alternates: { canonical: "/" },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || SITE.googleVerification },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}${SITE.logo}`,
      image: `${SITE.url}${SITE.logo}`,
      description: SITE.description,
      email: SITE.email,
      areaServed: SITE.markets.map((name) => ({ "@type": "Country", name })),
      sameAs: [SITE.mainSiteUrl],
      employee: SITE.team.map((m) => ({
        "@type": "Person",
        name: m.name,
        jobTitle: m.role,
        ...("photo" in m && m.photo ? { image: `${SITE.url}${m.photo}` } : {}),
      })),
      serviceType: SITE.services,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { "@id": `${SITE.url}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-ink cursor-enabled">
        <JsonLd data={jsonLd} />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
        <SmoothScroll>
          <ScrollProgress />
          <Cursor />
          {children}
          <ScrollToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
