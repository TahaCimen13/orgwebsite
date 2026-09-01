import type { Metadata } from "next";
import { PageHero } from "@/components/Section";
import { Button } from "@/components/Button";
import { faqs } from "@/data/volunteers";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description: "Bağış, gönüllülük ve yardım talebi süreçleri hakkında en çok merak edilenler.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="SSS"
        title="Sıkça sorulan sorular"
        description="Aradığınız yanıtı bulamadıysanız bize yazmaktan çekinmeyin."
      />

      <section className="container-x py-20">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-3xl border border-sand-200 bg-white px-6 shadow-card transition-shadow duration-300 open:shadow-lift sm:px-7"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-[17px] font-bold leading-snug text-ink-950 transition-colors hover:text-clay-700">
                  {f.q}
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sand-100 text-[18px] font-light text-ink-500 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-7 text-[15px] leading-[1.8] text-ink-500">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-sand-200 bg-sand-100 p-10 text-center">
            <h2 className="font-display text-[26px] font-bold leading-snug text-ink-950">
              Başka bir sorunuz mu var?
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-[15px] leading-[1.8] text-ink-500">
              Ekibimiz hafta içi 09.00–18.00 arasında size yardımcı olmaya hazır.
            </p>
            <Button href="/iletisim" variant="primary" className="mt-8">
              İletişime geçin
            </Button>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
