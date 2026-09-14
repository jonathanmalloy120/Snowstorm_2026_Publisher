import { AnalyticsEventName, AnalyticsPayload } from "@/types/analytics";
import { getOrCreateDemoUserId } from "@/lib/demoUser";

declare global {
  interface Window {
    __SNOWPLOW_CONTEXT__?: Record<string, unknown>;
  }
}

/**
 * Single funnel point for every interaction event in Snowstorm 2026.
 * This is a STUB: it only console.logs. Real Snowplow tracking for this
 * project is limited to the out-of-the-box trackPageView() calls in
 * PageViewTracker — structured events are intentionally not used. Swap this
 * body for trackSelfDescribingEvent() calls once custom Iglu schemas exist
 * for these interactions; every event already carries the payload that
 * would need.
 */
export function trackEvent(eventName: AnalyticsEventName, payload: AnalyticsPayload = {}): void {
  const enrichedPayload = {
    ...payload,
    demo_user_id: getOrCreateDemoUserId(),
    occurred_at: new Date().toISOString(),
  };

  console.log(`%c[snowplow-stub] ${eventName}`, "color:#7c3aed;font-weight:bold", enrichedPayload);
}

/**
 * Mirrors page/article metadata onto window.__SNOWPLOW_CONTEXT__ so a future
 * tracker (or anyone poking around devtools) can read current page context
 * without re-deriving it from the DOM.
 */
export function setGlobalContext(context: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  window.__SNOWPLOW_CONTEXT__ = { ...window.__SNOWPLOW_CONTEXT__, ...context };
}
