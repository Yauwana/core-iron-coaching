import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CALENDLY_URL } from "@/lib/content";

const NAV_LINKS = [
  { href: "#coaching", label: "Coaching" },
  { href: "#about", label: "About" },
  { href: "#results", label: "Results" },
  { href: "#how", label: "Method" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        padding: "14px 48px",
        background: "rgba(17,19,21,.70)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--border-hairline)",
        flexWrap: "wrap",
      }}
    >
      <a href="#top" style={{ display: "block", flex: "none" }}>
        <Image
          src="/images/logo-full.png"
          alt="Core Iron Coaching"
          height={46}
          width={58}
          style={{ display: "block" }}
          priority
        />
      </a>
      <nav style={{ display: "flex", alignItems: "center", gap: 26, flexWrap: "wrap" }}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link"
            style={{
              fontFamily: "var(--font-display)",
              fontVariationSettings: '"wdth" 84',
              fontWeight: 700,
              fontSize: 11.5,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            {link.label}
          </a>
        ))}
        <Button size="sm" variant="primary" icon="calendar-days" href={CALENDLY_URL} target="_blank" rel="noopener">
          Free consult
        </Button>
      </nav>
    </header>
  );
}
