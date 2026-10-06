import type { ComponentType, SVGProps } from "react";
import {
  Activity,
  Atom,
  Award,
  BadgeCheck,
  BarChart3,
  CircleHelp,
  ClipboardList,
  Code,
  Coffee,
  Database,
  Factory,
  Gauge,
  GitBranch,
  Globe,
  Layers,
  LayoutGrid,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Terminal,
  TrendingUp,
  Users,
} from "lucide-react";

import { GithubIcon, LinkedinIcon, MailIcon } from "../components/ui/BrandIcons";

/**
 * Central registry of icons used across the site.
 *
 * The keys are the icon *names* stored in data files (see `src/data/*.ts`).
 * Data stays serializable; only this module knows about the React
 * components behind each name.
 *
 * Lucide icons and our local BrandIcons both satisfy `IconComponent` —
 * both accept `size`, `strokeWidth`, and any SVG prop.
 */

export interface IconComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number | string;
}

export type IconComponent = ComponentType<IconComponentProps>;

export type IconName =
  /* About capabilities */
  | "shield-check"
  | "trending-up"
  | "code"
  /* Projects — technology stack */
  | "atom"
  | "coffee"
  | "database"
  | "refresh-cw"
  | "bar-chart"
  | "git-branch"
  | "gauge"
  | "globe"
  | "activity"
  | "users"
  /* Skills — quality tools */
  | "shield-alert"
  | "help-circle"
  | "clipboard-list"
  /* Skills — Lean & quality systems */
  | "layout-grid"
  | "sparkles"
  | "factory"
  | "award"
  | "badge-check"
  /* Skills — digital & software */
  | "terminal"
  | "layers"
  /* Footer — social links */
  | "github"
  | "linkedin"
  | "mail";

export const iconMap: Record<IconName, IconComponent> = {
  /* About */
  "shield-check": ShieldCheck,
  "trending-up": TrendingUp,
  code: Code,
  /* Projects */
  atom: Atom,
  coffee: Coffee,
  database: Database,
  "refresh-cw": RefreshCw,
  "bar-chart": BarChart3,
  "git-branch": GitBranch,
  gauge: Gauge,
  globe: Globe,
  activity: Activity,
  users: Users,
  /* Skills — quality tools */
  "shield-alert": ShieldAlert,
  "help-circle": CircleHelp,
  "clipboard-list": ClipboardList,
  /* Skills — Lean & quality systems */
  "layout-grid": LayoutGrid,
  sparkles: Sparkles,
  factory: Factory,
  award: Award,
  "badge-check": BadgeCheck,
  /* Skills — digital & software */
  terminal: Terminal,
  layers: Layers,
  /* Footer */
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
};