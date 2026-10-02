import type { AreaSlug } from "./areas";

/**
 * PROJELER
 * ─────────────────────────────────────────────────────────────
 * Aşağıdaki kayıtlar ÖRNEKTİR. Kendi projelerinizi eklerken:
 *   1. Fotoğrafları `public/images/` içine koyun (ör. kitap-atolyesi.jpg)
 *   2. `image` alanına kapak fotoğrafını, `gallery` alanına diğerlerini yazın
 *   3. `body` içindeki her satır ayrı bir paragraf olarak basılır
 *
 * Projeler bu dosyadaki sıraya göre listelenir; en üstteki en başta görünür.
 *
 * Dernek bağış toplamadığı için bu dosyada tutar, hedef, bağış veya
 * IBAN gibi para ile ilgili HİÇBİR alan bulunmaz.
 *
 * Dosyanın sonunda kopyalayıp doldurabileceğiniz boş bir şablon var.
 */

export type Project = {
  /** URL'de görünen ad — küçük harf, Türkçe karakter yok, boşluk yerine tire */
  slug: string;
  title: string;
  area: AreaSlug;
  /** Kartlarda görünen 1–2 cümlelik özet */
  summary: string;
  /** Detay sayfasındaki anlatım — her madde bir paragraf */
  body: string[];
  /** Kapak fotoğrafı — public/images/ içindeki yol */
  image: string;
  /** Detay sayfasındaki galeri fotoğrafları */
  gallery?: string[];
  /** Ana sayfada öne çıkarılsın mı */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "okul-cantamda-bir-kitap",
    title: "Okul Çantamda Bir Kitap",
    area: "egitim-firsat",
    image: "/images/kirtasiye.jpg",
    gallery: ["/images/egitim.jpg", "/images/sinif.jpg"],
    featured: true,
    summary:
      "Okuma kültürünü yaygınlaştırmak ve kitaba erişimi kolaylaştırmak için öğrencilerin kendi aralarında kurduğu bir kitap paylaşım ağı.",
    body: [
      "Okul Çantamda Bir Kitap, öğrencilerin okudukları kitapları birbirleriyle paylaşabildiği açık bir dolaşım ağı kurmayı hedefliyor. Amaç, kitaba erişimin bir imkân meselesi olmaktan çıkıp herkesin ulaşabileceği bir şeye dönüşmesi.",
      "Projede okul içinde kurulan paylaşım raflarıyla öğrenciler okudukları kitabı bırakıp yeni bir kitap alabiliyor. Böylece hem kitaplar sürekli dolaşımda kalıyor hem de öğrenciler birbirlerine kitap öneren bir topluluk kuruyor.",
      "Çalışmanın ikinci aşamasında, paylaşım ağının çevredeki diğer okullara da yaygınlaştırılması planlanıyor.",
    ],
  },
  {
    slug: "akran-destek-atolyeleri",
    title: "Akran Destek Atölyeleri",
    area: "akran-destegi",
    image: "/images/sinif.jpg",
    gallery: ["/images/egitim.jpg"],
    featured: true,
    summary:
      "Derslerinde desteğe ihtiyaç duyan öğrencilerle, o konuda güçlü olan yaşıtlarını bir araya getiren düzenli çalışma buluşmaları.",
    body: [
      "Akran Destek Atölyeleri, bir öğrencinin iyi bildiği bir konuyu yaşıtına anlatmasının hem anlatana hem dinleyene iyi geldiği fikrinden doğdu. Burada kimse öğretmen, kimse öğrenci değil; herkes sırayla ikisi oluyor.",
      "Atölyeler küçük gruplar hâlinde yürütülüyor. Konu başlıkları öğrencilerin kendi talepleriyle belirleniyor, böylece gerçekten ihtiyaç duyulan yerde destek sağlanıyor.",
      "Ders desteğinin yanı sıra buluşmalarda sınav dönemlerinde başa çıkma, çalışma planı kurma ve kaygıyla ilgili deneyim paylaşımına da yer veriliyor.",
    ],
  },
  {
    slug: "mahallemde-farkindalik",
    title: "Mahallemde Farkındalık",
    area: "farkindalik",
    image: "/images/hakkimizda.jpg",
    gallery: ["/images/sosyal.jpg"],
    featured: true,
    summary:
      "Gençlerin kendi çevrelerinde gördükleri sorunları görünür kıldığı söyleşi ve atölye dizisi.",
    body: [
      "Mahallemde Farkındalık, bir sorunu çözmenin ilk adımının onu konuşulabilir hâle getirmek olduğu düşüncesiyle kuruldu. Dizide gençler kendi çevrelerinde fark ettikleri bir meseleyi seçip üzerine birlikte çalışıyor.",
      "Her buluşmada seçilen başlık önce katılımcılarla birlikte araştırılıyor, ardından mahalledeki insanlarla paylaşılabilecek sade bir anlatıma dönüştürülüyor.",
      "Dizinin amacı yalnızca bilgi aktarmak değil; bir sorunu fark eden gencin onunla ilgili bir şey yapabileceğini görmesini sağlamak.",
    ],
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);

export const featuredProjects = () => projects.filter((p) => p.featured);

export const projectCountByArea = (area: string) =>
  projects.filter((p) => p.area === area).length;

/* ─────────────────────────────────────────────────────────────
   YENİ PROJE ŞABLONU — kopyalayıp yukarıdaki listeye ekleyin:

  {
    slug: "proje-adi",
    title: "Proje Adı",
    area: "egitim-firsat",            // areas.ts içindeki alanlardan biri
    image: "/images/kapak.jpg",
    gallery: ["/images/foto-1.jpg", "/images/foto-2.jpg"],
    featured: true,                   // ana sayfada görünsün mü
    summary: "Kartta görünecek kısa özet.",
    body: [
      "Birinci paragraf.",
      "İkinci paragraf.",
    ],
  },
   ───────────────────────────────────────────────────────────── */
