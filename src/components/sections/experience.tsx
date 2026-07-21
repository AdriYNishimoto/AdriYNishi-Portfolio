import { getLocale, getTranslations } from "next-intl/server";
import { Container, Section, SectionHeading } from "@/components/layout/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { challenges, jobs, pick } from "@/content/career";

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
                  <span aria-hidden> · </span>
                  {job.location}
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

        <div className="mt-20">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
            {t("challengesTitle")}
          </h3>
          <p className="mt-3 max-w-xl text-sm text-muted">
            {t("challengesDescription")}
          </p>

          <Stagger className="mt-8 grid gap-4 md:grid-cols-3">
            {challenges.map((challenge) => (
              <StaggerItem key={challenge.name} className="h-full">
                <div className="h-full rounded-lg border border-border bg-surface p-5">
                  <p className="font-mono text-xs text-accent">
                    {challenge.company}
                  </p>
                  <h4 className="mt-2 font-medium text-foreground">
                    {challenge.name}
                  </h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {pick(challenge.description, locale)}
                  </p>
                  <p className="mt-4 font-mono text-[11px] text-subtle">
                    {challenge.stack.join(" · ")}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}
