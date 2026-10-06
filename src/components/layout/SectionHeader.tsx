interface SectionHeaderProps {
  /** Section name — e.g. "About", "Experience". */
  title: string;
  /** Zero-padded counter — e.g. "01", "02". */
  index: string;
  /** id of the section's <h2> — used by the section's aria-labelledby. */
  id?: string;
}

export function SectionHeader({ title, index, id }: SectionHeaderProps) {
  return (
    <header className="section-header">
      <h2 id={id} className="section-header__title">
        {title}
      </h2>
      <span className="section-header__index" aria-hidden="true">
        {index}
      </span>
    </header>
  );
}