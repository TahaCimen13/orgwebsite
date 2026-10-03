import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Şartlar ve Koşullar",
  description: `${site.legalName} web sitesi kullanım şartları.`,
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Kullanım"
      title="Şartlar ve Koşullar"
      description="Bu web sitesini kullanırken geçerli olan koşullar."
      updatedAt="1 Ekim 2026"
      sections={[
        {
          heading: "Genel",
          paragraphs: [
            `Bu site ${site.legalName} tarafından, derneğin çalışmalarını tanıtmak ve gönüllü başvurularını almak amacıyla işletilir.`,
            "Siteyi kullanarak bu sayfadaki koşulları kabul etmiş olursunuz.",
          ],
        },
        {
          heading: "Bağış toplanmaması",
          paragraphs: [
            "Derneğimiz bağış toplamamaktadır. Bu site üzerinden hiçbir şekilde para talep edilmez; hesap numarası, ödeme bağlantısı veya kampanya yayımlanmaz.",
            "Dernek adını kullanarak para talep eden kişi, hesap veya web sitelerinin bizimle hiçbir ilgisi yoktur. Böyle bir durumla karşılaşırsanız bize bildirmenizi rica ederiz.",
          ],
        },
        {
          heading: "İçeriğin kullanımı",
          paragraphs: [
            "Sitedeki yazı, görsel ve diğer içerikler derneğe aittir. Kaynak göstermek koşuluyla alıntılanabilir; ticari amaçla kullanılamaz.",
          ],
        },
        {
          heading: "Formlar ve başvurular",
          paragraphs: [
            "Formlar aracılığıyla ilettiğiniz bilgilerin doğru olmasından siz sorumlusunuz. Gönüllü başvurularının kabulü derneğin değerlendirmesine bağlıdır.",
          ],
        },
        {
          heading: "Sorumluluk sınırı",
          paragraphs: [
            "Sitedeki bilgiler bilgilendirme amaçlıdır. İçerikte oluşabilecek hata veya eksikliklerden doğan dolaylı zararlardan dernek sorumlu tutulamaz.",
          ],
        },
        {
          heading: "Değişiklikler",
          paragraphs: [
            "Bu koşullar gerektiğinde güncellenebilir. Güncel sürüm her zaman bu sayfada yayımlanır.",
          ],
        },
      ]}
    />
  );
}
