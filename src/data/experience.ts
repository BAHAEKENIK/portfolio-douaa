/**
 * Experience section content.
 *
 * All entries are sourced from Douaa Bejou's CV (BEJOU_douaa (4).pdf).
 * French phrases are kept verbatim — the render layer tags them with
 * lang="fr" for correct screen-reader pronunciation.
 */

export interface ExperienceEntry {
  id: string;
  /** Display string — e.g. "02/2026 – 07/2026". */
  period: string;
  /** Neutral role category shown as the timeline header. */
  role: string;
  /** Company name. */
  company: string;
  /** City — optional; the CV omits it for some entries. */
  location?: string;
  /** French mission title from the CV — rendered with lang="fr". */
  title: string;
  /** Bullet points — each is a concrete task or outcome. */
  bullets: string[];
  /** Methods / tools used on this mission. */
  tags: string[];
  /**
   * When true, the timeline renders a small orange dot for this entry.
   * Exactly one entry should have this set — the most recent / most
   * relevant one.
   */
  highlight?: boolean;
}

/* ------------------------------------------------------------------ */
/*  EXPERIENCE ENTRIES — ordered most recent first                     */
/* ------------------------------------------------------------------ */

export const experience: ExperienceEntry[] = [
  {
    id: "hutchinson",
    period: "02/2026 – 07/2026",
    role: "Final Year Project",
    company: "Hutchinson Maroc",
    location: "Tanger",
    title: "Digitalisation des processus qualité",
    bullets: [
      "Analyse et diagnostic des processus qualité existants.",
      "Préparation des procédures et des données pour la migration vers SAP QM.",
      "Réalisation des tests fonctionnels et formation des utilisateurs SAP QM.",
      "Développement d'une application web de suivi et d'analyse du SCRAP.",
    ],
    tags: ["SAP QM", "SCRAP analysis", "React", "Java", "SQL"],
    highlight: true,
  },
  {
    id: "delfingen",
    period: "07/2024 – 09/2024",
    role: "Final Year Project",
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
    tags: ["DMAIC", "Pareto", "Ishikawa", "KPI tracking", "Lean"],
  },
  {
    id: "mediacaris",
    period: "04/2023 – 06/2023",
    role: "Final Year Project",
    company: "MediaCaris",
    title: "Développement d'une application web de gestion de projet",
    bullets: [
      "Gestion des projets, des tâches et des utilisateurs.",
      "Affectation et suivi des tâches en temps réel.",
    ],
    tags: ["Web application", "Project management", "Real-time tracking"],
  },
];