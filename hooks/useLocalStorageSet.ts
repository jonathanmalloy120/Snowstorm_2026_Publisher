"use client";

import { useCallback, useSyncExternalStore } from "react";
import { readRaw, writeJSON, subscribe } from "@/lib/storage";

const parsedCache = new Map<string, { raw: string | null; parsed: string[] }>();

function getSnapshot(storageKey: string): string[] {
  const raw = readRaw(storageKey);
  const cached = parsedCache.get(storageKey);
  if (cached && cached.raw === raw) return cached.parsed;

  const parsed: string[] = raw ? JSON.parse(raw) : [];
  parsedCache.set(storageKey, { raw, parsed });
  return parsed;
}

const EMPTY: string[] = [];

function getServerSnapshot(): string[] {
  return EMPTY;
}

/** Generic hook for a localStorage-backed set of ids (bookmarks, favorites, ...). */
export function useLocalStorageSet(storageKey: string) {
  const ids = useSyncExternalStore(
    useCallback((callback) => subscribe(storageKey, callback), [storageKey]),
    () => getSnapshot(storageKey),
    getServerSnapshot
  );

  const has = useCallback((id: string) => ids.includes(id), [ids]);

  const toggle = useCallback(
    (id: string) => {
      const current = getSnapshot(storageKey);
      const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
      writeJSON(storageKey, next);
    },
    [storageKey]
  );

  return { ids, has, toggle };
}
