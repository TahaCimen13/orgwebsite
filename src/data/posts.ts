/**
 * DUYURULAR
 * Yeni duyuru eklemek için listenin başına bir kayıt ekleyin.
 * `content` içindeki her satır ayrı bir paragraf olarak basılır.
 */
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: "Duyuru" | "Etkinlik" | "Farkındalık";
  readingTime: string;
  image: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "derman-dernegi-kuruldu",
    image: "/images/hakkimizda.jpg",
    title: "Derman Derneği kuruldu",
    excerpt:
      "Bir lise kulübünde başlayan dayanışma fikri, 2026 yılında resmî bir derneğe dönüştü.",
    date: "2026-09-01",
    tag: "Duyuru",
    readingTime: "2 dk",
    content: [
      "Derman Derneği, Yeşilköy Anadolu Lisesi Sosyal Sorumluluk ve Yardımlaşma Kulübü üyelerinin bir araya gelmesiyle 2026 yılında kuruldu.",
      "Kulüp olarak yürüttüğümüz çalışmalarda şunu gördük: yardım etmek isteyen çok insan var, yardıma ihtiyaç duyan çok insan var ve çoğu zaman eksik olan tek şey bu ikisini buluşturan bir yapı. Derneği de tam bu boşluğu doldurmak için kurduk.",
      "Önümüzdeki dönemde eğitim ve fırsat eşitliği, akran desteği ve farkındalık alanlarında yürüteceğimiz projeleri bu sayfadan duyuracağız. Bize katılmak isteyen herkesi gönüllü başvuru formumuzu doldurmaya davet ediyoruz.",
    ],
  },
  {
    slug: "akran-destek-atolyeleri-basvurulari",
    image: "/images/sinif.jpg",
    title: "Akran Destek Atölyeleri için başvurular açıldı",
    excerpt:
      "Derslerinde desteğe ihtiyaç duyan ve destek vermek isteyen öğrenciler için haftalık çalışma buluşmaları başlıyor.",
    date: "2026-09-10",
    tag: "Duyuru",
    readingTime: "2 dk",
    content: [
      "Akran Destek Atölyeleri, bir konuyu iyi bilen öğrencilerle o konuda desteğe ihtiyaç duyan yaşıtlarını küçük gruplar hâlinde bir araya getiriyor.",
      "Atölyelere hem destek almak hem destek vermek için başvurabilirsiniz. Konu başlıkları gelen talepler doğrultusunda belirlenecek, böylece buluşmalar gerçekten ihtiyaç duyulan yerde yapılacak.",
      "Katılım ücretsizdir ve kontenjan sınırlıdır. Başvuru için gönüllü formumuzu doldurmanız yeterli.",
    ],
  },
  {
    slug: "gonullu-tanisma-bulusmasi",
    image: "/images/gonulluler.jpg",
    title: "İlk gönüllü tanışma buluşmamıza davetlisiniz",
    excerpt:
      "Dernek çalışmalarına katılmak isteyen gönüllülerle tanışacağımız açık buluşmanın ayrıntıları.",
    date: "2026-09-20",
    tag: "Etkinlik",
    readingTime: "2 dk",
    content: [
      "Dernek olarak ilk gönüllü tanışma buluşmamızı düzenliyoruz. Buluşmada derneğin nasıl kurulduğunu, hangi alanlarda çalışmayı planladığımızı ve gönüllülerin bu çalışmalara nasıl katılabileceğini birlikte konuşacağız.",
      "Buluşma, daha önce hiç gönüllü çalışması yapmamış olanlar için de uygun. Herhangi bir ön hazırlık ya da deneyim gerekmiyor; merak etmeniz yeterli.",
      "Katılmak isterseniz gönüllü formundan ya da iletişim sayfamızdan bize ulaşabilirsiniz. Tarih ve yer bilgisini başvuran herkese ayrıca ileteceğiz.",
    ],
  },
  {
    slug: "dayanisma-neden-surekli-olmali",
    image: "/images/sosyal.jpg",
    title: "Dayanışma neden sürekli olmalı?",
    excerpt:
      "Yardımlaşmanın belirli günlere sıkışmak yerine günlük hayatın bir parçası hâline gelmesi üzerine kısa bir yazı.",
    date: "2026-09-25",
    tag: "Farkındalık",
    readingTime: "3 dk",
    content: [
      "Yardımlaşma çoğu zaman belirli zamanlarda hatırlanan bir şey oluyor: bir bayram, bir afet, bir özel gün. Oysa ihtiyaçlar o günlerle sınırlı değil.",
      "Sürekli olmayan destek, desteklenen kişi için de öngörülebilir olmuyor. Bir öğrencinin bir dönem boyunca ihtiyaç duyduğu desteğin tek bir haftaya sığdırılması, o desteğin etkisini büyük ölçüde azaltıyor.",
      "Bizim için dayanışmanın sürekli olması, büyük işler yapmak anlamına gelmiyor. Küçük ama düzenli bir katkının, seyrek ama büyük bir katkıdan daha çok işe yaradığını düşünüyoruz. Gönüllülüğü de bu yüzden herkesin kendi hayatına sığdırabileceği bir şey hâline getirmeye çalışıyoruz.",
    ],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

export const postsByDate = () => [...posts].sort((a, b) => b.date.localeCompare(a.date));
