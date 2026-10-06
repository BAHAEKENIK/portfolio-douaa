import type { IconName } from "../utils/icons";

/**
 * Contenu de la section « Projets ».
 *
 * Sources :
 *   [CV] — extrait du CV de Douaa Bejou
 *   [É]  — interprétation éditoriale (les formulations « problème » et
 *          « solution » sont des reformulations narratives)
 *
 * Aucun projet n'a de lien externe, aucun projet n'a d'image.
 */

export interface ProjectTechnology {
  id: string;
  label: string;
  icon: IconName;
}

export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  context: string;
  problem: string;
  solution: string;
  deliverables: string[];
  technologies: ProjectTechnology[];
}

/* ------------------------------------------------------------------ */
/*  PROJETS — du plus récent au plus ancien                            */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  {
    id: "scrap-platform",
    number: "01",
    name: "Plateforme d'analyse SCRAP",
    category: "Qualité · Digitalisation · Logiciel",
    context: "Projet de fin d'études · 2026 · Hutchinson Maroc, Tanger",
    problem:
      "Le SCRAP était suivi dans des tableurs dispersés. L'analyse des tendances était lente et les investigations de causes racines manquaient d'une source unique de vérité.",
    solution:
      "Une application web qui centralise le suivi et l'analyse du SCRAP, appuyée par une migration des données et des procédures qualité vers SAP QM.",
    deliverables: [
      "Analyse et diagnostic des processus qualité existants.",
      "Préparation des procédures et des données pour la migration vers SAP QM.",
      "Tests fonctionnels et formation des utilisateurs sur SAP QM.",
      "Application web de suivi et d'analyse du SCRAP.",
    ],
    technologies: [
      { id: "react", label: "React", icon: "atom" },
      { id: "java", label: "Java", icon: "coffee" },
      { id: "sql", label: "SQL", icon: "database" },
      { id: "sap-qm", label: "SAP QM", icon: "shield-check" },
    ],
  },
  {
    id: "production-performance",
    number: "02",
    name: "Amélioration de la performance de production",
    category: "Lean · Amélioration continue",
    context: "Projet de fin d'année · 2024 · Delfingen MA Tanger 2",
    problem:
      "Le SCRAP sur les lignes de production était mesuré mais pas analysé de manière systématique. Les causes racines étaient traitées de manière réactive plutôt que préventive.",
    solution:
      "Une analyse menée avec DMAIC, Pareto et Ishikawa pour identifier les causes racines, suivie de plans d'actions correctives et d'un outil de suivi des KPI.",
    deliverables: [
      "Analyse des causes racines avec DMAIC, Pareto et Ishikawa.",
      "Plans d'actions correctives et préventives pour réduire le SCRAP.",
      "Analyse des défauts et suivi de la maintenance préventive.",
      "Outil de suivi des KPI de performance de production.",
      "Sensibilisation des opérateurs aux bonnes pratiques et à la réduction des déchets.",
    ],
    technologies: [
      { id: "dmaic", label: "DMAIC", icon: "refresh-cw" },
      { id: "pareto", label: "Pareto", icon: "bar-chart" },
      { id: "ishikawa", label: "Ishikawa", icon: "git-branch" },
      { id: "kpi", label: "Suivi KPI", icon: "gauge" },
    ],
  },
  {
    id: "project-manager",
    number: "03",
    name: "Application web de gestion de projet",
    category: "Logiciel · Gestion de projet",
    context: "Projet de fin d'études · 2023 · MediaCaris",
    problem:
      "Les projets, tâches et affectations utilisateurs étaient suivis dans plusieurs outils, sans vue unique de l'avancement.",
    solution:
      "Une application web de gestion des projets, des tâches et des utilisateurs — avec affectation et suivi des tâches en temps réel.",
    deliverables: [
      "Gestion des projets, des tâches et des utilisateurs.",
      "Affectation et suivi des tâches en temps réel.",
      "Vue centralisée de l'avancement pour toute l'équipe.",
    ],
    technologies: [
      { id: "web", label: "Application web", icon: "globe" },
      { id: "realtime", label: "Temps réel", icon: "activity" },
      { id: "multi-user", label: "Multi-utilisateur", icon: "users" },
    ],
  },
];