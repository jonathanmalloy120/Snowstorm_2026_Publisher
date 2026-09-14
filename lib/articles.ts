import { Article } from "@/types/article";
import { ArticleContext } from "@/types/analytics";

export {
  articles,
  getArticleBySlug,
  getArticleById,
  getArticlesByCategory,
  getFeaturedArticle,
  getRelatedArticles,
} from "@/data/articles";

/** Single source of truth for article metadata — used for both data-* attrs and trackEvent payloads. */
export function buildArticleContext(article: Article): ArticleContext {
  return {
    article_id: article.id,
    article_slug: article.slug,
    headline: article.headline,
    category: article.category,
    author: article.author.name,
    tags: article.tags,
    published_at: article.publishedAt,
  };
}

/** Spread onto an article's root element and its interactive controls so a future tracker can read metadata straight off the DOM. */
export function articleDataAttrs(article: Article): Record<string, string> {
  return {
    "data-article-id": article.id,
    "data-article-slug": article.slug,
    "data-headline": article.headline,
    "data-category": article.category,
    "data-author": article.author.name,
    "data-tags": article.tags.join(","),
    "data-published-at": article.publishedAt,
  };
}

export function formatPublishedDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}

export function heroImageUrl(article: Article, width = 1200, height = 675): string {
  return `https://picsum.photos/seed/${article.slug}/${width}/${height}`;
}
