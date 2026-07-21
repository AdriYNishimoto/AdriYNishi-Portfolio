import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container, Section, SectionHeading } from "@/components/layout/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { GithubIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import {
  featuredProjects,
  supportingProjects,
  t as pick,
  type Project,
} from "@/content/projects";

function StackList({ stack }: { stack: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-1.5">
      {stack.map((tech) => (
        <li
          key={tech}
          className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-subtle"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

async function FeaturedCard({ project }: { project: Project }) {
  const t = await getTranslations("projects");
  const locale = await getLocale();

  return (
    <article className="group flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:border-border-strong sm:p-7">
      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-xs text-subtle">
        <span className="tabular">{project.year}</span>
        <span aria-hidden>·</span>
        <span className="whitespace-nowrap">
          {project.team ? t("team") : t("solo")}
        </span>
        {project.context && (
          <>
            <span aria-hidden>·</span>
            <span>{pick(project.context, locale)}</span>
          </>
        )}
      </div>

      <h3 className="mt-3 font-display text-xl font-semibold text-foreground sm:text-2xl">
        {project.name}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted">
        {pick(project.tagline, locale)}
      </p>

      <StackList stack={project.stack} />

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          {t("viewCase")}
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-3.5" />
            {t("viewCode")}
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            {t("viewDemo")}
            <ArrowUpRight className="size-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}

export async function Projects() {
  const t = await getTranslations("projects");
  const locale = await getLocale();

  return (
    <Section id="work">
      <Container>
        <SectionHeading
          index="03"
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <Stagger className="mt-14 grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.slug} className="h-full">
              <FeaturedCard project={project} />
            </StaggerItem>
          ))}
        </Stagger>

        <h3 className="mt-20 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
          {t("otherLabel")}
        </h3>
        <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {supportingProjects.map((project) => (
            <StaggerItem key={project.slug} className="h-full">
              <Link
                href={`/projects/${project.slug}`}
                className="group flex h-full flex-col rounded-lg border border-border p-5 transition-colors hover:border-border-strong hover:bg-surface"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-medium text-foreground">{project.name}</h4>
                  <ArrowRight className="size-4 shrink-0 text-subtle transition-all group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {pick(project.tagline, locale)}
                </p>
                <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
                  {project.demo && (
                    <span className="rounded-full border border-accent/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                      {t("viewDemo")}
                    </span>
                  )}
                  <span className="font-mono text-[11px] text-subtle">
                    {project.stack.slice(0, 3).join(" · ")}
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-4" />
            {t("allOnGithub")}
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </Container>
    </Section>
  );
}
