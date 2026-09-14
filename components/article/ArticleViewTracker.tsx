"use client";

import { useEffect, useRef } from "react";
import { Article } from "@/types/article";
import { setGlobalContext } from "@/lib/analytics";
import { buildArticleContext } from "@/lib/articles";
import { addArticleGlobalContext, removeArticleGlobalContext, trackArticleView } from "@/lib/snowplow";

/**
 * Fires article_view alongside the OOTB page view, and keeps the `article`
 * entity attached (via global context) to every event tracked while this
 * article is on screen — page views, page pings, and interaction events.
 * Renders nothing.
 */
export default function ArticleViewTracker({ article }: { article: Article }) {
  const firedFor = useRef<string | null>(null);

  useEffect(() => {
    // Always paired with the cleanup below, regardless of the fire-once
    // guard, so a dev-mode StrictMode double-invoke (mount -> cleanup ->
    // mount) doesn't leave the article entity unregistered.
    addArticleGlobalContext(article);

    if (firedFor.current !== article.id) {
      firedFor.current = article.id;
      setGlobalContext({ article: buildArticleContext(article) });
      trackArticleView(article);
    }

    return () => {
      removeArticleGlobalContext();
    };
  }, [article]);

  return null;
}
