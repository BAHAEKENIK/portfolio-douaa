/**
 * Projects section content.
 *
 * Content sourcing — every string in this file is tagged:
 *   [CV] — verbatim (or directly translated) from the CV
 *   [I]  — interpretation written for narrative structure;
 *          review before publishing, correct freely.
 *
 * No project has an external link, and no project has an image.
 * Technology icons are rendered from the `icon` field via utils/icons.ts.
 */

import type { IconName } from "../utils/icons";

export interface ProjectTechnology {
  id: string;
  label: string;
  icon: IconName;
}

export interface Project {
  id: string;
  /** Zero-padded number shown as a ghost numeral. */
  number: string;
  /** [CV] Project name — short, memorable. */
  name: string;
  /** [CV] Two- or three-theme category line, joined by ·. */
  category: string;
  /** [CV] One-line context: role · period · company, city. */
  context: string;
  /** [I] Problem statement — 1–2 sentences. */
  problem: string;
  /** [I] Solution statement — 1–2 sentences. */
  solution: string;
  /** [CV] Concrete deliverables. */
  deliverables: string[];
  /** [CV] Technologies and methods. */
  technologies: ProjectTechnology[];
}

/* ------------------------------------------------------------------ */
/*  PROJECTS — ordered most recent first                               */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  {
    id: "scrap-platform",
    number: "01",
    name: "SCRAP Analysis Platform",
    category: "Quality · Digitalisation · Software",
    context: "Final Year Project · 2026 · Hutchinson Maroc, Tanger",
    problem:
      "SCRAP was tracked across disconnected spreadsheets. Analysing trends was slow, and root-cause investigations lacked a single source of truth.",
    solution:
      "A web application that centralises SCRAP tracking and analysis, backed by a migration of quality data and procedures to SAP QM.",
    deliverables: [
      "Analysis and diagnosis of existing quality processes.",
      "Preparation of procedures and data for the SAP QM migration.",
      "Functional testing and user training on SAP QM.",
      "Web application for SCRAP monitoring and analysis.",
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
    name: "Production Performance Improvement",
    category: "Lean · Continuous Improvement",
    context: "End-of-Year Project · 2024 · Delfingen MA Tanger 2",
    problem:
      "SCRAP on production lines was measured but not systematically analysed. Root causes were addressed reactively rather than prevented.",
    solution:
      "A DMAIC-driven analysis using Pareto and Ishikawa to identify root causes, followed by corrective action plans and a KPI tracking tool for continuous follow-up.",
    deliverables: [
      "Root-cause analysis using DMAIC, Pareto and Ishikawa.",
      "Corrective and preventive action plans to reduce SCRAP.",
      "Defect analysis and preventive maintenance follow-up.",
      "KPI tracking tool for production performance.",
      "Operator training on best practices and waste reduction.",
    ],
    technologies: [
      { id: "dmaic", label: "DMAIC", icon: "refresh-cw" },
      { id: "pareto", label: "Pareto", icon: "bar-chart" },
      { id: "ishikawa", label: "Ishikawa", icon: "git-branch" },
      { id: "kpi", label: "KPI tracking", icon: "gauge" },
    ],
  },
  {
    id: "project-manager",
    number: "03",
    name: "Project Management Web Application",
    category: "Software · Project Management",
    context: "Final Year Project · 2023 · MediaCaris",
    problem:
      "Projects, tasks and user assignments were tracked across multiple tools with no single view of progress.",
    solution:
      "A web application for managing projects, tasks and users — with real-time task assignment and progress tracking.",
    deliverables: [
      "Project, task and user management.",
      "Real-time task assignment and tracking.",
      "Centralised view of progress across the team.",
    ],
    technologies: [
      { id: "web", label: "Web application", icon: "globe" },
      { id: "realtime", label: "Real-time", icon: "activity" },
      { id: "multi-user", label: "Multi-user", icon: "users" },
    ],
  },
];