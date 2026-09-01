import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu sıfatıyla aydınlatma metnimiz.",
};

export default function KvkkPage() {
  return (
    <LegalPage
      eyebrow="Yasal"
      title="KVKK Aydınlatma Metni"
      description="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu sıfatıyla hazırlanmıştır."
      updatedAt="1 Ağustos 2026"
      sections={[
        {
          heading: "Veri sorumlusu",
          paragraphs: [
            `${site.legalName}, 6698 sayılı Kanun uyarınca veri sorumlusu sıfatıyla hareket etmektedir.`,
            `Adres: ${site.address} · E-posta: ${site.email}`,
          ],
        },
        {
          heading: "İşlenen veri kategorileri",
          paragraphs: ["Faaliyetlerimiz kapsamında aşağıdaki veri kategorileri işlenmektedir:"],
          list: [
            "Kimlik bilgileri (ad, soyad)",
            "İletişim bilgileri (e-posta, telefon, adres)",
            "Talep/başvuru içeriği ve ekleri",
            "Bağış işlemine ilişkin finansal kayıtlar",
          ],
        },
        {
          heading: "Hukuki sebep",
          paragraphs: [
            "Kişisel verileriniz; sözleşmenin kurulması ve ifası, hukuki yükümlülüklerin yerine getirilmesi ve açık rızanız hukuki sebeplerine dayanılarak işlenmektedir.",
          ],
        },
        {
          heading: "Saklama süresi",
          paragraphs: [
            "Veriler, işlenme amacının gerektirdiği süre ve ilgili mevzuatta öngörülen yasal saklama süreleri boyunca muhafaza edilir; sürenin sonunda silinir veya anonim hâle getirilir.",
          ],
        },
        {
          heading: "İlgili kişinin hakları",
          paragraphs: [
            "Kanun'un 11. maddesi kapsamındaki haklarınıza ilişkin taleplerinizi yazılı olarak veya kayıtlı e-posta adresimiz üzerinden iletebilirsiniz.",
          ],
        },
      ]}
    />
  );
}
