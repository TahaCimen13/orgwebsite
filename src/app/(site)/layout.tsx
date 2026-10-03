import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { CookieBanner } from "@/components/CookieBanner";
import { ScrollProgress } from "@/components/Reveal";
import { site } from "@/lib/site";
import { siteUrl } from "@/lib/url";

/** Herkese açık sayfaların ortak çerçevesi. Yönetim paneli bunu kullanmaz. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const url = siteUrl();

  return (
    <>
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
    </>
  );
}
