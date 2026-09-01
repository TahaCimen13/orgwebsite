import { NextResponse } from "next/server";

type Payload = Record<string, unknown> & { formType?: string };

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Geçersiz istek." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (name.length < 2) {
    return NextResponse.json({ ok: false, error: "Lütfen adınızı girin." }, { status: 422 });
  }
  if (body.formType !== "volunteer" && message.length < 10) {
    return NextResponse.json(
      { ok: false, error: "Mesajınız en az 10 karakter olmalı." },
      { status: 422 }
    );
  }

  // Gerçek kullanımda burada e-posta gönderimi / CRM kaydı yapılır.
  // Örn: Resend, SendGrid, Airtable, Supabase, Google Sheets...
  console.log("[form]", body.formType ?? "contact", { name });

  return NextResponse.json({
    ok: true,
    message: "Mesajınız bize ulaştı. En kısa sürede dönüş yapacağız.",
  });
}
