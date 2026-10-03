type Localized = { pt: string; en: string };
type LocalizedList = { pt: string[]; en: string[] };

export function pick<T>(value: { pt: T; en: T }, locale: string): T {
  return locale === "en" ? value.en : value.pt;
}

export type Job = {
  company: string;
  period: Localized;
  role: Localized;
  bullets: LocalizedList;
};

export const jobs: Job[] = [
  {
    company: "Fort Churrasqueiras",
    period: { pt: "Ago 2026 — atual · PJ", en: "Aug 2026 — present · Contractor" },
    role: { pt: "Auxiliar Administrativo", en: "Administrative Assistant" },
    bullets: {
      pt: [
        "Rotinas administrativas e financeiras, faturamento e provisionamento, com uso de Loires, Excel e Word.",
      ],
      en: [
        "Administrative and financial tasks, invoicing and financial provisioning, using Loires, Excel and Word.",
      ],
    },
  },
  {
    company: "RINTEK",
    period: { pt: "Fev 2026 — Jun 2026", en: "Feb 2026 — Jun 2026" },
    role: { pt: "Analista Técnico", en: "Technical Analyst" },
    bullets: {
      pt: [
        "Participei do desenvolvimento de uma plataforma de IA para advocacia criminal, com foco no back-end, nas funcionalidades e nas regras de negócio.",
        "Trabalhei com Python, FastAPI, Django, Node.js, React e Supabase, e apoiei a integração da API do Gemini para análise de informações e geração de petições.",
        "Colaborei na publicação com Vercel e Render e na disponibilização de versões de teste para profissionais do setor jurídico, em uma equipe com planejamento semanal.",
      ],
      en: [
        "Contributed to an AI platform for criminal law, focusing on back-end features and business rules.",
        "Worked with Python, FastAPI, Django, Node.js, React and Supabase, and helped integrate the Gemini API for information analysis and drafting legal petitions.",
        "Helped deploy the application with Vercel and Render and provide test versions for legal professionals, working with a team that planned tasks weekly.",
      ],
    },
  },
  {
    company: "SAE+C",
    period: { pt: "Abr 2025 — Jun 2026", en: "Apr 2025 — Jun 2026" },
    role: { pt: "Suporte Técnico", en: "Technical Support" },
    bullets: {
      pt: [
        "Prestei suporte a usuários e apoiei a implantação do Mhund, sistema de gestão escolar, investigando problemas de funcionalidades e integrações com APIs.",
        "Realizei testes para identificar problemas de configuração, incluindo incidentes na API de boletos, e elaborei manuais e orientações por telefone e acesso remoto.",
      ],
      en: [
        "Provided user support and helped implement Mhund, a school management system, investigating feature and API integration issues.",
        "Tested configurations, including issues with the bank payment slip API, and prepared user guides and provided assistance by phone and remote access.",
      ],
    },
  },
];

export type Education = {
  school: string;
  degree: Localized;
  period: Localized;
  status: Localized;
};

export const education: Education[] = [
  {
    school: "FIAP",
    degree: {
      pt: "Bacharelado em Engenharia de Software",
      en: "B.S. in Software Engineering",
    },
    period: { pt: "Fev 2023 — Dez 2026 (previsto)", en: "Feb 2023 — Dec 2026 (expected)" },
    status: { pt: "Último semestre", en: "Final semester" },
  },
  {
    school: "Senac Hub Academy",
    degree: {
      pt: "Técnico em Desenvolvimento de Sistemas",
      en: "Technical Degree in Systems Development",
    },
    period: { pt: "Fev 2024 — Nov 2025", en: "Feb 2024 — Nov 2025" },
    status: { pt: "Concluído", en: "Completed" },
  },
];
