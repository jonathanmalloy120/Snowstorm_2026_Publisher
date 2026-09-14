"use client";

import { Article } from "@/types/article";
import { useFavorites } from "@/hooks/useFavorites";
import { trackEvent } from "@/lib/analytics";
import { buildArticleContext } from "@/lib/articles";
import Icon from "@/components/ui/Icon";

export default function FavoriteButton({ article }: { article: Article }) {
  const { isFavorited, toggleFavorite } = useFavorites();
  const favorited = isFavorited(article.id);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(article.id);
    trackEvent("favorite_toggle", { ...buildArticleContext(article), favorited: !favorited });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      data-action="favorite-toggle"
      data-article-id={article.id}
      aria-pressed={favorited}
      aria-label={favorited ? "Remove favorite" : "Favorite article"}
      className={`inline-flex items-center rounded-full p-1.5 transition-colors ${
        favorited
          ? "text-amber-500 dark:text-amber-400"
          : "text-neutral-500 hover:text-amber-500 dark:text-neutral-400 dark:hover:text-amber-400"
      }`}
    >
      <Icon name={favorited ? "star-filled" : "star"} />
    </button>
  );
}
