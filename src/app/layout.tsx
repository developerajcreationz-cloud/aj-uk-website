import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Cursor } from "@/components/cursor";
import { ScrollProgress } from "@/components/scroll-progress";
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
  metadataBase: new URL("https://ajcreationz.com"),
  title: {
    default: "AJ Creationz — Creative & Digital Agency for US & UK Brands",
    template: "%s — AJ Creationz",
  },
  description:
    "AJ Creationz is a creative and digital agency designing websites, brand identities, and growth-driven campaigns for ambitious businesses across the United States and United Kingdom.",
  keywords: [
    "digital agency",
    "web design agency",
    "branding agency US UK",
    "creative agency",
    "website design",
    "AJ Creationz",
  ],
  openGraph: {
    title: "AJ Creationz — Creative & Digital Agency for US & UK Brands",
    description:
      "Websites, brand identities, and growth-driven campaigns for ambitious businesses across the US and UK.",
    url: "https://ajcreationz.com",
    siteName: "AJ Creationz",
    images: ["/images/logo-full.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AJ Creationz — Creative & Digital Agency for US & UK Brands",
    description:
      "Websites, brand identities, and growth-driven campaigns for ambitious businesses across the US and UK.",
    images: ["/images/logo-full.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink cursor-enabled">
        <SmoothScroll>
          <ScrollProgress />
          <Cursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
