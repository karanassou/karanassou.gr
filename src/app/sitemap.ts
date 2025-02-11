import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://karanassou.gr",
      lastModified: "2024-09-01T14:49:41.300Z",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://karanassou.gr/about",
      lastModified: "2024-09-01T14:49:41.300Z",
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://karanassou.gr/contact",
      lastModified: "2024-09-01T14:49:41.300Z",
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: "https://karanassou.gr/projects",
      lastModified: "2024-09-01T14:49:41.300Z",
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];
}
