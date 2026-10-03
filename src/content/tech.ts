/** Levels are shown only where the supplied résumé explicitly gives one. */
export type TechLevel = "intermediate" | "basicIntermediate" | "basic";

export type TechGroup = {
  id: string;
  icon: "braces" | "code" | "server" | "database" | "tools" | "practices";
  items: { name: string; level?: TechLevel; labelKey?: string }[];
};

export const techGroups: TechGroup[] = [
  {
    id: "languages",
    icon: "braces",
    items: [
      { name: "Python", level: "intermediate" },
      { name: "C# / .NET", level: "basicIntermediate" },
      { name: "JavaScript", level: "basic" },
      { name: "TypeScript", level: "basic" },
    ],
  },
  {
    id: "backend",
    icon: "server",
    items: [
      { name: "FastAPI" },
      { name: "Django" },
      { name: "ASP.NET Core" },
      { name: "Entity Framework" },
      { name: "Node.js" },
    ],
  },
  {
    id: "frontend",
    icon: "code",
    items: [{ name: "React" }, { name: "HTML" }, { name: "CSS" }],
  },
  {
    id: "databases",
    icon: "database",
    items: [
      { name: "SQL" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "NoSQL" },
      { name: "Supabase" },
    ],
  },
  {
    id: "tools",
    icon: "tools",
    items: [
      { name: "Git / GitHub" },
      { name: "Postman" },
      { name: "Vercel" },
      { name: "Render" },
    ],
  },
  {
    id: "practices",
    icon: "practices",
    items: [
      { name: "REST APIs", labelKey: "practiceRest" },
      { name: "CRUD" },
      { name: "Authentication", labelKey: "practiceAuth" },
      { name: "Scrum / Kanban" },
      { name: "Gemini API", labelKey: "practiceGemini" },
      { name: "AI-assisted development", labelKey: "practiceAi" },
    ],
  },
];
