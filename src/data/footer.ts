import type { IconName } from "../utils/icons";

/**
 * Footer content.
 *
 * ⚠️ PLACEHOLDER LINKS — replace before deploying:
 *   - email:    douaa.bejou@example.com  → real address
 *   - github:   https://github.com/douaa-bejou  → real profile
 *   - linkedin: https://linkedin.com/in/douaa-bejou  → real profile
 *
 * Every other string is final.
 */

export interface SocialLink {
  id: string;
  /** Visible label next to the icon. */
  label: string;
  /** Full URL — `mailto:` for email, `https://` for others. */
  href: string;
  /** Key into the icon registry (utils/icons.ts). */
  icon: IconName;
  /**
   * When true, the link renders with target="_blank" and
   * rel="noopener noreferrer". Email links use `false`.
   */
  external: boolean;
}

export interface FooterData {
  name: string;
  role: string;
  /** Three-word positioning line, rendered with bullet separators. */
  tagline: string[];
  socials: SocialLink[];
  copyright: string;
  location: string;
}

export const footer: FooterData = {
  name: "Douaa Bejou",
  role: "Ingénieure en Génie Industriel",
  tagline: ["Qualité", "Transformation digitale", "Technologie"],
  socials: [
    {
      id: "github",
      label: "GitHub",
      // TODO: replace with real profile URL
      href: "https://github.com/douaa-bejou",
      icon: "github",
      external: true,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      // TODO: replace with real profile URL
      href: "https://www.linkedin.com/in/douaabejou/",
      icon: "linkedin",
      external: true,
    },
    {
      id: "email",
      label: "Email",
      // TODO: replace with real address
      href: "mailto:bejoudouaa@gmail.com",
      icon: "mail",
      external: false,
    },
  ],
  copyright: "© 2026 Douaa Bejou",
  location: "Tanger, Maroc",
};