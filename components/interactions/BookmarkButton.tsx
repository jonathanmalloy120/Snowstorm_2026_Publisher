"use client";

import { Article } from "@/types/article";
import { useBookmarks } from "@/hooks/useBookmarks";
import { trackEvent } from "@/lib/analytics";
import { buildArticleContext } from "@/lib/articles";
import Icon from "@/components/ui/Icon";

export default function BookmarkButton({ article }: { article: Article }) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(article.id);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(article.id);
    trackEvent("bookmark_toggle", { ...buildArticleContext(article), bookmarked: !bookmarked });
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
