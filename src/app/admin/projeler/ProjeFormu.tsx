"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import Image from "next/image";
import { gorselYukle, projeKaydet, type Sonuc } from "../actions";
import { areas } from "@/data/areas";
import type { Project } from "@/data/projects";

function Kaydet({ yeni }: { yeni: boolean }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="h-12 rounded-full bg-clay-600 px-8 text-[15px] font-semibold text-white shadow-glow transition-colors hover:bg-clay-700 disabled:opacity-60"
    >
      {pending ? "Kaydediliyor..." : yeni ? "Projeyi oluştur" : "Değişiklikleri kaydet"}
    </button>
  );
}

const alanSinif =
  "w-full rounded-2xl border border-sand-300 bg-white px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-300 transition-colors focus:border-clay-400 focus:outline-none focus:ring-4 focus:ring-clay-500/10";

function Etiket({ htmlFor, children, ipucu }: { htmlFor: string; children: React.ReactNode; ipucu?: string }) {
  return (
    <>
      <label htmlFor={htmlFor} className="mb-2 block text-[13px] font-semibold text-ink-800">
        {children}
      </label>
      {ipucu && <p className="-mt-1 mb-2 text-[12.5px] text-ink-400">{ipucu}</p>}
    </>
  );
}

export function ProjeFormu({ proje }: { proje?: Project }) {
  const yeni = !proje;
  const [sonuc, action] = useActionState<Sonuc, FormData>(projeKaydet, {});

  const [kapak, setKapak] = useState(proje?.image ?? "");
  const [galeri, setGaleri] = useState<string[]>(proje?.gallery ?? []);
  const [yukleniyor, setYukleniyor] = useState<"kapak" | "galeri" | null>(null);
  const [yuklemeHatasi, setYuklemeHatasi] = useState("");

  async function dosyaSec(dosyalar: FileList | null, hedef: "kapak" | "galeri") {
    if (!dosyalar?.length) return;
    setYukleniyor(hedef);
    setYuklemeHatasi("");

    for (const dosya of Array.from(dosyalar)) {
      const fd = new FormData();
      fd.set("dosya", dosya);
      const r = await gorselYukle(fd);
      if (r.hata) {
        setYuklemeHatasi(r.hata);
        break;
      }
      if (r.url) {
        if (hedef === "kapak") setKapak(r.url);
        else setGaleri((g) => [...g, r.url!]);
      }
    }
    setYukleniyor(null);
  }

  return (
    <form action={action} className="grid gap-6 lg:grid-cols-3">
      {proje?.id && <input type="hidden" name="id" value={proje.id} />}
      <input type="hidden" name="image" value={kapak} />
      <input type="hidden" name="gallery" value={galeri.join("\n")} />

      {/* Sol: metinler */}
      <div className="space-y-5 lg:col-span-2">
        <div className="rounded-3xl border border-sand-200 bg-white p-6 shadow-card">
          <Etiket htmlFor="title">Proje adı</Etiket>
          <input id="title" name="title" required defaultValue={proje?.title} className={alanSinif} />

          <div className="mt-5">
            <Etiket htmlFor="slug" ipucu="Boş bırakırsanız proje adından üretilir.">
              Adres (slug)
            </Etiket>
            <input
              id="slug"
              name="slug"
              defaultValue={proje?.slug}
              placeholder="ornek-proje-adi"
              className={alanSinif}
            />
          </div>

          <div className="mt-5">
            <Etiket htmlFor="summary" ipucu="Kartlarda görünür. 1–2 cümle.">
              Kısa özet
            </Etiket>
            <textarea
              id="summary"
              name="summary"
              required
              rows={3}
              defaultValue={proje?.summary}
              className={`${alanSinif} resize-y`}
            />
          </div>

          <div className="mt-5">
            <Etiket
              htmlFor="body"
              ipucu="Paragrafları aralarına BOŞ SATIR koyarak ayırın. Her blok ayrı paragraf olur."
            >
              Detaylı anlatım
            </Etiket>
            <textarea
              id="body"
              name="body"
              rows={14}
              defaultValue={proje?.body.join("\n\n")}
              className={`${alanSinif} resize-y leading-[1.8]`}
            />
          </div>
        </div>
      </div>

      {/* Sağ: ayarlar ve görseller */}
      <div className="space-y-5">
        <div className="rounded-3xl border border-sand-200 bg-white p-6 shadow-card">
          <Etiket htmlFor="area">Çalışma alanı</Etiket>
          <select id="area" name="area" defaultValue={proje?.area} required className={alanSinif}>
            <option value="">Seçin...</option>
            {areas.map((a) => (
              <option key={a.slug} value={a.slug}>
                {a.name}
              </option>
            ))}
          </select>

          <div className="mt-5">
            <Etiket htmlFor="position" ipucu="Küçük sayı önce listelenir.">
              Sıra
            </Etiket>
            <input
              id="position"
              name="position"
              type="number"
              defaultValue={proje?.position ?? 0}
              className={alanSinif}
            />
          </div>

          <label className="mt-5 flex items-start gap-3 text-[14px] text-ink-700">
            <input
              type="checkbox"
              name="featured"
              defaultChecked={proje?.featured ?? true}
              className="mt-0.5 h-4 w-4 rounded border-sand-400 accent-clay-600"
            />
            Ana sayfada göster
          </label>
        </div>

        {/* Kapak görseli */}
        <div className="rounded-3xl border border-sand-200 bg-white p-6 shadow-card">
          <h2 className="text-[13px] font-semibold text-ink-800">Kapak görseli</h2>

          {kapak ? (
            <div className="mt-3">
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-sand-100">
                <Image src={kapak} alt="" fill sizes="320px" className="object-cover" />
              </div>
              <button
                type="button"
                onClick={() => setKapak("")}
                className="mt-2 text-[13px] font-semibold text-clay-700 hover:underline"
              >
                Kaldır
              </button>
            </div>
          ) : (
            <p className="mt-3 rounded-2xl border border-dashed border-sand-300 bg-sand-50 p-6 text-center text-[13px] text-ink-400">
              Henüz görsel yok
            </p>
          )}

          <label className="mt-3 inline-flex cursor-pointer items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-[13.5px] font-semibold text-ink-800 transition-colors hover:bg-sand-100">
            {yukleniyor === "kapak" ? "Yükleniyor..." : "Görsel seç"}
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/avif"
              className="hidden"
              onChange={(e) => dosyaSec(e.target.files, "kapak")}
            />
          </label>
        </div>

        {/* Galeri */}
        <div className="rounded-3xl border border-sand-200 bg-white p-6 shadow-card">
          <h2 className="text-[13px] font-semibold text-ink-800">Galeri</h2>

          {galeri.length > 0 && (
            <div className="mt-3 grid grid-cols-2 gap-2">
              {galeri.map((g) => (
                <div key={g} className="relative">
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-sand-100">
                    <Image src={g} alt="" fill sizes="160px" className="object-cover" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setGaleri((list) => list.filter((x) => x !== g))}
                    aria-label="Görseli kaldır"
                    className="absolute -right-1.5 -top-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-ink-950 text-[13px] text-white"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          <label className="mt-3 inline-flex cursor-pointer items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-[13.5px] font-semibold text-ink-800 transition-colors hover:bg-sand-100">
            {yukleniyor === "galeri" ? "Yükleniyor..." : "Görsel ekle"}
            <input
              type="file"
              multiple
              accept="image/jpeg,image/png,image/webp,image/avif"
              className="hidden"
              onChange={(e) => dosyaSec(e.target.files, "galeri")}
            />
          </label>
        </div>

        {yuklemeHatasi && (
          <p className="rounded-2xl bg-clay-50 px-4 py-3 text-[13px] font-medium text-clay-800">
            {yuklemeHatasi}
          </p>
        )}

        {sonuc.hata && (
          <p className="rounded-2xl bg-clay-50 px-4 py-3 text-[13px] font-medium text-clay-800">
            {sonuc.hata}
          </p>
        )}

        <Kaydet yeni={yeni} />
      </div>
    </form>
  );
}
