import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Core Iron Coaching — Online & 1-on-1 Personal Training",
  description:
    "Personalised strength and fat-loss coaching for beginners and busy people. Online worldwide, or 1-on-1 at Genesis Fitness Mickleham, Melbourne. Book a free consult.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
