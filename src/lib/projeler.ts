import "server-only";
import { supabaseAdmin, supabasePublic, supabaseReady } from "./supabase";
import { rowToProject, type Project, type ProjectRow } from "@/data/projects";

/**
 * Projelerin okunduğu tek yer.
 *
 * Site sayfaları anon anahtarla okur (RLS: projeler herkese açık).
 * Yönetim panelinde service_role gerekir; o yüzden `yonetim` bayrağı var.
 *
 * Supabase henüz kurulmamışsa boş liste döner — kurulum tamamlanmadan
 * site çökmesin diye.
 */

const ALANLAR =
  "id, slug, title, area, summary, body, image, gallery, featured, position";

export async function projeleriGetir(yonetim = false): Promise<Project[]> {
  if (!supabaseReady()) return [];

  const db = yonetim ? supabaseAdmin() : supabasePublic();
  const { data, error } = await db
    .from("projects")
    .select(ALANLAR)
    .order("position", { ascending: true })
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[projeler] liste alınamadı:", error.message);
    return [];
  }
  return (data as ProjectRow[]).map(rowToProject);
}

export async function projeGetir(slug: string): Promise<Project | null> {
  if (!supabaseReady()) return null;

  const { data, error } = await supabasePublic()
    .from("projects")
    .select(ALANLAR)
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error("[projeler] proje alınamadı:", error.message);
    return null;
  }
  return data ? rowToProject(data as ProjectRow) : null;
}

export async function projeGetirId(id: string): Promise<Project | null> {
  if (!supabaseReady()) return null;

  const { data, error } = await supabaseAdmin()
    .from("projects")
    .select(ALANLAR)
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error("[projeler] proje alınamadı:", error.message);
    return null;
  }
  return data ? rowToProject(data as ProjectRow) : null;
}

export async function oneCikanProjeler(): Promise<Project[]> {
  return (await projeleriGetir()).filter((p) => p.featured);
}

export async function alanBazindaSayi(): Promise<Record<string, number>> {
  const sayilar: Record<string, number> = {};
  for (const p of await projeleriGetir()) {
    sayilar[p.area] = (sayilar[p.area] ?? 0) + 1;
  }
  return sayilar;
}
