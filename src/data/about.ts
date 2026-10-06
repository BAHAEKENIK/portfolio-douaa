import type { IconName } from "../utils/icons";

/**
 * Contenu de la section « À propos ».
 *
 * Toutes les chaînes sont issues du CV de Douaa Bejou
 * (BEJOU_douaa (4).pdf). Ne rien inventer.
 */

export interface CapabilityPillar {
  id: string;
  label: string;
  description: string;
  icon: IconName;
}

export interface FocusBlock {
  label: string;
  /** Phrase unique avec un tiret cadratin — split au rendu pour deux tons. */
  headline: string;
  tags: string[];
}

/* ------------------------------------------------------------------ */
/*  PHRASE D'INTRODUCTION                                              */
/* ------------------------------------------------------------------ */

export const aboutLead =
  "Je conçois et développe des outils numériques qui résolvent de vrais problèmes industriels — là où systèmes qualité, données et logiciel se rejoignent.";

/* ------------------------------------------------------------------ */
/*  PILIERS DE COMPÉTENCES                                             */
/* ------------------------------------------------------------------ */

export const capabilities: CapabilityPillar[] = [
  {
    id: "quality",
    label: "Systèmes qualité",
    description:
      "Résolution structurée de problèmes avec AMDEC, Pareto, Ishikawa, 5 Pourquoi, 8D — et une connaissance appliquée des référentiels ISO 9001 et IATF 16949.",
    icon: "shield-check",
  },
  {
    id: "improvement",
    label: "Amélioration continue",
    description:
      "Lean Manufacturing et Lean Six Sigma — DMAIC, 5S et Kaizen appliqués à de vraies lignes de production pour réduire le SCRAP et stabiliser les KPI.",
    icon: "trending-up",
  },
  {
    id: "digital",
    label: "Digital & logiciel",
    description:
      "Construire les outils — Python, Java, React, Laravel, SQL et SAP Quality Management.",
    icon: "code",
  },
];

/* ------------------------------------------------------------------ */
/*  PROJET DE FIN D'ÉTUDES (bloc focus)                                */
/* ------------------------------------------------------------------ */

export const focusBlock: FocusBlock = {
  label: "Projet de fin d'études",
  headline:
    "Digitalisation des processus qualité chez Hutchinson Maroc, Tanger — migration vers SAP QM et un outil web de suivi et d'analyse du SCRAP.",
  tags: [
    "Migration SAP QM",
    "Suivi SCRAP",
    "Application web",
    "React · Java · SQL",
  ],
};