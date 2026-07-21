import { getTranslations } from "next-intl/server";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Container } from "./section";

export async function Footer() {
  const t = await getTranslations("footer");
  const ts = await getTranslations("social");
  const year = new Date().getFullYear();

  const socials = [
    { label: ts("github"), href: siteConfig.links.github, Icon: GithubIcon },
    { label: ts("linkedin"), href: siteConfig.links.linkedin, Icon: LinkedinIcon },
    { label: ts("email"), href: `mailto:${siteConfig.email}`, Icon: Mail },
    { label: ts("whatsapp"), href: siteConfig.links.whatsapp, Icon: WhatsappIcon },
  ];

  return (
    <footer className="border-t border-border">
      <Container className="py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg font-semibold text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {t("tagline")}
            </p>
          </div>

          <nav aria-label={t("connect")} className="flex flex-col gap-3.5">
            {socials.map(({ label, href, Icon }) => {
              const external = href.startsWith("http");
              return (
                <a
                  key={label}
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                  className="group inline-flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <Icon className="size-4 shrink-0" />
                  <span>{label}</span>
                  <ArrowRight className="size-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              );
            })}
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-subtle sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name}. {t("rights")}
          </p>
          <p className="font-mono">{t("builtWith")}</p>
          <a
            href="#main"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            {t("backToTop")}
            <ArrowRight className="size-3.5 -rotate-90" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
