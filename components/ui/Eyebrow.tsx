export function Eyebrow({
  children,
  align = "left",
  style,
}: {
  children: React.ReactNode;
  align?: "left" | "center";
  style?: React.CSSProperties;
}) {
  const line = (
    <span
      aria-hidden="true"
      style={{ display: "block", width: 26, height: 1, background: "var(--orange-500)", opacity: 0.7 }}
    />
  );
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        justifyContent: align === "center" ? "center" : "flex-start",
        fontFamily: "var(--font-display)",
        fontVariationSettings: '"wdth" 80',
        fontWeight: 700,
        fontSize: "var(--fs-eyebrow)",
        letterSpacing: "var(--ls-eyebrow)",
        textTransform: "uppercase",
        color: "var(--orange-500)",
        ...style,
      }}
    >
      {line}
      <span>{children}</span>
      {align === "center" ? line : null}
    </div>
  );
}
