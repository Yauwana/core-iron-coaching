import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { StatCard } from "@/components/ui/StatCard";
import { CALENDLY_URL, WHATSAPP_URL } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "72px 48px 64px",
        background: "var(--iron-900)",
        borderBottom: "1px solid var(--border-hairline)",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: -6,
          textAlign: "center",
          fontFamily: "var(--font-display)",
          fontVariationSettings: '"wdth" 70',
          fontStyle: "italic",
          fontWeight: 800,
          fontSize: "clamp(70px,11vw,132px)",
          lineHeight: 1,
          letterSpacing: "0.02em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,.055)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
      >
        Core Iron
      </span>

      <div
        style={{
          position: "relative",
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: 48,
          alignItems: "center",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <Eyebrow>Online worldwide · In person in Mickleham</Eyebrow>
          <div style={{ marginTop: 16 }}>
            <SectionHeading level={1} accent="around your life" style={{ fontSize: "clamp(40px,5.6vw,72px)" }}>
              Train with a coach who builds
            </SectionHeading>
          </div>
          <p
            style={{
              margin: "20px 0 0",
              maxWidth: "56ch",
              fontSize: "var(--fs-body-lg)",
              lineHeight: 1.7,
              color: "var(--iron-200)",
              textWrap: "pretty",
            }}
          >
            Personalised strength and fat-loss coaching for beginners and busy people. Online from
            anywhere in the world, or one-on-one at Genesis Fitness Mickleham, Melbourne.
          </p>
          <div className="hero-cta-row">
            <Button
              size="lg"
              variant="primary"
              iconRight="arrow-right"
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Book a free consult
            </Button>
            <Button
              size="lg"
              variant="secondary"
              icon="message-circle"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Message on WhatsApp
            </Button>
          </div>
        </div>
        <div style={{ minWidth: 0 }}>
          <PhotoFrame
            src="/images/hero-coach.png"
            alt="Ravindra, coach at Core Iron Coaching"
            ratio="4 / 5"
            objectPosition="center bottom"
            priority
          />
        </div>
      </div>

      <div style={{ position: "relative", maxWidth: "var(--container-max)", margin: "44px auto 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 16 }}>
          <StatCard value="2 yrs" label="Coaching clients" />
          <StatCard value="NHFA" label="Certified coach" />
          <StatCard value="1‑on‑1" label="Never templated" />
        </div>
      </div>
    </section>
  );
}
