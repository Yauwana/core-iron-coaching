import Image from "next/image";

export function PhotoFrame({
  label = "Photography",
  ratio = "4 / 3",
  radius = "var(--radius-md)",
  src,
  alt = "",
  priority = false,
  objectPosition = "center",
  style,
}: {
  label?: string;
  ratio?: string;
  radius?: string;
  src?: string;
  alt?: string;
  priority?: boolean;
  objectPosition?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        position: "relative",
        aspectRatio: ratio,
        width: "100%",
        borderRadius: radius,
        overflow: "hidden",
        border: "1px solid var(--border-hairline)",
        background: src ? undefined : "repeating-linear-gradient(135deg,var(--iron-800) 0 9px,var(--iron-850) 9px 18px)",
        ...style,
      }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 800px) 100vw, 50vw"
          style={{ objectFit: "cover", objectPosition }}
          priority={priority}
        />
      ) : (
        <span
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            placeItems: "center",
            padding: 16,
            textAlign: "center",
            fontFamily: "var(--font-display)",
            fontVariationSettings: '"wdth" 80',
            fontWeight: 700,
            fontSize: 10.5,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--iron-400)",
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
