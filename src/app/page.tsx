import Link from "next/link";
import { Photo } from "@/components/Photo";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { PostCard } from "@/components/PostCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/Button";
import { areas } from "@/data/areas";
import { featuredProjects, projectCountByArea } from "@/data/projects";
import { postsByDate } from "@/data/posts";
import { mission, site, vision } from "@/lib/site";
import {
  ArrowIcon,
  HandIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  ShieldIcon,
  SparkIcon,
  UsersIcon,
  iconMap,
} from "@/components/Icons";

const steps = [
  {
    n: "01",
    title: "Nasıl katkı sunmak istediğinize karar verin",
    text: "Çalışma alanlarımızı ve projelerimizi inceleyin; zamanınıza ve ilginize en uygun olanı seçin.",
  },
  {
    n: "02",
    title: "Gönüllü başvurusu yapın",
    text: "Kısa formu doldurmanız yeterli. Deneyim gerekmiyor; gerekli her şeyi birlikte öğreniyoruz.",
  },
  {
    n: "03",
    title: "Çalışmalarda birlikte yer alalım",
    text: "Sizinle iletişime geçiyor, hangi çalışmada yer alacağınızı birlikte belirliyoruz.",
  },
];

const values = [
  {
    icon: UsersIcon,
    title: "Kapsayıcılık",
    text: "Yardıma ihtiyaç duyanla yardım etmek isteyeni aynı ortamda buluşturur, kimseyi dışarıda bırakmayız.",
  },
  {
    icon: HandIcon,
    title: "Erişilebilirlik",
    text: "Gönüllülüğü herkesin kendi hayatına sığdırabileceği, sürdürülebilir bir şey hâline getiririz.",
  },
  {
    icon: ShieldIcon,
    title: "Onur",
    text: "Birlikte çalıştığımız kişilerin mahremiyetini korur, kimlik bilgilerini asla yayımlamayız.",
  },
  {
    icon: SparkIcon,
    title: "Harekete geçme",
    text: "Bir sorunu fark etmenin yeterli olmadığını, onunla ilgili bir şey yapmak gerektiğini düşünürüz.",
  },
];

