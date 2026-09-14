"use client";

import { Article } from "@/types/article";
import { useLikes } from "@/hooks/useLikes";
import { trackArticleInteraction } from "@/lib/snowplow";
import Icon from "@/components/ui/Icon";

export default function LikeButton({ article }: { article: Article }) {
  const { liked, count, toggleLike } = useLikes(article);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const isNowLiked = !liked;
    toggleLike();
    // Only fires when liking — not when un-liking.
    if (isNowLiked) trackArticleInteraction(article, "like");
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      data-action="like-toggle"
      data-article-id={article.id}
      aria-pressed={liked}
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-sm transition-colors ${
        liked
          ? "text-rose-600 dark:text-rose-400"
          : "text-neutral-500 hover:text-rose-600 dark:text-neutral-400 dark:hover:text-rose-400"
      }`}
    >
      <Icon name={liked ? "heart-filled" : "heart"} />
      <span>{count}</span>
    </button>
  );
}
