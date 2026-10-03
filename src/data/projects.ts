import type { AreaSlug } from "./areas";

/**
 * PROJE TİPİ
 *
 * Projeler artık Supabase'de tutuluyor ve /admin panelinden yönetiliyor.
 * Bu dosya yalnızca tip tanımını ve yeni bir kurulumu doldurmak için
 * kullanılan başlangıç verisini içerir (bkz. scripts/seed.ts).
 */
export type Project = {
  id?: string;
  /** URL'de görünen ad — küçük harf, Türkçe karakter yok, boşluk yerine tire */
  slug: string;
  title: string;
  area: AreaSlug;
  /** Kartlarda görünen 1–2 cümlelik özet */
  summary: string;
  /** Detay sayfasındaki anlatım — her madde bir paragraf */
  body: string[];
  /** Kapak görseli (Supabase Storage veya /images/... yolu) */
  image: string | null;
  /** Detay sayfasındaki galeri görselleri */
  gallery: string[];
  /** Ana sayfada öne çıkarılsın mı */
  featured: boolean;
  /** Küçük sayı önce listelenir */
  position: number;
};

/** Veritabanından gelen satırı uygulama tipine çevirir. */
export type ProjectRow = {
  id: string;
  slug: string;
  title: string;
  area: string;
  summary: string;
  body: string[] | null;
  image: string | null;
  gallery: string[] | null;
  featured: boolean;
  position: number;
};

export function rowToProject(row: ProjectRow): Project {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    area: row.area as AreaSlug,
    summary: row.summary,
    body: row.body ?? [],
    image: row.image,
    gallery: row.gallery ?? [],
    featured: row.featured,
    position: row.position,
  };
}

/**
 * Boş bir veritabanını doldurmak için başlangıç verisi.
 * `npm run seed` bunları bir kez yükler. Kendi projelerinizi
 * ekledikten sonra bu listeyi boşaltabilirsiniz.
 */
export const baslangicProjeleri: Omit<Project, "id">[] = [
  {
    slug: "okul-cantamda-bir-kitap",
    title: "Okul Çantamda Bir Kitap",
    area: "egitim-firsat",
    image: "/images/kirtasiye.jpg",
    gallery: ["/images/egitim.jpg", "/images/sinif.jpg"],
    featured: true,
    position: 0,
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
    position: 1,
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
    position: 2,
    summary:
      "Gençlerin kendi çevrelerinde gördükleri sorunları görünür kıldığı söyleşi ve atölye dizisi.",
    body: [
      "Mahallemde Farkındalık, bir sorunu çözmenin ilk adımının onu konuşulabilir hâle getirmek olduğu düşüncesiyle kuruldu. Dizide gençler kendi çevrelerinde fark ettikleri bir meseleyi seçip üzerine birlikte çalışıyor.",
      "Her buluşmada seçilen başlık önce katılımcılarla birlikte araştırılıyor, ardından mahalledeki insanlarla paylaşılabilecek sade bir anlatıma dönüştürülüyor.",
      "Dizinin amacı yalnızca bilgi aktarmak değil; bir sorunu fark eden gencin onunla ilgili bir şey yapabileceğini görmesini sağlamak.",
    ],
  },
];
