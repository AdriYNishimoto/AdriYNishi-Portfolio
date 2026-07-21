import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { fontDisplay, fontSans, fontMono } from "@/lib/fonts";
import { getSiteUrl, personJsonLd, websiteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const url = getSiteUrl();
  const title = `${siteConfig.name} — ${t("title")}`;
  const description = t("description");

  return {
    metadataBase: new URL(url),
    title: { default: title, template: `%s · ${siteConfig.name}` },
    description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.links.github }],
    creator: siteConfig.name,
    alternates: {
      canonical: `/${locale}`,
      languages: { pt: "/pt", en: "/en", "x-default": "/pt" },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description,
      url: `${url}/${locale}`,
      locale: locale === "en" ? "en_US" : "pt_BR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations("common");
  const tm = await getTranslations("meta");
  const description = tm("description");

  return (
    <html
      lang={locale}
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <a
              href="#main"
              className="sr-only left-4 top-4 z-50 rounded-md bg-surface px-4 py-2 text-sm text-foreground shadow-lg outline-2 outline-accent focus:not-sr-only focus:absolute focus:outline"
            >
              {t("skipToContent")}
            </a>
            <Navbar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd(locale, description)),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd(locale, description)),
          }}
        />
      </body>
    </html>
  );
}
