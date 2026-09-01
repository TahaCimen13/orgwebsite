"use client";

import { useState } from "react";
import { formatTRY } from "@/lib/format";
import { Button } from "./Button";
import { Field, Input, Select } from "./Field";
import { CheckIcon } from "./Icons";

const amounts = [250, 500, 1000, 2500];
const purposes = [
  "En acil ihtiyaçlara",
  "Eğitim Desteği",
  "İlaç Yardımı",
  "Tedavi Yardımı",
  "Gıda Desteği",
];

const impact: Record<number, string> = {
  250: "Bir çocuğun kırtasiye ihtiyacını karşılar.",
  500: "Bir aileye aylık gıda kolisi ulaştırır.",
  1000: "Bir aylık ilaç desteği sağlar.",
  2500: "Bir tedavi yolculuğunun ulaşım giderini karşılar.",
};

export function DonationWidget() {
  const [amount, setAmount] = useState<number>(500);
  const [custom, setCustom] = useState("");
  const [recurring, setRecurring] = useState(false);
  const [done, setDone] = useState(false);

  const finalAmount = custom ? Number(custom.replace(/\D/g, "")) || 0 : amount;

  if (done) {
    return (
      <div className="rounded-3xl border border-sand-200 bg-white p-10 text-center shadow-card">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-clay-600 text-white shadow-glow">
          <CheckIcon className="h-6 w-6" />
        </span>
        <h3 className="mt-6 font-display text-[26px] font-bold leading-snug text-ink-950">
          {formatTRY(finalAmount)} bağış talebiniz alındı
        </h3>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-[1.8] text-ink-600">
          Bu bir demo formudur. Gerçek yayında bu adımda ödeme sağlayıcısına (iyzico, PayTR, Stripe)
          yönlendirme yapılır. Şimdilik banka havalesi ile destek olabilirsiniz.
        </p>
        <Button variant="outline" size="sm" className="mt-8" onClick={() => setDone(false)}>
          Geri dön
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (finalAmount > 0) setDone(true);
      }}
      className="rounded-3xl border border-sand-200 bg-white p-6 shadow-card sm:p-9"
    >
      <span className="eyebrow">Bağış</span>
      <h3 className="mt-4 font-display text-[26px] font-bold leading-snug">Desteğinizi belirleyin</h3>

      <div className="mt-7 inline-flex rounded-full bg-sand-100 p-1">
        {[
          { key: false, label: "Tek seferlik" },
          { key: true, label: "Aylık düzenli" },
        ].map((opt) => (
          <button
            key={String(opt.key)}
            type="button"
            onClick={() => setRecurring(opt.key)}
            className={`rounded-full px-5 py-2.5 text-[13.5px] font-semibold transition-colors ${
              recurring === opt.key
                ? "bg-white text-ink-950 shadow-card"
                : "text-ink-500 hover:text-ink-900"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {amounts.map((a) => (
          <button
            key={a}
            type="button"
            onClick={() => {
              setAmount(a);
              setCustom("");
            }}
            className={`rounded-2xl border py-4 font-display text-[17px] font-bold transition-all ${
              !custom && amount === a
                ? "border-clay-600 bg-clay-50 text-clay-700 shadow-card"
                : "border-sand-300 text-ink-700 hover:border-clay-300 hover:bg-sand-50"
            }`}
          >
            {formatTRY(a)}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Farklı tutar (₺)" htmlFor="custom">
          <Input
            id="custom"
            inputMode="numeric"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            placeholder="Örn. 750"
          />
        </Field>
        <Field label="Bağış alanı" htmlFor="purpose">
          <Select id="purpose" name="purpose" defaultValue={purposes[0]}>
            {purposes.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </Select>
        </Field>
        <Field label="Ad Soyad" htmlFor="donor" required>
          <Input id="donor" name="donor" required placeholder="Adınız ve soyadınız" />
        </Field>
        <Field label="E-posta" htmlFor="donor-mail" hint="Bağış makbuzunuz bu adrese gönderilir.">
          <Input id="donor-mail" name="email" type="email" placeholder="ornek@eposta.com" />
        </Field>
      </div>

      {!custom && impact[amount] && (
        <p className="mt-7 rounded-2xl bg-clay-50 px-4 py-3.5 text-[13.5px] leading-relaxed text-clay-800">
          {formatTRY(amount)} — {impact[amount]}
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" className="mt-7 w-full">
        {finalAmount > 0 ? `${formatTRY(finalAmount)} ` : ""}
        {recurring ? "Aylık Bağış Yap" : "Bağış Yap"}
      </Button>

      <p className="mt-4 text-center text-[12px] text-ink-400">
        Ödeme adımı demo amaçlıdır; kart bilgisi istenmez.
      </p>
    </form>
  );
}
