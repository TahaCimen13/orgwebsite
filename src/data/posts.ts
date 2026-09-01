export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: "Duyuru" | "Etkinlik" | "Farkındalık" | "Kampanya";
  readingTime: string;
  image: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "acil-kan-bagisi-cagrisi",
    image: "/images/tedavi.jpg",
    title: "Acil kan bağışı çağrısı: 0 Rh (-) aranıyor",
    excerpt:
      "Tedavisi süren iki çocuğumuz için 0 Rh (-) kan grubuna acil ihtiyacımız var. Bağış yapabilecek gönüllüleri bekliyoruz.",
    date: "2026-08-25",
    tag: "Duyuru",
    readingTime: "2 dk",
    content: [
      "Tedavi süreci devam eden iki çocuğumuz için 0 Rh (-) kan grubuna acil ihtiyaç duyuyoruz.",
      "Bağış yapmak isteyen gönüllülerimizin, iletişim formundan veya telefonla bize ulaşarak randevu oluşturmasını rica ediyoruz. Bağış öncesi son 48 saatte ağır egzersiz yapılmaması ve yeterli sıvı tüketilmesi öneriliyor.",
      "Her bağış üç hayata dokunuyor. Duyurumuzu paylaşarak da destek olabilirsiniz.",
    ],
  },
  {
    slug: "erken-teshis-hayat-kurtarir",
    image: "/images/ilac.jpg",
    title: "Erken teşhis hayat kurtarır",
    excerpt:
      "Çocukluk çağı hastalıklarında erken teşhisin önemi ve ailelerin dikkat etmesi gereken belirtiler üzerine bir rehber.",
    date: "2026-08-18",
    tag: "Farkındalık",
    readingTime: "4 dk",
    content: [
      "Çocukluk çağında görülen birçok hastalıkta tedavi başarısı, teşhisin ne kadar erken konulduğuyla doğrudan ilişkili.",
      "Uzun süren ateş, açıklanamayan halsizlik, iştahsızlık, gece terlemeleri ve geçmeyen ağrılar gibi belirtilerin ihmal edilmemesi gerekiyor.",
      "Düzenli çocuk sağlığı kontrollerini aksatmamak, ailelerin yapabileceği en etkili koruyucu adım. Şüpheli bir durumda vakit kaybetmeden bir uzmana başvurun.",
    ],
  },
  {
    slug: "okula-merhaba-kampanyasi-basladi",
    image: "/images/kirtasiye.jpg",
    title: "\"Okula Merhaba\" kampanyası başladı",
    excerpt:
      "Yeni eğitim öğretim yılı için 500 çocuğa kırtasiye ve okul kıyafeti ulaştırmayı hedefliyoruz.",
    date: "2026-08-12",
    tag: "Kampanya",
    readingTime: "3 dk",
    content: [
      "Her yıl olduğu gibi bu yıl da yeni eğitim öğretim dönemine hazırlanıyoruz. Hedefimiz 500 çocuğa tam donanımlı okul seti ulaştırmak.",
      "Bir okul seti; çanta, kırtasiye malzemeleri, defter seti ve okul kıyafetinden oluşuyor. Tek bir set ile bir çocuğun tüm yıl ihtiyacını karşılayabilirsiniz.",
      "Kampanyaya destek olmak için bağış sayfamızı ziyaret edebilir veya kırtasiye desteği kategorisindeki taleplere doğrudan katkı sunabilirsiniz.",
    ],
  },
  {
    slug: "gonullu-egitim-programi-2026",
    image: "/images/gonulluler.jpg",
    title: "2026 Gönüllü Eğitim Programı kayıtları açıldı",
    excerpt:
      "Yeni gönüllülerimiz için düzenlediğimiz iki haftalık oryantasyon programının kayıtları başladı.",
    date: "2026-08-05",
    tag: "Etkinlik",
    readingTime: "2 dk",
    content: [
      "Gönüllülerimizin sahada daha güçlü destek verebilmesi için iki haftalık bir oryantasyon programı düzenliyoruz.",
      "Program; hastane ziyaret kuralları, çocukla iletişim, mahremiyet ve kişisel veri güvenliği başlıklarını kapsıyor.",
      "Katılım ücretsizdir. Kontenjan sınırlıdır; başvuru için gönüllü ol formunu doldurmanız yeterli.",
    ],
  },
  {
    slug: "seffaflik-raporu-2025",
    image: "/images/market.jpg",
    title: "2025 Şeffaflık ve Faaliyet Raporu yayımlandı",
    excerpt:
      "Geçtiğimiz yıl toplanan bağışların nereye harcandığını kalem kalem paylaştığımız raporumuz erişime açıldı.",
    date: "2026-07-22",
    tag: "Duyuru",
    readingTime: "5 dk",
    content: [
      "2025 yılında toplanan tüm bağışların dağılımını, gider kalemlerini ve ulaşılan kişi sayılarını içeren raporumuz yayımlandı.",
      "Bağışların %92'si doğrudan ihtiyaç sahiplerine, %8'i operasyonel giderlere aktarıldı.",
      "Raporun tamamına iletişim adresimizden ulaşabilir, sorularınızı bize iletebilirsiniz.",
    ],
  },
  {
    slug: "iyilik-bahcesi-atolyesi",
    image: "/images/sosyal.jpg",
    title: "İyilik Bahçesi atölyesi: çocuklarla birlikte üretiyoruz",
    excerpt:
      "Ayda bir düzenlediğimiz sanat ve doğa atölyesinin bu ayki teması tohumdan fidana.",
    date: "2026-07-10",
    tag: "Etkinlik",
    readingTime: "2 dk",
    content: [
      "İyilik Bahçesi atölyelerimizde çocuklar hem üretiyor hem de birlikte vakit geçirmenin iyileştirici gücünü keşfediyor.",
      "Bu ayki atölyemizde tohum ekimi, saksı boyama ve doğa gözlemi etkinlikleri yer alacak.",
      "Atölyeye gönüllü olarak katılmak isteyenler gönüllü ol formundan başvurabilir.",
    ],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
