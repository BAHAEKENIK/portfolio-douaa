import { useEffect, useState } from "react";

/**
 * Returns `true` when the media query currently matches.
 *
 * Initialises synchronously with the current match value — no flash
 * of wrong value on first render.
 *
 * Used by Process to decide whether the connector draws on the X axis
 * (desktop, 4 columns) or the Y axis (mobile/tablet, stacked).
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);

    setMatches(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
}