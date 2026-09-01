"use client";

import { Photo } from "./Photo";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { ArrowIcon, CheckIcon, HeartIcon, ShieldIcon, SparkIcon } from "./Icons";
import { formatNumber } from "@/lib/format";

const slides = [
  {
    eyebrow: "Dayanışma",
    title: "İyilik, paylaştıkça çoğalır",
    text: "Zorlu bir süreçten geçen aileleri gönüllü destekçilerle aracısız buluşturuyoruz. Şeffaf, sade ve gerçek bir dayanışma.",
    image: "/images/hero.jpg",
  },
  {
    eyebrow: "Okula Merhaba",
    title: "Bir çanta, bir çocuğun tüm yılı",
    text: "Yeni eğitim yılında 500 çocuğa okul seti ulaştırmayı hedefliyoruz. Tek bir set bile bir çocuğun okula devam etmesini sağlıyor.",
    image: "/images/kirtasiye.jpg",
  },
  {
    eyebrow: "Gönüllülük",
    title: "İyilik için zamanınız yeter",
    text: "Bağış yapmadan da destek olabilirsiniz. Ders vermek, etkinlik düzenlemek ya da sadece yanında olmak da bir yardım biçimi.",
    image: "/images/gonulluler.jpg",
  },
];

const badges = [
  { icon: ShieldIcon, text: "Aracısız ve şeffaf" },
  { icon: CheckIcon, text: "Her talep incelenir" },
  { icon: SparkIcon, text: "Sonucu raporlanır" },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 7000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      {slides.map((s, i) => (
        <Photo
          key={s.image}
          src={s.image}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          className={`-z-10 object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950/80 via-transparent to-ink-950/30" />

      <div className="container-x grid gap-14 py-16 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-28">
        <div className="lg:col-span-7">
          <span key={`e-${index}`} className="eyebrow-light animate-fade-up">
            <SparkIcon className="h-3.5 w-3.5 text-clay-300" />
            {slide.eyebrow}
          </span>

          <h1
            key={`t-${index}`}
            className="animate-fade-up delay-1 mt-6 max-w-2xl text-[40px] leading-[1.05] text-white sm:text-[56px] lg:text-[62px]"
          >
            {slide.title}
          </h1>

          <p
            key={`p-${index}`}
            className="animate-fade-up delay-2 mt-6 max-w-xl text-[17px] leading-[1.8] text-sand-200/90"
          >
            {slide.text}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="/bagis" variant="primary" size="lg">
              <HeartIcon className="h-5 w-5" /> Bağış Yap
            </Button>
            <Button href="/yardim-talepleri" variant="light" size="lg">
              Yardım Taleplerini Gör <ArrowIcon className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {badges.map(({ icon: Icon, text }) => (
              <span key={text} className="inline-flex items-center gap-2 text-[13.5px] text-sand-300">
                <Icon className="h-4.5 w-4.5 text-clay-300" />
                {text}
              </span>
            ))}
          </div>

          <div className="mt-10 flex gap-2" role="tablist" aria-label="Tanıtım slaytları">
            {slides.map((s, i) => (
              <button
                key={s.title}
                role="tab"
                aria-selected={i === index}
                aria-label={`${i + 1}. slayt`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-10 bg-clay-500" : "w-5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 lg:justify-self-end">
          <div className="w-full rounded-3xl bg-white/95 p-6 shadow-lift backdrop-blur-xl sm:p-7 lg:max-w-sm">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-clay-50 text-clay-600">
                <HeartIcon className="h-5.5 w-5.5" />
              </span>
              <div>
                <h2 className="font-display text-[17px] font-bold text-ink-950">Hemen destek olun</h2>
                <p className="text-[13px] text-ink-500">Kayıt ücretsiz, süreç şeffaf</p>
              </div>
            </div>

            <div className="mt-6 space-y-2.5">
              {[
                {
                  href: "/yardim-talebi-olustur",
                  title: "Yardım talebi oluştur",
                  text: "İhtiyacınızı anlatın, sizi destekçilerle buluşturalım.",
                },
                {
                  href: "/gonullu-ol",
                  title: "Gönüllü destekçi ol",
                  text: "Zamanınızla ya da bağışınızla yanlarında olun.",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group/item flex items-start gap-3.5 rounded-2xl border border-sand-200 p-4 transition-colors hover:border-clay-300 hover:bg-clay-50/60"
                >
                  <span className="flex-1">
                    <span className="block text-[14.5px] font-semibold text-ink-950">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-[13px] leading-relaxed text-ink-500">
                      {item.text}
                    </span>
                  </span>
                  <ArrowIcon className="mt-1 h-4 w-4 shrink-0 text-ink-400 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:text-clay-600" />
                </Link>
              ))}
            </div>

            <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-sand-200 pt-5 text-center">
              {[
                { v: 128, l: "ihtiyaç sahibi" },
                { v: 219, l: "gönüllü" },
                { v: 12, l: "il" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-[20px] font-extrabold text-ink-950">
                    {formatNumber(s.v)}
                  </dt>
                  <dd className="mt-0.5 text-[11.5px] text-ink-400">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
