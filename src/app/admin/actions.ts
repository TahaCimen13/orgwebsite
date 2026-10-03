"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { randomUUID } from "node:crypto";
import { oturumAc, oturumKapat, sifreDogruMu, yetkiGerekli } from "@/lib/admin-auth";
import { BUCKET, supabaseAdmin } from "@/lib/supabase";
import { baslangicProjeleri } from "@/data/projects";

/**
 * Yönetim işlemleri.
 *
 * Server action'lar doğrudan POST isteğiyle de çağrılabildiği için
 * HER işlem başında `yetkiGerekli()` çağrılır. Proxy korumasına
 * tek başına güvenilmez.
 */

export type Sonuc = { hata?: string };

/* ---------------------------------------------------------- giriş */

export async function girisYap(_onceki: Sonuc, form: FormData): Promise<Sonuc> {
  const sifre = String(form.get("sifre") ?? "");
  const devam = String(form.get("devam") ?? "/admin");

  if (!sifre) return { hata: "Şifre girin." };

  // Yanlış denemede küçük bir gecikme — kaba kuvvet denemesini yavaşlatır
  if (!sifreDogruMu(sifre)) {
    await new Promise((r) => setTimeout(r, 600));
    return { hata: "Şifre hatalı." };
  }

  await oturumAc();
  redirect(devam.startsWith("/admin") ? devam : "/admin");
}

export async function cikisYap(): Promise<void> {
  await oturumKapat();
  redirect("/admin/giris");
}

/* -------------------------------------------------------- projeler */

function slugUret(metin: string): string {
  const tr: Record<string, string> = {
    ç: "c", Ç: "c", ğ: "g", Ğ: "g", ı: "i", İ: "i",
    ö: "o", Ö: "o", ş: "s", Ş: "s", ü: "u", Ü: "u",
  };
  return metin
    .split("")
    .map((h) => tr[h] ?? h)
    .join("")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function formdanProje(form: FormData) {
  const title = String(form.get("title") ?? "").trim();
  const slugGirdi = String(form.get("slug") ?? "").trim();
  return {
    title,
    slug: slugGirdi ? slugUret(slugGirdi) : slugUret(title),
    area: String(form.get("area") ?? "").trim(),
    summary: String(form.get("summary") ?? "").trim(),
    // Boş satırla ayrılan her blok bir paragraf
    body: String(form.get("body") ?? "")
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean),
    image: String(form.get("image") ?? "").trim() || null,
    gallery: String(form.get("gallery") ?? "")
      .split("\n")
      .map((g) => g.trim())
      .filter(Boolean),
    featured: form.get("featured") === "on",
    position: Number(form.get("position") ?? 0) || 0,
  };
}

function sayfalariTazele() {
  revalidatePath("/");
  revalidatePath("/projelerimiz");
  revalidatePath("/admin/projeler");
}

export async function projeKaydet(_onceki: Sonuc, form: FormData): Promise<Sonuc> {
  await yetkiGerekli();

  const id = String(form.get("id") ?? "").trim();
  const proje = formdanProje(form);

  if (!proje.title) return { hata: "Proje adı gerekli." };
  if (!proje.slug) return { hata: "Geçerli bir adres (slug) üretilemedi." };
  if (!proje.area) return { hata: "Çalışma alanı seçin." };
  if (!proje.summary) return { hata: "Kısa özet gerekli." };

  const db = supabaseAdmin();
  const { error } = id
    ? await db.from("projects").update(proje).eq("id", id)
    : await db.from("projects").insert(proje);

  if (error) {
    if (error.code === "23505") return { hata: "Bu adres (slug) zaten kullanılıyor." };
    return { hata: `Kaydedilemedi: ${error.message}` };
  }

  sayfalariTazele();
  if (id) revalidatePath(`/projelerimiz/${proje.slug}`);
  redirect("/admin/projeler");
}

export async function projeSil(form: FormData): Promise<void> {
  await yetkiGerekli();

  const id = String(form.get("id") ?? "").trim();
  if (!id) return;

  const { error } = await supabaseAdmin().from("projects").delete().eq("id", id);
  if (error) throw new Error(error.message);

  sayfalariTazele();
  redirect("/admin/projeler");
}

/* --------------------------------------------------------- görsel */

/** Tarayıcıdan gelen dosyayı Supabase Storage'a yükler, genel adresini döner. */
export async function gorselYukle(form: FormData): Promise<{ url?: string; hata?: string }> {
  await yetkiGerekli();

  const dosya = form.get("dosya");
  if (!(dosya instanceof File) || dosya.size === 0) {
    return { hata: "Dosya seçilmedi." };
  }

  const izinli = ["image/jpeg", "image/png", "image/webp", "image/avif"];
  if (!izinli.includes(dosya.type)) {
    return { hata: "Yalnızca JPG, PNG, WebP veya AVIF yükleyebilirsiniz." };
  }

  const MB = 1024 * 1024;
  if (dosya.size > 8 * MB) {
    return { hata: "Dosya 8 MB'tan büyük olamaz." };
  }

  const uzanti = dosya.name.split(".").pop()?.toLowerCase() ?? "jpg";
  const yol = `${new Date().getFullYear()}/${randomUUID()}.${uzanti}`;

  const db = supabaseAdmin();
  const { error } = await db.storage.from(BUCKET).upload(yol, dosya, {
    contentType: dosya.type,
    upsert: false,
  });

  if (error) return { hata: `Yüklenemedi: ${error.message}` };

  const { data } = db.storage.from(BUCKET).getPublicUrl(yol);
  return { url: data.publicUrl };
}

/* -------------------------------------------------------- mesajlar */

export async function mesajOkunduIsaretle(form: FormData): Promise<void> {
  await yetkiGerekli();

  const id = String(form.get("id") ?? "").trim();
  const durum = form.get("durum") === "okundu";
  if (!id) return;

  await supabaseAdmin().from("messages").update({ is_read: durum }).eq("id", id);
  revalidatePath("/admin/mesajlar");
  revalidatePath("/admin");
}

export async function mesajSil(form: FormData): Promise<void> {
  await yetkiGerekli();

  const id = String(form.get("id") ?? "").trim();
  if (!id) return;

  await supabaseAdmin().from("messages").delete().eq("id", id);
  revalidatePath("/admin/mesajlar");
  revalidatePath("/admin");
}

/* ----------------------------------------------- başlangıç verisi */

/** Boş bir veritabanına örnek projeleri yükler. Yalnızca bir kez gerekir. */
export async function ornekProjeleriYukle(): Promise<void> {
  await yetkiGerekli();

  const db = supabaseAdmin();
  const { count } = await db.from("projects").select("id", { count: "exact", head: true });
  if ((count ?? 0) > 0) return; // zaten veri var, üzerine yazma

  const { error } = await db.from("projects").insert(baslangicProjeleri);
  if (error) throw new Error(error.message);

  sayfalariTazele();
  redirect("/admin/projeler");
}
