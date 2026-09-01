export type CategorySlug =
  | "egitim-destegi"
  | "ilac-yardimi"
  | "tedavi-yardimi"
  | "kirtasiye-kitap"
  | "gida-destegi"
  | "sosyal-etkinlik";

export type Category = {
  slug: CategorySlug;
  name: string;
  description: string;
  icon: "book" | "pill" | "heart" | "backpack" | "basket" | "smile";
  image: string;
};

export const categories: Category[] = [
  {
    slug: "egitim-destegi",
    name: "Eğitim Desteği",
    description: "Okul masrafları, kurs ve özel ders ihtiyaçları için destek talepleri.",
    icon: "book",
    image: "/images/egitim.jpg",
  },
  {
    slug: "ilac-yardimi",
    name: "İlaç Yardımı",
    description: "Reçeteli ilaç, medikal malzeme ve düzenli tedavi giderleri.",
    icon: "pill",
    image: "/images/ilac.jpg",
  },
  {
    slug: "tedavi-yardimi",
    name: "Tedavi Yardımı",
    description: "Ameliyat, fizik tedavi, protez ve şehir dışı tedavi yol giderleri.",
    icon: "heart",
    image: "/images/tedavi.jpg",
  },
  {
    slug: "kirtasiye-kitap",
    name: "Kırtasiye & Kitap",
    description: "Defter, kitap, çanta ve okul kıyafeti ihtiyaçları.",
    icon: "backpack",
    image: "/images/kirtasiye.jpg",
  },
  {
    slug: "gida-destegi",
    name: "Gıda Desteği",
    description: "Aylık gıda kolisi ve temel ihtiyaç malzemeleri.",
    icon: "basket",
    image: "/images/gida.jpg",
  },
  {
    slug: "sosyal-etkinlik",
    name: "Sosyal Etkinlik",
    description: "Doğum günü, tiyatro, gezi ve moral etkinlikleri.",
    icon: "smile",
    image: "/images/sosyal.jpg",
  },
];

export const categoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);
