import Link from "next/link";
import Image from "next/image";
import { projeleriGetir } from "@/lib/projeler";
import { areaBySlug } from "@/data/areas";
import { ornekProjeleriYukle, projeSil } from "../actions";

export default async function AdminProjeler() {
  const projeler = await projeleriGetir(true);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-[26px] font-bold tracking-[-0.02em] text-ink-950">
          Projeler
        </h1>
        <Link
          href="/admin/projeler/yeni"
          className="inline-flex h-11 items-center rounded-full bg-clay-600 px-6 text-[14.5px] font-semibold text-white shadow-glow transition-colors hover:bg-clay-700"
        >
          Yeni proje
        </Link>
      </div>

      {projeler.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-dashed border-sand-300 bg-white p-16 text-center">
          <p className="font-display text-[20px] font-bold text-ink-950">Henüz proje yok</p>
          <p className="mx-auto mt-3 max-w-sm text-[14.5px] leading-relaxed text-ink-500">
            İlk projenizi ekleyin; sitede hemen görünecek.
          </p>
          <form action={ornekProjeleriYukle} className="mt-6">
            <button
              type="submit"
              className="rounded-full border border-ink-200 px-5 py-2.5 text-[13.5px] font-semibold text-ink-700 transition-colors hover:bg-sand-100"
            >
              Örnek projeleri yükle
            </button>
          </form>
        </div>
      ) : (
        <ul className="mt-8 space-y-3">
          {projeler.map((p) => (
            <li
              key={p.id}
              className="flex flex-wrap items-center gap-5 rounded-3xl border border-sand-200 bg-white p-4 shadow-card"
            >
              <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl bg-sand-100">
                {p.image && <Image src={p.image} alt="" fill sizes="96px" className="object-cover" />}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-display text-[16px] font-bold text-ink-950">{p.title}</span>
                  {p.featured && (
                    <span className="rounded-full bg-clay-50 px-2.5 py-0.5 text-[11.5px] font-semibold text-clay-700">
                      Ana sayfada
                    </span>
                  )}
                </div>
                <p className="mt-1 text-[13px] text-ink-400">
                  {areaBySlug(p.area)?.name} · /{p.slug} · sıra {p.position}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href={`/projelerimiz/${p.slug}`}
                  target="_blank"
                  className="rounded-full px-3 py-2 text-[13.5px] font-semibold text-ink-500 transition-colors hover:bg-sand-100 hover:text-ink-900"
                >
                  Gör ↗
                </Link>
                <Link
                  href={`/admin/projeler/${p.id}`}
                  className="rounded-full border border-ink-200 px-4 py-2 text-[13.5px] font-semibold text-ink-900 transition-colors hover:bg-sand-100"
                >
                  Düzenle
                </Link>
                <form action={projeSil}>
                  <input type="hidden" name="id" value={p.id} />
                  <button
                    type="submit"
                    className="rounded-full px-3 py-2 text-[13.5px] font-semibold text-clay-700 transition-colors hover:bg-clay-50"
                  >
                    Sil
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
