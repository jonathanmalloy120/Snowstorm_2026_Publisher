import { SharePlatform } from "@/lib/share";

export const ARTICLE_VIEW_SCHEMA = "iglu:com.snowplowanalytics/article_view/jsonschema/1-0-0";
export const ARTICLE_INTERACTION_SCHEMA =
  "iglu:com.snowplowanalytics/article_interaction/jsonschema/1-0-0";
export const ARTICLE_ENTITY_SCHEMA = "iglu:com.snowplowanalytics/article/jsonschema/2-0-0";
/** Key used to register/remove the article entity as a NAMED global context — see addArticleGlobalContext in lib/snowplow.ts. */
export const ARTICLE_GLOBAL_CONTEXT_NAME = "article";

export type InteractionType = "like" | "bookmark" | "favorite" | "share";

export interface ArticleViewEventData {
  id: string | null;
  title: string | null;
  author: string | null;
}

export interface ArticleInteractionEventData {
  interaction_type: InteractionType;
  /**
   * Only set for "share" interactions. Omit entirely otherwise — the schema's
   * enum doesn't include null, so `social_platform: null` would fail validation.
   */
  social_platform?: SharePlatform;
  // Index signature so this satisfies trackSelfDescribingEvent's Record<string, unknown> data type.
  [key: string]: unknown;
}

export interface ArticleEntityData {
  title: string | null;
  author: string | null;
  article_id: string | null;
  /** Article category, e.g. "tech", "business". */
  category: string;
  /** ISO 8601 timestamp of when the article was published. */
  published_at: string;
  // Index signature so this satisfies SelfDescribingJson<Record<string, unknown>>.
  [key: string]: unknown;
}
