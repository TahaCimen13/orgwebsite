import { Photo } from "@/components/Photo";
import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/Section";
import { Button } from "@/components/Button";
import { Stats } from "@/components/Stats";
import { site } from "@/lib/site";
import { ArrowIcon, CheckIcon, HandIcon, HeartIcon, ShieldIcon, SparkIcon, UsersIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Derneğin kuruluş hikâyesi, çalışma ilkeleri, ekibi ve şeffaflık yaklaşımı.",
};

const timeline = [
  { year: "2023", title: "İlk adım", text: "Bir hastane koridorunda başlayan gönüllü dayanışma, sekiz kişilik bir ekiple derneğe dönüştü." },
  { year: "2024", title: "Platformun kuruluşu", text: "İhtiyaç sahiplerini destekçilerle doğrudan buluşturan çevrim içi platformumuz yayına alındı." },
  { year: "2025", title: "Şeffaflık raporu", text: "Toplanan tüm bağışların dağılımını kalem kalem paylaştığımız ilk yıllık raporumuzu yayımladık." },
  { year: "2026", title: "Yaygınlaşma", text: "12 ilde gönüllü ağımızla 1.000'den fazla aileye ulaştık; eğitim programlarımızı başlattık." },
];

const principles = [
  { icon: ShieldIcon, title: "Şeffaflık", text: "Her kaynağın nereden gelip nereye gittiğini kayıt altına alır, yıllık olarak yayımlarız." },
  { icon: HandIcon, title: "Aracısızlık", text: "Destekçi ile ihtiyaç sahibini doğrudan buluşturur, süreci yalnızca kolaylaştırırız." },
  { icon: UsersIcon, title: "Onur", text: "Kimseyi mağdur olarak göstermez, mahremiyeti her koşulda koruruz." },
  { icon: SparkIcon, title: "Süreklilik", text: "Tek seferlik yardım yerine, süreci sonuna kadar takip eden bir destek modeli kurarız." },
];

const team = [
  { name: "[Ad Soyad]", role: "Kurucu & Genel Koordinatör" },
  { name: "[Ad Soyad]", role: "Sosyal İnceleme Sorumlusu" },
  { name: "[Ad Soyad]", role: "Sağlık Danışmanı" },
  { name: "[Ad Soyad]", role: "Gönüllü Koordinatörü" },
  { name: "[Ad Soyad]", role: "Mali İşler & Raporlama" },
  { name: "[Ad Soyad]", role: "İletişim & Kampanyalar" },
];

const transparency = [
  { label: "Doğrudan yardım", value: 92 },
  { label: "Operasyon ve lojistik", value: 6 },
  { label: "İletişim ve tanıtım", value: 2 },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Bir hastane koridorunda başlayan dayanışma"
        description={`${site.name}, ${site.founded} yılında gönüllü bir grubun küçük bir yardımlaşma girişimiyle kuruldu. Bugün 12 ilde, yüzlerce gönüllüyle aynı amaç için çalışıyoruz.`}
        image="/images/sinif.jpg"
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/bagis" variant="primary" size="lg">
            <HeartIcon className="h-5 w-5" /> Bağış Yap
          </Button>
          <Button href="/gonullu-ol" variant="light" size="lg">
            Gönüllü Ol
          </Button>
        </div>
      </PageHero>

      <section className="container-x py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Misyonumuz"
              title="Kimse yalnız kalmasın"
              description="Zorlu bir tedavi ya da geçim sürecinden geçen ailelerin en çok ihtiyaç duyduğu şey çoğu zaman sadece paradan ibaret değil: doğru bilgiye, bir yol arkadaşına ve umuda ihtiyaç duyuyorlar."
            />
            <div className="mt-7 space-y-5 text-[16px] leading-[1.85] text-ink-500">
              <p>
                Bu yüzden yalnızca kaynak aktarmıyor; ihtiyaç sahibini destekçiyle doğrudan
                buluşturuyor, süreci baştan sona birlikte yürütüyoruz. Her talep yerinde inceleniyor,
                belgeleniyor ve sonuçlanana kadar takip ediliyor.
              </p>
              <p>
                Vizyonumuz, her ilde iyiliğin kendiliğinden büyüdüğü bir gönüllü ağı kurmak. Bunun
                için teknolojiyi, şeffaflığı ve sahadaki insan emeğini bir araya getiriyoruz.
              </p>
            </div>

            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {[
                "Her talep sosyal incelemeden geçer",
                "Bağışların %92'si doğrudan yardıma gider",
                "Kimlik bilgileri asla yayımlanmaz",
                "Yıllık şeffaflık raporu yayımlanır",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-sand-200 bg-white p-4 text-[14.5px] text-ink-700 shadow-card"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-clay-600 text-white">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-lift">
              <Photo
                src="/images/hakkimizda.jpg"
                alt="Sınıfta birlikte çalışan çocuklar"
                fill
                sizes="(min-width: 1024px) 460px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-6 rounded-3xl border border-sand-200 bg-white p-7 shadow-card">
              <span className="eyebrow">Şeffaflık</span>
              <h3 className="mt-4 font-display text-[21px] font-bold">Bağışlar nereye gidiyor?</h3>
              <p className="mt-2 text-[14px] text-ink-500">2025 şeffaflık raporundan alınan dağılım.</p>
              <div className="mt-7 space-y-5">
                {transparency.map((t) => (
                  <div key={t.label}>
                    <div className="mb-2 flex items-baseline justify-between text-[14px]">
                      <span className="text-ink-700">{t.label}</span>
                      <span className="font-display font-bold text-clay-700">%{t.value}</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-sand-200">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-clay-400 to-clay-600"
                        style={{ width: `${t.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <Button href="/iletisim" variant="outline" size="sm" className="mt-8 w-full">
                Raporu talep edin <ArrowIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      <section className="container-x py-20 lg:py-24">
        <SectionHeading
          eyebrow="İlkelerimiz"
          title="Nasıl çalışıyoruz?"
          description="Kurulduğumuz günden bu yana değişmeyen dört temel ilkemiz var."
          align="center"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-sand-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-clay-600 text-white shadow-glow">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-[17px] font-bold">{title}</h3>
              <p className="mt-2.5 text-[14px] leading-[1.7] text-ink-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-sand-200 bg-sand-100 py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Yolculuğumuz" title="Kısa tarihçe" align="center" />
          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {timeline.map((t) => (
              <div key={t.year} className="rounded-3xl border border-sand-200 bg-white p-7 shadow-card">
                <span className="inline-flex rounded-full bg-clay-50 px-3.5 py-1.5 font-display text-[13px] font-bold text-clay-700">
                  {t.year}
                </span>
                <h3 className="mt-4 font-display text-[18px] font-bold">{t.title}</h3>
                <p className="mt-2.5 text-[14px] leading-[1.7] text-ink-500">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 lg:py-24">
        <SectionHeading
          eyebrow="Ekibimiz"
          title="Perde arkasındaki gönüllüler"
          description="Tamamı gönüllü esasına dayanan çekirdek ekibimiz, sahadaki yüzlerce gönüllüyle birlikte çalışıyor."
          align="center"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div
              key={m.role}
              className="flex items-center gap-4 rounded-3xl border border-sand-200 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sand-100 font-display text-[15px] font-bold text-clay-600">
                {m.role.slice(0, 2)}
              </span>
              <div>
                <div className="font-display text-[15.5px] font-bold text-ink-950">{m.name}</div>
                <div className="mt-0.5 text-[13px] text-ink-500">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
