import "server-only";
import { supabaseAdmin, supabaseReady } from "./supabase";

/**
 * Form mesajları.
 *
 * `messages` tablosunda hiçbir RLS politikası yok; yani anon anahtarla
 * erişilemez. Kişisel veri (ad, e-posta, telefon) içerdiği için tüm
 * okuma ve yazma işlemleri yalnızca sunucuda, service_role ile yapılır.
 */

export type Mesaj = {
  id: string;
  form_type: string;
  name: string;
  email: string | null;
  phone: string | null;
  subject: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
};

export type YeniMesaj = {
  form_type: string;
  name: string;
  email?: string | null;
  phone?: string | null;
  subject?: string | null;
  message: string;
};

export async function mesajKaydet(mesaj: YeniMesaj): Promise<void> {
  if (!supabaseReady()) {
    throw new Error("Veritabanı bağlantısı yapılandırılmamış.");
  }
  const { error } = await supabaseAdmin().from("messages").insert(mesaj);
  if (error) throw new Error(error.message);
}

export async function mesajlariGetir(): Promise<Mesaj[]> {
  if (!supabaseReady()) return [];

  const { data, error } = await supabaseAdmin()
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[mesajlar] liste alınamadı:", error.message);
    return [];
  }
  return data as Mesaj[];
}

export async function okunmamisSayisi(): Promise<number> {
  if (!supabaseReady()) return 0;

  const { count, error } = await supabaseAdmin()
    .from("messages")
    .select("id", { count: "exact", head: true })
    .eq("is_read", false);

  if (error) return 0;
  return count ?? 0;
}
