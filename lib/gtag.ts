// Google Ads conversion tracking (Page view / Click) for the "book a consult" CTAs.
// See: app/layout.tsx for the base Google tag install.
export const CONSULT_CONVERSION_LABEL = "AW-18491498983/d8pYCJnh6Y4dEOfDt_FE";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fire the "book a consult" conversion event. Safe to call before gtag has loaded. */
export function reportConsultConversion() {
  window.gtag?.("event", "conversion", {
    send_to: CONSULT_CONVERSION_LABEL,
    value: 1.0,
    currency: "AUD",
  });
}
