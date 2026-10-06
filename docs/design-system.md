
---

## 5. `docs/design-system.md`

```markdown
# Design System

Every visual decision in the site lives in `src/styles/tokens.css` as a CSS
custom property. Section stylesheets reference these variables. Changing the
value in one place propagates everywhere.

## Colours

| Token | Value | Role |
|-------|-------|------|
| `--color-bg` | `#F7F6F2` | Page background — warm off-white |
| `--color-text` | `#202124` | Primary text |
| `--color-text-secondary` | `#5F6368` | Secondary text, labels |
| `--color-border` | `#D9D7D0` | Rules, dividers, borders |
| `--color-white` | `#FFFFFF` | Portrait frame, cards |
| `--color-accent` | `#C65D2E` | Orange accent — used sparingly |
| `--color-dark` | `#202124` | Dark band (Projects) |
| `--color-skeleton` | `#E8E6DF` | Loading placeholders |

### Accent discipline

Orange is used **at most once per section**. Current usage:

| Section | Orange element | Surface |
|---------|---------------|---------|
| About | 6 px dot next to "Projet de fin d'études" | ~6 px² |
| Experience | 11 px dot on the highlighted entry | ~95 px² |
| Projects | 6 px dot per project (×3) + 2 px hover bar | ~50 px² |
| Process | 11 px dot on step 01 | ~95 px² |
| All others | — | 0 |

Never double up. Never fill buttons. Never color icons — with one deliberate
exception: link underlines on hover, which pass contrast.

### Contrast audit

| Pair | Ratio | WCAG |
|------|-------|------|
| `#202124` on `#F7F6F2` | 15.6:1 | AAA |
| `#5F6368` on `#F7F6F2` | 5.5:1 | AA (normal text) |
| `#F7F6F2` on `#202124` | 15.6:1 | AAA |
| `rgba(247,246,242,0.78)` on `#202124` | ~11:1 | AAA |
| `rgba(247,246,242,0.55)` on `#202124` | ~5.4:1 | AA |
| `#C65D2E` on `#F7F6F2` | 3.55:1 | AA (large) / decorative only |

Anything below 4.5:1 is only used for large text (≥ 18 pt / 24 px), non-text
elements, or hover-only affordances.

## Typography

### Fonts

- **IBM Plex Sans** — headings, body, UI
- **Inter** — labels, metadata, tracking-wide uppercase text

Both loaded from Google Fonts with `preconnect`.

### Scale (CSS clamp)

| Token | Approx size | Usage |
|-------|-------------|-------|
| `--text-xs` | 12 px | Labels, tags, meta |
| `--text-sm` | 14 px | Body-secondary |
| `--text-base` | 16 px | Body |
| `--text-lg` | 18 px | Lead paragraphs |
| `--text-xl` | 20 px | Section intros |
| `--text-2xl` | 24 px | Step titles, subheads |
| `--text-3xl` | 28–36 px | About lead |
| `--text-4xl` | 32–48 px | Section display |
| `--text-5xl` | 40–64 px | — |
| `--text-6xl` | 48–88 px | Hero name |

The larger tokens use `clamp()` for fluid scaling — they grow with viewport
width without ever needing an extra breakpoint.

### Weights

`300` light · `400` regular · `500` medium · `600` semibold · `700` bold

The site uses **400** for body, **500** for emphasized text, **600** for
headings. `300` appears only on the ghost numeral. `700` is not used.

## Spacing

A geometric scale — 4 px base unit.

| Token | Value |
|-------|-------|
| `--space-1` | 4 px |
| `--space-2` | 8 px |
| `--space-3` | 12 px |
| `--space-4` | 16 px |
| `--space-5` | 20 px |
| `--space-6` | 24 px |
| `--space-8` | 32 px |
| `--space-10` | 40 px |
| `--space-12` | 48 px |
| `--space-16` | 64 px |
| `--space-20` | 80 px |
| `--space-24` | 96 px |
| `--space-32` | 128 px |

Component styles reference tokens, never raw pixels.

## Layout

| Token | Value | Purpose |
|-------|-------|---------|
| `--container-max` | 1200 px | Default max content width |
| `--container-narrow` | 760 px | Narrow container (unused currently) |
| `--container-padding` | `clamp(1.25rem, 4vw, 2.5rem)` | Horizontal rhythm |
| `--section-padding-y` | `clamp(4rem, 8vw, 8rem)` | Vertical rhythm |

## Breakpoints

Four breakpoints. Every media query in the codebase uses one of these.

| Width | Name | What activates |
|-------|------|----------------|
| 480 px | mobile-large | Tightened rhythm on small screens |
| 768 px | tablet | Two-column timelines, desktop nav, split footer |
| 900 px | laptop | Three-column grids (Skills, About, Process, Hero) |
| 1280 px | wide desktop | Larger ghost numerals, wider side columns, more air |

Micro-breakpoints (like About's 600 px) are acceptable when scoped narrowly
to one section — and documented where they appear.

## Radii

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 2 px | Tag chips, skeleton bars |
| `--radius-md` | 4 px | Buttons, portrait frame |
| `--radius-lg` | 8 px | (reserved — not currently used) |

The site has no large rounded corners. Nothing is a "card with a radius."

## Motion tokens

| Token | Value | Purpose |
|-------|-------|---------|
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | CSS transitions |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | (rarely used) |
| `--duration-fast` | 150 ms | Hover states, colour shifts |
| `--duration-base` | 250 ms | Underlines, small reveals |
| `--duration-slow` | 400 ms | Skeleton fade, larger transitions |

The JavaScript mirror lives in `src/utils/motion.ts` — same curve, same
durations. See [`animations.md`](animations.md).

## Component primitives

Five primitives, all in `src/components/`:

| Component | Purpose |
|-----------|---------|
| `Container` | Max-width + responsive padding wrapper |
| `Section` | Section vertical rhythm + dark variant |
| `SectionHeader` | Repeating `TITLE .......... NN` bar |
| `Button` | Polymorphic anchor/button |
| `Icon` | Wraps any Lucide or brand icon |

Details: see [`components.md`](components.md).

## Accessibility rules

Non-negotiable across the codebase:

1. Heading hierarchy — `h1` (Hero) → `h2` (sections) → `h3` (subheads).
2. Landmarks — `<header>`, `<main>`, `<footer>`, `<nav>` used correctly.
3. Every section has `aria-labelledby` pointing to its heading.
4. Decorative elements are `aria-hidden="true"`.
5. Interactive elements are real `<a>` or `<button>` — no clickable divs.
6. Focus states are visible via `:focus-visible` — global rule in `global.css`.
7. `prefers-reduced-motion: reduce` disables all animation.
8. French content tagged with `lang="fr"` where the document is English;
   when the whole document is French, only `<html lang="fr">` is used.
9. Touch targets are ≥ 44×44 px (or a pseudo-element extends the target).

## What's deliberately avoided

From the brief — never use:

- Purple/blue gradients, neon accents, dark navy + glow
- Glassmorphism (heavy blur + light borders)
- Animated gradient backgrounds
- Rainbow gradients
- Cyberpunk colors
- Cards with rounded corners and shadows on every element
- Progress bars, skill percentages, star ratings
- Gaming typography (Orbitron, Audiowide, futuristic fonts)
- Excessive monospace

The site should look like it was designed by a person, not scaffolded by AI.