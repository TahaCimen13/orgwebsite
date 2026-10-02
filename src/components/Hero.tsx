"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Photo } from "./Photo";
import { Button } from "./Button";
import { WordReveal } from "./Reveal";
import { ArrowIcon } from "./Icons";

const EASE = [0.22, 1, 0.36, 1] as const;

const slides = [
  {
    title: "Dayanışmayı gençlerle büyütüyoruz",
    text: "Yardıma ihtiyaç duyan ve yardım etmek isteyen insanları bir araya getiren kapsayıcı bir dayanışma ortamı kuruyoruz.",
    image: "/images/hero.jpg",
  },
  {
    title: "Engel olan şey imkân olmasın",
    text: "İmkân ve fırsat eşitsizliklerinin yarattığı engelleri azaltmak için eğitim ve akran desteği alanlarında çalışıyoruz.",
    image: "/images/sinif.jpg",
  },
  {
    title: "Katkı sunmak için zamanınız yeter",
    text: "Gönüllülüğü herkesin kendi hayatına sığdırabileceği, erişilebilir ve sürdürülebilir bir şey hâline getirmeye çalışıyoruz.",
    image: "/images/gonulluler.jpg",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 7000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      {/* Arka plan — etkin slayt yavaşça yakınlaşır */}
      {slides.map((s, i) => (
        <motion.div
          key={s.image}
          className="absolute inset-0 -z-10"
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0"
            animate={reduced ? undefined : { scale: i === index ? 1.08 : 1 }}
            transition={{ duration: 9, ease: "linear" }}
          >
            <Photo src={s.image} alt="" fill priority={i === 0} sizes="100vw" className="object-cover" />
          </motion.div>
        </motion.div>
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950/85 via-transparent to-ink-950/30" />

      <div className="container-x flex min-h-[68vh] flex-col justify-center py-16 sm:py-20 lg:min-h-[74vh] lg:py-28">
        <div className="max-w-4xl">
          <h1 className="text-[42px] leading-[1.03] tracking-[-0.03em] text-white sm:text-[58px] lg:text-[68px]">
            <WordReveal key={`t-${index}`} text={slide.title} />
          </h1>

          <AnimatePresence mode="wait">
            <motion.p
              key={`p-${index}`}
              className="mt-6 max-w-xl text-[17px] leading-[1.8] text-sand-200/90"
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            >
              {slide.text}
            </motion.p>
          </AnimatePresence>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
          >
            <Button href="/projelerimiz" variant="primary" size="lg" className="w-full sm:w-auto">
              Projelerimizi Görün <ArrowIcon className="h-4 w-4" />
            </Button>
            <Button href="/gonullu-ol" variant="light" size="lg" className="w-full sm:w-auto">
              Gönüllü Ol
            </Button>
          </motion.div>

          <div className="mt-11 flex gap-2" role="tablist" aria-label="Tanıtım slaytları">
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
      </div>
    </section>
  );
}
