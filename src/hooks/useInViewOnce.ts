import { useEffect, useRef, useState } from "react";

interface UseInViewOnceOptions {
  /**
   * How far outside the viewport the element must be before the observer
   * fires. `"400px"` means the callback runs when the element's top edge
   * is within 400px below the viewport bottom (or 400px above the top).
   * Bigger rootMargin = earlier preload = less skeleton visible.
   */
  rootMargin?: string;
  /** Visibility threshold (0–1) at which to fire. Defaults to 0 (any pixel). */
  threshold?: number;
}

/**
 * Returns a ref and a boolean that flips to `true` the first time the
 * element enters (or comes within rootMargin of) the viewport.
 *
 * Fires once — subsequent scrolls do not change the value. Disconnects
 * the observer on cleanup.
 *
 * Falls back to `true` immediately if IntersectionObserver is not
 * available (very old browsers, some test environments). Content is
 * never blocked from rendering.
 */
export function useInViewOnce({
  rootMargin = "400px",
  threshold = 0,
}: UseInViewOnceOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || isInView) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
            return;
          }
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, threshold, isInView]);

  return { ref, isInView };
}