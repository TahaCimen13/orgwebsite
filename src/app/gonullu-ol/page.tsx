import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Gönüllü Ol",
  description:
    "Gönüllü ağımıza katılın. Zamanınızla, bilginizle veya emeğinizle destek olun.",
};

const steps = [
  "Formu doldurup başvurunuzu iletin.",
  "Ekibimiz 3 iş günü içinde sizi arasın.",
  "İki haftalık oryantasyon programına katılın.",
  "İlgi alanınıza uygun bir görevle eşleşin.",
];

export default function VolunteerApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Gönüllü Ol"
        title="Bir saatiniz bile bir hayatı değiştirebilir"
        description="Gönüllülük için özel bir uzmanlığa gerek yok. Zamanınızı ve iyi niyetinizi paylaşmanız yeterli."
        image="/images/sosyal.jpg"
      />

      <section className="container-x py-20">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Süreç" title="Başvurudan sonra ne oluyor?" />
            <ol className="mt-9 space-y-3">
              {steps.map((s, i) => (
                <li
                  key={s}
                  className="flex items-start gap-4 rounded-2xl border border-sand-200 bg-white p-5 shadow-card"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-clay-600 font-display text-[13px] font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="text-[14.5px] leading-[1.7] text-ink-600">{s}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8 rounded-3xl bg-sand-100 p-8">
              <span className="eyebrow">Şartlar</span>
              <ul className="mt-5 space-y-3 text-[14.5px] leading-relaxed text-ink-600">
                {[
                  "18 yaşını doldurmuş olmak",
                  "Ayda en az 4 saat ayırabilmek",
                  "Gizlilik taahhüdünü kabul etmek",
                ].map((c) => (
                  <li key={c} className="border-l-2 border-clay-300 pl-4">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm
              formType="volunteer"
              title="Gönüllü başvuru formu"
              description="Sizi tanıyalım. İlgi alanınıza en uygun görevle eşleştirebilmemiz için birkaç satır yazmanız yeterli."
              subjects={[
                "Eğitim gönüllüsü",
                "Saha gönüllüsü",
                "Etkinlik gönüllüsü",
                "Sağlık danışmanı",
                "Kurumsal destek",
                "Henüz emin değilim",
              ]}
              messageLabel="Kendinizden kısaca bahsedin"
              submitLabel="Başvuruyu Gönder"
            />
          </div>
        </div>
      </section>
    </>
  );
}
