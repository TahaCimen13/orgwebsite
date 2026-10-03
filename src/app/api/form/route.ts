import { mesajKaydet } from "@/lib/mesajlar";

/**
 * Form gönderim uç noktası.
 * Gelen mesajlar Supabase'e kaydedilir ve /admin/mesajlar altında görünür.
 */

type Payload = {
  formType?: string;
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  consent?: string;
};

const messages: Record<string, string> = {
  contact: "Mesajınız bize ulaştı. En kısa sürede dönüş yapacağız.",
  volunteer:
    "Gönüllü başvurunuz alındı. Sizinle iletişime geçip nasıl katkı sunmak istediğinizi birlikte belirleyeceğiz.",
};

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  let data: Payload;

  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Geçersiz istek." }, { status: 400 });
  }

  const name = data.name?.trim() ?? "";
  const email = data.email?.trim() ?? "";
  const phone = data.phone?.trim() ?? "";
  const message = data.message?.trim() ?? "";
  const subject = data.subject?.trim() ?? "";
  const formType = data.formType === "volunteer" ? "volunteer" : "contact";

  if (name.length < 2) {
    return Response.json({ ok: false, error: "Lütfen adınızı ve soyadınızı girin." }, { status: 400 });
  }

  if (message.length < 10) {
    return Response.json(
      { ok: false, error: "Lütfen mesajınızı biraz daha ayrıntılı yazın." },
      { status: 400 }
    );
  }

  // En az bir iletişim kanalı gerekli — aksi hâlde geri dönüş yapamayız.
  if (!email && !phone) {
    return Response.json(
      { ok: false, error: "Size ulaşabilmemiz için e-posta veya telefon bilgisi girin." },
      { status: 400 }
    );
  }

  if (email && !isEmail(email)) {
    return Response.json({ ok: false, error: "E-posta adresi geçerli görünmüyor." }, { status: 400 });
  }

  if (!data.consent) {
    return Response.json(
      { ok: false, error: "Devam etmek için KVKK aydınlatma metnini onaylamanız gerekiyor." },
      { status: 400 }
    );
  }

  // Aşırı uzun girdileri kırp — veritabanını şişirmesin
  const kirp = (v: string, n: number) => v.slice(0, n);

  try {
    await mesajKaydet({
      form_type: formType,
      name: kirp(name, 120),
      email: email ? kirp(email, 160) : null,
      phone: phone ? kirp(phone, 40) : null,
      subject: subject ? kirp(subject, 120) : null,
      message: kirp(message, 5000),
    });
  } catch (err) {
    console.error("[form] mesaj kaydedilemedi:", err);
    return Response.json(
      { ok: false, error: "Şu anda gönderemedik. Lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }

  return Response.json({ ok: true, message: messages[formType] });
}
