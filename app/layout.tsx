import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/content";

const TITLE = "Core Iron Coaching — Online & 1-on-1 Personal Training";
const DESCRIPTION =
  "Personalised strength and fat-loss coaching for beginners and busy people. Online worldwide, or 1-on-1 at Genesis Fitness Mickleham, Melbourne. Book a free consult.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "personal trainer Mickleham",
    "online fitness coaching",
    "strength coach Melbourne",
    "fat loss coaching",
    "natural bodybuilding coach",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Core Iron Coaching",
    images: ["/images/hero-coach.png"],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/hero-coach.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
