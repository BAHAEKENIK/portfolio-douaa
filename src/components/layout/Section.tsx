import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  variant?: "light" | "dark";
  className?: string;
  as?: "section" | "div";
}

export function Section({
  children,
  id,
  variant = "light",
  className = "",
  as: Tag = "section",
}: SectionProps) {
  const classes = ["section", `section--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag id={id} className={classes}>
      {children}
    </Tag>
  );
}