import { Section } from "@/components/ui/Section";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function AboutSection() {
  return (
    <Section band="gradient" align="left">
      <div id="about" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 48, alignItems: "center" }}>
        <div style={{ minWidth: 0 }}>
          <PhotoFrame src="/images/about-coach.png" alt="Ravindra, coach at Core Iron Coaching" ratio="4 / 5" />
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
            Melbourne. Backed by NHFA Cert
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
            <Badge tone="solid" shape="square">NHFA certified</Badge>
            <Badge tone="solid" shape="square">2 years coaching</Badge>
            <Badge tone="solid" shape="square">Online and in person</Badge>
          </div>
        </div>
      </div>
    </Section>
  );
}
