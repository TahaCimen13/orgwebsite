import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: `${site.legalName} kişisel verilerin korunması kapsamında aydınlatma metni.`,
};

export default function KvkkPage() {
  return (
    <LegalPage
      eyebrow="KVKK"
      title="KVKK Aydınlatma Metni"
      description="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sahiplerini bilgilendirme metni."
      updatedAt="1 Ekim 2026"
      sections={[
        {
          heading: "Veri sorumlusu",
          paragraphs: [
            `Kişisel verileriniz, veri sorumlusu olarak ${site.legalName} tarafından aşağıda açıklanan kapsamda işlenmektedir.`,
            `E-posta: ${site.email}`,
          ],
        },
        {
          heading: "İşlenen veriler ve amaçları",
          paragraphs: [
            "Formlar aracılığıyla ilettiğiniz kimlik ve iletişim bilgileri; başvurunuzun değerlendirilmesi, gönüllü süreçlerinin yürütülmesi ve sizinle iletişim kurulması amacıyla işlenir.",
          ],
          list: [
            "Kimlik bilgisi: ad, soyad",
            "İletişim bilgisi: e-posta adresi, telefon numarası",
            "Talep bilgisi: başvuru konusu, mesaj içeriği",
          ],
        },
        {
          heading: "Hukuki sebep",
          paragraphs: [
            "Verileriniz, KVKK'nın 5. maddesinde yer alan açık rızanızın bulunması ve meşru menfaat hukuki sebeplerine dayanılarak işlenir.",
          ],
        },
        {
          heading: "Aktarım",
          paragraphs: [
            "Kişisel verileriniz yurt içinde veya yurt dışında üçüncü kişilere ticari amaçla aktarılmaz. Yalnızca yasal yükümlülükler kapsamında yetkili kurumlarla paylaşılabilir.",
          ],
        },
        {
          heading: "Veri sahibinin hakları",
          paragraphs: [
            "KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:",
          ],
          list: [
            "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
            "İşlenmişse buna ilişkin bilgi talep etme",
            "İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme",
            "Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme",
            "Verilerinizin silinmesini veya yok edilmesini isteme",
            "İşlemenin kanuna aykırılığı nedeniyle doğan zararın giderilmesini talep etme",
          ],
        },
        {
          heading: "Başvuru yolu",
          paragraphs: [
            `Haklarınıza ilişkin taleplerinizi ${site.email} adresine ileterek kullanabilirsiniz. Başvurularınız en geç 30 gün içinde yanıtlanır.`,
          ],
        },
      ]}
    />
  );
}
