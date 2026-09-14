export type CategorySlug =
  | "world"
  | "business"
  | "tech"
  | "sports"
  | "culture"
  | "opinion";

export interface Author {
  id: string;
  name: string;
  title: string;
  avatarSeed: string;
}

export interface Article {
  id: string;
  slug: string;
  headline: string;
  dek: string;
  author: Author;
  category: CategorySlug;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  heroImageAlt: string;
  body: string[];
  wordCount: number;
  readTimeMinutes: number;
  featured?: boolean;
}
