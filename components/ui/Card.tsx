"use client";

import { useState } from "react";

type Surface = "dark" | "raised" | "light" | "outline" | "accent";

const SURFACES: Record<Surface, React.CSSProperties> = {
  dark: { background: "var(--surface-card)", border: "1px solid var(--border-hairline)", color: "var(--text-body)" },
  raised: { background: "var(--surface-card-raised)", border: "1px solid var(--border-subtle)", color: "var(--text-body)" },
  light: { background: "var(--paper-000)", border: "1px solid var(--border-inverse)", color: "var(--text-body-inverse)" },
  outline: { background: "transparent", border: "1px solid var(--border-subtle)", color: "var(--text-body)" },
  accent: { background: "rgba(226,105,31,.07)", border: "1px solid rgba(226,105,31,.34)", color: "var(--text-body)" },
};

export function Card({
  children,
  surface = "dark",
  padding = "var(--gutter-card)",
  interactive = false,
  style,
  id,
}: {
  children: React.ReactNode;
  surface?: Surface;
  padding?: string;
  interactive?: boolean;
  style?: React.CSSProperties;
  id?: string;
}) {
  const [hover, setHover] = useState(false);
  const s = SURFACES[surface];

  return (
    <div
      id={id}
      onMouseEnter={interactive ? () => setHover(true) : undefined}
      onMouseLeave={interactive ? () => setHover(false) : undefined}
      style={{
        padding,
        borderRadius: "var(--radius-lg)",
        boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-xs)",
        transform: hover ? "translateY(var(--lift-y))" : "none",
        transition:
          "transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
        cursor: interactive ? "pointer" : undefined,
        fontFamily: "var(--font-body)",
        fontSize: "var(--fs-body)",
        lineHeight: "var(--lh-body)",
        ...s,
        ...(hover ? { borderColor: "rgba(226,105,31,.45)" } : null),
        ...style,
      }}
    >
      {children}
    </div>
  );
}
