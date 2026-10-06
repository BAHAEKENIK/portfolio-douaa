/**
 * How I Work section content.
 *
 * The four steps connect industrial engineering and software:
 * understand the real problem, analyse it with data and structured
 * methods, build the solution as a practical tool, then measure and
 * improve continuously.
 *
 * Text is sourced from the project brief. Each step is intentionally
 * minimal — a single verb for the title and one sentence for the body.
 * Padding these would dilute the section.
 */

export interface ProcessStep {
  id: string;
  /** Zero-padded sequence number — "01", "02", "03", "04". */
  number: string;
  /** Single-verb title — Understand, Analyse, Build, Improve. */
  title: string;
  /** One-sentence description of what happens in this step. */
  body: string;
  /**
   * When true, the step's dot is filled with the accent colour.
   * Exactly one step should have this set — the one that starts
   * the process.
   */
  highlight?: boolean;
}

export const processSteps: ProcessStep[] = [
  {
    id: "understand",
    number: "01",
    title: "Understand",
    body: "Understand the process and the real problem.",
    highlight: true,
  },
  {
    id: "analyse",
    number: "02",
    title: "Analyse",
    body: "Use data and structured methods to identify causes.",
  },
  {
    id: "build",
    number: "03",
    title: "Build",
    body: "Transform the solution into a practical digital tool.",
  },
  {
    id: "improve",
    number: "04",
    title: "Improve",
    body: "Measure results and continuously improve.",
  },
];

/** Short intro paragraph shown above the four steps. */
export const processIntro =
  "I connect industrial engineering and software by working through a structured four-step process.";