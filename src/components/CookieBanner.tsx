"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";

const KEY = "cerez-onayi";

/** localStorage'ı harici bir store gibi okuruz; effect içinde setState gerekmez. */
const subscribe = () => () => {};
const readStored = () => {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return "kapali";
  }
};
// Sunucuda ve hydration sırasında banner gizli kalır, sonra istemci değeri devreye girer.
const readServer = () => "kapali";

export function CookieBanner() {
  const stored = useSyncExternalStore(subscribe, readStored, readServer);
  const [dismissed, setDismissed] = useState(false);
  const visible = stored === null && !dismissed;

  const decide = (value: "kabul" | "zorunlu") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      // yoksay
    }
    setDismissed(true);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Çerez tercihleri"
      className="fixed inset-x-0 bottom-0 z-40 px-4 pb-24 lg:pb-5"
    >
      <div className="container-x">
        <div className="flex flex-col gap-4 rounded-3xl border border-sand-200 bg-white p-5 shadow-lift sm:flex-row sm:items-center sm:gap-6 sm:p-6">
          <p className="flex-1 text-[13.5px] leading-[1.7] text-ink-600">
            Sitemizin çalışması için zorunlu çerezleri kullanıyoruz. İstatistik çerezleri yalnızca
            onayınızla etkinleşir. Ayrıntılar için{" "}
            <Link
              href="/gizlilik-politikasi"
              className="font-semibold text-clay-700 underline underline-offset-2"
            >
              Gizlilik Politikası
            </Link>
            .
          </p>
          <div className="flex shrink-0 gap-2.5">
            <button
              type="button"
              onClick={() => decide("zorunlu")}
              className="h-10 rounded-full border border-ink-200 px-5 text-[13.5px] font-semibold text-ink-700 transition-colors hover:bg-sand-100"
            >
              Sadece zorunlu
            </button>
            <button
              type="button"
              onClick={() => decide("kabul")}
              className="h-10 rounded-full bg-clay-600 px-5 text-[13.5px] font-semibold text-white transition-colors hover:bg-clay-700"
            >
              Kabul et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
