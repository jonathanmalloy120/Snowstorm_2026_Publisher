const PREFIX = "snowstorm:";

const STORAGE_EVENT = "snowstorm-storage";

export function readRaw(key: string): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(PREFIX + key);
}

export function readJSON<T>(key: string, fallback: T): T {
  const raw = readRaw(key);
  try {
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function writeJSON<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent(STORAGE_EVENT, { detail: { key } }));
}

export function subscribe(key: string, callback: () => void): () => void {
  const handleLocal = (event: Event) => {
    if ((event as CustomEvent<{ key: string }>).detail?.key === key) callback();
  };
  const handleCrossTab = (event: StorageEvent) => {
    if (event.key === PREFIX + key) callback();
  };

  window.addEventListener(STORAGE_EVENT, handleLocal);
  window.addEventListener("storage", handleCrossTab);

  return () => {
    window.removeEventListener(STORAGE_EVENT, handleLocal);
    window.removeEventListener("storage", handleCrossTab);
  };
}
