"use client";

import { Article } from "@/types/article";
import { useBookmarks } from "@/hooks/useBookmarks";
import { trackArticleInteraction } from "@/lib/snowplow";
import Icon from "@/components/ui/Icon";

export default function BookmarkButton({ article }: { article: Article }) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(article.id);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const isNowBookmarked = !bookmarked;
    toggleBookmark(article.id);
    // Only fires when bookmarking — not when un-bookmarking.
    if (isNowBookmarked) trackArticleInteraction(article, "bookmark");
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      data-action="bookmark-toggle"
      data-article-id={article.id}
      aria-pressed={bookmarked}
      aria-label={bookmarked ? "Remove bookmark" : "Bookmark article"}
      className={`inline-flex items-center rounded-full p-1.5 transition-colors ${
        bookmarked
          ? "text-sky-600 dark:text-sky-400"
          : "text-neutral-500 hover:text-sky-600 dark:text-neutral-400 dark:hover:text-sky-400"
      }`}
    >
      <Icon name={bookmarked ? "bookmark-filled" : "bookmark"} />
    </button>
  );
}
