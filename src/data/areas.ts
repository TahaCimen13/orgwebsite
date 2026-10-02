/** Çalışma alanları — projeler bu alanlara göre gruplanır ve filtrelenir. */
export type AreaSlug =
  | "egitim-firsat"
  | "akran-destegi"
  | "farkindalik"
  | "sosyal-destek"
  | "topluluk"
  | "gonulluluk";

export type Area = {
  slug: AreaSlug;
  name: string;
  description: string;
  icon: "book" | "users" | "spark" | "hand" | "smile" | "heart";
  image: string;
};

export const areas: Area[] = [
  {
    slug: "egitim-firsat",
    name: "Eğitim ve Fırsat Eşitliği",
    description:
      "Kaynaklara erişimi kısıtlı öğrencilerin eğitim yolculuğunda karşılaştığı engelleri azaltmaya yönelik çalışmalar.",
    icon: "book",
    image: "/images/egitim.jpg",
  },
  {
    slug: "akran-destegi",
    name: "Akran Desteği",
    description:
      "Gençlerin bilgi ve deneyimlerini yaşıtlarıyla paylaştığı ders, rehberlik ve mentorluk buluşmaları.",
    icon: "users",
    image: "/images/sinif.jpg",
  },
  {
    slug: "farkindalik",
    name: "Farkındalık Çalışmaları",
    description:
      "Toplumsal sorunları görünür kılan söyleşi, atölye ve bilgilendirme çalışmaları.",
    icon: "spark",
    image: "/images/hakkimizda.jpg",
  },
  {
    slug: "sosyal-destek",
    name: "Sosyal Destek",
    description:
      "Yardıma ihtiyaç duyan insanlara ulaşmayı ve onlarla dayanışma kurmayı hedefleyen saha çalışmaları.",
    icon: "hand",
    image: "/images/gida.jpg",
  },
  {
    slug: "topluluk",
    name: "Topluluk Buluşmaları",
    description:
      "Birlikte vakit geçirmeyi, üretmeyi ve paylaşmayı merkeze alan sosyal etkinlikler.",
    icon: "smile",
    image: "/images/sosyal.jpg",
  },
  {
    slug: "gonulluluk",
    name: "Gönüllülük",
    description:
      "Gönüllülüğü daha erişilebilir ve sürdürülebilir kılmaya yönelik eğitim ve organizasyon çalışmaları.",
    icon: "heart",
    image: "/images/gonulluler.jpg",
  },
];

export const areaBySlug = (slug: string) => areas.find((a) => a.slug === slug);
