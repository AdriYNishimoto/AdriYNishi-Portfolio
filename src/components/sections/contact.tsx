import { Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";
import { Container, Section, SectionHeading } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";
import { ContactForm } from "./contact-form";

export async function Contact() {
  const t = await getTranslations("contact");
  const ts = await getTranslations("social");

  const direct = [
    { label: ts("email"), value: siteConfig.email, href: `mailto:${siteConfig.email}`, Icon: Mail },
    { label: ts("whatsapp"), value: "+55 67 99328-5718", href: siteConfig.links.whatsapp, Icon: WhatsappIcon },
    { label: ts("linkedin"), value: "in/adriano-nishimoto", href: siteConfig.links.linkedin, Icon: LinkedinIcon },
    { label: ts("github"), value: "AdriYNishimoto", href: siteConfig.links.github, Icon: GithubIcon },
  ];

  return (
    <Section id="contact" className="bg-background-muted">
      <Container>
        <SectionHeading
          index="07"
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-5">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              {t("orReach")}
            </h3>
            <ul className="mt-6 space-y-3">
              {direct.map(({ label, value, href, Icon }) => {
                const external = href.startsWith("http");
                return (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                      className="group flex items-center gap-3.5 rounded-lg border border-border px-4 py-3.5 transition-colors hover:border-border-strong hover:bg-surface"
                    >
                      <Icon className="size-4 shrink-0 text-subtle transition-colors group-hover:text-accent" />
                      <span className="min-w-0">
                        <span className="block font-mono text-[11px] uppercase tracking-wider text-subtle">
                          {label}
                        </span>
                        <span className="block truncate text-sm text-foreground">
                          {value}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
