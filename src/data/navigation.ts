export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
];

export const siteName = "Douaa Bejou";