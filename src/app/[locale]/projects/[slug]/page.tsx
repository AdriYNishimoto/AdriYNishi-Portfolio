import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Container } from "@/components/layout/section";
import { GithubIcon } from "@/components/icons";
import { getProject, projects, t as pick } from "@/content/projects";

type Params = { locale: string; slug: string };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: pick(project.tagline, locale),
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProject(slug);
  if (!project) notFound();

  const t = await getTranslations("projects");

  const blocks = [
    { label: t("problem"), body: project.problem },
    { label: t("solution"), body: project.solution },
    { label: t("contribution"), body: project.contribution },
    { label: t("result"), body: project.result },
  ].filter((block) => block.body);

  return (
    <main id="main" className="py-16 sm:py-20">
      <Container>
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          {t("backToProjects")}
        </Link>

        <header className="mt-10 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs text-subtle">
            <span className="tabular">{project.year}</span>
            <span aria-hidden>·</span>
            <span>{project.team ? t("team") : t("solo")}</span>
            {project.context && (
              <>
                <span aria-hidden>·</span>
                <span>{pick(project.context, locale)}</span>
              </>
            )}
          </div>

          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {pick(project.tagline, locale)}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent"
              >
                <GithubIcon className="size-4" />
                {t("viewCode")}
                <ArrowUpRight className="size-3.5" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent"
              >
                {t("viewDemo")}
                <ArrowUpRight className="size-3.5" />
              </a>
            )}
          </div>
        </header>

        <div className="mt-12 border-t border-border pt-8">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
            {t("stack")}
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 max-w-2xl space-y-12">
          {blocks.map((block) => (
            <section key={block.label}>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {block.label}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {pick(block.body!, locale)}
              </p>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
