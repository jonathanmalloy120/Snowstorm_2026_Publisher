import {
  newTracker,
  enableActivityTracking,
  setUserId,
  trackSelfDescribingEvent,
  addGlobalContexts,
  removeGlobalContexts,
  SelfDescribingJson,
  ContextFilter,
  FilterProvider,
} from "@snowplow/browser-tracker";
import { Article } from "@/types/article";
import { SharePlatform } from "@/lib/share";
import { getOrCreateDemoUserId } from "@/lib/demoUser";
import {
  ARTICLE_VIEW_SCHEMA,
  ARTICLE_INTERACTION_SCHEMA,
  ARTICLE_ENTITY_SCHEMA,
  ARTICLE_GLOBAL_CONTEXT_NAME,
  InteractionType,
  ArticleInteractionEventData,
  ArticleEntityData,
} from "@/types/snowplow";

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

  // Carries over the demo-only user id that used to ride along on every
  // trackEvent() stub call, now as the standard Snowplow user_id field
  // instead of a custom event property.
  setUserId(getOrCreateDemoUserId());

  // Page pings: first ping 10s after a page becomes active, then every 10s
  // while the user keeps engaging (scrolling/moving/typing resets the idle
  // clock). activityMetrics attaches scroll-depth min/max offsets to each ping.
  enableActivityTracking({
    minimumVisitLength: 10,
    heartbeatDelay: 10,
    activityMetrics: true,
  });
}

/** The `article` entity — attach to any event that should carry article context. */
export function buildArticleEntity(article: Article): SelfDescribingJson<ArticleEntityData> {
  return {
    schema: ARTICLE_ENTITY_SCHEMA,
    data: {
      title: article.headline,
      author: article.author.name,
      article_id: article.id,
      category: article.category,
      published_at: article.publishedAt,
    },
  };
}

/** Matches only OOTB page_view ('pv') and page_ping ('pp') events — see addArticleGlobalContext. */
const isPageViewOrPagePing: ContextFilter = (args) =>
  args?.eventType === "pv" || args?.eventType === "pp";

/**
 * Attaches the article entity to the OOTB page view and every subsequent
 * page ping while an article page is active, until
 * removeArticleGlobalContext() is called. Call when an article page becomes
 * active.
 *
 * Scoped to page_view/page_ping via a filter provider — it deliberately does
 * NOT apply to self-describing events like article_view/article_interaction.
 * Those attach the entity explicitly (see trackArticleView /
 * trackArticleInteraction below) since the calling component always already
 * has the specific `article` in scope, on any page (article detail, home,
 * category listing, …) — not just while this global context happens to be
 * registered. Keeping the two mechanisms non-overlapping avoids the entity
 * being attached twice to the same event.
 *
 * Registered as a NAMED global context (not the array form). The tracker's
 * array-form global contexts can only be cleared via clearGlobalContexts()
 * or an exact object-reference match — removeGlobalContexts(["schema-uri"])
 * is a silent no-op against them. Named contexts are looked up by name and
 * simply overwrite/delete correctly, so re-adding on every remount (e.g.
 * React Strict Mode's double-invoke in dev) never leaves duplicates behind.
 */
export function addArticleGlobalContext(article: Article): void {
  // addGlobalContexts() is a silent no-op if no tracker exists yet — on a
  // hard load, nothing has created one at this point in ArticleViewTracker's
  // effect otherwise. ensureSnowplowInitialized() is idempotent, so this is
  // safe to call unconditionally.
  ensureSnowplowInitialized();
  const provider: FilterProvider = [isPageViewOrPagePing, buildArticleEntity(article)];
  addGlobalContexts({ [ARTICLE_GLOBAL_CONTEXT_NAME]: provider });
}

/** Call on unmount / navigating away so the entity doesn't leak onto non-article events. */
export function removeArticleGlobalContext(): void {
  removeGlobalContexts([ARTICLE_GLOBAL_CONTEXT_NAME]);
}

/** Fires alongside the OOTB page view when an article page is viewed. */
export function trackArticleView(article: Article): void {
  ensureSnowplowInitialized();
  trackSelfDescribingEvent<Record<string, unknown>>({
    event: {
      schema: ARTICLE_VIEW_SCHEMA,
      data: {
        id: article.id,
        title: article.headline,
        author: article.author.name,
      },
    },
    context: [buildArticleEntity(article)],
  });
}

/**
 * Fires when a user likes, bookmarks, favorites, or shares an article — from
 * the article page itself, a homepage card, or a category listing.
 * `socialPlatform` only applies to "share" — pass it only in that case.
 */
export function trackArticleInteraction(
  article: Article,
  interactionType: InteractionType,
  socialPlatform?: SharePlatform
): void {
  ensureSnowplowInitialized();

  const data: ArticleInteractionEventData = { interaction_type: interactionType };
  if (socialPlatform) data.social_platform = socialPlatform;

  trackSelfDescribingEvent<Record<string, unknown>>({
    event: {
      schema: ARTICLE_INTERACTION_SCHEMA,
      data,
    },
    context: [buildArticleEntity(article)],
  });
}
