import { createClient } from "@supabase/supabase-js";

/**
 * Supabase istemcileri.
 *
 * İki ayrı anahtar var ve karıştırılmamalı:
 *
 *  anon         → tarayıcıya gidebilir. Satır bazlı güvenlik (RLS)
 *                 kurallarına tabidir; yalnızca projeleri okuyabilir.
 *  service_role → RLS'i TAMAMEN atlar. Asla istemci bileşeninde
 *                 import edilmemeli. Yalnızca sunucuda çalışan
 *                 kodda (server action, route handler, RSC) kullanılır.
 */

function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `${name} tanımlı değil. .env.local dosyasını .env.local.example örneğine göre doldurun.`
    );
  }
  return value;
}

/** Sunucu tarafı istemci — tüm yönetim işlemleri bunu kullanır. */
export function supabaseAdmin() {
  return createClient(required("NEXT_PUBLIC_SUPABASE_URL"), required("SUPABASE_SERVICE_ROLE_KEY"), {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

/** Herkese açık okuma istemcisi — yalnızca RLS'in izin verdiğini görür. */
export function supabasePublic() {
  return createClient(
    required("NEXT_PUBLIC_SUPABASE_URL"),
    required("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
    { auth: { persistSession: false, autoRefreshToken: false } }
  );
}

/** Ortam değişkenleri hazır mı? Kurulum tamamlanmadan siteyi çökertmemek için. */
export const supabaseReady = () =>
  Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
      process.env.SUPABASE_SERVICE_ROLE_KEY
  );

/** Proje görsellerinin tutulduğu kova. */
export const BUCKET = "proje-gorselleri";
