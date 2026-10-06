interface SectionSkeletonProps {
  /**
   * Which skeleton shape to render. Each matches the silhouette of a
   * specific section so the loading state feels intentional rather than
   * generic.
   */
  kind?: "timeline" | "columns" | "blocks" | "footer" | "default";
  /** Number of placeholder rows / columns / blocks. */
  rows?: number;
}

/**
 * Neutral skeleton placeholder used while a lazy-loaded section is
 * being fetched. Uses --color-skeleton (#E8E6DF) — the same neutral
 * already used by SmartImage.
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