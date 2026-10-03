import Link from "next/link";
import { projeleriGetir } from "@/lib/projeler";
import { mesajlariGetir } from "@/lib/mesajlar";
import { supabaseReady } from "@/lib/supabase";

export default async function AdminAnaSayfa() {
  if (!supabaseReady()) {
    return (
      <div className="rounded-3xl border border-clay-200 bg-clay-50 p-8">
        <h1 className="font-display text-[20px] font-bold text-clay-900">Kurulum tamamlanmamış</h1>
        <p className="mt-3 max-w-xl text-[15px] leading-[1.75] text-clay-900/80">
          Supabase bağlantı bilgileri eksik. <code>.env.local</code> dosyasını{" "}
          <code>.env.local.example</code> örneğine göre doldurup sunucuyu yeniden başlatın.
        </p>
      </div>
    );
  }

  const [projeler, mesajlar] = await Promise.all([projeleriGetir(true), mesajlariGetir()]);
  const okunmamis = mesajlar.filter((m) => !m.is_read).length;

  const kartlar = [
    { href: "/admin/projeler", baslik: "Proje", sayi: projeler.length, alt: "yayında" },
    { href: "/admin/mesajlar", baslik: "Mesaj", sayi: mesajlar.length, alt: `${okunmamis} okunmamış` },
  ];

  return (
    <div>
      <h1 className="font-display text-[26px] font-bold tracking-[-0.02em] text-ink-950">
        Genel bakış
      </h1>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:max-w-2xl">
        {kartlar.map((k) => (
          <Link
            key={k.href}
            href={k.href}
            className="rounded-3xl border border-sand-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-clay-200 hover:shadow-lift"
          >
            <div className="font-display text-[40px] font-extrabold leading-none text-clay-600">
              {k.sayi}
            </div>
            <div className="mt-3 text-[15px] font-semibold text-ink-900">{k.baslik}</div>
            <div className="mt-0.5 text-[13px] text-ink-400">{k.alt}</div>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/admin/projeler/yeni"
          className="inline-flex h-11 items-center rounded-full bg-clay-600 px-6 text-[14.5px] font-semibold text-white shadow-glow transition-colors hover:bg-clay-700"
        >
          Yeni proje ekle
        </Link>
        <Link
          href="/admin/mesajlar"
          className="inline-flex h-11 items-center rounded-full border border-ink-200 bg-white px-6 text-[14.5px] font-semibold text-ink-900 transition-colors hover:bg-sand-100"
        >
          Mesajlara bak
        </Link>
      </div>
    </div>
  );
}
