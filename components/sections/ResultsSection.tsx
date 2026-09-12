import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

type Pair = {
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
  title: string;
  body: string;
};

const PAIRS: Pair[] = [
  {
    before: "/images/client1-before.png",
    after: "/images/client1-after.png",
    beforeLabel: "Before · Jan 2024",
    afterLabel: "After · Dec 2024",
    title: "A clean bulk, before the cut",
    body: "55 kg to 60.5 kg on a clean bulk, setting up for a cut in 2025.",
  },
  {
    before: "/images/client2-before.png",
    after: "/images/client2-after.png",
    beforeLabel: "Before · Oct 2024",
    afterLabel: "After · Dec 2025",
    title: "Muscle gain at the same weight",
    body: "14 months of coaching. 68 kg to 68.2 kg on the scale, a very different body composition.",
  },
];

export function ResultsSection() {
  return (
    <Section
      band="darker"
      align="left"
      kicker="Client results"
      title="Real results,"
      accent="real people"
      intro="Before and after, from clients who stuck with a plan that fit their life."
    >
      <div id="results" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 16 }}>
        {PAIRS.map((pair) => (
          <Card key={pair.title} surface="dark" padding="16px">
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 10 }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "4/5", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border-hairline)" }}>
                  <Image src={pair.before} alt={`${pair.title} — before`} fill sizes="(max-width: 800px) 50vw, 25vw" style={{ objectFit: "cover" }} />
                </div>
                <div
                  style={{
                    marginTop: 9,
                    fontFamily: "var(--font-display)",
                    fontVariationSettings: '"wdth" 84',
                    fontWeight: 700,
                    fontSize: "var(--fs-eyebrow)",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--text-faint)",
                  }}
                >
                  {pair.beforeLabel}
                </div>
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "4/5", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border-accent)" }}>
                  <Image src={pair.after} alt={`${pair.title} — after`} fill sizes="(max-width: 800px) 50vw, 25vw" style={{ objectFit: "cover" }} />
                </div>
                <div
                  style={{
                    marginTop: 9,
                    fontFamily: "var(--font-display)",
                    fontVariationSettings: '"wdth" 84',
                    fontWeight: 700,
                    fontSize: "var(--fs-eyebrow)",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--orange-500)",
                  }}
                >
                  {pair.afterLabel}
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: 18,
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"wdth" 78',
                fontStyle: "italic",
                fontWeight: 800,
                fontSize: "var(--fs-title-3)",
                textTransform: "uppercase",
                color: "var(--text-display)",
              }}
            >
              {pair.title}
            </div>
            <p style={{ margin: "8px 0 0", fontSize: "var(--fs-body-sm)", lineHeight: 1.7, color: "var(--text-muted)" }}>
              {pair.body}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
