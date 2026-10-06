/**
 * Contenu de la section « Formation ».
 *
 * Les diplômes et les établissements proviennent du CV de Douaa Bejou
 * (BEJOU_douaa (4).pdf).
 */

export interface EducationEntry {
  id: string;
  period: string;
  title: string;
  institution: string;
  location: string;
  /** Ligne de focus — description éditoriale du contenu du diplôme. */
  focus: string;
}

/* ------------------------------------------------------------------ */
/*  DIPLÔMES — du plus récent au plus ancien                           */
/* ------------------------------------------------------------------ */

export const education: EducationEntry[] = [
  {
    id: "ingenieur",
    period: "2023 – 2026",
    title: "Diplôme d'Ingénieur d'État en Génie Industriel",
    institution: "Faculté des Sciences et Techniques",
    location: "Tanger",
    focus:
      "Systèmes industriels, management de la qualité, amélioration continue et logiciel appliqué.",
  },
  {
    id: "licence",
    period: "2022 – 2023",
    title: "Licence en Génie Informatique",
    institution: "Faculté des Sciences et Techniques",
    location: "Tanger",
    focus:
      "Fondamentaux informatiques — programmation, algorithmes, bases de données et développement web.",
  },
  {
    id: "deust",
    period: "2020 – 2022",
    title:
      "Diplôme d'Études Universitaires en Sciences et Techniques (DEUST)",
    institution: "Faculté des Sciences et Techniques",
    location: "Tanger",
    focus: "Mathématiques, physique et informatique fondamentales.",
  },
  {
    id: "bac",
    period: "2019 – 2020",
    title: "Baccalauréat Sciences Physiques",
    institution: "Lycée Abdelkrim El Khattabi",
    location: "Nador",
    focus: "Mathématiques, physique et chimie.",
  },
];

/* ------------------------------------------------------------------ */
/*  RÉSUMÉ AFFICHÉ DANS « À PROPOS »                                   */
/* ------------------------------------------------------------------ */

export const aboutSummary = {
  text: "Quatre diplômes de la Faculté des Sciences et Techniques de Tanger, 2019–2026.",
  href: "#education",
  linkLabel: "Voir la formation",
};