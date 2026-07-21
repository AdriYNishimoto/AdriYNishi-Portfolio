import type { Locale } from "@/i18n/routing";

type Localized = { pt: string; en: string };

export type Project = {
  slug: string;
  name: string;
  featured: boolean;
  year: string;
  team: boolean;
  /** Where the project came from — company, challenge, course. */
  context?: Localized;
  stack: string[];
  repo?: string;
  demo?: string;
  tagline: Localized;
  problem?: Localized;
  solution?: Localized;
  /** What I personally shipped — only meaningful on team projects. */
  contribution?: Localized;
  result?: Localized;
};

export function t(value: Localized, locale: string) {
  return locale === "en" ? value.en : value.pt;
}

export const projects: Project[] = [
  {
    slug: "merchantflow",
    name: "MerchantFlow",
    featured: true,
    year: "2026",
    team: false,
    stack: ["Python", "Django", "Django REST Framework", "SQLite", "Testes"],
    repo: "https://github.com/AdriYNishimoto/MerchantFlow",
    tagline: {
      pt: "API de cadastro e análise de estabelecimentos com o fluxo modelado como máquina de estados.",
      en: "Merchant onboarding API with the review flow modelled as an explicit state machine.",
    },
    problem: {
      pt: "Cadastro com aprovação costuma virar um CRUD onde qualquer status vira qualquer outro e o histórico se perde. O resultado é dado inconsistente e nenhuma rastreabilidade de quem aprovou o quê, e quando.",
      en: "Approval flows tend to end up as a plain CRUD where any status can jump to any other and history is lost. That means inconsistent data and no traceability of who approved what, and when.",
    },
    solution: {
      pt: "Modelei o ciclo de vida do merchant como uma máquina de estados explícita (rascunho → em análise → aprovado / rejeitado → bloqueado). Cada transição é validada no domínio e grava um evento imutável na mesma transação do banco, então status e histórico nunca saem de sincronia. Transições inválidas respondem HTTP 409 e os dados cadastrais só podem ser editados enquanto o merchant está em rascunho.",
      en: "I modelled the merchant lifecycle as an explicit state machine (draft → pending analysis → approved / rejected → blocked). Every transition is validated in the domain and writes an immutable event inside the same database transaction, so status and history can never drift apart. Invalid transitions answer with HTTP 409, and registration data can only be edited while the merchant is still a draft.",
    },
    result: {
      pt: "Histórico completo e auditável de cada mudança, com regras de negócio que a API não deixa burlar. Cobri o domínio com testes de modelos, validadores e endpoints.",
      en: "A complete, auditable history of every change, with business rules the API simply won't let you bypass. I covered the domain with model, validator and endpoint tests.",
    },
  },
  {
    slug: "api-produtos",
    name: "ApiProdutos",
    featured: true,
    year: "2025",
    team: false,
    stack: ["C#", ".NET 8", "ASP.NET Core", "EF Core 8", "SQL Server", "JWT", "Swagger"],
    repo: "https://github.com/AdriYNishimoto/ApiProdutos",
    tagline: {
      pt: "API RESTful em .NET 8 com autenticação JWT, tratamento de erros centralizado e documentação viva.",
      en: "A .NET 8 REST API with JWT authentication, centralised error handling and living documentation.",
    },
    problem: {
      pt: "Eu queria uma referência própria de como se constrói uma API .NET de verdade — não o CRUD de tutorial, mas algo com autenticação, erros padronizados e documentação que outra pessoa conseguisse usar.",
      en: "I wanted my own reference for how a real .NET API is built — not the tutorial CRUD, but something with authentication, standardised errors and documentation another developer could actually use.",
    },
    solution: {
      pt: "Construí a API em ASP.NET Core 8 com Entity Framework Core e Migrations versionando o schema. Protegi os endpoints com JWT, escrevi um middleware que centraliza o tratamento de exceções e devolve respostas padronizadas, adicionei validação por Data Annotations, logging estruturado e documentei tudo com Swagger/OpenAPI.",
      en: "I built the API on ASP.NET Core 8 with Entity Framework Core and Migrations versioning the schema. Endpoints are protected with JWT, a custom middleware centralises exception handling and returns standardised responses, plus Data Annotations validation, structured logging and full Swagger/OpenAPI documentation.",
    },
    result: {
      pt: "Uma base reutilizável para APIs .NET: injeção de dependência, responsabilidades separadas e endpoints protegidos, prontos para testar direto no Swagger.",
      en: "A reusable baseline for .NET APIs: dependency injection, clear separation of concerns and protected endpoints you can exercise straight from Swagger.",
    },
  },
  {
    slug: "sistema-cadastral",
    name: "SistemaCadastral",
    featured: true,
    year: "2025",
    team: false,
    stack: ["C#", ".NET", "ASP.NET Core", "EF Core", "Repository", "SOLID"],
    repo: "https://github.com/AdriYNishimoto/SistemaCadastral",
    tagline: {
      pt: "Cadastro de pessoas e cidades em camadas — Controller, Service e Repository atrás de interfaces.",
      en: "A people and cities registry built in layers — Controller, Service and Repository behind interfaces.",
    },
    problem: {
      pt: "Um cadastro é simples no papel, mas vira um emaranhado quando a regra de negócio mora dentro do controller: nada é testável isoladamente e trocar o acesso a dados obriga a mexer em tudo.",
      en: "A registry looks simple on paper, but turns into a tangle once business rules live inside the controller: nothing can be tested in isolation and swapping the data layer means touching everything.",
    },
    solution: {
      pt: "Separei em camadas de verdade: Controllers finos que só orquestram, Services com a regra de negócio e Repositories para acesso a dados — todos atrás de interfaces e resolvidos por injeção de dependência. O EF Core com Migrations cuida do schema, e uma interface web simples consome a própria API para cadastro, consulta e relatórios.",
      en: "I split it into real layers: thin Controllers that only orchestrate, Services holding the business rules and Repositories for data access — all behind interfaces and wired through dependency injection. EF Core with Migrations handles the schema, and a simple web UI consumes the API for registration, lookup and reports.",
    },
    result: {
      pt: "Um exemplo prático de Clean Architecture e SOLID em .NET: dá para testar a regra de negócio sem banco e trocar a persistência sem tocar no resto.",
      en: "A hands-on example of Clean Architecture and SOLID in .NET: business rules can be tested without a database, and persistence can be swapped without touching the rest.",
    },
  },
  {
    slug: "digicoin",
    name: "Digicoin",
    featured: true,
    year: "2025",
    team: true,
    context: {
      pt: "DIGIX · fábrica de software",
      en: "DIGIX · software factory",
    },
    stack: ["Python", "Django", "Django REST Framework", "Celery", "PostgreSQL", "JavaScript"],
    repo: "https://github.com/AdriYNishimoto/Digicoin",
    tagline: {
      pt: "Sistema gamificado de engajamento de colaboradores, implantado e em uso interno na DIGIX.",
      en: "A gamified employee engagement platform, deployed and in internal use at DIGIX.",
    },
    problem: {
      pt: "A DIGIX queria premiar entregas e aumentar o engajamento dos colaboradores, mas acompanhar pontos, campanhas e recompensas na mão não escala — e sem ranking visível o incentivo perde a graça.",
      en: "DIGIX wanted to reward delivery and raise employee engagement, but tracking points, campaigns and rewards by hand doesn't scale — and without a visible ranking the incentive loses its edge.",
    },
    solution: {
      pt: "Plataforma web em Django e Django REST Framework onde colaboradores acumulam moedas digitais ao concluir desafios e campanhas e as trocam por recompensas reais, com ranking, notificações, histórico de saldo e painel administrativo.",
      en: "A web platform on Django and Django REST Framework where employees earn digital coins by completing challenges and campaigns and exchange them for real rewards, with rankings, notifications, balance history and an admin panel.",
    },
    contribution: {
      pt: "Projeto em equipe, com fluxo Git de branches de feature e pull requests. Minhas entregas: a geração de relatórios em Excel (produtos mais vendidos e usuários com mais moedas), o sistema de ranking — o top 7 e a posição do usuário logado — e a padronização dos popups da interface.",
      en: "A team project with a proper Git flow of feature branches and pull requests. What I shipped: the Excel report generation (best-selling products and users with the most coins), the ranking system — the top 7 and the logged-in user's own position — and the standardisation of the interface popups.",
    },
    result: {
      pt: "Implantado e em uso interno na DIGIX, com relatórios que a gestão usa para acompanhar a adesão ao programa.",
      en: "Deployed and in internal use at DIGIX, with reports management relies on to track adoption of the programme.",
    },
  },

  {
    slug: "softco",
    name: "SoftCo",
    featured: false,
    year: "2024",
    team: true,
    context: {
      pt: "Soft Tech · desafio FIAP",
      en: "Soft Tech · FIAP challenge",
    },
    stack: ["React", "Vite", "JavaScript", "Google Gemini"],
    repo: "https://github.com/AdriYNishimoto/Softco_React",
    tagline: {
      pt: "Plataforma de suporte técnico que usa IA generativa para triar chamados automaticamente.",
      en: "A technical support platform that uses generative AI to triage tickets automatically.",
    },
    solution: {
      pt: "Front-end em React onde a IA do Google Gemini analisa a requisição do cliente, classifica a complexidade (nível 1 ou 2) e sugere respostas automáticas, reduzindo o tempo de atendimento. Tem áreas separadas para usuário e administrador, com dashboard, tickets, chat e análise.",
      en: "A React front-end where Google Gemini analyses the customer's request, classifies its complexity (level 1 or 2) and suggests automated replies, cutting response time. It has separate user and admin areas with dashboard, tickets, chat and analytics.",
    },
  },
  {
    slug: "printcalc3d",
    name: "PrintCalc3D",
    featured: false,
    year: "2026",
    team: false,
    stack: ["Python", "Tkinter", "Testes", "PyInstaller"],
    repo: "https://github.com/AdriYNishimoto/PrintCalc3D",
    tagline: {
      pt: "Calculadora de custo e lucro para impressão 3D — um produto de verdade, com executável.",
      en: "A cost and profit calculator for 3D printing — a real product, shipped as an executable.",
    },
    solution: {
      pt: "App desktop que calcula o custo real de uma peça impressa — filamento, energia, tempo de máquina e taxa de falha — e sugere o preço com a margem desejada. Separei em core (regras de cálculo), data (persistência) e ui, com testes na camada de cálculo e empacotamento em executável para Windows.",
      en: "A desktop app that works out the real cost of a printed part — filament, power, machine time and failure rate — and suggests a price with the margin you want. Split into core (calculation rules), data (persistence) and ui, with tests on the calculation layer and packaged as a Windows executable.",
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
      pt: "Visualizador de modelos 3D no navegador, com órbita e controle de iluminação.",
      en: "An in-browser 3D model viewer with orbit controls and live lighting.",
    },
    solution: {
      pt: "Carrega modelos .glb e .obj direto da máquina do usuário e permite rotacionar, dar zoom e ajustar a intensidade da luz em tempo real. Os modelos são centralizados e escalados automaticamente para caber na cena, independente do tamanho original.",
      en: "Loads .glb and .obj models straight from the user's machine and lets you rotate, zoom and tune light intensity in real time. Models are automatically centred and scaled to fit the scene, whatever their original size.",
    },
  },
  {
    slug: "tamagotchi-pokemon",
    name: "TamagotchiPokemon",
    featured: false,
    year: "2025",
    team: false,
    stack: ["C#", ".NET", "PokeAPI", "OOP"],
    repo: "https://github.com/AdriYNishimoto/TamagotchiPokemon",
    tagline: {
      pt: "Um bichinho virtual em C# que consome a PokeAPI e evolui de verdade.",
      en: "A virtual pet in C# that consumes the PokeAPI and actually evolves.",
    },
    solution: {
      pt: "Aplicação de console que busca dados reais na PokeAPI — espécies, habilidades e cadeia de evolução — e simula o ciclo de vida do bichinho. Separei em Model, View e Controller para manter a lógica de domínio fora da interface e o consumo da API isolado num serviço.",
      en: "A console application that pulls real data from the PokeAPI — species, abilities and evolution chains — and simulates the pet's lifecycle. Split into Model, View and Controller to keep domain logic out of the interface and API access isolated in a service.",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const supportingProjects = projects.filter((p) => !p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export type { Locale };
