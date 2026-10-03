/**
 * Oturum jetonunun saf mantığı — Next.js'e bağımlılığı yoktur.
 *
 * proxy.ts `next/headers` kullanamadığı için jeton doğrulaması
 * bu ayrı dosyada tutulur; hem proxy hem sunucu kodu buradan okur.
 */

const encoder = new TextEncoder();

export const ADMIN_COOKIE = "derman_admin";
export const OTURUM_SURESI_SN = 60 * 60 * 12; // 12 saat

async function imzala(veri: string, gizli: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(gizli),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(veri));
  return Buffer.from(sig).toString("base64url");
}

/** Uzunluk sızdırmayan, sabit süreli karşılaştırma. */
export function esitMi(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let fark = 0;
  for (let i = 0; i < a.length; i++) fark |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return fark === 0;
}

function gizliAnahtar(): string {
  const s = process.env.ADMIN_SESSION_SECRET;
  if (!s) throw new Error("ADMIN_SESSION_SECRET tanımlı değil.");
  return s;
}

export async function jetonUret(): Promise<string> {
  const bitis = String(Date.now() + OTURUM_SURESI_SN * 1000);
  return `${bitis}.${await imzala(bitis, gizliAnahtar())}`;
}

export async function jetonGecerliMi(jeton: string | undefined): Promise<boolean> {
  if (!jeton) return false;
  const [bitis, imza] = jeton.split(".");
  if (!bitis || !imza) return false;
  if (!/^\d+$/.test(bitis) || Number(bitis) < Date.now()) return false;
  try {
    return esitMi(imza, await imzala(bitis, gizliAnahtar()));
  } catch {
    return false;
  }
}
