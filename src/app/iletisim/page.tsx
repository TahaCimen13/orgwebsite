import type { Metadata } from "next";
import { PageHero } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Bağış, gönüllülük, yardım talebi ve kurumsal iş birlikleri için bize ulaşın.",
};

const rows = [
  { title: "E-posta", value: site.email, href: `mailto:${site.email}` },
  { title: "Telefon", value: site.phone, href: `tel:${site.phone.replace(/[^+\d]/g, "")}` },
  { title: "Adres", value: site.address },
  { title: "Çalışma saatleri", value: site.workingHours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Bize ulaşın"
        description="Sorularınız, önerileriniz ve iş birliği talepleriniz için buradayız. Genellikle 1 iş günü içinde dönüş yapıyoruz."
      />

      <section className="container-x py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <dl className="space-y-3">
              {rows.map((row) => (
                <div
                  key={row.title}
                  className="flex gap-5 rounded-2xl border border-sand-200 bg-white p-5 shadow-card"
                >
                  <dt className="w-28 shrink-0 text-[12.5px] font-semibold text-ink-400">
                    {row.title}
                  </dt>
                  <dd className="text-[15px] leading-relaxed text-ink-800">
                    {row.href ? (
                      <a href={row.href} className="transition-colors hover:text-clay-600">
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            {/*
              Harita: gerçek adresinizi ekledikten sonra Google Maps > Paylaş > Haritayı yerleştir
              adımından aldığınız <iframe> kodunu bu bloğun yerine koyun.
            */}
            <div className="mt-6 flex h-56 flex-col items-center justify-center rounded-3xl border border-dashed border-sand-300 bg-sand-100 px-8 text-center">
              <span className="eyebrow">Konum</span>
              <p className="mt-4 text-[14.5px] leading-relaxed text-ink-500">{site.address}</p>
              <p className="mt-3 text-[12.5px] text-ink-400">
                Harita yerleştirme kodu buraya eklenecek
              </p>
            </div>

            <div className="mt-6 rounded-3xl border border-sand-200 bg-sand-100 p-8">
              <span className="eyebrow">Banka bilgileri</span>
              <dl className="mt-6 space-y-4 text-[14.5px]">
                <div>
                  <dt className="text-[12px] font-semibold text-ink-400">Hesap adı</dt>
                  <dd className="mt-1.5 text-ink-900">{site.ibanTitle}</dd>
                </div>
                <div>
                  <dt className="text-[12px] font-semibold text-ink-400">IBAN</dt>
                  <dd className="mt-1.5 font-mono text-ink-900">{site.iban}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm
              title="Mesaj gönderin"
              description="Formu doldurun, ekibimiz en kısa sürede size dönsün."
              subjects={[
                "Genel bilgi",
                "Bağış",
                "Gönüllülük",
                "Yardım talebi",
                "Kurumsal iş birliği",
                "Basın",
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
