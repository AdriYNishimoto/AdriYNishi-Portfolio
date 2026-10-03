import { getLocale, getTranslations } from "next-intl/server";
import { Container, Section, SectionHeading } from "@/components/layout/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { education, pick } from "@/content/career";

export async function Education() {
  const t = await getTranslations("education");
  const locale = await getLocale();

  return (
    <Section id="education">
      <Container>
        <SectionHeading index="05" eyebrow={t("eyebrow")} title={t("title")} />

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <StaggerItem key={item.school} className="h-full">
              <div className="h-full rounded-lg border border-border p-6">
                <h3 className="font-medium text-foreground">{item.school}</h3>
                <p className="mt-2 text-sm text-muted">
                  {pick(item.degree, locale)}
                </p>
                <p className="mt-4 font-mono text-xs tabular text-subtle">
                  {pick(item.period, locale)}
                </p>
                <p className="mt-3 inline-block rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-subtle">
                  {pick(item.status, locale)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
