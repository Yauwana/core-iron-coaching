"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { CALENDLY_URL } from "@/lib/content";

const NAV_LINKS = [
  { href: "#coaching", label: "Coaching" },
  { href: "#about", label: "About" },
  { href: "#results", label: "Results" },
  { href: "#how", label: "Method" },
  { href: "#contact", label: "Contact" },
];

const navLinkStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontVariationSettings: '"wdth" 84',
  fontWeight: 700,
  fontSize: 11.5,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
};

export function Header() {
  const [open, setOpen] = useState(false);

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

      <nav className="nav-desktop" style={{ alignItems: "center", gap: 26, flexWrap: "wrap" }}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="nav-link" style={navLinkStyle}>
            {link.label}
          </a>
        ))}
        <Button size="sm" variant="primary" icon="calendar-days" href={CALENDLY_URL} target="_blank" rel="noopener">
          Free consult
        </Button>
      </nav>

      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 38,
          height: 38,
          background: "transparent",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-sm)",
          color: "var(--paper-000)",
          cursor: "pointer",
        }}
      >
        <Icon name={open ? "x" : "menu"} size={20} />
      </button>

      <nav
        className={`nav-mobile-panel${open ? " is-open" : ""}`}
        style={{
          order: 3,
          width: "100%",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 4,
          marginTop: 14,
          paddingTop: 14,
          borderTop: "1px solid var(--border-hairline)",
        }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link"
            onClick={() => setOpen(false)}
            style={{ ...navLinkStyle, padding: "10px 0", width: "100%" }}
          >
            {link.label}
          </a>
        ))}
        <Button
          size="sm"
          variant="primary"
          icon="calendar-days"
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener"
          style={{ marginTop: 10 }}
        >
          Free consult
        </Button>
      </nav>
    </header>
  );
}
