"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/site";
import { formatNumber } from "@/lib/format";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen]);
  return { ref, seen };
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, seen } = useInView<HTMLSpanElement>();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!seen) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduced ? 0 : 1400;
    let raf = 0;
    let start: number | null = null;
    const tick = (t: number) => {
      if (start === null) start = t;
      const p = duration === 0 ? 1 : Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, value]);

  return (
    <span ref={ref}>
      {formatNumber(n)}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="border-y border-sand-200 bg-sand-100 py-16">
      <div className="container-x">
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-3xl border border-sand-200 bg-white p-7 text-center shadow-card transition-transform duration-300 hover:-translate-y-1"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display text-[40px] font-extrabold leading-none text-clay-600 sm:text-[44px]">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
                <span className="mt-3 block text-[13.5px] leading-relaxed text-ink-500">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
