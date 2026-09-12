import { Card } from "./Card";
import { Icon } from "./Icon";

export function FeatureCard({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card surface="dark" interactive style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <span
        style={{
          display: "grid",
          placeItems: "center",
          width: 36,
          height: 36,
          borderRadius: "var(--radius-sm)",
          background: "rgba(226,105,31,.13)",
          border: "1px solid rgba(226,105,31,.30)",
          color: "var(--orange-500)",
        }}
      >
        <Icon name={icon} size={18} />
      </span>
      <h3
        style={{
          margin: 0,
          fontFamily: "var(--font-display)",
          fontVariationSettings: '"wdth" 84',
          fontWeight: 700,
          fontSize: "var(--fs-title-3)",
          lineHeight: "var(--lh-tight)",
          letterSpacing: "0.005em",
          color: "var(--text-display)",
        }}
      >
        {title}
      </h3>
      <p style={{ margin: 0, fontSize: "var(--fs-body-sm)", lineHeight: 1.6, color: "var(--text-muted)" }}>
        {children}
      </p>
    </Card>
  );
}
