"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { areas } from "@/data/areas";
import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Input } from "./Field";
import { ChevronDownIcon, FilterIcon } from "./Icons";

export function ProjectFilter({
  projects,
  initialArea = "tumu",
}: {
  projects: Project[];
  initialArea?: string;
}) {
  const [area, setArea] = useState(initialArea);
  const [query, setQuery] = useState("");
  // Yalnızca mobilde geçerli — masaüstünde panel her zaman açıktır.
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr");
    return projects.filter((p) => {
      const matchesArea = area === "tumu" || p.area === area;
      const matchesQuery =
        !q ||
        p.title.toLocaleLowerCase("tr").includes(q) ||
        p.summary.toLocaleLowerCase("tr").includes(q);
      return matchesArea && matchesQuery;
    });
  }, [projects, area, query]);

  const tabs = [{ slug: "tumu", name: "Tümü" }, ...areas];
  const activeAreaName = tabs.find((t) => t.slug === area)?.name ?? "Tümü";
  const activeCount = (area !== "tumu" ? 1 : 0) + (query.trim() ? 1 : 0);

  const clearAll = () => {
    setArea("tumu");
    setQuery("");
  };

  return (
    <div>
      {/* Mobilde filtreleri açan düğme — masaüstünde gizli */}
      <div className="flex items-center gap-3 lg:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="proje-filtreleri"
          className="inline-flex flex-1 items-center justify-between gap-3 rounded-2xl border border-sand-300 bg-white px-5 py-3.5 text-[14.5px] font-semibold text-ink-900 shadow-card transition-colors hover:border-clay-300"
        >
          <span className="inline-flex items-center gap-2.5">
            <FilterIcon className="h-4.5 w-4.5 text-clay-600" />
            Filtrele
            {activeCount > 0 && (
              <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-clay-600 px-1.5 text-[11.5px] font-bold text-white">
                {activeCount}
              </span>
            )}
          </span>
          <ChevronDownIcon
            className={`h-4.5 w-4.5 text-ink-400 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {activeCount > 0 && (
          <button
            type="button"
            onClick={clearAll}
            className="shrink-0 rounded-2xl px-3 py-3.5 text-[13.5px] font-semibold text-clay-700 transition-colors hover:bg-clay-50"
          >
            Temizle
          </button>
        )}
      </div>

      {/* Seçili alan — panel kapalıyken durumu görünür tutar */}
      {!open && area !== "tumu" && (
        <p className="mt-3 text-[13px] text-ink-500 lg:hidden">
          Alan: <span className="font-semibold text-ink-900">{activeAreaName}</span>
        </p>
      )}

      {/*
        Kapalıyken mobilde `hidden` kullanılır: içerik sekme sırasından da çıkar.
        Masaüstünde `lg:block` ile her zaman açıktır.
      */}
      <div
        id="proje-filtreleri"
        className={
          open ? "mt-4 block animate-fade-up lg:mt-0 lg:animate-none" : "hidden lg:block"
        }
      >
        <div className="rounded-3xl border border-sand-200 bg-white p-4 shadow-card">
          <label htmlFor="q" className="sr-only">
            Proje ara
          </label>
          <Input
            id="q"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Proje veya anahtar kelime ara..."
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2 lg:mt-6">
          {tabs.map((t) => {
            const active = area === t.slug;
            return (
              <button
                key={t.slug}
                type="button"
                onClick={() => setArea(t.slug)}
                aria-pressed={active}
                className={`relative rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors ${
                  active
                    ? "text-white"
                    : "border border-sand-300 bg-white text-ink-600 hover:border-clay-300 hover:text-ink-950"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="area-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-clay-600 shadow-glow"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {t.name}
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-6 text-[13.5px] text-ink-400 lg:mt-8">
        <strong className="font-semibold text-ink-900">{filtered.length}</strong> proje listeleniyor
      </p>

      {filtered.length > 0 ? (
        <motion.div layout className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.slug}
                layout={!reduced}
                initial={reduced ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="mt-6 rounded-3xl border border-dashed border-sand-300 bg-sand-50 p-16 text-center">
          <p className="font-display text-[22px] font-bold text-ink-950">Sonuç bulunamadı</p>
          <p className="mt-3 text-[14px] leading-relaxed text-ink-600">
            Farklı bir çalışma alanı seçmeyi veya aramanızı sadeleştirmeyi deneyin.
          </p>
        </div>
      )}
    </div>
  );
}
