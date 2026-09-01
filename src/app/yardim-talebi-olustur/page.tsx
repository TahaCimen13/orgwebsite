import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Yardım Talebi Oluştur",
  description:
    "İhtiyacınızı bize iletin; sosyal inceleme ekibimiz sizinle iletişime geçsin ve talebinizi gönüllü destekçilerle buluşturalım.",
};

const docs = [
  "Kimlik bilgileriniz (yalnızca ekibimizle paylaşılır)",
  "İhtiyacı belgeleyen rapor, reçete veya fatura",
  "Ulaşılabilir bir telefon numarası",
];

export default function CreateRequestPage() {
  return (
    <>
      <PageHero
        eyebrow="Yardım Talebi"
        title="İhtiyacınızı bize anlatın"
        description="Talebinizi ilettikten sonra sosyal inceleme ekibimiz sizinle iletişime geçer. Uygun bulunan talepler, kimlik bilgileriniz gizli tutularak platformda yayımlanır."
      />

      <section className="container-x py-20">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Hazırlık" title="Başvuru için gerekenler" />
            <ul className="mt-9 space-y-3">
              {docs.map((d) => (
                <li
                  key={d}
                  className="rounded-2xl border border-sand-200 bg-white p-5 text-[14.5px] leading-relaxed text-ink-700 shadow-card"
                >
                  {d}
                </li>
              ))}
            </ul>

            <p className="mt-8 rounded-3xl bg-clay-50 p-6 text-[14px] leading-[1.8] text-clay-800">
              Kimlik bilgileriniz hiçbir koşulda yayımlanmaz. Yayımlanan taleplerde yalnızca adınızın
              ilk harfi ve şehriniz görünür.
            </p>

            <p className="mt-6 text-[14px] leading-[1.85] text-ink-500">
              Acil durumlarda formu doldurmak yerine doğrudan telefonla ulaşabilirsiniz. Ekibimiz hafta
              içi 09:00–18:00 arasında hizmet vermektedir.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ContactForm
              formType="request"
              title="Talep formu"
              description="İhtiyacınızı olabildiğince açık şekilde anlatın; süreci hızlandırır."
              subjects={[
                "Eğitim Desteği",
                "İlaç Yardımı",
                "Tedavi Yardımı",
                "Kırtasiye & Kitap",
                "Gıda Desteği",
                "Sosyal Etkinlik",
              ]}
              messageLabel="İhtiyacınızı anlatın"
              submitLabel="Talebi Gönder"
            />
          </div>
        </div>
      </section>
    </>
  );
}
