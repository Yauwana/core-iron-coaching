import { Section } from "@/components/ui/Section";
import { Carousel } from "@/components/ui/Carousel";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type Placement = "Winner" | "1st" | "2nd" | "3rd";

const PLACEMENT_TONE: Record<Placement, "solid" | "orange" | "steel" | "neutral"> = {
  Winner: "solid",
  "1st": "orange",
  "2nd": "steel",
  "3rd": "neutral",
};

const ACHIEVEMENTS: { federation: string; season: string; results: { category: string; placement: Placement }[] }[] = [
  {
    federation: "NBA",
    season: "Season A 2026 · Melbourne",
    results: [
      { category: "Men's Fitness Overall", placement: "Winner" },
      { category: "Men's Fitness, Beginner", placement: "1st" },
      { category: "Men's Fitness, Over 40", placement: "1st" },
      { category: "Men's Fitness, Open", placement: "1st" },
    ],
  },
  {
    federation: "ANB",
    season: "Season A 2026",
    results: [
      { category: "Men's Fitness, Over 40", placement: "1st" },
      { category: "Men's Fitness, Open", placement: "2nd" },
    ],
  },
  {
    federation: "INBA",
    season: "Season A 2024",
    results: [
      { category: "Men's Physique, Over 40", placement: "1st" },
      { category: "Men's Physique, Open", placement: "2nd" },
      { category: "Classic Bodybuilding, Novice", placement: "3rd" },
      { category: "Classic Bodybuilding, Open", placement: "3rd" },
    ],
  },
];

const ABOUT_SLIDES = [
  {
    src: "/images/coach-medal-hero.png",
    alt: "Ravindra, coach at Core Iron Coaching, posing with a bodybuilding medal",
    label: "Competition",
  },
  {
    src: "/images/before.jpg",
    alt: "Ravindra's physique before his transformation",
    label: "Before",
  },
  {
    src: "/images/after.jpg",
    alt: "Ravindra's physique after his transformation",
    label: "After",
  },
];

export function AboutSection() {
  return (
    <Section band="gradient" align="left">
      <div id="about" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 48, alignItems: "center" }}>
        <div style={{ minWidth: 0 }}>
          <Carousel slides={ABOUT_SLIDES} ratio="4 / 5" />
        </div>
        <div style={{ minWidth: 0 }}>
          <Eyebrow>Your coach</Eyebrow>
          <div style={{ margin: "14px 0 22px" }}>
            <SectionHeading level={3} accent="program second">
              Real life first,
            </SectionHeading>
          </div>
          <p
            style={{
              margin: 0,
              maxWidth: "62ch",
              fontSize: "var(--fs-body-lg)",
              lineHeight: 1.75,
              color: "var(--text-body)",
              textWrap: "pretty",
            }}
          >
            For the past two years I&apos;ve coached clients online, building personalised programs that get
            real results — helping one client lose weight without a strict diet, and others build steady
            muscle over a year or more, adapting the plan to real life rather than a rigid template. I&apos;m
            now bringing that same one-on-one coaching approach in person at Genesis Fitness Mickleham,
            Melbourne. Backed by a Certificate III & IV in Fitness (NHFA) and a Precision Nutrition
            Level 1 certification.
          </p>
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 2 }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"wdth" 84',
                fontWeight: 700,
                fontSize: 15,
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                color: "var(--orange-500)",
              }}
            >
              Ravindra
            </span>
            <span style={{ fontSize: "var(--fs-caption)", color: "var(--text-muted)" }}>Coach, Core Iron Coaching</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 22 }}>
            <Badge tone="solid" shape="square">2026 NBA Overall Winner</Badge>
            <Badge tone="solid" shape="square">Cert III & IV in Fitness</Badge>
            <Badge tone="solid" shape="square">Precision Nutrition L1</Badge>
            <Badge tone="solid" shape="square">2 years coaching</Badge>
            <Badge tone="solid" shape="square">Online and in person</Badge>
          </div>
          <img
            src="/images/badge-pn-l1.png"
            alt="Precision Nutrition Level 1 Certified Coach"
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              border: "2px solid var(--orange-500)",
              marginTop: 16,
            }}
          />
        </div>
      </div>

      <div style={{ marginTop: 48 }}>
        <Eyebrow>Competition record</Eyebrow>
        <div
          style={{
            marginTop: 18,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 16,
          }}
        >
          {ACHIEVEMENTS.map((fed) => (
            <Card key={fed.federation} surface="raised" padding="20px">
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"wdth" 78',
                  fontStyle: "italic",
                  fontWeight: 800,
                  fontSize: "var(--fs-title-3)",
                  textTransform: "uppercase",
                  color: "var(--text-display)",
                }}
              >
                {fed.federation}
              </div>
              <div style={{ marginTop: 2, fontSize: "var(--fs-caption)", color: "var(--text-muted)" }}>{fed.season}</div>
              <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                {fed.results.map((r) => (
                  <div
                    key={r.category}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                    }}
                  >
                    <span style={{ fontSize: "var(--fs-body-sm)", color: "var(--text-body)" }}>{r.category}</span>
                    <Badge tone={PLACEMENT_TONE[r.placement]} shape="pill">
                      {r.placement}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
