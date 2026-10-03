// Google Ads conversion tracking for the "book a consult" CTAs.
// The gtag.js install + the gtag_report_conversion() function it calls both
// live in <head> (see app/layout.tsx), exactly as Google Ads' install
// instructions specify. This module just calls that global function from
// our click handlers.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

/**
 * Fire the "book a consult" conversion event via the global
 * gtag_report_conversion() installed in <head>. No URL is passed because
 * every CTA that calls this opens Calendly in a new tab already — passing
 * a URL would make gtag_report_conversion additionally navigate the
 * current tab, double-navigating the visitor.
 */
export function reportConsultConversion() {
  window.gtag_report_conversion?.();
}
