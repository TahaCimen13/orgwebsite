export const formatTRY = (n: number) =>
  new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(n);

export const formatNumber = (n: number) => new Intl.NumberFormat("tr-TR").format(n);

export const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));

export const percent = (collected: number, target: number) =>
  Math.min(100, Math.round((collected / target) * 100));
