import { Section } from "@/components/ui/Section";
import { FeatureCard } from "@/components/ui/FeatureCard";

const AUDIENCES = [
  { icon: "user", title: "Total beginners", body: "Never touched a barbell. We start with the basics and build from there." },
  { icon: "clock", title: "Busy professionals", body: "Three or four sessions that fit around work, travel and family." },
  { icon: "heart-pulse", title: "Fat loss", body: "Sustainable changes you can live with, not a diet you quit in a month." },
  { icon: "target", title: "Strength and muscle", body: "Progressive programming for steady size and strength over the long run." },
];

export function WhoSection() {
  return (
    <Section band="dark" align="left" kicker="Who I work with" title="Built for people with" accent="a real schedule">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 16 }}>
        {AUDIENCES.map((a) => (
          <FeatureCard key={a.title} icon={a.icon} title={a.title}>
            {a.body}
          </FeatureCard>
        ))}
      </div>
    </Section>
  );
}
