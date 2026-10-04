import type { Metadata } from "next";
import Script from "next/script";
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
      <body>
        {children}
        {/* Google tag (gtag.js) — strategy="beforeInteractive" makes Next.js
            inject these scripts into <head>, matching Google's install instructions.
            (Must be a child of <body>, per next/script's beforeInteractive example —
            placing it as a sibling of <body> is invalid HTML and triggers a hydration warning.) */}
        <Script
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18491498983"
        />
        <Script id="google-tag" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18491498983');
          `}
        </Script>
        {/* Event snippet for Page view conversion page, right after the Google tag,
            per Google Ads' install instructions. */}
        <Script id="gtag-report-conversion" strategy="beforeInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-18491498983/d8pYCJnh6Y4dEOfDt_FE',
                  'value': 1.0,
                  'currency': 'AUD',
                  'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
      </body>
    </html>
  );
}
