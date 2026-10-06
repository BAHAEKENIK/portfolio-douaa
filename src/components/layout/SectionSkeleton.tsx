interface SectionSkeletonProps {
  /**
   * Which skeleton shape to render. Each matches the silhouette of a
   * specific section so the loading state feels intentional rather than
   * generic.
   */
  kind?: "timeline" | "columns" | "blocks" | "projects" | "process" | "footer" | "default";
  /** Number of placeholder rows / columns / blocks. */
  rows?: number;
}

/**
 * Neutral skeleton placeholder used while a lazy-loaded section is
 * being fetched. Uses --color-skeleton (#E8E6DF) in light sections and
 * rgba(247, 246, 242, 0.08) in dark sections (via the parent
 * .lazy-section--dark class). No shimmer, no animation — consistent
 * with SmartImage's static skeleton.
 *
 * Marked aria-hidden — screen readers see nothing during loading; the
 * real section will announce itself when it arrives.
 */
export function SectionSkeleton({
  kind = "default",
  rows = 3,
}: SectionSkeletonProps) {
  return (
    <div
      className={`section-skeleton section-skeleton--${kind}`}
      aria-hidden="true"
    >
      {/* Header — matches SectionHeader proportions */}
      <div className="section-skeleton__header">
        <span className="section-skeleton__bar section-skeleton__bar--short" />
        <span className="section-skeleton__bar section-skeleton__bar--tiny" />
      </div>

      {kind === "timeline" && (
        <div className="section-skeleton__timeline">
          {Array.from({ length: rows }).map((_, i) => (
            <div key={i} className="section-skeleton__timeline-row">
              <span className="section-skeleton__dot" />
              <div className="section-skeleton__timeline-body">
                <span className="section-skeleton__bar section-skeleton__bar--tiny" />
                <span className="section-skeleton__bar section-skeleton__bar--medium" />
                <span className="section-skeleton__bar section-skeleton__bar--long" />
                <span className="section-skeleton__bar section-skeleton__bar--medium" />
              </div>
            </div>
          ))}
        </div>
      )}

      {kind === "columns" && (
        <div className="section-skeleton__columns">
          {Array.from({ length: rows }).map((_, i) => (
            <div key={i} className="section-skeleton__column">
              <span className="section-skeleton__bar section-skeleton__bar--short" />
              <span className="section-skeleton__bar section-skeleton__bar--medium" />
              <span className="section-skeleton__bar section-skeleton__bar--long" />
              <span className="section-skeleton__bar section-skeleton__bar--medium" />
              <span className="section-skeleton__bar section-skeleton__bar--short" />
            </div>
          ))}
        </div>
      )}

      {kind === "blocks" && (
        <div className="section-skeleton__blocks">
          {Array.from({ length: rows }).map((_, i) => (
            <div key={i} className="section-skeleton__block">
              <span className="section-skeleton__bar section-skeleton__bar--tiny" />
              <span className="section-skeleton__bar section-skeleton__bar--long" />
              <span className="section-skeleton__bar section-skeleton__bar--medium" />
            </div>
          ))}
        </div>
      )}

      {/* ---- PROJECTS — dark, multi-row editorial entries ---- */}
      {kind === "projects" && (
        <div className="section-skeleton__projects">
          {Array.from({ length: rows }).map((_, i) => (
            <div key={i} className="section-skeleton__project">
              <span className="section-skeleton__ghost" />

              <div className="section-skeleton__project-body">
                <div className="section-skeleton__project-meta">
                  <span className="section-skeleton__bar section-skeleton__bar--tiny" />
                </div>
                <span className="section-skeleton__bar section-skeleton__bar--project-name" />
                <span className="section-skeleton__bar section-skeleton__bar--medium" />

                <div className="section-skeleton__project-panels">
                  <div className="section-skeleton__panel">
                    <span className="section-skeleton__bar section-skeleton__bar--tiny" />
                    <span className="section-skeleton__bar section-skeleton__bar--long" />
                    <span className="section-skeleton__bar section-skeleton__bar--medium" />
                  </div>
                  <div className="section-skeleton__panel">
                    <span className="section-skeleton__bar section-skeleton__bar--tiny" />
                    <span className="section-skeleton__bar section-skeleton__bar--long" />
                    <span className="section-skeleton__bar section-skeleton__bar--medium" />
                  </div>
                </div>

                <div className="section-skeleton__project-tech">
                  <span className="section-skeleton__tech" />
                  <span className="section-skeleton__tech" />
                  <span className="section-skeleton__tech" />
                  <span className="section-skeleton__tech" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ---- PROCESS — horizontal steps at desktop, stacked at mobile ---- */}
      {kind === "process" && (
        <div className="section-skeleton__process">
          <span className="section-skeleton__bar section-skeleton__bar--medium" />

          <div className="section-skeleton__process-steps">
            {Array.from({ length: rows }).map((_, i) => (
              <div key={i} className="section-skeleton__process-step">
                <span className="section-skeleton__dot" />
                <span className="section-skeleton__bar section-skeleton__bar--tiny" />
                <span className="section-skeleton__bar section-skeleton__bar--medium" />
                <span className="section-skeleton__bar section-skeleton__bar--long" />
              </div>
            ))}
          </div>
        </div>
      )}

      {kind === "footer" && (
        <div className="section-skeleton__footer">
          <div className="section-skeleton__footer-identity">
            <span className="section-skeleton__bar section-skeleton__bar--medium" />
            <span className="section-skeleton__bar section-skeleton__bar--short" />
            <span className="section-skeleton__bar section-skeleton__bar--long" />
          </div>
          <div className="section-skeleton__footer-socials">
            <span className="section-skeleton__bar section-skeleton__bar--medium" />
            <span className="section-skeleton__bar section-skeleton__bar--medium" />
            <span className="section-skeleton__bar section-skeleton__bar--medium" />
          </div>
        </div>
      )}
    </div>
  );
}