import type { IconName } from "../utils/icons";

/**
 * About section content.
 *
 * All strings are sourced from Douaa Bejou's CV (BEJOU_douaa (4).pdf).
 * Do not invent content. Presentation lives in the consuming components.
 */

export interface CapabilityPillar {
  id: string;
  label: string;
  description: string;
  /** Key into `iconMap` — resolved to a Lucide component at render time. */
  icon: IconName;
}

export interface FormationEntry {
  id: string;
  period: string;
  title: string;
  institution?: string;
  /** City — shown in secondary color next to institution. */
  location?: string;
}

export interface FocusBlock {
  /** Eyebrow label above the block. */
  label: string;
  /** French phrase — rendered with lang="fr". */
  headlineFr: string;
  /** English continuation — rendered in English. */
  headlineEn: string;
  /** Compact list of themes / technologies. */
  tags: string[];
}

/* ------------------------------------------------------------------ */
/*  LEAD STATEMENT                                                     */
/* ------------------------------------------------------------------ */

export const aboutLead =
  "I design and build digital tools that solve real industrial problems — where quality systems, data and software meet.";

/* ------------------------------------------------------------------ */
/*  CAPABILITY PILLARS                                                 */
/* ------------------------------------------------------------------ */

export const capabilities: CapabilityPillar[] = [
  {
    id: "quality",
    label: "Quality systems",
    description:
      "Structured problem-solving with AMDEC, Pareto, Ishikawa, 5 Pourquoi, 8D — and a working understanding of ISO 9001 and IATF 16949.",
    icon: "shield-check",
  },
  {
    id: "improvement",
    label: "Continuous improvement",
    description:
      "Lean Manufacturing and Lean Six Sigma — DMAIC, 5S and Kaizen applied to real production lines to reduce SCRAP and stabilise KPIs.",
    icon: "trending-up",
  },
  {
    id: "digital",
    label: "Digital & software",
    description:
      "Building the tools — Python, Java, React, Laravel, SQL and SAP Quality Management.",
    icon: "code",
  },
];

/* ------------------------------------------------------------------ */
/*  FORMATION                                                          */
/* ------------------------------------------------------------------ */

export const formation: FormationEntry[] = [
  {
    id: "ingenieur",
    period: "2023 – 2026",
    title: "Diplôme d'Ingénieur d'État en Génie Industriel",
    institution: "Faculté des Sciences et Techniques",
    location: "Tanger",
  },
  {
    id: "licence",
    period: "2022 – 2023",
    title: "Licence en Génie Informatique",
    institution: "Faculté des Sciences et Techniques",
    location: "Tanger",
  },
  {
    id: "deust",
    period: "2020 – 2022",
    title:
      "Diplôme d'Études Universitaires en Sciences et Techniques (DEUST)",
    institution: "Faculté des Sciences et Techniques",
    location: "Tanger",
  },
  {
    id: "bac",
    period: "2019 – 2020",
    title: "Baccalauréat Sciences Physiques",
    institution: "Lycée Abdelkrim El Khattabi",
    location: "Nador",
  },
];

/* ------------------------------------------------------------------ */
/*  FINAL YEAR PROJECT (focus block)                                   */
/* ------------------------------------------------------------------ */

export const focusBlock: FocusBlock = {
  label: "Final year project",
  headlineFr: "Digitalisation des processus qualité",
  headlineEn:
    "at Hutchinson Maroc, Tanger — migration to SAP QM and a web tool for SCRAP monitoring and analysis.",
  tags: [
    "SAP QM migration",
    "SCRAP monitoring",
    "Web application",
    "React · Java · SQL",
  ],
};