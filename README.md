# Dernek Web Sitesi Şablonu

Hayır kurumu / dernek siteleri için Next.js 16 (App Router), TypeScript ve Tailwind CSS v4 ile
hazırlanmış, Vercel'e hazır bir şablon. Sıcak bej–krem palet, terrakota vurgu, fotoğraflı hero ve
kartlar.

Kurum adı, iletişim bilgileri ve ekip isimleri **placeholder**'dır (`Dernek Adı`, `[Ad Soyad]`,
`example.org.tr`); yayına almadan önce `src/lib/site.ts` üzerinden değiştirin.

## Çalıştırma

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # üretim derlemesi
npm run start   # üretim sunucusu
```

## Sayfalar

| Yol | Açıklama |
| --- | --- |
| `/` | Ana sayfa: hero slider, misyon, kategoriler, talepler, istatistikler, 3 adım, gönüllüler, duyurular, iletişim |
| `/hakkimizda` | Hikâye, ilkeler, bağış dağılımı, tarihçe, ekip |
| `/yardim-talepleri` | Arama + kategori filtresi + sıralama ile talep listesi |
| `/yardim-talepleri/[slug]` | Talep detayı, ilerleme çubuğu, ihtiyaç listesi, benzer talepler |
| `/yardim-talebi-olustur` | Yardım talebi başvuru formu |
| `/gonulluler` | Gönüllü rolleri ve gönüllü kartları |
| `/gonullu-ol` | Gönüllü başvuru formu |
| `/duyurular`, `/duyurular/[slug]` | Duyuru/blog listesi ve detay |
| `/bagis` | Bağış widget'ı (tutar seçimi, tek seferlik/aylık) + IBAN |
| `/iletisim` | İletişim kartları, form, harita, banka bilgileri |
| `/sikca-sorulan-sorular` | SSS (FAQ schema.org işaretlemesi ile) |
| `/gizlilik-politikasi`, `/sartlar-kosullar`, `/kvkk` | Yasal metinler |

Ayrıca:

- `sitemap.xml`, `robots.txt`, dinamik OG görseli (`/opengraph-image`)
- schema.org verisi: sitede `NGO`, SSS'te `FAQPage`, duyuru/talep detayında `NewsArticle`/`Article`
  + `BreadcrumbList`
- Detay sayfalarında canonical URL ve sayfaya özel OG görseli
- KVKK çerez onay bandı (`localStorage`, `useSyncExternalStore`)
- Mobilde ekran altına sabit "Bağış Yap + Ara" çubuğu
- `loading.tsx` (iskelet), `error.tsx` (hata ekranı), `not-found.tsx` (404)
- Tüm fotoğraflarda blur önizleme (`src/lib/blur.ts`)

## İçeriği kendinize göre düzenleme

Tüm metin ve veriler kod içine gömülü değil; şu dosyalardan yönetilir:

- `src/lib/site.ts` — dernek adı, slogan, e-posta, telefon, adres, IBAN, sosyal medya, istatistikler, menü
- `src/data/categories.ts` — yardım kategorileri
- `src/data/requests.ts` — yardım talepleri
- `src/data/posts.ts` — duyurular
- `src/data/volunteers.ts` — gönüllüler ve SSS

Renkler `src/app/globals.css` içindeki `@theme` bloğunda:
`--color-sand-*` (bej zeminler), `--color-clay-*` (terrakota vurgu), `--color-olive-*` (rozet),
`--color-ink-*` (metin). Temel eleman stilleri `@layer base` içinde olmalı — aksi halde katmansız
CSS, `text-white` gibi Tailwind yardımcılarını geçersiz kılar.

Yazı tipleri `src/app/layout.tsx`: başlıklar **Plus Jakarta Sans**, gövde **Inter**.
Logoyu değiştirmek için `src/components/Logo.tsx` ve `src/app/icon.svg`.

## Görseller

Tüm görseller `public/images/` altında yereldir (harici bağımlılık yok) ve `next/image` ile
servis edilir. Hangi görselin nerede kullanıldığı: `src/data/categories.ts`, `src/data/requests.ts`,
`src/data/posts.ts` içindeki `image` alanları; hero/CTA görselleri ise ilgili sayfa dosyalarında.

Görseller `<Photo>` bileşeni (`src/components/Photo.tsx`) üzerinden servis edilir; bu bileşen
`next/image`'a `src/lib/blur.ts` içindeki blur önizlemesini otomatik ekler. Görselleri
değiştirdikten sonra blur verisini yenilemek için:

```bash
# 14px küçültülmüş jpeg'i base64'e çevirip src/lib/blur.ts içindeki karşılığını günceller
sips -Z 14 -s formatOptions 40 public/images/hero.jpg --out /tmp/t.jpg && base64 -i /tmp/t.jpg
```

Fotoğraflar [Unsplash](https://unsplash.com)'ten alınmıştır (Unsplash License — ticari kullanım
serbest, atıf zorunlu değil). Kendi fotoğraflarınızla değiştirmeniz önerilir: aynı dosya adlarıyla
`public/images/` içine koymanız yeterli. Gerçek kişi fotoğrafı kullanırken açık rıza almayı ve
çocukların mahremiyetini korumayı unutmayın.

## Formlar

Tüm formlar `POST /api/form` adresine JSON gönderir (`src/app/api/form/route.ts`). Şu an istek
doğrulanıp loglanıyor. Gerçek yayında bu dosyanın içine e-posta/CRM entegrasyonu ekleyin:

- **Resend** (`npm i resend`) ile e-posta gönderimi
- **Supabase / Airtable / Google Sheets** ile kayıt
- Spam koruması için Cloudflare Turnstile veya hCaptcha

Bağış formu demo amaçlıdır; kart bilgisi istemez. Gerçek ödeme için **iyzico**, **PayTR** veya
**Stripe** entegrasyonu gerekir.

## Vercel'e yayınlama

1. Projeyi bir GitHub deposuna gönderin:
   ```bash
   git add -A
   git commit -m "Dernek sitesi"
   git remote add origin https://github.com/<kullanici>/<repo>.git
   git push -u origin main
   ```
2. [vercel.com/new](https://vercel.com/new) → depoyu içe aktarın. Next.js otomatik algılanır,
   ayar değiştirmenize gerek yok. **Deploy**.
3. Alan adı için: Project → Settings → **Domains** → `dernekadi.org.tr` ekleyin ve alan adı
   sağlayıcınızda Vercel'in verdiği kayıtları tanımlayın.
4. `src/lib/site.ts` içindeki `url` alanını gerçek alan adınızla güncelleyin (SEO ve OG için).

Alternatif olarak CLI ile: `npx vercel` → `npx vercel --prod`.

## Notlar

- Yasal metinler örnektir; yayına almadan önce hukuk danışmanınıza gösterin.
- Kişi görselleri yerine ince çizgi ikonlar kullanıldı; gerçek fotoğraf eklerken `next/image`
  kullanmanız ve mahremiyet izinlerini almanız önerilir.
- İletişim sayfasındaki harita alanı bir placeholder kutusudur; gerçek adresi girdikten sonra
  Google Maps yerleştirme (`<iframe>`) kodunu o bloğun yerine koyun.
- Placeholder'lar: `Dernek Adı`, `[Ad Soyad]`, `[Mahalle] Mah. ...`, `bilgi@example.org.tr`,
  `TR00 ...`. Hepsi `src/lib/site.ts`, `src/data/volunteers.ts` ve `src/app/hakkimizda/page.tsx`
  içindedir.
