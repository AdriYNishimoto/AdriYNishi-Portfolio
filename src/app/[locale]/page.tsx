import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Tech } from "@/components/sections/tech";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Services } from "@/components/sections/services";
import { Github } from "@/components/sections/github";
import { Contact } from "@/components/sections/contact";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main id="main">
      <Hero />
      <About />
      <Tech />
      <Projects />
      <Experience />
      <Education />
      <Services />
      <Github />
      <Contact />
    </main>
  );
}
