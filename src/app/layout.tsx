import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { CookieBanner } from "@/components/CookieBanner";
import { ScrollProgress } from "@/components/Reveal";
import { site } from "@/lib/site";
import { siteUrl } from "@/lib/url";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jakarta",
  display: "swap",
});

const url = siteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "dernek",
    "gönüllülük",
    "dayanışma",
    "genç dayanışması",
    "sosyal sorumluluk",
    "fırsat eşitliği",
    "akran desteği",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        {/* JavaScript kapalıysa animasyonla gizlenen içerik görünür kalmalı. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen antialiased">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[100] focus:bg-ink-950 focus:px-5 focus:py-3 focus:text-sand-50"
        >
          İçeriğe geç
        </a>
        <ScrollProgress />
        <Header />
        <main id="icerik">{children}</main>
        <Footer />
        <MobileBar />
        <CookieBanner />
        <div className="h-19 lg:hidden" aria-hidden="true" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: site.legalName,
              alternateName: site.name,
              url,
              email: site.email,
              address: { "@type": "PostalAddress", addressCountry: "TR" },
              foundingDate: String(site.founded),
              description: site.description,
            }),
          }}
        />
      </body>
    </html>
  );
}
