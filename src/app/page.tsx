import { Photo } from "@/components/Photo";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { SectionHeading } from "@/components/Section";
import { RequestCard } from "@/components/RequestCard";
import { PostCard } from "@/components/PostCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/Button";
import { categories } from "@/data/categories";
import { requests } from "@/data/requests";
import { posts } from "@/data/posts";
import { volunteers } from "@/data/volunteers";
import { site } from "@/lib/site";
import {
  ArrowIcon,
  HandIcon,
  HeartIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  QuoteIcon,
  ShieldIcon,
  SparkIcon,
  UsersIcon,
  iconMap,
} from "@/components/Icons";

const steps = [
  {
    n: "01",
    title: "Destek olacağınız kişiyi seçin",
    text: "Yardım talepleri arasından size en uygun olanı seçin. Her talep sosyal inceleme ekibimizden geçmiştir.",
  },
  {
    n: "02",
    title: "İletişime geçin",
    text: "Platform üzerinden ihtiyaç sahibiyle ya da ekibimizle iletişim kurun, desteğin kapsamını birlikte belirleyin.",
  },
  {
    n: "03",
    title: "Sonucu birlikte görün",
    text: "Desteğiniz ulaştığında bilgilendirilirsiniz. Sonuç raporunu ve teşekkür mesajını görebilirsiniz.",
  },
];

const values = [
  {
    icon: ShieldIcon,
    title: "Şeffaflık",
    text: "Toplanan her kaynağın nereye gittiğini yıllık raporlarla açıkça paylaşırız.",
  },
  {
    icon: HandIcon,
    title: "Aracısızlık",
    text: "Destekçi ile ihtiyaç sahibini doğrudan buluştururuz; arada kaybolan bir kaynak olmaz.",
  },
  {
    icon: UsersIcon,
    title: "Onur",
    text: "İhtiyaç sahiplerinin mahremiyetini korur, kimlik bilgilerini asla yayımlamayız.",
  },
  {
    icon: SparkIcon,
    title: "Süreklilik",
    text: "Tek seferlik değil; eğitim ve tedavi süreci boyunca yanlarında kalırız.",
  },
];

