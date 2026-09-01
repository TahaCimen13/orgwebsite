import { Photo } from "@/components/Photo";
import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/Section";
import { Button } from "@/components/Button";
import { volunteers } from "@/data/volunteers";
import { ArrowIcon, HeartIcon, PinIcon, QuoteIcon, SparkIcon, UsersIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Gönüllüler",
  description:
    "Farklı şehirlerden, farklı mesleklerden, aynı amaç için bir araya gelen gönüllü destekçilerimiz.",
};

const roles = [
  {
    icon: SparkIcon,
    title: "Eğitim gönüllüsü",
    text: "Haftada birkaç saat ders desteği vererek çocukların okula devam etmesine katkı sağlarsınız.",
  },
  {
    icon: HeartIcon,
    title: "Saha gönüllüsü",
    text: "Yardım paketlerinin hazırlanması ve ulaştırılması süreçlerinde aktif rol alırsınız.",
  },
  {
    icon: UsersIcon,
    title: "Etkinlik gönüllüsü",
    text: "Moral etkinlikleri, atölyeler ve doğum günü organizasyonlarında görev alırsınız.",
  },
];

export default function VolunteersPage() {
  return (
    <>
      <PageHero
        eyebrow="Gönüllüler"
        title="İyiliği büyüten insanlar"
        description="219 gönüllü destekçimiz, 12 ilde ihtiyaç sahiplerinin yanında. Siz de aramıza katılabilirsiniz."
        image="/images/gonulluler.jpg"
      >
        <Button href="/gonullu-ol" variant="primary" size="lg">
          Gönüllü Ol <ArrowIcon className="h-4 w-4" />
        </Button>
      </PageHero>

      <section className="container-x py-20">
        <SectionHeading
          eyebrow="Gönüllü rolleri"
          title="Size uygun bir rol mutlaka var"
          description="Bağış yapmadan da destek olabilirsiniz. Zamanınız, bilginiz ve enerjiniz en az kaynak kadar değerli."
          align="center"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {roles.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-sand-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-clay-50 text-clay-600">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-[18px] font-bold">{title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-ink-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-sand-200 bg-sand-100 py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Aramızdakiler" title="Gönüllülerimiz ne diyor?" align="center" />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {volunteers.map((v) => (
              <figure
                key={v.role}
                className="flex h-full flex-col rounded-3xl border border-sand-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <QuoteIcon className="h-7 w-7 text-clay-300" />
                <blockquote className="mt-4 text-[15px] leading-[1.75] text-ink-700">
                  “{v.quote}”
                </blockquote>

                <div className="mt-5 flex flex-wrap gap-2">
                  {v.areas.map((a) => (
                    <span
                      key={a}
                      className="rounded-full bg-sand-100 px-3 py-1 text-[11.5px] font-medium text-ink-600"
                    >
                      {a}
                    </span>
                  ))}
                </div>

                <figcaption className="mt-auto flex items-center gap-3 border-t border-sand-200 pt-5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-clay-600 font-display text-[14px] font-bold text-white">
                    {v.role.slice(0, 1)}
                  </span>
                  <span className="flex-1 text-[13.5px]">
                    <span className="block font-semibold text-ink-950">{v.name}</span>
                    <span className="mt-0.5 flex items-center gap-1.5 text-ink-400">
                      <PinIcon className="h-3.5 w-3.5" /> {v.city} · {v.since}
                    </span>
                  </span>
                  <span className="text-right">
                    <span className="block font-display text-[18px] font-extrabold text-clay-600">
                      {v.supported}
                    </span>
                    <span className="block text-[10.5px] text-ink-400">destek</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="relative isolate overflow-hidden rounded-3xl px-6 py-20 text-center sm:px-10">
          <Photo src="/images/cta.jpg" alt="" fill sizes="(min-width: 1280px) 1200px, 100vw" className="-z-10 object-cover" />
          <div className="absolute inset-0 -z-10 bg-ink-950/85" />
          <span className="eyebrow-light">Katılın</span>
          <h2 className="mx-auto mt-5 max-w-xl text-[30px] leading-[1.15] text-white sm:text-[40px]">
            Bir sonraki gönüllümüz siz olun
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[16px] leading-[1.8] text-sand-300/90">
            Başvurunuzun ardından sizi tanıyor, ilgi alanınıza uygun bir görevle eşleştiriyoruz.
            Katılım ücretsizdir.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href="/gonullu-ol" variant="primary" size="lg">
              Başvuru Formu
            </Button>
            <Button href="/iletisim" variant="light" size="lg">
              Önce soru sorun
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
