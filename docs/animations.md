# Animations

## Philosophy

Motion in this site **supports content — it doesn't replace it**.

Every animation answers one of three questions:

1. **"Where did this come from?"** — reveals that fade in from below or from
   the side tell the user the content just appeared.
2. **"What should I look at?"** — the Experience pulse ring draws attention to
   the most recent mission. The Project spotlight follows the cursor to
   emphasise the hovered entry.
3. **"How does the page move?"** — the scroll-linked spines in Experience and
   Process draw themselves as the user scrolls, so the reader feels the
   connection between scroll position and content.

Anything that doesn't answer one of these was removed.

## The shared motion system

Every animation imports from `src/utils/motion.ts`. No section defines its
own easing, duration, or stagger.

```ts
import { container, fadeUp, DURATION, STAGGER, VIEWPORT } from "../utils/motion";

const entryVariants = container(isReduced, STAGGER.base, 0.05);
const itemVariants = fadeUp(isReduced, 16, DURATION.slow);