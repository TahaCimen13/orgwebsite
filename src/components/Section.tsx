import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <Reveal className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-5 text-[32px] leading-[1.08] tracking-[-0.03em] sm:text-[44px]">{title}</h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-[16.5px] leading-[1.75] text-ink-500 ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  compact = false,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  /**
   * Mobilde giriş bölümünü küçültür: etiket, açıklama ve düğmeler gizlenir,
   * yalnızca küçültülmüş başlık kalır. Masaüstünde hiçbir şey değişmez.
   * Ana sayfa ve Hakkımızda dışındaki sayfalarda kullanılır.
   */
  compact?: boolean;
  children?: ReactNode;
}) {
  const hideOnMobile = compact ? "max-sm:hidden" : "";

  if (image) {
    return (
      <section className="relative isolate overflow-hidden">
        <Photo src={image} alt="" fill priority sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950/92 via-ink-950/78 to-ink-950/40" />
        <div className={`container-x ${compact ? "py-9 sm:py-24 lg:py-28" : "py-20 sm:py-28"}`}>
          <Reveal className="max-w-3xl" y={18}>
            {eyebrow && <span className={`eyebrow-light ${hideOnMobile}`}>{eyebrow}</span>}
            <h1
              className={`leading-[1.06] tracking-[-0.03em] text-white ${
                compact
                  ? "text-[26px] sm:mt-6 sm:text-[48px] lg:text-[56px]"
                  : "mt-6 text-[40px] sm:text-[56px]"
              }`}
            >
              {title}
            </h1>
            {description && (
              <p
                className={`mt-6 max-w-2xl text-[17px] leading-[1.8] text-sand-200/90 ${hideOnMobile}`}
              >
                {description}
              </p>
            )}
            {children && <div className={`mt-9 ${hideOnMobile}`}>{children}</div>}
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden border-b border-sand-200 bg-sand-100">
      <div
        className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-clay-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-olive-100/50 blur-3xl"
        aria-hidden="true"
      />
      <div className={`container-x relative ${compact ? "py-8 sm:py-18 lg:py-22" : "py-16 sm:py-22"}`}>
        <Reveal className="max-w-3xl" y={18}>
          {eyebrow && <span className={`eyebrow ${hideOnMobile}`}>{eyebrow}</span>}
          <h1
            className={`leading-[1.08] tracking-[-0.03em] ${
              compact
                ? "text-[26px] sm:mt-6 sm:text-[44px] lg:text-[52px]"
                : "mt-6 text-[38px] sm:text-[52px]"
            }`}
          >
            {title}
          </h1>
          {description && (
            <p className={`mt-6 max-w-2xl text-[17px] leading-[1.8] text-ink-500 ${hideOnMobile}`}>
              {description}
            </p>
          )}
          {children && <div className={`mt-9 ${hideOnMobile}`}>{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-3xl border border-sand-200 bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-clay-200 hover:shadow-lift ${className}`}
    >
      {children}
    </div>
  );
}
