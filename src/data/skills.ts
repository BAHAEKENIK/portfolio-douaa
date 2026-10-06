import type { IconName } from "../utils/icons";

/**
 * Skills section content.
 *
 * All skills and languages are sourced from Douaa Bejou's CV
 * (BEJOU_douaa (4).pdf). No invented skills, no filler.
 *
 * Structure:
 *   - Three technical categories → rendered as columns
 *   - Interpersonal skills → rendered as a footer row
 *   - Languages → rendered as a footer row
 */

export interface SkillItem {
  id: string;
  /** Display label — e.g. "AMDEC", "ISO 9001". */
  label: string;
  /** Key into the icon registry (utils/icons.ts). */
  icon: IconName;
  /**
   * Optional qualifier rendered in secondary color next to the label.
   * Used only when the CV states a scope limitation — e.g. "notions"
   * for IATF 16949. Leave undefined when the skill is asserted plainly.
   */
  qualifier?: string;
}

export interface SkillCategory {
  id: string;
  /** Column heading — e.g. "Quality tools". */
  label: string;
  /** Skill rows rendered in the column, top-to-bottom. */
  skills: SkillItem[];
}

export interface InterpersonalSkill {
  id: string;
  /** Short label — the CV lists these as one or two words. */
  label: string;
}

export interface Language {
  id: string;
  /** Language name — French, Arabic, English. */
  label: string;
  /** Level as stated on the CV. */
  level: string;
  /** ISO 3166-1 alpha-2 code — resolved to a flag in the section. */
  countryCode: "FR" | "MA" | "GB";
}

/* ------------------------------------------------------------------ */
/*  TECHNICAL CATEGORIES — rendered as columns                         */
/* ------------------------------------------------------------------ */

export const skillCategories: SkillCategory[] = [
  {
    id: "quality-tools",
    label: "Outils qualité",
    skills: [
      { id: "amdec",  label: "AMDEC",       icon: "shield-alert" },
      { id: "pareto", label: "Pareto",      icon: "bar-chart" },
      { id: "ishikawa", label: "Ishikawa",  icon: "git-branch" },
      { id: "5p",     label: "5 Pourquoi",  icon: "help-circle" },
      { id: "8d",     label: "8D",          icon: "clipboard-list" },
    ],
  },
  {
    id: "lean-quality",
    label: "Lean & Systèmes qualité",
    skills: [
      { id: "dmaic", label: "DMAIC",              icon: "refresh-cw" },
      { id: "5s",    label: "5S",                 icon: "layout-grid" },
      { id: "kaizen", label: "Kaizen",            icon: "sparkles" },
      { id: "lean-mfg", label: "Lean Manufacturing", icon: "factory" },
      { id: "lean-six", label: "Lean Six Sigma",  icon: "award" },
      { id: "iso-9001", label: "ISO 9001",        icon: "badge-check" },
      {
        id: "iatf",
        label: "IATF 16949",
        icon: "badge-check",
        qualifier: "notions",
      },
    ],
  },
  {
    id: "digital",
    label: "Digital & logiciel",
    skills: [
      { id: "python", label: "Python",  icon: "terminal" },
      { id: "java",   label: "Java",    icon: "coffee" },
      { id: "react",  label: "React",   icon: "atom" },
      { id: "laravel", label: "Laravel", icon: "layers" },
      { id: "sql",    label: "SQL",     icon: "database" },
      { id: "sap-qm", label: "SAP QM",  icon: "shield-check" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  INTERPERSONAL SKILLS — rendered as a footer row                    */
/* ------------------------------------------------------------------ */

export const interpersonalSkills: InterpersonalSkill[] = [
  { id: "teamwork",     label: "Travail en équipe" },
  { id: "adaptability", label: "Adaptabilité" },
  { id: "autonomy",     label: "Autonomie" },
  { id: "curiosity",    label: "Curiosité" },
];

/* ------------------------------------------------------------------ */
/*  LANGUAGES — rendered as a footer row                               */
/* ------------------------------------------------------------------ */

export const languages: Language[] = [
  { id: "fr", label: "Français", level: "Courant",       countryCode: "FR" },
  { id: "ar", label: "Arabe",    level: "Maternelle",    countryCode: "MA" },
  { id: "en", label: "English",  level: "Intermédiaire", countryCode: "GB" },
];