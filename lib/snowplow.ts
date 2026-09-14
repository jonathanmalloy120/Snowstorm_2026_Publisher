import { newTracker, enableActivityTracking } from "@snowplow/browser-tracker";

const TRACKER_ID = "snowstorm2026";
const COLLECTOR_URL = process.env.NEXT_PUBLIC_SNOWPLOW_COLLECTOR_URL;
const APP_ID = process.env.NEXT_PUBLIC_SNOWPLOW_APP_ID ?? "snowstorm-2026-publisher";

let initialized = false;

/** Idempotent — safe to call before every tracked event. */
export function ensureSnowplowInitialized(): void {
  if (initialized || typeof window === "undefined") return;

  if (!COLLECTOR_URL) {
    console.warn(
      "[snowplow] NEXT_PUBLIC_SNOWPLOW_COLLECTOR_URL is not set — events will be logged but not sent."
    );
    return;
  }

  initialized = true;
  newTracker(TRACKER_ID, COLLECTOR_URL, {
    appId: APP_ID,
    platform: "web",
    contexts: {
      webPage: true,
      session: true,
    },
  });

  // Page pings: first ping 10s after a page becomes active, then every 10s
  // while the user keeps engaging (scrolling/moving/typing resets the idle
  // clock). activityMetrics attaches scroll-depth min/max offsets to each ping.
  enableActivityTracking({
    minimumVisitLength: 10,
    heartbeatDelay: 10,
    activityMetrics: true,
  });
}
