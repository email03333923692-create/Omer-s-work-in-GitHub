import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getAllBlogMeta } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticRoutes = [
    "",
    "/player-profile",
    "/journey",
    "/stats",
    "/media",
    "/training",
    "/blog",
    "/sponsors",
    "/academies",
    "/contact",
    "/press-kit",
    "/about",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.7,
  }));

  const blogRoutes = getAllBlogMeta().map((m) => ({
    url: `${base}/blog/${m.slug}`,
    lastModified: new Date(m.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
