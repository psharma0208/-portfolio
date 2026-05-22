import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // If you later add a custom domain, you can set `metadataBase` in `app/layout.tsx`.
  return [
    {
      url: "/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

