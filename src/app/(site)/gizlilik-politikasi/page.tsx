import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: `${site.legalName} gizlilik politikası ve çerez kullanımı hakkında bilgilendirme.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Gizlilik"
      title="Gizlilik Politikası"
      description="Bu sitede hangi verileri topladığımızı, neden topladığımızı ve nasıl koruduğumuzu açıklıyoruz."
      updatedAt="1 Ekim 2026"
      sections={[
        {
          heading: "Topladığımız veriler",
          paragraphs: [
            "Sitemizdeki iletişim ve gönüllü başvuru formlarını doldurduğunuzda yalnızca bize ilettiğiniz bilgileri işliyoruz.",
          ],
          list: [
            "Ad ve soyad",
            "E-posta adresi ve/veya telefon numarası",
            "Başvuru konusu ve mesaj içeriği",
          ],
        },
        {
          heading: "Verileri neden işliyoruz",
          paragraphs: [
            "Bize ilettiğiniz bilgileri yalnızca talebinizi değerlendirmek ve size geri dönüş yapmak için kullanıyoruz.",
            "Derneğimiz bağış toplamadığı için hiçbir ödeme, kart veya banka bilgisi toplanmaz, saklanmaz ve işlenmez.",
          ],
        },
        {
          heading: "Verileri kimlerle paylaşıyoruz",
          paragraphs: [
            "Kişisel verilerinizi üçüncü taraflarla ticari amaçla paylaşmıyor, satmıyoruz. Verilere yalnızca başvurunuzu değerlendiren dernek yetkilileri erişebilir.",
            "Yasal bir yükümlülük doğması hâlinde yetkili kamu kurumlarıyla paylaşım yapılabilir.",
          ],
        },
        {
          heading: "Çerezler",
          paragraphs: [
            "Sitenin çalışması için zorunlu çerezleri kullanıyoruz. İstatistik amaçlı çerezler yalnızca açık onayınızla etkinleşir ve onayınızı tarayıcınızdan dilediğiniz zaman geri alabilirsiniz.",
          ],
        },
        {
          heading: "Saklama süresi ve haklarınız",
          paragraphs: [
            "Başvurunuza ilişkin veriler, talebinizin sonuçlanmasının ardından makul bir süre içinde silinir.",
            `Verilerinizin silinmesini, düzeltilmesini veya bir kopyasını talep etmek için ${site.email} adresine yazabilirsiniz.`,
          ],
        },
      ]}
    />
  );
}
