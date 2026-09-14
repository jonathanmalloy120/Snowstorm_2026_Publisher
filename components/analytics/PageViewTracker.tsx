"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@snowplow/browser-tracker";
import { ensureSnowplowInitialized } from "@/lib/snowplow";

/** Fires a standard Snowplow page view on first load and every client-side navigation. Renders nothing. */
export default function PageViewTracker() {
  const pathname = usePathname();
  const lastTracked = useRef<string | null>(null);

  useEffect(() => {
    if (lastTracked.current === pathname) return;
    lastTracked.current = pathname;

    ensureSnowplowInitialized();
    trackPageView();
  }, [pathname]);

  return null;
}
