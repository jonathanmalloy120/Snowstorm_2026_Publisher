"use client";

import { useLocalStorageSet } from "@/hooks/useLocalStorageSet";

export function useBookmarks() {
  const { ids, has, toggle } = useLocalStorageSet("bookmarks");
  return { bookmarkedIds: ids, isBookmarked: has, toggleBookmark: toggle };
}
