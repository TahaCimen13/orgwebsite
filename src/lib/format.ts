export const formatNumber = (n: number) => new Intl.NumberFormat("tr-TR").format(n);

export const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));

export const formatMonthYear = (iso: string) =>
  new Intl.DateTimeFormat("tr-TR", { month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(iso)
  );
