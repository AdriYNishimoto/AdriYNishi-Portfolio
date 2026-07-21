import { getLocale, getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Container } from "@/components/layout/section";
import { Enso } from "@/components/decor/enso";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export async function Hero() {
  const t = await getTranslations("hero");
  const tc = await getTranslations("common");
  const locale = await getLocale();
  const cvHref = locale === "pt" ? siteConfig.cv.pt : siteConfig.cv.en;

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden py-20"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_40%,#000_15%,transparent_75%)]" />
        <div className="absolute -right-[6%] top-[6%] size-[440px] rounded-full bg-accent/10 blur-[130px]" />
        <span
          className="font-jp absolute -right-4 bottom-2 select-none text-[30vw] leading-none text-foreground/[0.025] sm:text-[18rem]"
          lang="ja"
        >
          西本
        </span>
        <Enso className="absolute right-8 top-28 hidden size-40 text-accent/25 lg:block" />
      </div>

      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-sm text-muted">{t("role")}</p>

          <span className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-3 py-1 text-sm text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-seal/70" />
              <span className="relative inline-flex size-2 rounded-full bg-seal" />
            </span>
            {t("status")}
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.75rem]">
            {t.rich("headline", {
              hl: (chunks) => <span className="text-accent">{chunks}</span>,
            })}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {t("subheadline")}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
            >
              {t("ctaWork")}
              <ArrowRight className="size-4" />
            </a>
            <a
              href={cvHref}
              download
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              {tc("downloadCv")}
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="inline-flex size-11 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="inline-flex size-11 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
              >
                <LinkedinIcon className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
