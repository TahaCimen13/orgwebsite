import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { siteUrl } from "@/lib/url";

/**
 * Kök düzen — yalnızca belge iskeleti.
 *
 * Sitenin menüsü, alt bilgisi ve çerez bandı (site) grubunun
 * düzenindedir; böylece /admin altındaki sayfalarda görünmez.
 */

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
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
