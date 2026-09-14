import { CategorySlug } from "@/types/article";

export interface CategoryMeta {
  slug: CategorySlug;
  label: string;
  description: string;
}

export const categories: CategoryMeta[] = [
  { slug: "world", label: "World", description: "Global affairs and international dispatches" },
  { slug: "business", label: "Business", description: "Markets, companies, and the economy" },
  { slug: "tech", label: "Tech", description: "Products, startups, and the frontier of software" },
  { slug: "sports", label: "Sports", description: "Scores, transfers, and the games themselves" },
  { slug: "culture", label: "Culture", description: "Film, music, art, and the way we live" },
  { slug: "opinion", label: "Opinion", description: "Analysis and argument from our columnists" },
];

export function getCategoryMeta(slug: string): CategoryMeta | undefined {
  return categories.find((c) => c.slug === slug);
}
