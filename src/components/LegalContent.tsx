import { PageHero } from "./Section";

export type LegalSection = { heading: string; paragraphs: string[]; list?: string[] };

export function LegalPage({
  eyebrow,
  title,
  description,
  updatedAt,
  sections,
}: {
  eyebrow: string;
  title: string;
  description: string;
  updatedAt: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero compact eyebrow={eyebrow} title={title} description={description} />
      <section className="container-x py-14">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex rounded-full bg-sand-100 px-4 py-1.5 text-[12.5px] font-medium text-ink-500">
            Son güncelleme: {updatedAt}
          </p>

          <div className="mt-8 space-y-4">
            {sections.map((s, i) => (
              <section
                key={s.heading}
                className="rounded-3xl border border-sand-200 bg-white p-7 shadow-card sm:p-8"
              >
                <h2 className="flex items-start gap-4 font-display text-[21px] font-bold leading-snug text-ink-950">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-clay-50 text-[13px] font-bold text-clay-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.heading}
                </h2>
                <div className="mt-4 space-y-4 text-[16px] leading-[1.85] text-ink-600">
                  {s.paragraphs.map((p) => (
                    <p key={p.slice(0, 20)}>{p}</p>
                  ))}
                </div>
                {s.list && (
                  <ul className="mt-5 list-disc space-y-2.5 pl-5 text-[15px] leading-[1.8] text-ink-600 marker:text-clay-400">
                    {s.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <p className="mt-8 rounded-3xl bg-sand-100 p-6 text-[13px] leading-[1.8] text-ink-500">
            Bu metin örnek amaçlı hazırlanmıştır ve hukuki danışmanlık niteliği taşımaz. Yayına
            almadan önce bir hukuk danışmanıyla gözden geçirmeniz önerilir.
          </p>
        </div>
      </section>
    </>
  );
}
