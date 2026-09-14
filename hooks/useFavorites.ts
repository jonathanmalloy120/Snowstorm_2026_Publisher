"use client";

import { useLocalStorageSet } from "@/hooks/useLocalStorageSet";

export function useFavorites() {
  const { ids, has, toggle } = useLocalStorageSet("favorites");
  return { favoritedIds: ids, isFavorited: has, toggleFavorite: toggle };
}
