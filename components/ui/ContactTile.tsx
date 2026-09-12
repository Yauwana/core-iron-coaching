import { Card } from "./Card";
import { Icon } from "./Icon";

export function ContactTile({
  icon = "mail",
  label,
  value,
  detail,
  href,
}: {
  icon?: string;
  label: string;
  value: string;
  detail?: string;
  href?: string;
}) {
  const Tag = href ? "a" : "div";
  return (
    <Card surface="raised" interactive={!!href} padding="22px 18px" style={{ textAlign: "center" }}>
      <Tag
        href={href}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener" : undefined}
        style={{ display: "block", textDecoration: "none", color: "inherit" }}
      >
        <span
          style={{
            display: "grid",
            placeItems: "center",
            width: 40,
            height: 40,
            margin: "0 auto 14px",
            borderRadius: "var(--radius-pill)",
            background: "var(--orange-500)",
            color: "var(--iron-950)",
          }}
        >
          <Icon name={icon} size={19} />
        </span>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontVariationSettings: '"wdth" 84',
            fontWeight: 700,
            fontSize: "var(--fs-title-3)",
            color: "var(--orange-500)",
          }}
        >
          {label}
        </div>
        <div style={{ marginTop: 6, fontSize: "var(--fs-body-sm)", color: "var(--text-body)" }}>{value}</div>
        {detail ? (
          <div style={{ marginTop: 2, fontSize: "var(--fs-caption)", color: "var(--text-faint)" }}>{detail}</div>
        ) : null}
      </Tag>
    </Card>
  );
}
