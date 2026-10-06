export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export const navItems: NavItem[] = [
  { label: "Accueil", href: "#home", id: "home" },
  { label: "À propos", href: "#about", id: "about" },
  { label: "Expérience", href: "#experience", id: "experience" },
  { label: "Projets", href: "#projects", id: "projects" },
  { label: "Compétences", href: "#skills", id: "skills" },
];

export const siteName = "Douaa Bejou";