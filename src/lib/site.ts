/**
 * Tüm site geneli metinler burada.
 * Köşeli parantezli alanlar PLACEHOLDER'dır — yayına almadan önce değiştirin.
 *
 * NOT: Dernek bağış toplamamaktadır. Bu dosyada ve site genelinde
 * para, bağış, IBAN veya tutar içeren hiçbir alan bulunmamalıdır.
 */
export const site = {
  name: "Derman",
  nameSuffix: "Derneği",
  legalName: "Derman Derneği",
  tagline: "Dayanışmayı gençlerle büyütüyoruz",
  description:
    "Genç dayanışmasını güçlendiren, imkân ve fırsat eşitsizliklerinin yarattığı engelleri azaltmayı amaçlayan bir gönüllülük ve yardımlaşma derneği.",
  url: "https://example.org.tr",
  domain: "example.org.tr",
  email: "[bilgi@dernekadresi.org]",
  phone: "+90 (000) 000 00 00",
  address: "[Mahalle] Mah. [Sokak] Sok. No: 00, [İlçe] / [Şehir]",
  workingHours: "Hafta içi 09.00 – 18.00",
  registryNo: "[00-000/000]",
  founded: 2026,
  /** Kurucu bilgisi — Hakkımızda > Tarihçe bölümünde kullanılır. */
  founder: "Asya Akbulut",
  foundingClub: "Yeşilköy Anadolu Lisesi Sosyal Sorumluluk ve Yardımlaşma Kulübü",
  social: {
    instagram: "https://instagram.com",
    x: "https://x.com",
    linkedin: "https://linkedin.com",
  },
};

export const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/projelerimiz", label: "Projelerimiz" },
  { href: "/duyurular", label: "Duyurular" },
  { href: "/iletisim", label: "İletişim" },
];

/** Misyon ve vizyon — Hakkımızda sayfasının ve ana sayfanın ortak kaynağı. */
export const mission = {
  title: "Misyonumuz",
  lead: "Genç dayanışmasını güçlendirmek, imkân ve fırsat eşitsizliklerinin yarattığı engelleri azaltmak ve toplumun farklı kesimlerinde yardıma ihtiyaç duyan insanlara ulaşmak temel misyonumuzdur.",
  paragraphs: [
    "Sosyal yardımlaşma, farkındalık ve dayanışmayı merkeze alarak farklı alanlarda çalışmalar yürütüyor; hem yardıma ihtiyaç duyan hem de yardım etmek isteyen insanları bir araya getiren kapsayıcı bir dayanışma ortamı oluşturmayı amaçlıyoruz.",
    "Gönüllülüğü ve yardımlaşmayı daha erişilebilir, sürdürülebilir ve herkesin katkı sunabileceği bir hâle getirerek gençlerin kendi çevrelerinde karşılaştıkları sorunlara duyarlılıkla yaklaşmalarını ve bu sorunlara yönelik harekete geçmelerini destekliyoruz.",
    "Birlikte üreten, paylaşan ve çözüm geliştiren bir dayanışma kültürünün güçlenmesine katkı sağlamayı hedefliyoruz.",
  ],
};

export const vision = {
  title: "Vizyonumuz",
  lead: "Yardımlaşmanın yalnızca belirli zamanlarda veya belirli gruplar arasında gerçekleştiği değil, toplumun günlük yaşamının doğal ve sürekli bir parçası hâline geldiği daha dayanışmacı, kapsayıcı ve eşitlikçi bir gelecek hayal ediyoruz.",
  paragraphs: [
    "Gençlerin toplumsal değişimin aktif bir parçası olduğu, bireylerin sahip oldukları imkânları ve yetenekleri toplumsal faydaya dönüştürebildiği güçlü bir dayanışma kültürünün yaygınlaşmasına katkı sağlamayı amaçlıyoruz.",
    "Özellikle bizim gibi çabalayan ve çevresinde gördüğü sorunlara karşı harekete geçmek isteyen gençler için bir kıvılcım olmak; bu kıvılcımın yeni fikirleri, yeni dayanışmaları ve daha büyük toplumsal katkıları harekete geçirdiği bir yapı oluşturmak vizyonumuzun temelini oluşturmaktadır.",
  ],
};

/** Tarihçe — kullanıcı tarafından verilen kuruluş metni. */
export const history = {
  title: "Tarihçemiz",
  text: `Derman Derneği 2026 yılında ${site.foundingClub} başkanı ${site.founder} ve diğer kulüp üyeleri tarafından kurulmuştur.`,
};
