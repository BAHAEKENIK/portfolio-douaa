import type { IconComponent } from "../../utils/icons";

interface IconProps {
  icon: IconComponent;
  /** Pixel size — defaults to the 20 px marker slot used in lists. */
  size?: number;
  /** Defaults to 1.5 for a lighter, more technical stroke. */
  strokeWidth?: number;
  className?: string;
}

/**
 * Thin wrapper around any icon component.
 *
 * Accepts both Lucide icons and our local BrandIcons — both satisfy the
 * `IconComponent` type (they render an SVG and accept `size`,
 * `strokeWidth`, and standard SVG props).
 *
 * Guarantees consistent size, stroke weight and accessibility
 * attributes everywhere an icon is rendered.
 */
export function Icon({
  icon: IconComponent,
  size = 20,
  strokeWidth = 1.5,
  className = "",
}: IconProps) {
  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
      focusable="false"
    />
  );
}