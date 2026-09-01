"use client";

import { useState } from "react";
import { Field, Input, Select, Textarea } from "./Field";
import { Button } from "./Button";
import { CheckIcon } from "./Icons";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm({
  formType = "contact",
  subjects,
  title,
  description,
  messageLabel = "Mesajınız",
  submitLabel = "Mesajı Gönder",
}: {
  formType?: string;
  subjects?: string[];
  title?: string;
  description?: string;
  messageLabel?: string;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("loading");
    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Bir hata oluştu.");
      setStatus("success");
      setFeedback(json.message);
      form.reset();
    } catch (err) {
      setStatus("error");
      setFeedback(err instanceof Error ? err.message : "Bir hata oluştu.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-sand-200 bg-white p-10 text-center shadow-card">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-clay-600 text-white shadow-glow">
          <CheckIcon className="h-6 w-6" />
        </span>
        <h3 className="mt-6 font-display text-[24px] font-bold text-ink-950">Teşekkür ederiz</h3>
        <p className="mx-auto mt-3 max-w-sm text-[15px] leading-[1.75] text-ink-600">{feedback}</p>
        <Button
          variant="outline"
          size="sm"
          className="mt-8"
          onClick={() => {
            setStatus("idle");
            setFeedback("");
          }}
        >
          Yeni mesaj gönder
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-sand-200 bg-white p-6 shadow-card sm:p-9"
      noValidate
    >
      {title && <h3 className="font-display text-[24px] font-bold leading-snug">{title}</h3>}
      {description && (
        <p className="mt-3 text-[14.5px] leading-[1.75] text-ink-600">{description}</p>
      )}

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Ad Soyad" htmlFor="name" required>
          <Input id="name" name="name" required autoComplete="name" placeholder="Adınız ve soyadınız" />
        </Field>
        <Field label="E-posta" htmlFor="email">
          <Input id="email" name="email" type="email" autoComplete="email" placeholder="ornek@eposta.com" />
        </Field>
        <Field label="Telefon" htmlFor="phone">
          <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="05XX XXX XX XX" />
        </Field>
        {subjects && (
          <Field label="Konu" htmlFor="subject">
            <Select id="subject" name="subject" defaultValue={subjects[0]}>
              {subjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Select>
          </Field>
        )}
        <Field label={messageLabel} htmlFor="message" required className="sm:col-span-2">
          <Textarea id="message" name="message" required placeholder="Bize nasıl yardımcı olabileceğimizi anlatın..." />
        </Field>
      </div>

      <label className="mt-8 flex items-start gap-3 text-[13px] leading-relaxed text-ink-500">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 rounded border-sand-400 accent-clay-600"
        />
        <span>
          Kişisel verilerimin KVKK Aydınlatma Metni kapsamında işlenmesini kabul ediyorum.
        </span>
      </label>

      {status === "error" && (
        <p className="mt-5 rounded-2xl bg-clay-50 px-4 py-3 text-[13px] font-medium text-clay-800">
          {feedback}
        </p>
      )}

      <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? "Gönderiliyor..." : submitLabel}
      </Button>
    </form>
  );
}
