import { getLocale, getTranslations } from "next-intl/server";
import { Container, Section, SectionHeading } from "@/components/layout/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { certifications, education, pick } from "@/content/career";

export async function Education() {
  const t = await getTranslations("education");
  const locale = await getLocale();

  return (
    <Section id="education">
      <Container>
        <SectionHeading index="05" eyebrow={t("eyebrow")} title={t("title")} />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              {t("educationLabel")}
            </h3>
            <div className="mt-6 space-y-6">
              {education.map((item) => (
                <Reveal key={item.school} y={12}>
                  <div className="rounded-lg border border-border p-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="font-medium text-foreground">{item.school}</p>
                      <span className="shrink-0 font-mono text-xs tabular text-subtle">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-muted">
                      {pick(item.degree, locale)}
                    </p>
                    <p className="mt-3 inline-block rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-subtle">
                      {pick(item.status, locale)}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              {t("certificationsLabel")}
            </h3>
            <Stagger className="mt-6 divide-y divide-border border-y border-border">
              {certifications.map((cert) => (
                <StaggerItem key={pick(cert.name, locale)}>
                  <div className="flex items-baseline justify-between gap-4 py-4">
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {pick(cert.name, locale)}
                      </p>
                      <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                    </div>
                    <span className="shrink-0 font-mono text-xs tabular text-subtle">
                      {pick(cert.date, locale)}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Container>
    </Section>
  );
}
