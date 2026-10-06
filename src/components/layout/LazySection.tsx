import { Suspense, type ReactNode } from "react";

import { useInViewOnce } from "../../hooks/useInViewOnce";
import { SectionSkeleton } from "./SectionSkeleton";

interface LazySectionProps {
  /**
   * Anchor id for the section. Applied to the wrapper so anchor links
   * resolve even before the lazy content has loaded. The real section
   * component must NOT set its own `id` — otherwise ids would duplicate.
   */
  id: string;
  /** The lazy-loaded section. Typically `<LazyFoo />` from React.lazy. */
  children: ReactNode;
  /** Skeleton shown while the real section is out of view / loading. */
  skeleton?: ReactNode;
  /**
   * Approximate height in pixels. Reserves vertical space so the page
   * doesn't shift when the real section mounts.
   */
  estimateHeight?: number;
  /**
   * When true, the wrapper paints with the charcoal section background
   * and the skeleton uses off-white bars. Prevents a light-to-dark
   * flash when a dark section (Projects) loads.
   */
  dark?: boolean;
}

/**
 * Wraps a below-the-fold section so it is not imported, parsed, or
 * rendered until the user scrolls near it.
 *
 * Behaviour:
 *   1. Renders a wrapper with the given id, an estimated height, and a
 *      skeleton. Anchor links resolve here before load.
 *   2. Uses IntersectionObserver (via useInViewOnce) to detect when the
 *      wrapper is within ~400px of the viewport.
 *   3. Once near, mounts the children inside <Suspense>, which triggers
 *      the lazy import.
 *   4. The Suspense fallback shows the same skeleton until the module
 *      arrives; then the real section replaces it in one paint.
 */
export function LazySection({
  id,
  children,
  skeleton,
  estimateHeight,
  dark = false,
}: LazySectionProps) {
  const { ref, isInView } = useInViewOnce({ rootMargin: "400px" });

  const fallback = skeleton ?? <SectionSkeleton kind="default" />;
  const className = dark ? "lazy-section lazy-section--dark" : "lazy-section";

  return (
    <div
      ref={ref}
      id={id}
      className={className}
      style={
        !isInView && estimateHeight ? { minHeight: estimateHeight } : undefined
      }
    >
      {isInView ? (
        <Suspense fallback={fallback}>{children}</Suspense>
      ) : (
        fallback
      )}
    </div>
  );
}