import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { routing } from "@/i18n/routing";

export const alt = "Adriano Nishimoto — Back-end & Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0b",
          padding: "76px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 99,
              backgroundColor: "#818cf8",
              marginRight: 16,
            }}
          />
          <div
            style={{
              fontSize: 26,
              color: "#a1a1aa",
              letterSpacing: 2,
            }}
          >
            {siteConfig.name.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: "#ededed",
              lineHeight: 1.1,
              letterSpacing: -2,
            }}
          >
            {t("title")}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 30,
              color: "#a1a1aa",
            }}
          >
            C#/.NET · Python · Node/React
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 28,
            fontSize: 24,
            color: "#71717a",
          }}
        >
          <div style={{ display: "flex" }}>github.com/AdriYNishimoto</div>
          <div style={{ display: "flex", color: "#818cf8" }}>
            Campo Grande · Brasil
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
