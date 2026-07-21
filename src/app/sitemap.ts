import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { projects } from "@/content/projects";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = getSiteUrl();

  const home = routing.locales.map((locale) => ({
    url: `${url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${url}/${l}`]),
      ),
    },
  }));

  const projectPages = routing.locales.flatMap((locale) =>
    projects.map((project) => ({
      url: `${url}/${locale}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  );

  return [...home, ...projectPages];
}