export default function HomePage() {
  const featured = featuredProjects().slice(0, 6);
  const latestPosts = postsByDate().slice(0, 3);

  return (
    <>
      <Hero />

      {/* Biz kimiz */}
      <section className="container-x py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="relative lg:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-lift">
              <Photo
                src="/images/hakkimizda.jpg"
                alt="Birlikte çalışan gençler"
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 w-56 rounded-3xl border border-sand-200 bg-white p-5 shadow-lift sm:right-6 lg:-right-8">
              <div className="font-display text-[30px] font-extrabold leading-none text-clay-600">
                {site.founded}
              </div>
              <p className="mt-2 text-[13px] leading-snug text-ink-500">
                Bir lise kulübünde başlayan dayanışma, bu yıl derneğe dönüştü
              </p>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Biz kimiz"
              title="Gençlerden doğan bir dayanışma ağı"
              description="Derman Derneği, sosyal yardımlaşma ve farkındalığı merkeze alarak gençlerin kendi çevrelerindeki sorunlara karşı harekete geçmesini destekler."
            />

            <Stagger className="mt-9 grid gap-4 sm:grid-cols-2">
              {values.map(({ icon: Icon, title, text }) => (
                <StaggerItem key={title}>
                  <div className="h-full rounded-3xl border border-sand-200 bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-clay-200 hover:shadow-lift">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-clay-50 text-clay-600">
                      <Icon className="h-5.5 w-5.5" />
                    </span>
                    <h3 className="mt-4 font-display text-[16px] font-bold">{title}</h3>
                    <p className="mt-2 text-[14px] leading-[1.7] text-ink-500">{text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-8 flex flex-wrap gap-3">
              <Button href="/hakkimizda" variant="dark">
                Hakkımızda <ArrowIcon className="h-4 w-4" />
              </Button>
              <Button href="/gonullu-ol" variant="outline">
                Gönüllü Ol
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Çalışma alanları */}
      <section className="border-y border-sand-200 bg-sand-100 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Çalışma alanlarımız"
            title="Hangi alanda birlikte çalışalım?"
            description="Projelerimizi bu alanlar altında yürütüyoruz. Size uygun olanı seçip çalışmalarımızı inceleyebilirsiniz."
            align="center"
          />

          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => {
              const Icon = iconMap[area.icon];
              const count = projectCountByArea(area.slug);
              return (
                <StaggerItem key={area.slug}>
                  <Link
                    href={`/projelerimiz?alan=${area.slug}`}
                    className="group relative block h-full overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-clay-200 hover:shadow-lift"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Photo
                        src={area.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                      <span className="absolute bottom-4 left-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-clay-600 shadow-card">
                        <Icon className="h-5.5 w-5.5" />
                      </span>
                      {count > 0 && (
                        <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11.5px] font-semibold text-ink-700">
                          {count} proje
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-[18px] font-bold text-ink-950">{area.name}</h3>
                      <p className="mt-2 text-[14px] leading-[1.7] text-ink-500">
                        {area.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-clay-700">
                        Projeleri gör
                        <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Projeler */}
      <section className="container-x py-20 lg:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Projelerimiz"
            title="Üzerinde çalıştığımız işler"
            description="Her proje, çevremizde fark ettiğimiz bir ihtiyaçtan yola çıkarak gönüllülerle birlikte kuruldu."
          />
          <Reveal className="shrink-0">
            <Button href="/projelerimiz" variant="outline">
              Tümünü gör <ArrowIcon className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>

        {featured.length > 0 ? (
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <StaggerItem key={p.slug} className="h-full">
                <ProjectCard project={p} />
              </StaggerItem>
            ))}
          </Stagger>
        ) : (
          <Reveal className="mt-12 rounded-3xl border border-dashed border-sand-300 bg-sand-50 p-16 text-center">
            <p className="font-display text-[22px] font-bold text-ink-950">
              Projelerimiz çok yakında
            </p>
            <p className="mx-auto mt-3 max-w-md text-[14.5px] leading-relaxed text-ink-600">
              İlk projelerimizi hazırlıyoruz. Duyurulardan haberdar olmak için bizi takip edin.
            </p>
          </Reveal>
        )}
      </section>

      {/* Misyon & Vizyon */}
      <section className="relative isolate overflow-hidden py-20 lg:py-28">
        <Photo src="/images/cta.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-ink-950/90" />
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow-light">Neyi hedefliyoruz</span>
            <h2 className="mt-5 text-[32px] leading-[1.1] tracking-[-0.03em] text-white sm:text-[44px]">
              Misyonumuz ve vizyonumuz
            </h2>
          </Reveal>

          <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
            {[mission, vision].map((block) => (
              <StaggerItem key={block.title}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.07] p-8 backdrop-blur-sm">
                  <h3 className="font-display text-[20px] font-bold text-white">{block.title}</h3>
                  <p className="mt-5 text-[16px] leading-[1.8] text-sand-100">{block.lead}</p>
                  <p className="mt-4 text-[14.5px] leading-[1.8] text-sand-300/85">
                    {block.paragraphs[0]}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-10">
            <Button href="/hakkimizda" variant="light">
              Tamamını okuyun <ArrowIcon className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Nasıl katılırım */}
      <section className="container-x py-20 lg:py-28">
        <SectionHeading
          eyebrow="Nasıl katılırım"
          title="Üç adımda aramıza katılın"
          description="Karmaşık bir süreç yok. Birkaç dakikanızı ayırarak başlayabilirsiniz."
          align="center"
        />

        <Stagger className="relative mt-14 grid gap-6 lg:grid-cols-3">
          <div
            className="pointer-events-none absolute left-[16%] right-[16%] top-9 hidden h-px bg-gradient-to-r from-sand-300 via-clay-300 to-sand-300 lg:block"
            aria-hidden="true"
          />
          {steps.map((s) => (
            <StaggerItem key={s.n}>
              <div className="relative h-full rounded-3xl border border-sand-200 bg-white p-7 text-center shadow-card transition-transform duration-500 hover:-translate-y-1 lg:border-0 lg:bg-transparent lg:text-left lg:shadow-none">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-clay-600 font-display text-[17px] font-extrabold text-white shadow-glow">
                  {s.n}
                </span>
                <h3 className="mt-5 font-display text-[19px] font-bold">{s.title}</h3>
                <p className="mt-2.5 text-[15px] leading-[1.75] text-ink-500">{s.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-12 flex justify-center">
          <Button href="/gonullu-ol" size="lg">
            <HandIcon className="h-5 w-5" /> Gönüllü Başvurusu Yapın
          </Button>
        </Reveal>
      </section>

      {/* Duyurular */}
      <section className="border-t border-sand-200 bg-sand-100 py-20 lg:py-28">
        <div className="container-x">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Duyurular" title="Son gelişmeler" />
            <Reveal className="shrink-0">
              <Button href="/duyurular" variant="outline">
                Tüm duyurular <ArrowIcon className="h-4 w-4" />
              </Button>
            </Reveal>
          </div>

          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {latestPosts.map((p) => (
              <StaggerItem key={p.slug} className="h-full">
                <PostCard post={p} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* İletişim */}
      <section className="container-x py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="İletişim"
              title="Sorunuz mu var? Bize yazın"
              description="Gönüllülük, projelerimiz veya destek talebi hakkında merak ettiğiniz her şeyi sorabilirsiniz. Genellikle birkaç gün içinde dönüş yapıyoruz."
            />
            <Stagger className="mt-10 space-y-3">
              {[
                { icon: MailIcon, t: "E-posta", v: site.email, href: `mailto:${site.email}` },
                {
                  icon: PhoneIcon,
                  t: "Telefon",
                  v: site.phone,
                  href: `tel:${site.phone.replace(/[^+\d]/g, "")}`,
                },
                { icon: PinIcon, t: "Adres", v: site.address },
              ].map(({ icon: Icon, t, v, href }) => (
                <StaggerItem key={t}>
                  <div className="flex items-start gap-4 rounded-2xl border border-sand-200 bg-white p-5 shadow-card">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-clay-50 text-clay-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[12.5px] font-semibold text-ink-400">{t}</span>
                      <span className="mt-0.5 block text-[15px] text-ink-900">
                        {href ? (
                          <a href={href} className="hover:text-clay-600">
                            {v}
                          </a>
                        ) : (
                          v
                        )}
                      </span>
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal className="lg:col-span-7">
            <ContactForm
              subjects={[
                "Genel bilgi",
                "Gönüllülük",
                "Destek talebi",
                "Projelerimiz",
                "Kurumsal iş birliği",
              ]}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
