/**
 * Stack grouped by area. Levels mirror what the CV states — no inflation.
 * Group titles and level labels are translated in messages/{locale}.json.
 */
export type TechLevel = "intermediate" | "basicIntermediate" | "basic";

export type TechGroup = {
  id: string;
  icon: "braces" | "code" | "server" | "database" | "architecture" | "devops" | "ai" | "data";
  items: { name: string; level?: TechLevel }[];
};

export const techGroups: TechGroup[] = [
  {
    id: "languages",
    icon: "braces",
    items: [
      { name: "JavaScript", level: "intermediate" },
      { name: "TypeScript", level: "intermediate" },
      { name: "Python", level: "intermediate" },
      { name: "C#", level: "basicIntermediate" },
      { name: "SQL", level: "intermediate" },
    ],
  },
  {
    id: "frontend",
    icon: "code",
    items: [
      { name: "React", level: "intermediate" },
      { name: "Next.js", level: "basic" },
      { name: "HTML", level: "intermediate" },
      { name: "CSS", level: "intermediate" },
    ],
  },
  {
    id: "backend",
    icon: "server",
    items: [
      { name: "Django", level: "intermediate" },
      { name: ".NET", level: "basicIntermediate" },
      { name: "Node.js", level: "basic" },
      { name: "NestJS", level: "basic" },
      { name: "ASP.NET Core" },
      { name: "Django REST Framework" },
    ],
  },
  {
    id: "databases",
    icon: "database",
    items: [
      { name: "PostgreSQL", level: "intermediate" },
      { name: "SQL Server", level: "intermediate" },
      { name: "MySQL", level: "intermediate" },
      { name: "SQLite" },
    ],
  },
  {
    id: "architecture",
    icon: "architecture",
    items: [
      { name: "APIs RESTful" },
      { name: "Clean Architecture" },
      { name: "SOLID" },
      { name: "Design Patterns" },
      { name: "Microsserviços" },
    ],
  },
  {
    id: "devops",
    icon: "devops",
    items: [
      { name: "Git", level: "intermediate" },
      { name: "GitHub", level: "intermediate" },
      { name: "Docker", level: "basic" },
      { name: "Docker Compose", level: "basic" },
    ],
  },
  {
    id: "ai",
    icon: "ai",
    items: [
      { name: "Google Gemini" },
      { name: "Claude Code" },
      { name: "Agentes de IA" },
    ],
  },
  {
    id: "data",
    icon: "data",
    items: [
      { name: "pandas" },
      { name: "numpy" },
      { name: "Power BI (DAX)" },
      { name: "Power Automate" },
      { name: "n8n" },
    ],
  },
];
