/**
 * Education section content.
 *
 * Degrees and institutions are sourced from Douaa Bejou's CV
 * (BEJOU_douaa (4).pdf).
 *
 * Focus lines are editorial — they describe what each degree covered.
 * They are accurate for the Diplôme d'Ingénieur and Licence (inferred
 * from the CV's technical skills), and are standard French-curriculum
 * descriptions for the DEUST and Baccalauréat. Review and correct freely.
 */

export interface EducationEntry {
  id: string;
  /** Display string — e.g. "2023 – 2026". */
  period: string;
  /** Degree name in French — rendered with lang="fr". */
  title: string;
  /** Institution in French — rendered with lang="fr". */
  institution: string;
  /** City — plain text, no lang override. */
  location: string;
  /** One-line focus description. */
  focus: string;
}

/* ------------------------------------------------------------------ */
/*  EDUCATION ENTRIES — most recent first                              */
/* ------------------------------------------------------------------ */

export const education: EducationEntry[] = [
  {
    id: "ingenieur",
    period: "2023 – 2026",
    title: "Diplôme d'Ingénieur d'État en Génie Industriel",
    institution: "Faculté des Sciences et Techniques",
    location: "Tanger",
    focus:
      "Industrial systems, quality management, continuous improvement, and applied software.",
  },
  {
    id: "licence",
    period: "2022 – 2023",
    title: "Licence en Génie Informatique",
    institution: "Faculté des Sciences et Techniques",
    location: "Tanger",
    focus:
      "Computer science fundamentals — programming, algorithms, databases, and web development.",
  },
  {
    id: "deust",
    period: "2020 – 2022",
    title: "Diplôme d'Études Universitaires en Sciences et Techniques (DEUST)",
    institution: "Faculté des Sciences et Techniques",
    location: "Tanger",
    focus: "Foundational mathematics, physics, and computer science.",
  },
  {
    id: "bac",
    period: "2019 – 2020",
    title: "Baccalauréat Sciences Physiques",
    institution: "Lycée Abdelkrim El Khattabi",
    location: "Nador",
    focus: "Mathematics, physics, and chemistry.",
  },
];

/* ------------------------------------------------------------------ */
/*  ABOUT SUMMARY — short line + anchor link into Education            */
/* ------------------------------------------------------------------ */

export const aboutSummary = {
  /** Summary sentence shown in About's right column. */
  text: "Four degrees from the Faculté des Sciences et Techniques de Tanger, 2019–2026.",
  /** Anchor target for the "See Education" link. */
  href: "#education",
  /** Link label. */
  linkLabel: "See Education",
};