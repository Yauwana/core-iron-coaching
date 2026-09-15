import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const STEPS = [
  {
    n: "01",
    title: "Free consult",
    body: "A short call about your goals, your history and how much time you actually have. No pressure, no sales script.",
  },
  {
    n: "02",
    title: "Your plan",
    body: "I build the program around your equipment, schedule and experience level, and walk you through it.",
  },
  {
    n: "03",
    title: "Train and adjust",
    body: "We check in regularly, review your lifts and adapt as life changes. Progress you can keep.",
  },
];

export function HowSection() {
  return (
    <Section band="dark" align="left" kicker="The method" title="How it" accent="works">
      <div id="how" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16 }}>
        {STEPS.map((step) => (
          <Card key={step.n} surface="raised" interactive padding="28px 26px">
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"wdth" 70',
                fontStyle: "italic",
                fontWeight: 800,
                fontSize: 52,
                lineHeight: 1,
                color: "rgba(226,105,31,.35)",
              }}
            >
              {step.n}
            </div>
            <div
              style={{
                margin: "12px 0 10px",
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"wdth" 78',
                fontStyle: "italic",
                fontWeight: 800,
                fontSize: "var(--fs-title-3)",
                textTransform: "uppercase",
                color: "var(--text-display)",
              }}
            >
              {step.title}
            </div>
            <p style={{ margin: 0, fontSize: "var(--fs-body-sm)", lineHeight: 1.75, color: "var(--text-muted)" }}>
              {step.body}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
