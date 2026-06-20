type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackAnalyticsEvent(eventName: string, params?: AnalyticsParams) {
  if (typeof window === "undefined") {
    return;
  }

  window.gtag?.("event", eventName, params ?? {});
}
