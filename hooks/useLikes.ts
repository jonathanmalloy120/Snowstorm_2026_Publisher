"use client";

import { useMemo } from "react";
import { Article } from "@/types/article";
import { useLocalStorageSet } from "@/hooks/useLocalStorageSet";

/** Deterministic fake base like count (40-400) so numbers look real without a backend. */
function seededBaseCount(id: string): number {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash * 31 + id.charCodeAt(i)) | 0;
  }
  return 40 + (Math.abs(hash) % 361);
}

export function useLikes(article: Article) {
  const { has, toggle } = useLocalStorageSet("likes");
  const liked = has(article.id);
  const baseCount = useMemo(() => seededBaseCount(article.id), [article.id]);
  const count = baseCount + (liked ? 1 : 0);

  const toggleLike = () => toggle(article.id);

  return { liked, count, toggleLike };
}
