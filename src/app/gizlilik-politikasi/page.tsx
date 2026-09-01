import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Kişisel verilerinizi nasıl topladığımız, işlediğimiz ve koruduğumuz hakkında bilgi.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Yasal"
      title="Gizlilik Politikası"
      description="Kişisel verilerinizi nasıl topladığımızı, hangi amaçlarla işlediğimizi ve nasıl koruduğumuzu açıklıyoruz."
      updatedAt="1 Ağustos 2026"
      sections={[
        {
          heading: "Toplanan veriler",
          paragraphs: [
            "Sitemizdeki formlar aracılığıyla ad soyad, e-posta adresi, telefon numarası ve ilettiğiniz mesaj içeriğini topluyoruz.",
            "Yardım talebi başvurularında, talebin doğrulanabilmesi için ek belge ve bilgi talep edilebilir. Bu belgeler yalnızca sosyal inceleme ekibimizce görülür.",
          ],
        },
        {
          heading: "Verilerin işlenme amacı",
          paragraphs: ["Kişisel verilerinizi aşağıdaki amaçlarla işliyoruz:"],
          list: [
            "Talep ve başvurularınızı değerlendirmek ve sonuçlandırmak",
            "Bağış süreçlerini yürütmek ve makbuz düzenlemek",
            "Gönüllü eşleştirmelerini yapmak",
            "Yasal yükümlülüklerimizi yerine getirmek",
          ],
        },
        {
          heading: "Verilerin paylaşımı",
          paragraphs: [
            "Kişisel verileriniz üçüncü taraflarla ticari amaçlarla paylaşılmaz. Yalnızca yasal zorunluluk hâlinde yetkili kamu kurumlarına aktarılabilir.",
            "Yayımlanan yardım taleplerinde ihtiyaç sahiplerinin kimlik bilgileri gösterilmez; yalnızca adın ilk harfi ve şehir bilgisi paylaşılır.",
          ],
        },
        {
          heading: "Çerezler",
          paragraphs: [
            "Sitemiz, temel işlevlerin çalışması için zorunlu çerezleri kullanır. Analitik çerezler yalnızca onayınızla etkinleştirilir.",
          ],
        },
        {
          heading: "Haklarınız",
          paragraphs: [
            "KVKK kapsamında verilerinize erişme, düzeltilmesini veya silinmesini talep etme hakkına sahipsiniz.",
            `Taleplerinizi ${site.email} adresine iletebilirsiniz; başvurunuz en geç 30 gün içinde yanıtlanır.`,
          ],
        },
      ]}
    />
  );
}
