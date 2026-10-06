import type { Variants } from "framer-motion";

/* ============================================================
   SHARED MOTION SYSTEM
   ============================================================

   Every animation on the site imports from this file. The goal is
   one consistent feel — same easing, same rhythm, same reduced-
   motion behaviour — expressed through a small, honest API.

   Sections still decide their own transform distances and stagger
   counts by passing arguments to these factories. But the cadence
   of the motion — how long things take, how delayed children are,
   when the reveal fires — is defined here, not in each section.
   ============================================================ */

/* ============================================================
   EASING
   ============================================================ */

/**
 * Standard out-easing used across the site.
 * Cubic-bezier(0.22, 1, 0.36, 1) — fast start, slow settle.
 * Matches the `--ease-out` CSS token in tokens.css.
 */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ============================================================
   DURATIONS (seconds)
   ============================================================ */

export const DURATION = {
  /** Small elements — dots, icons, single-line reveals. */
  fast: 0.4,
  /** Standard content — paragraphs, blocks. */
  base: 0.5,
  /** Larger composed blocks — section columns, entry groups. */
  slow: 0.6,
  /** Long draws — spines, ghost numerals, hero-scale elements. */
  slower: 0.8,
} as const;

/* ============================================================
   STAGGER (seconds between children)
   ============================================================ */

export const STAGGER = {
  /** Very granular — icon rows, tag rows. */
  tight: 0.05,
  /** Default — items within a group. */
  base: 0.08,
  /** Groups of groups — columns, timeline entries. */
  loose: 0.15,
} as const;

/* ============================================================
   VIEWPORT THRESHOLDS
   Spread into the `viewport` prop on motion elements.
   ============================================================ */

export const VIEWPORT = {
  /** Fires when 15 % of the element is visible — tall sections. */
  early: { once: true, amount: 0.15 } as const,
  /** Default — 20 % visibility. */
  base: { once: true, amount: 0.2 } as const,
  /** 30 % visibility — shorter blocks, footer columns. */
  late: { once: true, amount: 0.3 } as const,
  /** 50 % visibility — small trailing elements like the baseline row. */
  veryLate: { once: true, amount: 0.5 } as const,
} as const;

/* ============================================================
   CONTAINER — orchestrates children, no own transform
   ============================================================ */

/**
 * A container variant that only staggers its children.
 * The container itself does not fade or move.
 *
 *   <motion.ul variants={container(reduce)} ...>
 *     <motion.li variants={fadeUp(reduce)} ... />
 *   </motion.ul>
 */
export function container(
  reduce: boolean,
  stagger: number = STAGGER.loose,
  delayChildren = 0,
): Variants {
  if (reduce) return { hidden: {}, visible: {} };
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

/* ============================================================
   FADE UP — the standard content reveal
   ============================================================ */

export function fadeUp(
  reduce: boolean,
  y: number = 16,
  duration: number = DURATION.base,
): Variants {
  if (reduce) return { hidden: { opacity: 1 }, visible: { opacity: 1 } };
  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: EASE_OUT },
    },
  };
}

/* ============================================================
   FADE IN — no transform, for quiet elements
   ============================================================ */

export function fadeIn(
  reduce: boolean,
  duration: number = DURATION.base,
  delay = 0,
): Variants {
  if (reduce) return { hidden: { opacity: 1 }, visible: { opacity: 1 } };
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration, ease: EASE_OUT, delay },
    },
  };
}

/* ============================================================
   FADE + SCALE — for dots, markers, chips
   ============================================================ */

export function fadeScale(
  reduce: boolean,
  from: number = 0.6,
  duration: number = DURATION.fast,
): Variants {
  if (reduce) return { hidden: { opacity: 1 }, visible: { opacity: 1 } };
  return {
    hidden: { scale: from, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration, ease: EASE_OUT },
    },
  };
}

/* ============================================================
   SLIDE IN FROM LEFT — for list items
   ============================================================ */

export function slideInLeft(
  reduce: boolean,
  distance: number = 8,
  duration: number = DURATION.fast,
): Variants {
  if (reduce) return { hidden: { opacity: 1 }, visible: { opacity: 1 } };
  return {
    hidden: { opacity: 0, x: -distance },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration, ease: EASE_OUT },
    },
  };
}

/* ============================================================
   SLIDE IN FROM RIGHT — for right-aligned elements
   ============================================================ */

export function slideInRight(
  reduce: boolean,
  distance: number = 12,
  duration: number = DURATION.fast,
): Variants {
  if (reduce) return { hidden: { opacity: 1 }, visible: { opacity: 1 } };
  return {
    hidden: { opacity: 0, x: distance },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration, ease: EASE_OUT },
    },
  };
}

/* ============================================================
   DRAW SCALE — for spines and single-axis growth
   ============================================================ */

/**
 * Draws an element along one axis from zero to full length.
 * Used by timelines (Education spine) and would be used by any
 * future one-shot drawn lines. Not for scroll-linked values —
 * those are driven by `useScroll` + `useSpring` directly.
 */
export function drawScale(
  reduce: boolean,
  axis: "x" | "y" = "y",
  duration: number = DURATION.slower,
): Variants {
  const full = axis === "x" ? { scaleX: 1 } : { scaleY: 1 };
  if (reduce) return { hidden: full, visible: full };
  const zero = axis === "x" ? { scaleX: 0 } : { scaleY: 0 };
  return {
    hidden: zero,
    visible: { ...full, transition: { duration, ease: EASE_OUT } },
  };
}

/* ============================================================
   FADE UP CONTAINER — fade up AND orchestrate children
   ============================================================ */

/**
 * A container variant that fades up like `fadeUp`, and also
 * staggers its children. Used by Process steps, where the step
 * block itself fades in and its dot/title/body cascade after.
 *
 * Under reduced motion, this behaves like `fadeUp` — the container
 * itself is visible; children still receive their `visible` state
 * but their own factories render them statically.
 */
export function fadeUpContainer(
  reduce: boolean,
  y: number = 16,
  duration: number = DURATION.base,
  stagger: number = STAGGER.base,
  delayChildren = 0,
): Variants {
  if (reduce) return { hidden: { opacity: 1 }, visible: { opacity: 1 } };
  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: EASE_OUT,
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };
}