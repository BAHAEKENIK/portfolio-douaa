import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

export function Container({
  children,
  className = "",
  narrow = false,
}: ContainerProps) {
  const classes = ["container", narrow && "container--narrow", className]
    .filter(Boolean)
    .join(" ");
  return <div className={classes}>{children}</div>;
}