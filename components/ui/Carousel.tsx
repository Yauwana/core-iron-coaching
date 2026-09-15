"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";

type Slide = {
  src: string;
  alt: string;
  label?: string;
};

export function Carousel({
  slides,
  ratio = "4 / 5",
  radius = "var(--radius-md)",
  interval = 4000,
  style,
}: {
  slides: Slide[];
  ratio?: string;
  radius?: string;
  interval?: number;
  style?: React.CSSProperties;
}) {
  const [index, setIndex] = useState(0);
  const hovered = useRef(false);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      if (!hovered.current) {
        setIndex((i) => (i + 1) % slides.length);
      }
    }, interval);
    return () => clearInterval(id);
  }, [slides.length, interval]);

  return (
    <div
      onMouseEnter={() => {
        hovered.current = true;
      }}
      onMouseLeave={() => {
        hovered.current = false;
      }}
      style={{
        position: "relative",
        aspectRatio: ratio,
        width: "100%",
        borderRadius: radius,
        overflow: "hidden",
        border: "1px solid var(--border-hairline)",
        ...style,
      }}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== index}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === index ? 1 : 0,
            transition: "opacity 700ms ease",
          }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            priority={i === 0}
          />
        </div>
      ))}

      {slides[index]?.label ? (
        <div style={{ position: "absolute", left: 14, bottom: 14, zIndex: 2 }}>
          <Badge tone="solid" shape="pill">
            {slides[index].label}
          </Badge>
        </div>
      ) : null}

      {slides.length > 1 ? (
        <div
          style={{
            position: "absolute",
            right: 14,
            bottom: 14,
            zIndex: 2,
            display: "flex",
            gap: 6,
          }}
        >
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              style={{
                width: i === index ? 18 : 6,
                height: 6,
                borderRadius: "var(--radius-pill)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                background: i === index ? "var(--orange-500)" : "rgba(255,255,255,.4)",
                transition: "width 250ms ease, background 250ms ease",
              }}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
