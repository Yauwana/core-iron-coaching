const LEVELS: Record<number, string> = {
  1: "var(--fs-display-1)",
  2: "var(--fs-display-2)",
  3: "var(--fs-display-3)",
  4: "var(--fs-title-1)",
};

export function SectionHeading({
  children,
  level = 3,
  align = "left",
  accent,
  inverse = false,
  style,
}: {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  align?: "left" | "center";
  accent?: string;
  inverse?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <h2
      style={{
        margin: 0,
        fontFamily: "var(--font-display)",
        fontVariationSettings: `"wdth" ${level <= 2 ? "var(--display-width-tight)" : "var(--display-width)"}`,
        fontStyle: "italic",
        fontWeight: 800,
        fontSize: LEVELS[level] || LEVELS[3],
        lineHeight: "var(--lh-display)",
        letterSpacing: "var(--ls-display)",
        textTransform: "uppercase",
        textAlign: align,
        color: inverse ? "var(--text-display-inverse)" : "var(--text-display)",
        textWrap: "balance",
        ...style,
      }}
    >
      {children}
      {accent ? <span style={{ color: "var(--orange-500)" }}> {accent}</span> : null}
    </h2>
  );
}
