import type { Locale } from "@/i18n/routing";

type Localized = { pt: string; en: string };

export type Project = {
  slug: string;
  name: string;
  featured: boolean;
  year: string;
  team: boolean;
  /** Where the project came from and, when relevant, its current status. */
  context?: Localized;
  stack: string[];
  repo?: string;
  demo?: string;
  tagline: Localized;
  problem?: Localized;
  solution?: Localized;
  /** Personal contribution to a team project. */
  contribution?: Localized;
  result?: Localized;
};

export function t(value: Localized, locale: string) {
  return locale === "en" ? value.en : value.pt;
}

export const projects: Project[] = [
  {
    slug: "sistema-cadastral",
    name: "SistemaCadastral",
    featured: true,
    year: "2025",
    team: false,
    context: { pt: "Projeto pessoal", en: "Personal project" },
    stack: ["C#", "ASP.NET Core", "Entity Framework", "NoSQL"],
    repo: "https://github.com/AdriYNishimoto/SistemaCadastral",
    tagline: {
      pt: "API para cadastro de pessoas e cidades, com operações CRUD e validação de CPF e CNPJ.",
      en: "An API for people and city records, with CRUD operations and Brazilian CPF and CNPJ validation.",
    },
    solution: {
      pt: "Projeto pessoal para praticar C# e ASP.NET Core no cadastro, consulta, atualização e exclusão de pessoas e cidades. Inclui Entity Framework, banco NoSQL e regras de validação de CPF e CNPJ.",
      en: "A personal project to practise C# and ASP.NET Core by creating, reading, updating and deleting people and city records. It includes Entity Framework, a NoSQL database and validation rules for Brazilian CPF and CNPJ identifiers.",
    },
  },
  {
    slug: "motai",
    name: "Motai",
    featured: true,
    year: "2026",
    team: true,
    context: {
      pt: "FIAP · Oracle · Em desenvolvimento",
      en: "FIAP · Oracle · In development",
    },
    stack: ["React", "C#", ".NET", "Oracle Database"],
    tagline: {
      pt: "Projeto do Challenge FIAP com a Oracle, em desenvolvimento, com participação no back-end em dupla.",
      en: "An ongoing FIAP Challenge project with Oracle, where I am working on the back-end with a teammate.",
    },
    solution: {
      pt: "Aplicação acadêmica para o setor farmacêutico, com React na interface, C# e .NET no back-end e Oracle Database no banco de dados.",
      en: "An academic application for the pharmaceutical sector, using React for the interface, C# and .NET for the back-end, and Oracle Database for data storage.",
    },
    contribution: {
      pt: "Estou desenvolvendo o back-end com outro integrante da equipe, praticando C# e .NET durante o desafio.",
      en: "I am developing the back-end with another team member, practising C# and .NET during the challenge.",
    },
    result: {
      pt: "Em desenvolvimento durante o Challenge de 2026.",
      en: "In development during the 2026 Challenge.",
    },
  },
  {
    slug: "softco",
    name: "SoftCo",
    featured: true,
    year: "2024",
    team: true,
    context: {
      pt: "FIAP · SoftTech",
      en: "FIAP · SoftTech",
    },
    stack: ["React", "Java", "Google Gemini"],
    repo: "https://github.com/AdriYNishimoto/Softco_React",
    tagline: {
      pt: "Projeto acadêmico de suporte técnico com triagem de solicitações e participação principalmente no front-end.",
      en: "An academic technical support project with request triage, where I contributed mainly to the front-end.",
    },
    solution: {
      pt: "Desenvolvido em equipe no desafio FIAP com a SoftTech. O projeto combina uma interface em React, back-end em Java e Google Gemini para apoiar a triagem de solicitações de suporte.",
      en: "Developed as a team for the FIAP challenge with SoftTech. The project combines a React interface, a Java back-end and Google Gemini to support the triage of support requests.",
    },
    contribution: {
      pt: "Minha participação foi principalmente no desenvolvimento do front-end em React.",
      en: "My contribution was mainly developing the React front-end.",
    },
  },
  {
    slug: "merchantflow",
    name: "MerchantFlow",
    featured: false,
    year: "2026",
    team: false,
    stack: ["Python", "Django", "Django REST Framework", "SQLite"],
    repo: "https://github.com/AdriYNishimoto/MerchantFlow",
    tagline: {
      pt: "Projeto de API para cadastro de estabelecimentos e acompanhamento de etapas de aprovação.",
      en: "An API project for merchant registration and tracking approval stages.",
    },
    solution: {
      pt: "Prática de desenvolvimento com Python e Django para registrar estabelecimentos, validar mudanças de status e consultar o histórico dessas alterações.",
      en: "A Python and Django practice project for registering merchants, validating status changes and viewing their history.",
    },
  },
  {
    slug: "api-produtos",
    name: "ApiProdutos",
    featured: false,
    year: "2025",
    team: false,
    stack: ["C#", "ASP.NET Core", "EF Core", "SQL Server", "JWT", "Swagger"],
    repo: "https://github.com/AdriYNishimoto/ApiProdutos",
    tagline: {
      pt: "API de produtos para praticar ASP.NET Core, autenticação e acesso a dados.",
      en: "A product API for practising ASP.NET Core, authentication and data access.",
    },
    solution: {
      pt: "Projeto de estudo com Entity Framework Core, autenticação JWT, validação de dados, tratamento de erros e documentação no Swagger.",
      en: "A practice project with Entity Framework Core, JWT authentication, data validation, error handling and Swagger documentation.",
    },
  },
  {
    slug: "digicoin",
    name: "Digicoin",
    featured: false,
    year: "2025",
    team: true,
    context: {
      pt: "DIGIX · fábrica de software",
      en: "DIGIX · software factory",
    },
    stack: ["Python", "Django", "Django REST Framework", "Celery", "PostgreSQL", "JavaScript"],
    repo: "https://github.com/AdriYNishimoto/Digicoin",
    tagline: {
      pt: "Projeto em equipe de uma plataforma com desafios, moedas virtuais e recompensas.",
      en: "A team project for a platform with challenges, virtual coins and rewards.",
    },
    solution: {
      pt: "Plataforma web em Django com campanhas, ranking, histórico de saldo e painel administrativo.",
      en: "A Django web platform with campaigns, rankings, balance history and an administration panel.",
    },
    contribution: {
      pt: "Participei dos relatórios em Excel, do ranking de usuários e da padronização dos popups da interface.",
      en: "I contributed to Excel reports, user rankings and the standardisation of interface popups.",
    },
  },
  {
    slug: "printcalc3d",
    name: "PrintCalc3D",
    featured: false,
    year: "2026",
    team: false,
    stack: ["Python", "Tkinter", "PyInstaller"],
    repo: "https://github.com/AdriYNishimoto/PrintCalc3D",
    tagline: {
      pt: "Calculadora desktop para estimar custos e preços de impressão 3D.",
      en: "A desktop calculator for estimating 3D printing costs and prices.",
    },
    solution: {
      pt: "Projeto em Python que considera filamento, energia, tempo de máquina e margem desejada para estimar o preço de uma peça impressa.",
      en: "A Python project that uses filament, energy, machine time and a chosen margin to estimate the price of a printed part.",
    },
  },
  {
    slug: "visualizador-3d",
    name: "Visualizador 3D",
    featured: false,
    year: "2025",
    team: false,
    stack: ["JavaScript", "Three.js", "WebGL"],
    repo: "https://github.com/AdriYNishimoto/projeto_interacao3D",
    tagline: {
      pt: "Projeto para visualizar modelos 3D no navegador e experimentar controles de câmera e luz.",
      en: "A project for viewing 3D models in the browser and experimenting with camera and lighting controls.",
    },
    solution: {
      pt: "Prática com JavaScript e Three.js para carregar arquivos .glb e .obj, rotacionar modelos, ajustar o zoom e controlar a iluminação.",
      en: "JavaScript and Three.js practice for loading .glb and .obj files, rotating models, zooming and adjusting lighting.",
    },
  },
  {
    slug: "tamagotchi-pokemon",
    name: "TamagotchiPokemon",
    featured: false,
    year: "2025",
    team: false,
    stack: ["C#", ".NET", "PokeAPI"],
    repo: "https://github.com/AdriYNishimoto/TamagotchiPokemon",
    tagline: {
      pt: "Bichinho virtual no console para praticar C# e consumo de APIs.",
      en: "A console virtual pet for practising C# and API consumption.",
    },
    solution: {
      pt: "Projeto que consulta espécies, habilidades e evoluções na PokeAPI para simular o ciclo de vida de um bichinho virtual.",
      en: "A project that queries species, abilities and evolutions from PokeAPI to simulate a virtual pet's lifecycle.",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const supportingProjects = projects.filter((p) => !p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export type { Locale };
