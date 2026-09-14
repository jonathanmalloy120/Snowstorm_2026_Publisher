export type AnalyticsEventName =
  | "article_view"
  | "article_share_click"
  | "bookmark_toggle"
  | "favorite_toggle"
  | "article_like_toggle";

export interface ArticleContext {
  article_id: string;
  article_slug: string;
  headline: string;
  category: string;
  author: string;
  tags: string[];
  published_at: string;
}

export interface AnalyticsPayload extends Partial<ArticleContext> {
  [key: string]: unknown;
}
