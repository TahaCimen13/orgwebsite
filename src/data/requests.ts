import type { CategorySlug } from "./categories";

export type HelpRequest = {
  slug: string;
  title: string;
  person: string;
  age?: number;
  city: string;
  category: CategorySlug;
  summary: string;
  story: string[];
  needs: string[];
  target: number;
  collected: number;
  urgency: "acil" | "normal";
  image: string;
  createdAt: string;
  supporters: number;
};

export const requests: HelpRequest[] = [
  {
    slug: "elifin-okul-hazirligi",
    image: "/images/kirtasiye.jpg",
    title: "Elif'in okul hazırlığı için destek",
    person: "Elif A.",
    age: 9,
    city: "İstanbul",
    category: "kirtasiye-kitap",
    summary:
      "Tedavisi sürerken derslerinden geri kalmak istemeyen Elif'in kırtasiye ve kitap ihtiyacı karşılanmayı bekliyor.",
    story: [
      "Elif, iki yıldır devam eden tedavi sürecine rağmen okulunu hiç aksatmadı. Hastane odasında bile ödevlerini yapmayı sürdürdü.",
      "Ailesi tedavi masrafları nedeniyle bu yılın okul hazırlığını karşılamakta zorlanıyor. Elif'in yeni dönemde ihtiyaç duyduğu kırtasiye, kitap ve okul kıyafeti için destek arıyoruz.",
    ],
    needs: ["Kırtasiye seti", "Ders kitapları ve yardımcı kaynaklar", "Okul çantası", "Okul kıyafeti"],
    target: 6500,
    collected: 4200,
    urgency: "normal",
    createdAt: "2026-08-14",
    supporters: 17,
  },
  {
    slug: "yusufun-aylik-ilac-ihtiyaci",
    image: "/images/ilac.jpg",
    title: "Yusuf'un aylık ilaç ihtiyacı",
    person: "Yusuf K.",
    age: 6,
    city: "Ankara",
    category: "ilac-yardimi",
    summary:
      "Düzenli kullanması gereken ve bir kısmı ödeme kapsamı dışında kalan ilaçlar için aylık destek aranıyor.",
    story: [
      "Yusuf'un tedavi protokolünde yer alan ilaçların bir bölümü geri ödeme kapsamında değil ve her ay düzenli olarak temin edilmesi gerekiyor.",
      "Ailesi tek gelirle geçiniyor. Tedavinin aksamaması için altı aylık ilaç desteğine ihtiyaç var.",
    ],
    needs: ["6 aylık reçeteli ilaç", "Medikal sarf malzemesi"],
    target: 18000,
    collected: 15300,
    urgency: "acil",
    createdAt: "2026-08-19",
    supporters: 41,
  },
  {
    slug: "zeynep-fizik-tedavi",
    image: "/images/tedavi.jpg",
    title: "Zeynep'in fizik tedavi süreci",
    person: "Zeynep D.",
    age: 12,
    city: "İzmir",
    category: "tedavi-yardimi",
    summary:
      "Ameliyat sonrası haftada üç gün devam etmesi gereken fizik tedavi ve ulaşım giderleri için destek.",
    story: [
      "Zeynep, geçirdiği ameliyatın ardından yeniden yürüyebilmek için haftada üç gün fizik tedaviye gidiyor.",
      "Tedavi merkezi şehir dışında olduğu için ulaşım masrafları aileyi zorluyor. Üç aylık tedavi ve ulaşım desteği arıyoruz.",
    ],
    needs: ["3 aylık fizik tedavi seansları", "Şehirler arası ulaşım", "Ortopedik destek malzemesi"],
    target: 24000,
    collected: 9800,
    urgency: "acil",
    createdAt: "2026-08-08",
    supporters: 26,
  },
  {
    slug: "mehmet-universite-hazirlik",
    image: "/images/sinif.jpg",
    title: "Mehmet'in üniversite hazırlık desteği",
    person: "Mehmet S.",
    age: 17,
    city: "Bursa",
    category: "egitim-destegi",
    summary:
      "Tedavisi tamamlanan Mehmet, üniversite sınavına hazırlanmak için kurs ve kaynak desteği bekliyor.",
    story: [
      "Üç yıllık tedavi sürecini geride bırakan Mehmet, kaybettiği zamanı telafi ederek tıp fakültesini hedefliyor.",
      "Bir yıllık hazırlık kursu ve kaynak kitap desteği ile hedefine bir adım daha yaklaşabilir.",
    ],
    needs: ["1 yıllık hazırlık kursu", "Kaynak kitap seti", "Deneme sınavı paketi"],
    target: 32000,
    collected: 12500,
    urgency: "normal",
    createdAt: "2026-07-29",
    supporters: 33,
  },
  {
    slug: "ayse-teyzenin-gida-kolisi",
    image: "/images/market.jpg",
    title: "Ayşe Teyze'nin aylık gıda kolisi",
    person: "Ayşe Y.",
    age: 68,
    city: "Gaziantep",
    category: "gida-destegi",
    summary:
      "Torunlarına tek başına bakan Ayşe Teyze için düzenli gıda ve temel ihtiyaç kolisi desteği.",
    story: [
      "Ayşe Teyze, iki torununa tek başına bakıyor ve düzenli bir geliri bulunmuyor.",
      "Aylık gıda kolisi desteği ile ailenin temel ihtiyaçları güvence altına alınabilir.",
    ],
    needs: ["Aylık gıda kolisi (6 ay)", "Temizlik malzemesi", "Kışlık yakacak"],
    target: 12000,
    collected: 11100,
    urgency: "normal",
    createdAt: "2026-08-02",
    supporters: 22,
  },
  {
    slug: "kucuk-kasiflerin-muze-gezisi",
    image: "/images/sosyal.jpg",
    title: "Küçük Kâşifler müze gezisi",
    person: "24 çocuk",
    city: "İstanbul",
    category: "sosyal-etkinlik",
    summary:
      "Tedavi gören 24 çocuk için bilim müzesi gezisi: ulaşım, giriş ve ikram giderleri.",
    story: [
      "Ayda bir düzenlediğimiz moral etkinliklerinin bu ayki durağı bilim müzesi.",
      "24 çocuk ve refakatçileri için ulaşım, giriş ücreti ve ikram giderlerine destek arıyoruz.",
    ],
    needs: ["Otobüs kiralama", "Müze giriş ücretleri", "İkram ve hediye seti"],
    target: 15000,
    collected: 6400,
    urgency: "normal",
    createdAt: "2026-08-21",
    supporters: 19,
  },
  {
    slug: "emirin-isitme-cihazi",
    image: "/images/hakkimizda.jpg",
    title: "Emir'in işitme cihazı ihtiyacı",
    person: "Emir T.",
    age: 4,
    city: "Konya",
    category: "tedavi-yardimi",
    summary:
      "Konuşma gelişimi için acilen işitme cihazına ihtiyaç duyan Emir'in cihaz bedeli toplanıyor.",
    story: [
      "Emir'in işitme kaybı erken teşhis edildi. Doğru cihazla konuşma gelişimini yakalayabilecek.",
      "Cihazın kurum katkısı dışında kalan bedeli için desteğinize ihtiyacımız var.",
    ],
    needs: ["Çift taraflı işitme cihazı", "6 aylık dil ve konuşma terapisi"],
    target: 45000,
    collected: 38700,
    urgency: "acil",
    createdAt: "2026-08-11",
    supporters: 58,
  },
  {
    slug: "sinifimiza-kitaplik",
    image: "/images/egitim.jpg",
    title: "Köy okuluna sınıf kitaplığı",
    person: "Yıldız İlkokulu",
    city: "Van",
    category: "egitim-destegi",
    summary:
      "42 öğrencinin okuduğu köy okuluna sınıf kitaplığı ve okuma seti kazandırmak istiyoruz.",
    story: [
      "Yıldız İlkokulu'nda 42 öğrenci eğitim görüyor ancak okulda ortak kullanılan bir kitaplık yok.",
      "Yaş gruplarına uygun kitap seti ve raf sistemi ile kalıcı bir okuma alanı oluşturulacak.",
    ],
    needs: ["300 adet çocuk kitabı", "Kitaplık rafları", "Okuma köşesi malzemeleri"],
    target: 28000,
    collected: 5200,
    urgency: "normal",
    createdAt: "2026-08-24",
    supporters: 11,
  },
];

export const requestBySlug = (slug: string) => requests.find((r) => r.slug === slug);
