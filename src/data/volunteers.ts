export type Volunteer = {
  /** Placeholder — gerçek isimlerle değiştirin */
  name: string;
  city: string;
  role: string;
  since: string;
  supported: number;
  areas: string[];
  quote: string;
};

export const volunteers: Volunteer[] = [
  {
    name: "[Ad Soyad]",
    city: "İstanbul",
    role: "Eğitim Gönüllüsü",
    since: "2023",
    supported: 14,
    areas: ["Eğitim Desteği", "Kırtasiye & Kitap"],
    quote: "Bir çocuğun gözündeki ışığı görmek, harcadığınız her dakikayı anlamlı kılıyor.",
  },
  {
    name: "[Ad Soyad]",
    city: "Ankara",
    role: "Saha Gönüllüsü",
    since: "2024",
    supported: 9,
    areas: ["Gıda Desteği", "Sosyal Etkinlik"],
    quote: "İyilik yapmak için çok şeye sahip olmak gerekmiyor; niyet ve zaman yetiyor.",
  },
  {
    name: "[Ad Soyad]",
    city: "İzmir",
    role: "Sağlık Danışmanı",
    since: "2023",
    supported: 27,
    areas: ["Tedavi Yardımı", "İlaç Yardımı"],
    quote: "Ailelere doğru bilgiyle yol göstermek, tedavinin en az ilaç kadar önemli parçası.",
  },
  {
    name: "[Ad Soyad]",
    city: "Bursa",
    role: "Kurumsal Destek",
    since: "2024",
    supported: 6,
    areas: ["Eğitim Desteği"],
    quote: "Şirketimizle birlikte destek olmak, ekibimizi de bir araya getirdi.",
  },
  {
    name: "[Ad Soyad]",
    city: "Gaziantep",
    role: "Etkinlik Gönüllüsü",
    since: "2025",
    supported: 11,
    areas: ["Sosyal Etkinlik", "Kırtasiye & Kitap"],
    quote: "Bir doğum günü organizasyonu bile bir çocuğun yılını değiştirebiliyor.",
  },
  {
    name: "[Ad Soyad]",
    city: "Konya",
    role: "Lojistik Gönüllüsü",
    since: "2023",
    supported: 22,
    areas: ["Gıda Desteği", "Tedavi Yardımı"],
    quote: "Yardımın ihtiyaç sahibine ulaştığı anı görmek paha biçilemez.",
  },
];

export const faqs = [
  {
    q: "Bağışlarım nereye ulaşıyor?",
    a: "Her bağış, seçtiğiniz yardım talebine doğrudan aktarılır. Genel bağışlar ise en acil taleplere yönlendirilir. Tüm dağılım yıllık şeffaflık raporumuzda kalem kalem yayımlanır.",
  },
  {
    q: "Gönüllü olmak için ne yapmalıyım?",
    a: "Gönüllü Ol formunu doldurmanız yeterli. Başvurunuz sonrası sizinle iletişime geçiyor, iki haftalık oryantasyon programımıza davet ediyoruz.",
  },
  {
    q: "Yardım talebi nasıl oluşturulur?",
    a: "İletişim sayfamızdaki formu doldurarak veya telefonla ulaşarak talebinizi iletebilirsiniz. Sosyal inceleme ekibimiz başvuruyu değerlendirir ve uygun bulunan talepler platformda yayımlanır.",
  },
  {
    q: "Kişisel bilgilerim güvende mi?",
    a: "İhtiyaç sahiplerinin kimlik bilgileri yayımlanmaz; yalnızca ad ve soyadın baş harfi gösterilir. Tüm veriler KVKK kapsamında işlenir ve üçüncü taraflarla paylaşılmaz.",
  },
  {
    q: "Bağışım için makbuz alabilir miyim?",
    a: "Evet. Banka havalesi veya kredi kartıyla yapılan tüm bağışlar için talep etmeniz halinde e-posta ile makbuz gönderiyoruz.",
  },
  {
    q: "Nakdi bağış dışında nasıl destek olabilirim?",
    a: "Kırtasiye, kitap, gıda gibi ayni bağışlar ve gönüllü zaman desteği de kabul ediyoruz. Kurumsal iş birlikleri için bize doğrudan yazabilirsiniz.",
  },
];
