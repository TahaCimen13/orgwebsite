import Link from "next/link";
import { site } from "@/lib/site";
import { LogoMark } from "./Logo";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { ArrowIcon, MailIcon, ClockIcon, ShieldIcon } from "./Icons";

const columns = [
  {
    title: "Kurumsal",
    links: [
      { href: "/hakkimizda", label: "Hakkımızda" },
      { href: "/projelerimiz", label: "Projelerimiz" },
      { href: "/iletisim", label: "İletişim" },
    ],
  },
  {
    title: "Katılın",
    links: [
      { href: "/gonullu-ol", label: "Gönüllü Ol" },
      { href: "/projelerimiz", label: "Çalışma Alanları" },
      { href: "/sikca-sorulan-sorular", label: "Sıkça Sorulan Sorular" },
    ],
  },
  {
    title: "Bilgi",
    links: [
      { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
      { href: "/sartlar-kosullar", label: "Şartlar ve Koşullar" },
      { href: "/kvkk", label: "KVKK Aydınlatma Metni" },
    ],
  },
];

const socials = [
  { label: "Instagram", href: site.social.instagram, short: "in" },
  { label: "X", href: site.social.x, short: "X" },
  { label: "LinkedIn", href: site.social.linkedin, short: "li" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-ink-950 text-sand-200">
      <div className="container-x">
        {/* Katılım çağrısı */}
        <Reveal>
          <div className="grid gap-8 border-b border-white/10 py-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h2 className="text-[26px] leading-tight tracking-[-0.02em] text-white sm:text-[32px]">
                Dayanışmayı birlikte büyütelim
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-sand-300/90">
                Çevrenizde gördüğünüz bir sorun için harekete geçmek istiyorsanız, başlamak için
                bizimle konuşmanız yeterli.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
              <Button href="/gonullu-ol" variant="primary" size="lg">
                Gönüllü Ol <ArrowIcon className="h-4 w-4" />
              </Button>
              <Button href="/iletisim" variant="light" size="lg">
                Bize Ulaşın
              </Button>
            </div>
          </div>
        </Reveal>

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

            <p className="mt-6 flex max-w-sm items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-[13px] leading-relaxed text-sand-300">
              <ShieldIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-clay-300" />
              <span>
                Derneğimiz <strong className="font-semibold text-white">bağış toplamamaktadır</strong>.
                Adımıza para talep eden hiçbir hesap veya kişiye itibar etmeyin.
              </span>
            </p>

            <div className="mt-6 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[13px] font-semibold text-sand-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-clay-400 hover:bg-clay-600 hover:text-white"
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
                    <li key={`${col.title}-${l.href}-${l.label}`}>
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
                <MailIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-clay-400" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <ClockIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-clay-400" />
                <span>{site.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-7 text-[13px] text-sand-400">
          <p>
            © {year} {site.legalName}
          </p>
        </div>
      </div>
    </footer>
  );
}
