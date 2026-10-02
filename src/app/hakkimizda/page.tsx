import type { Metadata } from "next";
import { Photo } from "@/components/Photo";
import { PageHero, SectionHeading } from "@/components/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { team, initialsOf } from "@/data/team";
import { areas } from "@/data/areas";
import { history, mission, site, vision } from "@/lib/site";
import {
  ArrowIcon,
  HandIcon,
  ShieldIcon,
  SparkIcon,
  UsersIcon,
  iconMap,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: `${site.legalName} misyonu, vizyonu ve kuruluş hikâyesi. ${history.text}`,
};

const principles = [
  {
    icon: UsersIcon,
    title: "Kapsayıcı bir ortam",
    text: "Yardıma ihtiyaç duyan ve yardım etmek isteyen insanları aynı ortamda buluşturmayı önemsiyoruz.",
  },
  {
    icon: HandIcon,
    title: "Erişilebilir gönüllülük",
    text: "Katkı sunmanın büyük imkânlar gerektirmediğine; niyet ve zamanın yeterli olduğuna inanıyoruz.",
  },
  {
    icon: ShieldIcon,
    title: "Mahremiyet",
    text: "Birlikte çalıştığımız kişilerin kimlik bilgilerini hiçbir koşulda yayımlamıyoruz.",
  },
  {
    icon: SparkIcon,
    title: "Kıvılcım olmak",
    text: "Harekete geçmek isteyen gençler için başlangıç noktası olmayı hedefliyoruz.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Gençlerden doğan bir dayanışma derneği"
        description={site.description}
        image="/images/hakkimizda.jpg"
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/projelerimiz" variant="primary">
            Projelerimiz <ArrowIcon className="h-4 w-4" />
          </Button>
          <Button href="/gonullu-ol" variant="light">
            Gönüllü Ol
          </Button>
        </div>
      </PageHero>

      {/* Misyon */}
      <section className="container-x py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Misyonumuz" title="Neden varız?" />
            <Reveal className="mt-8 space-y-5">
              <p className="text-[18px] leading-[1.75] font-medium text-ink-800">{mission.lead}</p>
              {mission.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="text-[16.5px] leading-[1.85] text-ink-600">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-lift">
              <Photo
                src="/images/sinif.jpg"
                alt="Birlikte çalışan öğrenciler"
                fill
                sizes="(min-width: 1024px) 440px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vizyon */}
      <section className="relative isolate overflow-hidden border-y border-sand-200 bg-sand-100 py-20 lg:py-28">
        <div
          className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-clay-200/35 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-x relative">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <Reveal className="order-2 lg:order-1 lg:col-span-5">
              <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-lift">
                <Photo
                  src="/images/sosyal.jpg"
                  alt="Birlikte vakit geçiren gençler"
                  fill
                  sizes="(min-width: 1024px) 440px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div className="order-1 lg:order-2 lg:col-span-7">
              <SectionHeading eyebrow="Vizyonumuz" title="Nasıl bir gelecek hayal ediyoruz?" />
              <Reveal className="mt-8 space-y-5">
                <p className="text-[18px] leading-[1.75] font-medium text-ink-800">{vision.lead}</p>
                {vision.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="text-[16.5px] leading-[1.85] text-ink-600">
                    {p}
                  </p>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Tarihçe */}
      <section className="container-x py-20 lg:py-28">
        <SectionHeading
          eyebrow="Tarihçemiz"
          title="Nasıl başladık?"
          align="center"
        />

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-sand-200 bg-white p-8 shadow-card sm:p-12">
            <span
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-clay-50"
              aria-hidden="true"
            />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-clay-600 px-4 py-2 font-display text-[14px] font-bold text-white shadow-glow">
                {site.founded}
              </span>
              <p className="mt-7 text-[19px] leading-[1.75] text-ink-800 sm:text-[21px]">
                {history.text}
              </p>
              <p className="mt-6 text-[15.5px] leading-[1.8] text-ink-500">
                Kulüp olarak yürüttüğümüz çalışmalarda, yardım etmek isteyen ve yardıma ihtiyaç
                duyan insanları buluşturan kalıcı bir yapıya ihtiyaç olduğunu gördük. Derneği de bu
                ihtiyaçtan yola çıkarak kurduk.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* İlkelerimiz */}
      <section className="border-y border-sand-200 bg-sand-100 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="İlkelerimiz"
            title="Çalışırken neye dikkat ediyoruz?"
            align="center"
          />

          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ icon: Icon, title, text }) => (
              <StaggerItem key={title}>
                <div className="h-full rounded-3xl border border-sand-200 bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-clay-200 hover:shadow-lift">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-clay-50 text-clay-600">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-5 font-display text-[17px] font-bold">{title}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-[1.75] text-ink-500">{text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Çalışma alanları */}
      <section className="container-x py-20 lg:py-28">
        <SectionHeading
          eyebrow="Çalışma alanlarımız"
          title="Hangi alanlarda çalışıyoruz?"
          description="Projelerimizi bu alanlar altında planlıyor ve yürütüyoruz."
        />

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => {
            const Icon = iconMap[area.icon];
            return (
              <StaggerItem key={area.slug}>
                <div className="flex h-full gap-4 rounded-3xl border border-sand-200 bg-white p-6 shadow-card">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-clay-50 text-clay-600">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <h3 className="font-display text-[16.5px] font-bold">{area.name}</h3>
                    <p className="mt-2 text-[14px] leading-[1.7] text-ink-500">{area.description}</p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* Kurucu ekip */}
      <section className="border-t border-sand-200 bg-sand-100 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Kurucu ekip"
            title="Derneği kuranlar"
            description={`Derman Derneği, ${site.foundingClub} üyeleri tarafından kuruldu.`}
            align="center"
          />

          <Stagger className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <StaggerItem key={`${member.name}-${i}`}>
                <div className="h-full rounded-3xl border border-sand-200 bg-white p-7 text-center shadow-card transition-transform duration-500 hover:-translate-y-1">
                  <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-clay-600 font-display text-[18px] font-bold text-white shadow-glow">
                    {initialsOf(member.name)}
                  </span>
                  <h3 className="mt-5 font-display text-[16px] font-bold text-ink-950">
                    {member.name}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-500">{member.role}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-12 flex justify-center">
            <Button href="/gonullu-ol" size="lg">
              Siz de aramıza katılın <ArrowIcon className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
