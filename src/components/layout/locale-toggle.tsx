"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LocaleToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("common");
  const target = locale === "pt" ? "en" : "pt";

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: target })}
      className="inline-flex h-10 items-center justify-center gap-1 rounded-md px-2.5 font-mono text-xs font-medium transition-colors hover:bg-surface-2"
    >
      <span className={cn(locale === "pt" ? "text-foreground" : "text-subtle")}>
        PT
      </span>
      <span className="text-border-strong">/</span>
      <span className={cn(locale === "en" ? "text-foreground" : "text-subtle")}>
        EN
      </span>
      {/* Keeps the visible text inside the accessible name (WCAG 2.5.3). */}
      <span className="sr-only">
        — {t("language")}: {target.toUpperCase()}
      </span>
    </button>
  );
}
