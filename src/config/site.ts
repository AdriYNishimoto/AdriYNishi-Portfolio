export const siteConfig = {
  name: "Adriano Nishimoto",
  shortName: "Adriano Nishimoto",
  kanji: "西本",
  role: "Back-end & Full Stack Developer",
  email: "dev.adrianonishimoto@gmail.com",
  location: "Campo Grande, MS — Brasil",
  photo: "/adriano.webp",
  links: {
    github: "https://github.com/AdriYNishimoto",
    linkedin: "https://www.linkedin.com/in/adriano-nishimoto",
    whatsapp: "https://wa.me/5567993285718",
  },
  cv: {
    pt: "/cv/adriano-nishimoto-cv-pt.pdf",
    en: "/cv/adriano-nishimoto-cv-en.pdf",
  },
} as const;

export const navItems = [
  { id: "about", href: "#about" },
  { id: "work", href: "#work" },
  { id: "experience", href: "#experience" },
  { id: "contact", href: "#contact" },
] as const;
