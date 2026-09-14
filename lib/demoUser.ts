import { v4 as uuidv4 } from "uuid";
import { readJSON, writeJSON } from "@/lib/storage";

const DEMO_USER_KEY = "demoUserId";

export function getOrCreateDemoUserId(): string {
  if (typeof window === "undefined") return "server";
  const existing = readJSON<string | null>(DEMO_USER_KEY, null);
  if (existing) return existing;

  const id = uuidv4();
  writeJSON(DEMO_USER_KEY, id);
  return id;
}
