declare global {
  interface Window {
    __SNOWPLOW_CONTEXT__?: Record<string, unknown>;
  }
}

/**
 * Mirrors page/article metadata onto window.__SNOWPLOW_CONTEXT__ so anyone
 * poking around devtools can read current page context without re-deriving
 * it from the DOM.
 */
export function setGlobalContext(context: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  window.__SNOWPLOW_CONTEXT__ = { ...window.__SNOWPLOW_CONTEXT__, ...context };
}
