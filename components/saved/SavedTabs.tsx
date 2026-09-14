"use client";

import { useState } from "react";
import { useBookmarks } from "@/hooks/useBookmarks";
import { useFavorites } from "@/hooks/useFavorites";
import { getArticleById } from "@/lib/articles";
import ArticleCard from "@/components/article/ArticleCard";

type Tab = "bookmarks" | "favorites";

export default function SavedTabs() {
  const [tab, setTab] = useState<Tab>("bookmarks");
  const { bookmarkedIds } = useBookmarks();
  const { favoritedIds } = useFavorites();

  const ids = tab === "bookmarks" ? bookmarkedIds : favoritedIds;
  const savedArticles = ids
    .map((id) => getArticleById(id))
    .filter((article) => article !== undefined);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2 border-b border-neutral-200 dark:border-neutral-800">
        {(["bookmarks", "favorites"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`-mb-px border-b-2 px-3 py-2 text-sm font-medium capitalize transition-colors ${
              tab === t
                ? "border-neutral-900 text-neutral-900 dark:border-neutral-50 dark:text-neutral-50"
                : "border-transparent text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
            }`}
          >
            {t} ({t === "bookmarks" ? bookmarkedIds.length : favoritedIds.length})
          </button>
        ))}
      </div>

      {savedArticles.length === 0 ? (
        <p className="text-neutral-500 dark:text-neutral-400">
          No {tab} yet. Click the {tab === "bookmarks" ? "bookmark" : "star"} icon on any article to save it here.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {savedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
