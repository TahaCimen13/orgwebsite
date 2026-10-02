/**
 * KURUCU EKİP
 * Kulüp üyelerinin adlarını ekleyin. Köşeli parantezli alanlar PLACEHOLDER'dır.
 * 18 yaşından küçük üyelerin tam adını yayımlamadan önce veli onayı aldığınızdan emin olun.
 */
export type Member = {
  name: string;
  role: string;
  /** Baş harfler — fotoğraf yerine rozet olarak gösterilir */
  initials?: string;
};

export const team: Member[] = [
  { name: "Asya Akbulut", role: "Kurucu ve Kulüp Başkanı" },
  { name: "[Ad Soyad]", role: "Kurucu Üye" },
  { name: "[Ad Soyad]", role: "Kurucu Üye" },
  { name: "[Ad Soyad]", role: "Kurucu Üye" },
];

/** Baş harfleri ad soyaddan üretir — "[Ad Soyad]" gibi placeholder'lar için "?" döner. */
export const initialsOf = (name: string) => {
  if (name.startsWith("[")) return "?";
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toLocaleUpperCase("tr"))
    .join("");
};
