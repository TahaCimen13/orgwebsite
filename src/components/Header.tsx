"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { CloseIcon, MailIcon, MenuIcon } from "./Icons";

export function Header() {
  const pathname = usePathname();
  const [openFor, setOpenFor] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotion();

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
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-sand-200/80 bg-[#fffdf9]/80 shadow-card backdrop-blur-xl"
            : "border-b border-transparent bg-[#fffdf9]"
        }`}
      >
        <div className="container-x flex h-19 items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2.5 text-[14.5px] font-medium transition-colors ${
                    active ? "text-clay-700" : "text-ink-600 hover:bg-sand-100 hover:text-ink-950"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-clay-50"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            <Button href="/gonullu-ol" variant="outline" size="sm">
              Gönüllü Ol
            </Button>
            <Button href="/iletisim" variant="primary" size="sm">
              <MailIcon className="h-4 w-4" />
              Bize Ulaşın
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpenFor(open ? null : pathname)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-800 transition-colors hover:border-clay-300 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduced ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-19 bottom-0 z-40 overflow-y-auto bg-[#fffdf9] px-5 pb-32 pt-5 lg:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobil menü">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3.5 text-[16px] font-semibold transition-colors ${
                    isActive(item.href)
                      ? "bg-clay-50 text-clay-700"
                      : "text-ink-900 hover:bg-sand-100"
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
              <Button href="/gonullu-ol" variant="primary" size="lg" className="w-full">
                Gönüllü Ol
              </Button>
              <Button href="/projelerimiz" variant="outline" size="lg" className="w-full">
                Projelerimiz
              </Button>
            </div>

            <div className="mt-8 rounded-2xl bg-sand-100 p-5 text-[14px] text-ink-600">
              <a href={`mailto:${site.email}`} className="flex items-center gap-2.5">
                <MailIcon className="h-4 w-4 text-clay-600" /> {site.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
