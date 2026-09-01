"use client";

import { useMemo, useState } from "react";
import { categories } from "@/data/categories";
import type { HelpRequest } from "@/data/requests";
import { RequestCard } from "./RequestCard";
import { Input } from "./Field";

type Sort = "yeni" | "acil" | "hedefe-yakin";

export function RequestFilter({
  requests,
  initialCategory = "tumu",
}: {
  requests: HelpRequest[];
  initialCategory?: string;
}) {
  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("yeni");

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr");
    const list = requests.filter((r) => {
      const matchesCat = category === "tumu" || r.category === category;
      const matchesQuery =
        !q ||
        r.title.toLocaleLowerCase("tr").includes(q) ||
        r.summary.toLocaleLowerCase("tr").includes(q) ||
        r.city.toLocaleLowerCase("tr").includes(q);
      return matchesCat && matchesQuery;
    });

    return [...list].sort((a, b) => {
      if (sort === "acil") {
        if (a.urgency !== b.urgency) return a.urgency === "acil" ? -1 : 1;
        return b.createdAt.localeCompare(a.createdAt);
      }
      if (sort === "hedefe-yakin") {
        return b.collected / b.target - a.collected / a.target;
      }
      return b.createdAt.localeCompare(a.createdAt);
    });
  }, [requests, category, query, sort]);

  const tabs = [{ slug: "tumu", name: "Tümü" }, ...categories];

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-3xl border border-sand-200 bg-white p-4 shadow-card sm:flex-row sm:items-center">
        <div className="flex-1">
          <label htmlFor="q" className="sr-only">
            Talep ara
          </label>
          <Input
            id="q"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Talep, şehir veya anahtar kelime ara..."
          />
        </div>
        <div className="sm:w-56">
          <label htmlFor="sort" className="sr-only">
            Sırala
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="w-full rounded-2xl border border-sand-300 bg-white px-4 py-3 text-[15px] text-ink-900 focus:border-clay-400 focus:outline-none focus:ring-4 focus:ring-clay-500/10"
          >
            <option value="yeni">En yeni</option>
            <option value="acil">Önce acil olanlar</option>
            <option value="hedefe-yakin">Hedefe en yakın</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.slug}
            type="button"
            onClick={() => setCategory(t.slug)}
            className={`rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors ${
              category === t.slug
                ? "bg-clay-600 text-white shadow-glow"
                : "border border-sand-300 bg-white text-ink-600 hover:border-clay-300 hover:text-ink-950"
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>

      <p className="mt-8 text-[13.5px] text-ink-400">
        <strong className="font-semibold text-ink-900">{filtered.length}</strong> talep listeleniyor
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <RequestCard key={r.slug} request={r} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-3xl border border-dashed border-sand-300 bg-sand-50 p-16 text-center">
          <p className="font-display text-[22px] font-bold text-ink-950">Sonuç bulunamadı</p>
          <p className="mt-3 text-[14px] leading-relaxed text-ink-600">
            Farklı bir kategori seçmeyi veya aramanızı sadeleştirmeyi deneyin.
          </p>
        </div>
      )}
    </div>
  );
}
