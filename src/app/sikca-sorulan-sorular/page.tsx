import type { Metadata } from "next";
import { PageHero } from "@/components/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { faqs } from "@/data/faq";
import { ArrowIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description:
    "Gönüllülük, projeler, destek talepleri ve kişisel verilerle ilgili en sık sorulan sorular.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Sıkça Sorulan Sorular"
        title="Merak edilenler"
        description="Aradığınız yanıtı bulamazsanız iletişim formundan bize yazabilirsiniz."
      />

      <section className="container-x py-14 lg:py-18">
        <div className="mx-auto max-w-3xl">
          <Stagger className="space-y-3">
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <details className="group rounded-3xl border border-sand-200 bg-white px-6 py-5 shadow-card transition-colors open:border-clay-200 sm:px-8">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                    <h2 className="font-display text-[17px] font-bold leading-snug text-ink-950 sm:text-[18px]">
                      {faq.q}
                    </h2>
                    <span
                      className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-clay-50 text-clay-600 transition-transform duration-300 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                        <path
                          d="M12 5v14M5 12h14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-[15.5px] leading-[1.85] text-ink-600">{faq.a}</p>
                </details>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-10 rounded-3xl bg-ink-950 p-8 text-center text-sand-200 sm:p-10">
            <h2 className="font-display text-[21px] font-bold text-white">
              Sorunuzun yanıtını bulamadınız mı?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[15px] leading-[1.75] text-sand-300/90">
              İletişim formundan bize yazın, en kısa sürede dönüş yapalım.
            </p>
            <Button href="/iletisim" variant="primary" className="mt-7">
              Bize Ulaşın <ArrowIcon className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
