type Tone = "orange" | "solid" | "neutral" | "success" | "danger" | "steel";

const TONES: Record<Tone, { bg: string; fg: string; bd: string }> = {
  orange: { bg: "rgba(226,105,31,.14)", fg: "var(--orange-400)", bd: "rgba(226,105,31,.42)" },
  solid: { bg: "var(--orange-500)", fg: "var(--text-on-accent)", bd: "var(--orange-500)" },
  neutral: { bg: "rgba(255,255,255,.06)", fg: "var(--iron-200)", bd: "var(--border-subtle)" },
  success: { bg: "rgba(62,158,99,.14)", fg: "var(--green-500)", bd: "rgba(62,158,99,.42)" },
  danger: { bg: "rgba(207,62,46,.14)", fg: "var(--red-500)", bd: "rgba(207,62,46,.42)" },
  steel: { bg: "rgba(154,161,166,.16)", fg: "var(--steel-300)", bd: "rgba(154,161,166,.44)" },
};

export function Badge({
  children,
  tone = "orange",
  shape = "pill",
}: {
  children: React.ReactNode;
  tone?: Tone;
  shape?: "pill" | "square";
}) {
  const t = TONES[tone];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 11px 5px",
        background: t.bg,
        color: t.fg,
        border: `1px solid ${t.bd}`,
        borderRadius: shape === "pill" ? "var(--radius-pill)" : "var(--radius-xs)",
        fontFamily: "var(--font-display)",
        fontVariationSettings: '"wdth" 84',
        fontWeight: 700,
        fontSize: 10.5,
        letterSpacing: "0.13em",
        textTransform: "uppercase",
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}
