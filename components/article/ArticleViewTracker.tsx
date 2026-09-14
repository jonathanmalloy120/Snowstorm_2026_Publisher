"use client";

import { useEffect, useRef } from "react";
import { Article } from "@/types/article";
import { trackEvent, setGlobalContext } from "@/lib/analytics";
import { buildArticleContext } from "@/lib/articles";

/** Fires article_view + mirrors article metadata onto window.__SNOWPLOW_CONTEXT__. Renders nothing. */
export default function ArticleViewTracker({ article }: { article: Article }) {
  const firedFor = useRef<string | null>(null);

  useEffect(() => {
    if (firedFor.current === article.id) return;
    firedFor.current = article.id;

    const context = buildArticleContext(article);
    setGlobalContext({ article: context });
    trackEvent("article_view", { ...context });
  }, [article]);

  return null;
}
