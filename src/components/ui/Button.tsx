import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

interface LinkButtonProps extends BaseProps {
  href: string;
  onClick?: () => void;
  external?: boolean;
}

interface NativeButtonProps extends BaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
  } = props;

  const classes = ["btn", `btn--${variant}`, `btn--${size}`, className]
    .filter(Boolean)
    .join(" ");

  if (props.href !== undefined) {
    const { href, onClick, external } = props;
    const externalProps = external
      ? { target: "_blank" as const, rel: "noopener noreferrer" }
      : {};
    return (
      <a className={classes} href={href} onClick={onClick} {...externalProps}>
        {children}
      </a>
    );
  }

  const { onClick, type = "button", disabled } = props;
  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}