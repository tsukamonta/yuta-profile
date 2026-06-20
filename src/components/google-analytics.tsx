"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

import { trackAnalyticsEvent } from "@/lib/analytics";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAnalytics() {
  const pathname = usePathname();
  const hasTrackedInitialView = useRef(false);

  useEffect(() => {
    if (!measurementId || !pathname) {
      return;
    }

    if (!hasTrackedInitialView.current) {
      hasTrackedInitialView.current = true;
      return;
    }

    trackAnalyticsEvent("page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  if (!measurementId) {
    return null;
  }

  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      strategy="afterInteractive"
      onLoad={() => {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(...args: unknown[]) {
          window.dataLayer?.push(args);
        };
        window.gtag("js", new Date());
        window.gtag("config", measurementId);
      }}
    />
  );
}
