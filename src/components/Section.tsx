import { Photo } from "./Photo";
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
    <div className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-5 text-[30px] leading-[1.15] sm:text-[38px]">{title}</h2>
      {description && (
        <p className="mt-5 text-[16.5px] leading-[1.75] text-ink-500">{description}</p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  children?: ReactNode;
}) {
  if (image) {
    return (
      <section className="relative isolate overflow-hidden">
        <Photo
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950/90 via-ink-950/75 to-ink-950/40" />
        <div className="container-x py-20 sm:py-28">
          <div className="max-w-3xl">
            {eyebrow && <span className="eyebrow-light">{eyebrow}</span>}
            <h1 className="mt-6 text-[38px] leading-[1.08] text-white sm:text-[52px]">{title}</h1>
            {description && (
              <p className="mt-6 max-w-2xl text-[17px] leading-[1.8] text-sand-200/90">
                {description}
              </p>
            )}
            {children && <div className="mt-9">{children}</div>}
          </div>
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
      <div className="container-x relative py-16 sm:py-20">
        <div className="max-w-3xl">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="mt-6 text-[36px] leading-[1.1] sm:text-[48px]">{title}</h1>
          {description && (
            <p className="mt-6 max-w-2xl text-[17px] leading-[1.8] text-ink-500">{description}</p>
          )}
          {children && <div className="mt-9">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-3xl border border-sand-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${className}`}
    >
      {children}
    </div>
  );
}
