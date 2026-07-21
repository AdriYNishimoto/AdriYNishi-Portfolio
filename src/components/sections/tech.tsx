import {
  Braces,
  Building2,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Server,
  Sparkles,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container, Section, SectionHeading } from "@/components/layout/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { techGroups, type TechGroup, type TechLevel } from "@/content/tech";

const icons = {
  braces: Braces,
  code: Code2,
  server: Server,
  database: Database,
  architecture: Building2,
  devops: GitBranch,
  ai: Sparkles,
  data: Cpu,
} satisfies Record<TechGroup["icon"], unknown>;

function groupKey(id: string) {
  return `group${id.charAt(0).toUpperCase()}${id.slice(1)}` as const;
}

function levelKey(level: TechLevel) {
  return `level${level.charAt(0).toUpperCase()}${level.slice(1)}` as const;
}

export async function Tech() {
  const t = await getTranslations("tech");

  return (
    <Section id="tech" className="bg-background-muted">
      <Container>
        <SectionHeading
          index="02"
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techGroups.map((group) => {
            const Icon = icons[group.icon];
            return (
              <StaggerItem key={group.id}>
                <div className="h-full rounded-lg border border-border bg-surface p-5">
                  <div className="flex items-center gap-2.5">
                    <Icon className="size-4 text-accent" />
                    <h3 className="text-sm font-semibold text-foreground">
                      {t(groupKey(group.id))}
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-baseline justify-between gap-3"
                      >
                        <span className="text-sm text-muted">{item.name}</span>
                        {item.level && (
                          <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-subtle">
                            {t(levelKey(item.level))}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
