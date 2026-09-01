import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalContent";

export const metadata: Metadata = {
  title: "Şartlar ve Koşullar",
  description: "Platformumuzun kullanım şartları, bağış ve talep süreçlerine ilişkin kurallar.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Yasal"
      title="Şartlar ve Koşullar"
      description="Bu platformu kullanarak aşağıdaki şartları kabul etmiş sayılırsınız."
      updatedAt="1 Ağustos 2026"
      sections={[
        {
          heading: "Genel hükümler",
          paragraphs: [
            "Bu web sitesi, ihtiyaç sahipleri ile gönüllü destekçileri buluşturmak amacıyla işletilmektedir. Site üzerinden yürütülen tüm faaliyetler dernek tüzüğü ve yürürlükteki mevzuata tabidir.",
          ],
        },
        {
          heading: "Yardım talepleri",
          paragraphs: [
            "Platformda yayımlanan tüm talepler, yayına alınmadan önce sosyal inceleme ekibimizce değerlendirilir ve belgelenir.",
            "Gerçeğe aykırı beyanda bulunulduğunun tespiti hâlinde talep kaldırılır ve gerekli hâllerde hukuki süreç başlatılır.",
          ],
        },
        {
          heading: "Bağışlar",
          paragraphs: [
            "Bağışlar, bağışçının belirlediği alana yönlendirilir. Alan belirtilmemişse en acil ihtiyaçlara aktarılır.",
            "Hedefine ulaşan bir talebe gelen fazla bağış, bağışçı aksini belirtmedikçe aynı kategorideki diğer taleplere aktarılır.",
            "Yapılan bağışlar kural olarak iade edilmez; sehven yapılan işlemler için bizimle iletişime geçebilirsiniz.",
          ],
        },
        {
          heading: "Gönüllülük",
          paragraphs: [
            "Gönüllüler, faaliyetleri sırasında öğrendikleri kişisel bilgileri üçüncü kişilerle paylaşmamayı taahhüt eder.",
            "Gönüllülük ilişkisi bir iş akdi niteliği taşımaz ve karşılıklı olarak her zaman sonlandırılabilir.",
          ],
        },
        {
          heading: "Sorumluluk sınırı",
          paragraphs: [
            "Destekçi ile ihtiyaç sahibi arasında platform dışında kurulan doğrudan ilişkilerden doğan sonuçlardan derneğimiz sorumlu tutulamaz.",
          ],
        },
      ]}
    />
  );
}
