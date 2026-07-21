import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Container, Section, SectionHeading } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";

export async function About() {
  const t = await getTranslations("about");

  const facts = [
    { label: t("factLocation"), value: t("factLocationValue") },
    { label: t("factEducation"), value: t("factEducationValue") },
    { label: t("factExperience"), value: t("factExperienceValue") },
    { label: t("factLanguages"), value: t("factLanguagesValue") },
  ];

  return (
    <Section id="about">
      <Container>
        <SectionHeading
          index="01"
          eyebrow={t("eyebrow")}
          title={t("title")}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-2xl bg-accent/10 blur-2xl"
              />
              <Image
                src={siteConfig.photo}
                alt={t("photoAlt")}
                width={900}
                height={1125}
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 60vw, 100vw"
                className="w-full rounded-lg border border-border object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <div className="space-y-5 text-base leading-relaxed text-muted">
                <p>{t("p1")}</p>
                <p>{t("p2")}</p>
                <p>{t("p3")}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mt-10 grid gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-2">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
                      {fact.label}
                    </dt>
                    <dd className="mt-2 text-sm text-foreground">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
