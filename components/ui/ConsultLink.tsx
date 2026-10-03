"use client";

import { CALENDLY_URL } from "@/lib/content";
import { reportConsultConversion } from "@/lib/gtag";

/** Plain anchor to the Calendly booking link that also fires the Google Ads conversion event. */
export function ConsultLink({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <a href={CALENDLY_URL} target="_blank" rel="noopener" style={style} onClick={reportConsultConversion}>
      {children}
    </a>
  );
}
