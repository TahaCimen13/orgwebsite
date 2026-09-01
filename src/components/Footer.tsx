import Link from "next/link";
import { site } from "@/lib/site";
import { LogoMark } from "./Logo";
import { ArrowIcon, MailIcon, PhoneIcon, PinIcon, ClockIcon } from "./Icons";

const columns = [
  {
    title: "Kurumsal",
    links: [
      { href: "/hakkimizda", label: "Hakkımızda" },
      { href: "/duyurular", label: "Duyurular" },
      { href: "/gonulluler", label: "Gönüllüler" },
      { href: "/iletisim", label: "İletişim" },
    ],
  },
  {
    title: "Destek Ol",
    links: [
      { href: "/bagis", label: "Bağış Yap" },
      { href: "/gonullu-ol", label: "Gönüllü Ol" },
      { href: "/yardim-talepleri", label: "Yardım Talepleri" },
      { href: "/yardim-talebi-olustur", label: "Talep Oluştur" },
    ],
  },
  {
    title: "Bilgi",
    links: [
      { href: "/sikca-sorulan-sorular", label: "Sıkça Sorulan Sorular" },
      { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
      { href: "/sartlar-kosullar", label: "Şartlar ve Koşullar" },
      { href: "/kvkk", label: "KVKK Aydınlatma Metni" },
    ],
  },
];

const socials = [
  { label: "Instagram", href: site.social.instagram, short: "in" },
  { label: "X", href: site.social.x, short: "X" },
  { label: "Facebook", href: site.social.facebook, short: "f" },
  { label: "LinkedIn", href: site.social.linkedin, short: "li" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-ink-950 text-sand-200">
      <div className="container-x">
        {/* Bülten */}
        <div className="grid gap-8 border-b border-white/10 py-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <h2 className="text-[26px] leading-tight text-white sm:text-[30px]">
              İyilikten haberdar olun
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-sand-300/90">
              Ayda bir e-posta: yeni talepler, kampanyalar ve ulaşan yardımların raporu.
            </p>
          </div>
          <form className="lg:col-span-7 lg:justify-self-end lg:w-full lg:max-w-lg">
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter" className="sr-only">
                E-posta adresiniz
              </label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="E-posta adresiniz"
                className="h-13 flex-1 rounded-full border border-white/15 bg-white/10 px-6 text-[15px] text-white placeholder:text-sand-400 focus:border-clay-400 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-clay-600 px-7 text-[15px] font-semibold text-white transition-colors hover:bg-clay-500"
              >
                Abone Ol <ArrowIcon className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-3 text-[12.5px] text-sand-400">
              Kaydolarak <Link href="/kvkk" className="underline underline-offset-2">KVKK metnini</Link> kabul
              etmiş olursunuz. İstediğiniz zaman çıkabilirsiniz.
            </p>
          </form>
        </div>

        <div className="grid gap-12 py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <LogoMark className="h-11 w-11" />
              <div>
                <div className="font-display text-[17px] font-extrabold text-white">{site.name}</div>
                <div className="text-[11px] font-medium tracking-[0.12em] text-clay-300">
                  {site.nameSuffix}
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-[14.5px] leading-[1.75] text-sand-300/85">
              {site.description}
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[13px] font-semibold text-sand-200 transition-colors hover:border-clay-400 hover:bg-clay-600 hover:text-white"
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-5">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-display text-[13px] font-bold tracking-[0.1em] text-white">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[14.5px] text-sand-300/85 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-[13px] font-bold tracking-[0.1em] text-white">
              İletişim
            </h3>
            <ul className="mt-5 space-y-4 text-[14.5px] leading-relaxed text-sand-300/85">
              <li className="flex gap-3">
                <PinIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-clay-400" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-3">
                <MailIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-clay-400" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-clay-400" />
                <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <ClockIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-clay-400" />
                <span>{site.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-7 text-[13px] text-sand-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}
          </p>
          <p>Dernek kayıt no: {site.registryNo} · Örnek amaçlı hazırlanmış şablon</p>
        </div>
      </div>
    </footer>
  );
}
