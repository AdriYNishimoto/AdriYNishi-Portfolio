import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { GithubIcon } from "@/components/icons";
import { Container } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export async function Github() {
  const t = await getTranslations("github");

  return (
    <section id="github" className="scroll-mt-24 pb-24 sm:pb-28 lg:pb-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-lg border border-border p-8 sm:p-12">
            <div
              aria-hidden
              className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_50%,#000_10%,transparent_70%)]"
            />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-lg">
                <GithubIcon className="size-6 text-foreground" />
                <h2 className="mt-4 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  {t("title")}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {t("body")}
                </p>
              </div>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                  "shrink-0",
                )}
              >
                {t("cta")}
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
