import { Card } from "./Card";

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <Card surface="raised" padding="20px clamp(10px,4vw,28px)" style={{ textAlign: "center", minWidth: 0 }}>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontVariationSettings: '"wdth" 76',
          fontStyle: "italic",
          fontWeight: 800,
          fontSize: "clamp(26px,7vw,40px)",
          lineHeight: 1,
          color: "var(--orange-500)",
        }}
      >
        {value}
      </div>
      <div
        style={{
          marginTop: 8,
          fontFamily: "var(--font-display)",
          fontVariationSettings: '"wdth" 84',
          fontWeight: 600,
          fontSize: 10.5,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
        }}
      >
        {label}
      </div>
    </Card>
  );
}
