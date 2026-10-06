
---

## 4. `docs/architecture.md`

```markdown
# Architecture

## Overview

The site is a **single-page scrolling application** — one HTML document, one
React root, nine sections stacked vertically. There is no router. Navigation
uses in-page anchor links (`#about`, `#experience`, …).

This is intentional. A portfolio doesn't need multiple routes; a single
scroll tells one story. It also keeps the initial payload small and lets
every section share the same design language without coordination.

## Page composition
