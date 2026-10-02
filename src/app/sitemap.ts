import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/url";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const staticRoutes = [
    "",
    "/hakkimizda",
    "/projelerimiz",
    "/duyurular",
    "/gonullu-ol",
    "/iletisim",
    "/sikca-sorulan-sorular",
    "/gizlilik-politikasi",
    "/sartlar-kosullar",
    "/kvkk",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projelerimiz/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${base}/duyurular/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...postRoutes];
}
