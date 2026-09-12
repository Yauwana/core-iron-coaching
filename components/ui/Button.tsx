"use client";

import { useState } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "ghost" | "solidDark";
type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, { padding: string; fontSize: number; gap: number; icon: number }> = {
  sm: { padding: "9px 16px", fontSize: 11.5, gap: 7, icon: 14 },
  md: { padding: "13px 24px", fontSize: 13, gap: 9, icon: 16 },
  lg: { padding: "17px 34px", fontSize: 14.5, gap: 10, icon: 18 },
};

const VARIANTS: Record<Variant, React.CSSProperties> = {
  primary: {
    background: "var(--sheen-orange)",
    color: "var(--text-on-accent)",
    border: "1px solid var(--orange-400)",
    boxShadow: "var(--shadow-glow-orange)",
  },
  secondary: {
    background: "transparent",
    color: "var(--paper-000)",
    border: "1px solid var(--border-strong)",
    boxShadow: "none",
  },
  ghost: {
    background: "transparent",
    color: "var(--orange-500)",
    border: "1px solid transparent",
    boxShadow: "none",
  },
  solidDark: {
    background: "var(--iron-800)",
    color: "var(--paper-000)",
    border: "1px solid var(--border-subtle)",
    boxShadow: "var(--shadow-sm)",
  },
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  href,
  target,
  rel,
  style,
}: {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: string;
  iconRight?: string;
  href?: string;
  target?: string;
  rel?: string;
  style?: React.CSSProperties;
}) {
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);
  const s = SIZES[size];
  const v = VARIANTS[variant];
  const Tag = href ? "a" : "button";

  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    padding: s.padding,
    fontFamily: "var(--font-display)",
    fontVariationSettings: '"wdth" 82',
    fontWeight: 700,
    fontSize: s.fontSize,
    letterSpacing: "var(--ls-button)",
    textTransform: "uppercase",
    borderRadius: "var(--radius-sm)",
    cursor: "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition:
      "transform var(--dur-fast) var(--ease-standard), filter var(--dur-fast) var(--ease-standard), background-color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)",
    transform: down ? "scale(var(--press-scale))" : hover ? "translateY(var(--lift-y))" : "none",
    filter: hover ? "brightness(1.08)" : "none",
    ...v,
    ...(hover && variant === "secondary" ? { borderColor: "var(--orange-500)", color: "var(--orange-400)" } : null),
    ...(hover && variant === "ghost" ? { background: "rgba(226,105,31,.10)" } : null),
    ...style,
  };

  return (
    <Tag
      href={href}
      target={target}
      rel={rel}
      style={base}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setDown(false);
      }}
      onMouseDown={() => setDown(true)}
      onMouseUp={() => setDown(false)}
    >
      {icon ? <Icon name={icon} size={s.icon} /> : null}
      {children}
      {iconRight ? <Icon name={iconRight} size={s.icon} /> : null}
    </Tag>
  );
}
