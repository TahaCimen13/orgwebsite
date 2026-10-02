import { site } from "./site";

/**
 * Sitenin yayındaki adresi.
 *
 * Sıralama:
 *  1. NEXT_PUBLIC_SITE_URL — kendi alan adınızı aldığınızda bunu ayarlayın
 *  2. Vercel'in verdiği üretim adresi — alan adı yokken doğru adres üretilir
 *  3. site.ts içindeki yer tutucu — yerel geliştirmede kullanılır
 *
 * YALNIZCA sunucu tarafında çalışan dosyalarda kullanın (metadata, sitemap,
 * robots, og görseli). İstemci bileşenlerinde çağırmayın.
 */
export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;

  return site.url;
}

/** Adres çubuğunda gösterilecek sade alan adı (şema ve sondaki eğik çizgi olmadan). */
export function siteDomain(): string {
  return siteUrl().replace(/^https?:\/\//, "").replace(/\/$/, "");
}
