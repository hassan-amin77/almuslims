import { MetadataRoute } from "next";
import { articles, getArticleUrl } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://almuslims.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}` },
    { url: `${baseUrl}/categories` },
    { url: `${baseUrl}/holy-quran` },
    { url: `${baseUrl}/dua-collection` },
    { url: `${baseUrl}/seerah` },
    { url: `${baseUrl}/names-of-allah` },
    { url: `${baseUrl}/prayer-times` },
    { url: `${baseUrl}/about-us` },
    { url: `${baseUrl}/contact` },
    { url: `${baseUrl}/privacy-policy` },
    { url: `${baseUrl}/terms-and-conditions` },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}${getArticleUrl(article)}`,
  }));

  return [...staticRoutes, ...articleRoutes];
}

