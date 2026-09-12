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
          fontSize: "clamp(17px,5.2vw,40px)",
          lineHeight: 1,
          color: "var(--orange-500)",
          whiteSpace: "nowrap",
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
          fontSize: "clamp(8.5px,2.2vw,10.5px)",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
        }}
      >
        {label}
      </div>
    </Card>
  );
}
