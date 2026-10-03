import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { CALENDLY_URL } from "@/lib/content";

type Plan = {
  icon: string;
  title: string;
  description: string;
  features: string[];
};

const PLANS: Plan[] = [
  {
    icon: "video",
    title: "Online coaching",
    description:
      "A program written for your gym, your equipment and your schedule, with form reviews and regular check-ins over message and video.",
    features: [
      "Personalised training plan",
      "Video form feedback",
      "Nutrition guidance without a strict diet",
      "Fortnightly check-in calls",
    ],
  },
  {
    icon: "dumbbell",
    title: "1-on-1 in person",
    description:
      "Hands-on sessions on the gym floor at Genesis Fitness Mickleham. Ideal if you are new to lifting and want someone next to you getting the technique right from day one.",
    features: [
      "Coached every set",
      "Technique from the ground up",
      "Confidence in the weights room",
      "Fortnightly check-in calls",
    ],
  },
  {
    icon: "trending-up",
    title: "Hybrid",
    description:
      "In-person sessions when you want the coaching eye, online check-ins for the rest of the week. The best of both without the full in-person commitment.",
    features: [
      "In-person sessions as needed",
      "Program for the days you train solo",
      "Flexible week to week",
      "Fortnightly check-in calls",
    ],
  },
];

export function CoachingSection() {
  return (
    <Section
      band="darker"
      align="left"
      kicker="Coaching options"
      title="Three ways to train"
      accent="with me"
      intro="Every option starts with the same free consult, so we can work out which one actually fits your week."
    >
      <div id="coaching" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 16 }}>
        {PLANS.map((plan) => (
          <Card
            key={plan.title}
            surface="dark"
            interactive
            padding="28px 26px"
            style={{ display: "flex", flexDirection: "column", gap: 14 }}
          >
            <span
              style={{
                display: "grid",
                placeItems: "center",
                width: 42,
                height: 42,
                borderRadius: "var(--radius-sm)",
                background: "rgba(226,105,31,.12)",
                border: "1px solid rgba(226,105,31,.28)",
                color: "var(--orange-500)",
              }}
            >
              <Icon name={plan.icon} size={20} />
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"wdth" 78',
                fontStyle: "italic",
                fontWeight: 800,
                fontSize: "var(--fs-title-2)",
                lineHeight: "var(--lh-title)",
                textTransform: "uppercase",
                color: "var(--text-display)",
              }}
            >
              {plan.title}
            </span>
            <p style={{ margin: 0, fontSize: "var(--fs-body-sm)", lineHeight: 1.75, color: "var(--text-muted)" }}>
              {plan.description}
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 9 }}>
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: "var(--fs-body-sm)", color: "var(--text-body)" }}
                >
                  <span style={{ color: "var(--orange-500)", flex: "none", display: "grid", placeItems: "center", height: 22 }}>
                    <Icon name="check" size={15} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <span style={{ marginTop: "auto", display: "block" }}>
              <Button size="sm" variant="ghost" iconRight="arrow-right" href={CALENDLY_URL} target="_blank" rel="noopener" trackConsultClick style={{ paddingLeft: 0 }}>
                Enquire
              </Button>
            </span>
          </Card>
        ))}
      </div>
      <p style={{ margin: "20px 0 0", fontSize: "var(--fs-caption)", color: "var(--text-faint)" }}>
        <span style={{ color: "var(--orange-500)" }}>*</span> Pricing depends on the format and how often we work
        together. We will cover it on the consult call.
      </p>
    </Section>
  );
}
