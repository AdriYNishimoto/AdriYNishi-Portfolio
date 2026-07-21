"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { siteConfig, navItems } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { LocaleToggle } from "./locale-toggle";

export function Navbar() {
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cvHref = locale === "pt" ? siteConfig.cv.pt : siteConfig.cv.en;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8"
        aria-label={t("openMenu")}
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={siteConfig.name}
        >
          <span
            className="font-jp text-lg text-foreground transition-colors group-hover:text-accent"
            lang="ja"
          >
            西本
          </span>
          <span className="hidden text-sm font-medium text-muted sm:inline">
            {siteConfig.name}
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              {t(item.id)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-0.5">
          <LocaleToggle />
          <ThemeToggle />
          <a
            href={cvHref}
            download
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "ml-1.5 hidden lg:inline-flex",
            )}
          >
            {tc("downloadCv")}
          </a>
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "primary", size: "sm" }),
              "ml-1.5 hidden md:inline-flex",
            )}
          >
            {t("contact")}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t("closeMenu") : t("openMenu")}
            className="ml-1 inline-flex size-10 items-center justify-center rounded-md text-foreground hover:bg-surface-2 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="space-y-1 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 text-base text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
              >
                {t(item.id)}
              </a>
            ))}
            <a
              href={cvHref}
              download
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ variant: "outline" }), "mt-3 w-full")}
            >
              {tc("downloadCv")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
