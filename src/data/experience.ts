/**
 * Experience section content.
 *
 * All entries are sourced from Douaa Bejou's CV (BEJOU_douaa (4).pdf).
 */

export interface ExperienceEntry {
  id: string;
  period: string;
  role: string;
  company: string;
  location?: string;
  title: string;
  bullets: string[];
  tags: string[];
  highlight?: boolean;
}

/* ------------------------------------------------------------------ */
/*  EXPÉRIENCES — de la plus récente à la plus ancienne                */
/* ------------------------------------------------------------------ */

export const experience: ExperienceEntry[] = [
  {
    id: "hutchinson",
    period: "02/2026 – 07/2026",
    role: "Projet de Fin d'Études",
    company: "Hutchinson Maroc",
    location: "Tanger",
    title: "Digitalisation des processus qualité",
    bullets: [
      "Analyse et diagnostic des processus qualité existants.",
      "Préparation des procédures et des données pour la migration vers SAP QM.",
      "Réalisation des tests fonctionnels et formation des utilisateurs SAP QM.",
      "Développement d'une application web de suivi et d'analyse du SCRAP.",
    ],
    tags: ["SAP QM", "Analyse SCRAP", "React", "Java", "SQL"],
    highlight: true,
  },
  {
    id: "delfingen",
    period: "07/2024 – 09/2024",
    role: "Projet de Fin d'Année",
    company: "Delfingen MA Tanger 2",
    location: "Tanger",
    title: "Analyse et amélioration de la performance de production",
    bullets: [
      "Suivi et analyse des rebuts (SCRAP) et identification des causes racines avec DMAIC, Pareto et Ishikawa.",
      "Élaboration et suivi de plans d'actions correctives et préventives pour réduire le SCRAP.",
      "Analyse des défauts et suivi des actions liées à la maintenance préventive des équipements.",
      "Mise en place d'un outil de suivi et des KPI de performance.",
      "Sensibilisation des opérateurs aux bonnes pratiques et à la réduction des déchets.",
    ],
    tags: ["DMAIC", "Pareto", "Ishikawa", "Suivi des KPI", "Lean"],
  },
  {
    id: "mediacaris",
    period: "04/2023 – 06/2023",
    role: "Projet de Fin d'Études",
    company: "MediaCaris",
    title: "Développement d'une application web de gestion de projet",
    bullets: [
      "Gestion des projets, des tâches et des utilisateurs.",
      "Affectation et suivi des tâches en temps réel.",
    ],
    tags: ["Application web", "Gestion de projet", "Suivi en temps réel"],
  },
];