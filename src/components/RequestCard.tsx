import { Photo } from "./Photo";
import Link from "next/link";
import type { HelpRequest } from "@/data/requests";
import { categoryBySlug } from "@/data/categories";
import { formatTRY, percent } from "@/lib/format";
import { ArrowIcon, PinIcon, UsersIcon } from "./Icons";

export function ProgressBar({ value, className = "" }: { value: number; className?: string }) {
  return (
    <div className={`h-1.5 w-full overflow-hidden rounded-full bg-sand-200 ${className}`}>
      <div
        className="h-full rounded-full bg-gradient-to-r from-clay-400 to-clay-600 transition-[width] duration-700"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export function RequestCard({ request }: { request: HelpRequest }) {
  const category = categoryBySlug(request.category);
  const pct = percent(request.collected, request.target);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative h-48 overflow-hidden">
        <Photo
          src={request.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/95 px-3 py-1.5 text-[11.5px] font-semibold text-ink-800 backdrop-blur">
            {category?.name}
          </span>
          {request.urgency === "acil" && (
            <span className="rounded-full bg-clay-600 px-3 py-1.5 text-[11.5px] font-semibold text-white">
              Acil
            </span>
          )}
        </div>
        <div className="absolute bottom-3.5 left-4 flex items-center gap-3 text-[12px] font-medium text-white/95">
          <span className="inline-flex items-center gap-1.5">
            <PinIcon className="h-3.5 w-3.5" /> {request.city}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <UsersIcon className="h-3.5 w-3.5" /> {request.supporters} destekçi
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[18px] font-bold leading-snug text-ink-950">
          <Link href={`/yardim-talepleri/${request.slug}`} className="after:absolute after:inset-0">
            {request.title}
          </Link>
        </h3>
        <p className="mt-2.5 line-clamp-3 text-[14px] leading-[1.7] text-ink-500">
          {request.summary}
        </p>

        <div className="mt-auto pt-6">
          <div className="mb-2.5 flex items-baseline justify-between">
            <span className="font-display text-[17px] font-bold text-ink-950">
              {formatTRY(request.collected)}
            </span>
            <span className="text-[13px] text-ink-400">hedef {formatTRY(request.target)}</span>
          </div>
          <ProgressBar value={pct} />
          <div className="mt-3.5 flex items-center justify-between">
            <span className="text-[12.5px] font-semibold text-clay-700">%{pct} tamamlandı</span>
            <span className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-ink-900 transition-colors group-hover:text-clay-600">
              Destek ol
              <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
