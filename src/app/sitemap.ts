import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/url";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const now = new Date();

  const staticRoutes = [
    "",
    "/hakkimizda",
    "/projelerimiz",
    "/gonullu-ol",
    "/iletisim",
    "/sikca-sorulan-sorular",
    "/gizlilik-politikasi",
    "/sartlar-kosullar",
    "/kvkk",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projelerimiz/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
