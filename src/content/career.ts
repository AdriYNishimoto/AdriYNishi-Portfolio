type Localized = { pt: string; en: string };
type LocalizedList = { pt: string[]; en: string[] };

export function pick<T>(value: { pt: T; en: T }, locale: string): T {
  return locale === "en" ? value.en : value.pt;
}

export type Job = {
  company: string;
  location: string;
  period: Localized;
  role: Localized;
  bullets: LocalizedList;
};

export const jobs: Job[] = [
  {
    company: "Rintek",
    location: "Campo Grande, MS",
    period: { pt: "Jan 2026 — Jun 2026", en: "Jan 2026 — Jun 2026" },
    role: { pt: "Analista Técnico", en: "Technical Analyst" },
    bullets: {
      pt: [
        "Automação de processos e análise de dados com Python (pandas, numpy): tratamento, limpeza e estruturação de bases, geração de relatórios e integração entre sistemas.",
        "Dashboards e relatórios interativos em Power BI, com modelagem de dados e medidas DAX para acompanhar indicadores de gestão.",
        "Consultas SQL para extração, filtragem e cruzamento de dados em bancos relacionais.",
        "Desenvolvimento full-stack de funcionalidades para sistemas internos com React, Next.js, Node.js (NestJS), Django, Python, C#, .NET e PostgreSQL.",
      ],
      en: [
        "Process automation and data analysis with Python (pandas, numpy): cleaning and structuring datasets, generating reports and integrating systems.",
        "Interactive Power BI dashboards and reports, with data modelling and DAX measures to track management KPIs.",
        "SQL queries for extraction, filtering and cross-referencing across relational databases.",
        "Full-stack development of internal system features with React, Next.js, Node.js (NestJS), Django, Python, C#, .NET and PostgreSQL.",
      ],
    },
  },
  {
    company: "SAE+C",
    location: "Campo Grande, MS",
    period: { pt: "Abr 2025 — Mai 2026", en: "Apr 2025 — May 2026" },
    role: { pt: "Suporte Técnico", en: "Technical Support" },
    bullets: {
      pt: [
        "Suporte técnico especializado, com análise estruturada de problemas de sistema e identificação de soluções.",
        "Análise de incidentes de plataforma, diagnóstico de causa raiz e implementação de correções técnicas.",
        "Atendimento focado em comunicação clara e proposição de ajustes customizados para cada cliente.",
      ],
      en: [
        "Specialised technical support, with structured analysis of system issues and identification of solutions.",
        "Platform incident analysis, root-cause diagnosis and implementation of technical fixes.",
        "Customer service focused on clear communication and tailored adjustments for each client.",
      ],
    },
  },
  {
    company: "SENAI-MS",
    location: "Campo Grande, MS",
    period: { pt: "Abr 2024 — Ago 2024", en: "Apr 2024 — Aug 2024" },
    role: {
      pt: "Técnico de Suporte Administrativo",
      en: "Administrative Support Technician",
    },
    bullets: {
      pt: [
        "Planilhas analíticas em Excel e dashboards em Power BI para controle de operações.",
        "Elaboração de relatórios técnicos e controle de fluxos operacionais com foco em eficiência.",
      ],
      en: [
        "Analytical Excel spreadsheets and Power BI dashboards for operational control.",
        "Technical reports and operational workflow management with a focus on efficiency.",
      ],
    },
  },
];

export type Challenge = {
  name: string;
  company: string;
  stack: string[];
  description: Localized;
};

/** FIAP challenges delivered with real sponsor companies. */
export const challenges: Challenge[] = [
  {
    name: "GreenConnect",
    company: "Schneider Electric",
    stack: ["React", "JavaScript", "HTML", "CSS"],
    description: {
      pt: "Plataforma de incentivo colaborativo com gamificação para motivar colaboradores e premiar resultados, com foco em experiência intuitiva e design responsivo.",
      en: "A collaborative incentive platform with gamification to motivate employees and reward results, focused on an intuitive experience and responsive design.",
    },
  },
  {
    name: "Tradução de código legado",
    company: "Ford",
    stack: ["Python", "React", "Google Gemini"],
    description: {
      pt: "Projeto piloto de modernização: agentes de IA analisam a codebase legada e a transcrevem para linguagens modernas, reduzindo a complexidade da migração.",
      en: "A modernisation pilot: AI agents analyse the legacy codebase and transcribe it into modern languages, reducing migration complexity.",
    },
  },
  {
    name: "SoftCo",
    company: "Soft Tech",
    stack: ["React", "Google Gemini"],
    description: {
      pt: "Suporte técnico inteligente: a IA classifica a complexidade do chamado (nível 1 ou 2) e sugere respostas automáticas, reduzindo o tempo de atendimento.",
      en: "Intelligent technical support: AI classifies ticket complexity (level 1 or 2) and suggests automated replies, cutting response time.",
    },
  },
];

export type Education = {
  school: string;
  degree: Localized;
  period: string;
  status: Localized;
};

export const education: Education[] = [
  {
    school: "FIAP",
    degree: {
      pt: "Bacharelado em Engenharia de Software",
      en: "B.S. in Software Engineering",
    },
    period: "2023 — 2026",
    status: { pt: "Último ano", en: "Final year" },
  },
  {
    school: "SENAC Hub Academy",
    degree: {
      pt: "Técnico em Desenvolvimento de Sistemas",
      en: "Technical Degree in Systems Development",
    },
    period: "2024 — 2025",
    status: { pt: "Concluído", en: "Completed" },
  },
];

export type Certification = {
  name: Localized;
  issuer: string;
  date: Localized;
};

export const certifications: Certification[] = [
  {
    name: { pt: "Programação de Algoritmos em Python", en: "Algorithm Programming in Python" },
    issuer: "Agência Espacial Brasileira (AEB/MCTI)",
    date: { pt: "Mar 2026", en: "Mar 2026" },
  },
  {
    name: { pt: "NLW Connect — C#", en: "NLW Connect — C#" },
    issuer: "Rocketseat",
    date: { pt: "Fev 2025", en: "Feb 2025" },
  },
  {
    name: { pt: "Algoritmos e Lógica de Programação", en: "Algorithms and Programming Logic" },
    issuer: "Udemy",
    date: { pt: "Dez 2024", en: "Dec 2024" },
  },
  {
    name: { pt: "IA Generativa", en: "Generative AI" },
    issuer: "Alura",
    date: { pt: "Nov 2024", en: "Nov 2024" },
  },
  {
    name: { pt: "C#: Criando sua Primeira Aplicação", en: "C#: Building Your First Application" },
    issuer: "Alura",
    date: { pt: "Jul 2024", en: "Jul 2024" },
  },
  {
    name: { pt: "Formação Iniciante em Programação", en: "Programming Fundamentals Track" },
    issuer: "Alura",
    date: { pt: "Jun 2024", en: "Jun 2024" },
  },
];
