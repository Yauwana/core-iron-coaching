import { Section } from "@/components/ui/Section";

const FAQS = [
  {
    q: "I live outside Australia. Can you still coach me?",
    a: "Yes. Online coaching runs over message and video, so time zone and country make no difference. Clients anywhere are welcome.",
  },
  {
    q: "I've never trained before. Is that a problem?",
    a: "Not at all. Most people start there. We build technique and confidence first, then add load.",
  },
  {
    q: "Do I have to follow a strict diet?",
    a: "No. Nutrition guidance is built around what you already eat, so it is something you can stick to.",
  },
  {
    q: "What happens on the free consult?",
    a: "We talk through your goals, training history, schedule and any injuries, and I tell you honestly which format suits you and what it costs.",
  },
];

export function FaqSection() {
  return (
    <Section band="darker" align="left" width="760px" kicker="Before you book" title="Questions">
      {FAQS.map((faq, i) => (
        <details
          key={faq.q}
          style={{
            borderTop: "1px solid var(--border-hairline)",
            borderBottom: i === FAQS.length - 1 ? "1px solid var(--border-hairline)" : undefined,
            padding: "18px 0",
          }}
        >
          <summary
            style={{
              listStyle: "none",
              fontFamily: "var(--font-display)",
              fontVariationSettings: '"wdth" 78',
              fontStyle: "italic",
              fontWeight: 800,
              fontSize: "var(--fs-title-3)",
              textTransform: "uppercase",
              color: "var(--text-display)",
            }}
          >
            {faq.q}
          </summary>
          <p style={{ margin: "12px 0 0", fontSize: "var(--fs-body-sm)", lineHeight: 1.75, color: "var(--text-muted)" }}>
            {faq.a}
          </p>
        </details>
      ))}
    </Section>
  );
}
