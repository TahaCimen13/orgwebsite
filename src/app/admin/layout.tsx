import type { Metadata } from "next";
import Link from "next/link";
import { cikisYap } from "./actions";
import { oturumAcikMi } from "@/lib/admin-auth";
import { okunmamisSayisi } from "@/lib/mesajlar";

export const metadata: Metadata = {
  title: "Yönetim",
  // Yönetim paneli arama motorlarına kapalı
  robots: { index: false, follow: false },
};

const menu = [
  { href: "/admin", label: "Genel bakış" },
  { href: "/admin/projeler", label: "Projeler" },
  { href: "/admin/mesajlar", label: "Mesajlar" },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const girisli = await oturumAcikMi();

  // Giriş sayfası kendi başına durur
  if (!girisli) return <>{children}</>;

  const okunmamis = await okunmamisSayisi();

  return (
    <div className="min-h-screen bg-sand-50">
      <header className="border-b border-sand-200 bg-white">
        <div className="container-x flex h-16 items-center justify-between gap-6">
          <div className="flex items-center gap-7">
            <span className="font-display text-[15px] font-extrabold text-ink-950">
              Derman <span className="font-medium text-clay-600">Yönetim</span>
            </span>
            <nav className="flex items-center gap-1" aria-label="Yönetim menüsü">
              {menu.map((m) => (
                <Link
                  key={m.href}
                  href={m.href}
                  className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[13.5px] font-medium text-ink-600 transition-colors hover:bg-sand-100 hover:text-ink-950"
                >
                  {m.label}
                  {m.href === "/admin/mesajlar" && okunmamis > 0 && (
                    <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-clay-600 px-1.5 text-[11px] font-bold text-white">
                      {okunmamis}
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="text-[13.5px] text-ink-500 transition-colors hover:text-ink-900"
            >
              Siteyi gör ↗
            </Link>
            <form action={cikisYap}>
              <button
                type="submit"
                className="rounded-full border border-ink-200 px-4 py-2 text-[13.5px] font-semibold text-ink-700 transition-colors hover:bg-sand-100"
              >
                Çıkış
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="container-x py-10">{children}</main>
    </div>
  );
}
