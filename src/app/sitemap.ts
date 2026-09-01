import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { requests } from "@/data/requests";
import { posts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/hakkimizda",
    "/yardim-talepleri",
    "/yardim-talebi-olustur",
    "/gonulluler",
    "/gonullu-ol",
    "/duyurular",
    "/bagis",
    "/iletisim",
    "/sikca-sorulan-sorular",
    "/gizlilik-politikasi",
    "/sartlar-kosullar",
    "/kvkk",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const requestRoutes = requests.map((r) => ({
    url: `${site.url}/yardim-talepleri/${r.slug}`,
    lastModified: new Date(r.createdAt),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${site.url}/duyurular/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...requestRoutes, ...postRoutes];
}
