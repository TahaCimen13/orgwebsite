import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/Section";
import { DonationWidget } from "@/components/DonationWidget";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bağış Yap",
  description:
    "Tek seferlik veya düzenli bağışla ihtiyaç sahibi ailelerin yanında olun. Bağışların %92'si doğrudan yardıma aktarılır.",
};

const impacts = [
  { amount: "250 ₺", text: "Bir çocuğun kırtasiye ihtiyacını karşılar." },
  { amount: "500 ₺", text: "Bir aileye aylık gıda kolisi ulaştırır." },
  { amount: "1.000 ₺", text: "Bir aylık ilaç desteği sağlar." },
  { amount: "2.500 ₺", text: "Bir tedavi yolculuğunun ulaşım giderini karşılar." },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Bağış"
        title="Desteğiniz doğrudan bir hayata dokunuyor"
        description="Bağışların %92'si aracısız biçimde ihtiyaç sahiplerine ulaşır. Nereye harcandığını yıllık raporlarımızda kalem kalem paylaşırız."
        image="/images/cta.jpg"
      />

      <section className="container-x py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <DonationWidget />
          </div>

          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Etki" title="Desteğiniz ne sağlıyor?" />

            <dl className="mt-9 space-y-3">
              {impacts.map((i) => (
                <div
                  key={i.amount}
                  className="flex items-start gap-5 rounded-2xl border border-sand-200 bg-white p-5 shadow-card"
                >
                  <dt className="w-20 shrink-0 font-display text-[18px] font-extrabold text-clay-600">
                    {i.amount}
                  </dt>
                  <dd className="text-[14.5px] leading-[1.7] text-ink-500">{i.text}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 rounded-3xl border border-sand-200 bg-sand-100 p-8">
              <span className="eyebrow">Havale / EFT</span>
              <h3 className="mt-4 font-display text-[22px] font-bold leading-snug">Banka ile bağış</h3>
              <dl className="mt-7 space-y-5 text-[14.5px]">
                <div>
                  <dt className="text-[12px] font-semibold text-ink-400">Hesap adı</dt>
                  <dd className="mt-1.5 text-ink-900">{site.ibanTitle}</dd>
                </div>
                <div>
                  <dt className="text-[12px] font-semibold text-ink-400">IBAN</dt>
                  <dd className="mt-1.5 font-mono text-[15px] text-ink-900">{site.iban}</dd>
                </div>
                <div>
                  <dt className="text-[12px] font-semibold text-ink-400">Açıklama</dt>
                  <dd className="mt-1.5 text-ink-900">Ad Soyad · Bağış alanı</dd>
                </div>
              </dl>
              <p className="mt-7 text-[13px] leading-[1.8] text-ink-500">
                Makbuz talebiniz için dekontunuzu{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="underline decoration-sand-400 underline-offset-4 hover:text-ink-900"
                >
                  {site.email}
                </a>{" "}
                adresine iletebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
