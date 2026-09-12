import { Eyebrow } from "./Eyebrow";
import { SectionHeading } from "./SectionHeading";

type Band = "dark" | "darker" | "gradient" | "light" | "paper";

const BANDS: Record<Band, string> = {
  dark: "var(--iron-900)",
  darker: "var(--iron-950)",
  gradient: "linear-gradient(180deg,var(--iron-950) 0%,var(--iron-850) 55%,var(--iron-900) 100%)",
  light: "var(--paper-100)",
  paper: "var(--paper-000)",
};

export function Section({
  band = "dark",
  kicker,
  title,
  accent,
  intro,
  align = "center",
  width = "var(--container-max)",
  children,
  style,
}: {
  band?: Band;
  kicker?: string;
  title?: string;
  accent?: string;
  intro?: string;
  align?: "left" | "center";
  width?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const light = band === "light" || band === "paper";
  return (
    <section
      style={{
        padding: "var(--gutter-section) 48px",
        background: BANDS[band],
        ...style,
      }}
    >
      <div style={{ maxWidth: width, margin: "0 auto" }}>
        {kicker || title ? (
          <header
            style={{
              marginBottom: 40,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              alignItems: align === "center" ? "center" : "flex-start",
            }}
          >
            {kicker ? <Eyebrow align={align}>{kicker}</Eyebrow> : null}
            {title ? (
              <SectionHeading level={3} align={align} accent={accent} inverse={light}>
                {title}
              </SectionHeading>
            ) : null}
            {intro ? (
              <p
                style={{
                  margin: 0,
                  maxWidth: 620,
                  textAlign: align,
                  fontSize: "var(--fs-body-sm)",
                  lineHeight: 1.75,
                  color: light ? "var(--text-muted-inverse)" : "var(--text-muted)",
                  textWrap: "pretty",
                }}
              >
                {intro}
              </p>
            ) : null}
          </header>
        ) : null}
        {children}
      </div>
    </section>
  );
}
