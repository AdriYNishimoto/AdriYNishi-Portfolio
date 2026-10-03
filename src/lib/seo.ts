import { siteConfig } from "@/config/site";

/** Absolute site URL — local in dev, the Vercel production domain once deployed. */
export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export function personJsonLd(locale: string, description: string) {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Adriano Yudi Ribas Nishimoto",
    alternateName: siteConfig.name,
    url: `${url}/${locale}`,
    image: `${url}${siteConfig.photo}`,
    email: `mailto:${siteConfig.email}`,
    jobTitle: locale === "en" ? "Early-career developer · Back-end" : siteConfig.role,
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Campo Grande",
      addressRegion: "MS",
      addressCountry: "BR",
    },
    alumniOf: [
      { "@type": "EducationalOrganization", name: "SENAC Hub Academy" },
    ],
    knowsLanguage: ["pt-BR", "en", "es", "ja"],
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
    ],
  };
}

export function websiteJsonLd(locale: string, description: string) {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} — ${siteConfig.role}`,
    url: `${url}/${locale}`,
    description,
    inLanguage: locale === "en" ? "en" : "pt-BR",
    author: { "@type": "Person", name: siteConfig.name },
  };
}
