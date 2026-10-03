"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { girisYap, type Sonuc } from "../actions";

function Gonder() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-5 h-12 w-full rounded-full bg-clay-600 text-[15px] font-semibold text-white shadow-glow transition-colors hover:bg-clay-700 disabled:opacity-60"
    >
      {pending ? "Kontrol ediliyor..." : "Giriş yap"}
    </button>
  );
}

export function GirisFormu({ devam }: { devam: string }) {
  const [sonuc, action] = useActionState<Sonuc, FormData>(girisYap, {});

  return (
    <form
      action={action}
      className="mt-8 rounded-3xl border border-sand-200 bg-white p-7 shadow-card"
    >
      <input type="hidden" name="devam" value={devam} />

      <label htmlFor="sifre" className="mb-2 block text-[13px] font-semibold text-ink-800">
        Şifre
      </label>
      <input
        id="sifre"
        name="sifre"
        type="password"
        autoFocus
        autoComplete="current-password"
        className="w-full rounded-2xl border border-sand-300 px-4 py-3 text-[15px] text-ink-900 transition-colors focus:border-clay-400 focus:outline-none focus:ring-4 focus:ring-clay-500/10"
      />

      {sonuc.hata && (
        <p className="mt-4 rounded-2xl bg-clay-50 px-4 py-3 text-[13px] font-medium text-clay-800">
          {sonuc.hata}
        </p>
      )}

      <Gonder />
    </form>
  );
}
