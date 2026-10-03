import { getLocale, getTranslations } from "next-intl/server";
import { Container, Section, SectionHeading } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { jobs, pick } from "@/content/career";

export async function Experience() {
  const t = await getTranslations("experience");
  const locale = await getLocale();

  return (
    <Section id="experience" className="bg-background-muted">
      <Container>
        <SectionHeading index="04" eyebrow={t("eyebrow")} title={t("title")} />

        <ol className="relative mt-14 max-w-3xl border-l border-border">
          {jobs.map((job) => (
            <li key={job.company} className="relative pb-12 pl-8 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-accent ring-4 ring-background-muted"
              />
              <Reveal y={12}>
                <p className="font-mono text-xs text-subtle">
                  <span className="tabular">{pick(job.period, locale)}</span>
                </p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {pick(job.role, locale)}
                  <span className="text-muted"> — {job.company}</span>
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {pick(job.bullets, locale).map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-5 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:size-1 before:rounded-full before:bg-border-strong"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>

      </Container>
    </Section>
  );
}
