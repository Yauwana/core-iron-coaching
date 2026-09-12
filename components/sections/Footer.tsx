import Image from "next/image";
import { CALENDLY_URL, WHATSAPP_URL, EMAIL } from "@/lib/content";

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontVariationSettings: '"wdth" 84',
  fontWeight: 700,
  fontSize: "var(--fs-eyebrow)",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
};

export function Footer() {
  return (
    <footer style={{ padding: "44px 48px 26px", background: "var(--iron-950)", borderTop: "1px solid var(--border-hairline)" }}>
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 28,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image src="/images/logo-full.png" alt="Core Iron Coaching" height={64} width={81} style={{ display: "block" }} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 22 }}>
          <a href={`mailto:${EMAIL}`} style={linkStyle}>
            Email
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" style={linkStyle}>
            WhatsApp
          </a>
          <a href={CALENDLY_URL} target="_blank" rel="noopener" style={linkStyle}>
            Book a consult
          </a>
        </div>
      </div>
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "28px auto 0",
          paddingTop: 18,
          borderTop: "1px solid var(--border-hairline)",
          fontSize: "var(--fs-caption)",
          color: "var(--iron-400)",
        }}
      >
        © Core Iron Coaching · Mickleham, Melbourne · Online coaching worldwide
      </div>
    </footer>
  );
}