export default function HomePage() {
  const featured = requests.slice(0, 6);
  const latestPosts = posts.slice(0, 3);
  const openCount = (slug: string) => requests.filter((r) => r.category === slug).length;

  return (
    <>
      <Hero />

      {/* Misyon */}
      <section className="container-x py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="relative lg:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-lift">
              <Photo
                src="/images/hakkimizda.jpg"
                alt="Bir sınıfta birlikte vakit geçiren çocuklar"
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 w-52 rounded-3xl border border-sand-200 bg-white p-5 shadow-lift sm:right-6 lg:-right-8">
              <div className="font-display text-[30px] font-extrabold leading-none text-clay-600">%92</div>
              <p className="mt-2 text-[13px] leading-snug text-ink-500">
                Bağışların doğrudan ihtiyaç sahibine ulaşan kısmı
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Biz kimiz"
              title="İyiliği aracısız buluşturan bir dayanışma ağı"
              description={`${site.name}, ilaç ve tedavi desteğinden eğitim ve kırtasiye yardımına kadar pek çok alanda ihtiyaç sahiplerini gönüllü destekçilerle doğrudan buluşturur.`}
            />

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {values.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-sand-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-clay-50 text-clay-600">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-4 font-display text-[16px] font-bold">{title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.7] text-ink-500">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/hakkimizda" variant="dark">
                Hakkımızda <ArrowIcon className="h-4 w-4" />
              </Button>
              <Button href="/gonullu-ol" variant="outline">
                Gönüllü Ol
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Kategoriler */}
      <section className="border-y border-sand-200 bg-sand-100 py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Yardım alanları"
            title="Hangi konuda destek olmak istersiniz?"
            description="Açık taleplerimizi kategorilere göre inceleyin ve size uygun olanı seçin."
            align="center"
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const Icon = iconMap[cat.icon];
              const count = openCount(cat.slug);
              return (
                <Link
                  key={cat.slug}
                  href={`/yardim-talepleri?kategori=${cat.slug}`}
                  className="group relative overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Photo
                      src={cat.image}
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
                        {count} açık talep
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-[18px] font-bold text-ink-950">{cat.name}</h3>
                    <p className="mt-2 text-[14px] leading-[1.7] text-ink-500">{cat.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-clay-700">
                      Talepleri gör
                      <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Talepler */}
      <section className="container-x py-20 lg:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Açık talepler"
            title="Desteğinizi bekleyen hikâyeler"
            description="Her talep, ekibimiz tarafından yerinde incelenmiş gerçek bir ihtiyacı temsil eder."
          />
          <Button href="/yardim-talepleri" variant="outline" className="shrink-0">
            Tümünü gör <ArrowIcon className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((r) => (
            <RequestCard key={r.slug} request={r} />
          ))}
        </div>
      </section>

      <Stats />

      {/* Nasıl çalışır */}
      <section className="container-x py-20 lg:py-24">
        <SectionHeading
          eyebrow="Nasıl başlarım"
          title="Üç adımda dayanışmaya katılın"
          description="Karmaşık süreçler yok. Birkaç dakikanızı ayırarak bir hayata dokunabilirsiniz."
          align="center"
        />

        <div className="relative mt-14 grid gap-6 lg:grid-cols-3">
          <div
            className="pointer-events-none absolute left-[16%] right-[16%] top-9 hidden h-px bg-gradient-to-r from-sand-300 via-clay-300 to-sand-300 lg:block"
            aria-hidden="true"
          />
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-3xl border border-sand-200 bg-white p-7 text-center shadow-card transition-transform duration-300 hover:-translate-y-1 lg:bg-transparent lg:shadow-none lg:border-0 lg:text-left"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-clay-600 font-display text-[17px] font-extrabold text-white shadow-glow">
                {s.n}
              </span>
              <h3 className="mt-5 font-display text-[19px] font-bold">{s.title}</h3>
              <p className="mt-2.5 text-[15px] leading-[1.75] text-ink-500">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/yardim-talepleri" size="lg">
            <HeartIcon className="h-5 w-5" /> Şimdi Başlayın
          </Button>
        </div>
      </section>

      {/* Gönüllüler */}
      <section className="relative isolate overflow-hidden py-20 lg:py-24">
        <Photo src="/images/cta.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-ink-950/85" />
        <div className="container-x">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow-light">Gönüllülerimiz</span>
              <h2 className="mt-5 text-[30px] leading-[1.15] text-white sm:text-[38px]">
                İyiliği büyüten insanlar
              </h2>
              <p className="mt-5 text-[16.5px] leading-[1.75] text-sand-300/90">
                Farklı şehirlerden, farklı mesleklerden yüzlerce gönüllü aynı amaç için bir arada.
              </p>
            </div>
            <Button href="/gonulluler" variant="light" className="shrink-0">
              Tüm gönüllüler <ArrowIcon className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {volunteers.slice(0, 3).map((v) => (
              <figure
                key={v.role}
                className="rounded-3xl border border-white/10 bg-white/[0.07] p-7 backdrop-blur-sm"
              >
                <QuoteIcon className="h-7 w-7 text-clay-400" />
                <blockquote className="mt-4 text-[15.5px] leading-[1.75] text-sand-100">
                  “{v.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-clay-600 font-display text-[14px] font-bold text-white">
                    {v.role.slice(0, 1)}
                  </span>
                  <span className="text-[13.5px]">
                    <span className="block font-semibold text-white">{v.name}</span>
                    <span className="mt-0.5 block text-sand-400">
                      {v.role} · {v.city}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Duyurular */}
      <section className="container-x py-20 lg:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Duyurular" title="Son gelişmeler" />
          <Button href="/duyurular" variant="outline" className="shrink-0">
            Tüm duyurular <ArrowIcon className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {latestPosts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      {/* İletişim */}
      <section className="border-t border-sand-200 bg-sand-100 py-20 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="İletişim"
              title="Sorunuz mu var? Bize yazın"
              description="Bağış, gönüllülük veya yardım talebi hakkında merak ettiğiniz her şeyi sorabilirsiniz. Genellikle 1 iş günü içinde dönüş yapıyoruz."
            />
            <ul className="mt-10 space-y-3">
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
                <li
                  key={t}
                  className="flex items-start gap-4 rounded-2xl border border-sand-200 bg-white p-5 shadow-card"
                >
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
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <ContactForm
              subjects={["Genel bilgi", "Bağış", "Gönüllülük", "Yardım talebi", "Kurumsal iş birliği"]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
