/**
 * Form gönderim uç noktası.
 *
 * Şu anda gelen başvurular doğrulanır ve sunucu günlüğüne yazılır.
 * Başvuruları e-posta olarak almak isterseniz aşağıdaki `deliver`
 * fonksiyonunun içini bir e-posta servisiyle doldurmanız yeterli;
 * formun ön yüzünü değiştirmeniz gerekmez.
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

/** Başvuruyu kalıcı bir yere iletir. Şimdilik yalnızca günlüğe yazar. */
async function deliver(data: Payload) {
  console.log("[form]", {
    formType: data.formType,
    name: data.name,
    email: data.email,
    phone: data.phone,
    subject: data.subject,
    receivedAt: new Date().toISOString(),
  });
}

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

  try {
    await deliver(data);
  } catch {
    return Response.json(
      { ok: false, error: "Şu anda gönderemedik. Lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }

  return Response.json({
    ok: true,
    message: messages[data.formType ?? "contact"] ?? messages.contact,
  });
}
