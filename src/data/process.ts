/**
 * Contenu de la section « Ma méthode ».
 *
 * Les quatre étapes font le lien entre génie industriel et logiciel :
 * comprendre le vrai problème, l'analyser avec des données et des
 * méthodes structurées, construire la solution comme un outil
 * concret, puis mesurer et améliorer en continu.
 */

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  body: string;
  highlight?: boolean;
}

export const processSteps: ProcessStep[] = [
  {
    id: "comprendre",
    number: "01",
    title: "Comprendre",
    body: "Comprendre le processus et le vrai problème.",
    highlight: true,
  },
  {
    id: "analyser",
    number: "02",
    title: "Analyser",
    body: "Utiliser les données et des méthodes structurées pour identifier les causes.",
  },
  {
    id: "construire",
    number: "03",
    title: "Construire",
    body: "Transformer la solution en un outil numérique concret.",
  },
  {
    id: "ameliorer",
    number: "04",
    title: "Améliorer",
    body: "Mesurer les résultats et améliorer en continu.",
  },
];

/** Phrase d'introduction affichée au-dessus des quatre étapes. */
export const processIntro =
  "Je fais le lien entre génie industriel et logiciel à travers une méthode structurée en quatre étapes.";