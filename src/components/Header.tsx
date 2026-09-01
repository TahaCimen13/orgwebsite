"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { CloseIcon, HeartIcon, MailIcon, MenuIcon, PhoneIcon, SparkIcon } from "./Icons";

export function Header() {
  const pathname = usePathname();
  const [openFor, setOpenFor] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Menü hangi rota için açıldıysa onu tutarız; rota değişince kendiliğinden kapanır.
  const open = openFor === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-ink-950 text-sand-200 lg:block">
        <div className="container-x flex h-10 items-center justify-between text-[13px]">
          <p className="flex items-center gap-2 text-sand-300">
            <SparkIcon className="h-4 w-4 text-clay-400" />
            {site.tagline}
          </p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition-colors hover:text-white">
              <MailIcon className="h-4 w-4" /> {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <PhoneIcon className="h-4 w-4" /> {site.phone}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-sand-200 bg-white/85 shadow-card backdrop-blur-xl"
            : "border-b border-transparent bg-[#fffdf9]"
        }`}
      >
        <div className="container-x flex h-19 items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2.5 text-[14.5px] font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-clay-50 text-clay-700"
                    : "text-ink-600 hover:bg-sand-100 hover:text-ink-950"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            <Button href="/gonullu-ol" variant="outline" size="sm">
              Gönüllü Ol
            </Button>
            <Button href="/bagis" variant="primary" size="sm">
              <HeartIcon className="h-4 w-4" />
              Bağış Yap
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpenFor(open ? null : pathname)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-800 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-19 bottom-0 z-40 overflow-y-auto bg-[#fffdf9] px-5 pb-32 pt-5 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobil menü">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-2xl px-4 py-3.5 text-[16px] font-semibold transition-colors ${
                  isActive(item.href) ? "bg-clay-50 text-clay-700" : "text-ink-900 hover:bg-sand-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/sikca-sorulan-sorular"
              className="rounded-2xl px-4 py-3.5 text-[16px] font-semibold text-ink-900 hover:bg-sand-100"
            >
              Sıkça Sorulan Sorular
            </Link>
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            <Button href="/bagis" variant="primary" size="lg" className="w-full">
              <HeartIcon className="h-5 w-5" /> Bağış Yap
            </Button>
            <Button href="/yardim-talebi-olustur" variant="outline" size="lg" className="w-full">
              Yardım Talebi Oluştur
            </Button>
          </div>

          <div className="mt-8 rounded-2xl bg-sand-100 p-5 text-[14px] text-ink-600">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2.5">
              <MailIcon className="h-4 w-4 text-clay-600" /> {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
              className="mt-2.5 flex items-center gap-2.5"
            >
              <PhoneIcon className="h-4 w-4 text-clay-600" /> {site.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
