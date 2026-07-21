import { Code2, Cpu, Server, Sparkles } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container, Section, SectionHeading } from "@/components/layout/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

export async function Services() {
  const t = await getTranslations("services");

  const services = [
    { Icon: Server, title: t("s1Title"), body: t("s1Body") },
    { Icon: Code2, title: t("s2Title"), body: t("s2Body") },
    { Icon: Cpu, title: t("s3Title"), body: t("s3Body") },
    { Icon: Sparkles, title: t("s4Title"), body: t("s4Body") },
  ];

  const steps = [
    { title: t("p1Title"), body: t("p1Body") },
    { title: t("p2Title"), body: t("p2Body") },
    { title: t("p3Title"), body: t("p3Body") },
    { title: t("p4Title"), body: t("p4Body") },
  ];

  return (
    <Section id="services" className="bg-background-muted">
      <Container>
        <SectionHeading
          index="06"
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.map(({ Icon, title, body }) => (
            <StaggerItem key={title} className="h-full">
              <div className="h-full rounded-lg border border-border bg-surface p-6">
                <Icon className="size-5 text-accent" />
                <h3 className="mt-4 font-medium text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-20">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
            {t("processTitle")}
          </h3>
          <Stagger className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <StaggerItem key={step.title}>
                <div className="border-t border-border pt-5">
                  <span className="font-mono text-xs tabular text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-2 font-medium text-foreground">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.body}
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
