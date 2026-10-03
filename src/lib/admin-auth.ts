import { cookies } from "next/headers";
import {
  ADMIN_COOKIE,
  OTURUM_SURESI_SN,
  esitMi,
  jetonGecerliMi,
  jetonUret,
} from "./admin-token";

/**
 * Admin oturumu — tek ortak şifre, kullanıcı tablosu yok.
 * Jeton mantığı admin-token.ts içindedir; burada yalnızca çerez işi var.
 */

export function sifreDogruMu(girilen: string): boolean {
  const beklenen = process.env.ADMIN_PASSWORD;
  if (!beklenen) throw new Error("ADMIN_PASSWORD tanımlı değil.");
  return esitMi(girilen, beklenen);
}

export async function oturumAc(): Promise<void> {
  const store = await cookies();
  store.set(ADMIN_COOKIE, await jetonUret(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: OTURUM_SURESI_SN,
  });
}

export async function oturumKapat(): Promise<void> {
  (await cookies()).delete(ADMIN_COOKIE);
}

export async function oturumAcikMi(): Promise<boolean> {
  return jetonGecerliMi((await cookies()).get(ADMIN_COOKIE)?.value);
}

/**
 * Oturum yoksa işlemi durdurur.
 *
 * Server action'lar doğrudan POST isteğiyle de çağrılabildiği için
 * HER yönetim işleminin başında ayrıca çağrılır — yalnızca proxy
 * kontrolüne güvenilmez.
 */
export async function yetkiGerekli(): Promise<void> {
  if (!(await oturumAcikMi())) throw new Error("Yetkisiz işlem.");
}

export { ADMIN_COOKIE };
