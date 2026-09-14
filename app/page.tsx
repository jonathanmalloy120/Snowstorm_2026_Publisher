import Link from "next/link";
import { articles, getFeaturedArticle } from "@/lib/articles";
import { categories } from "@/data/categories";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleCard from "@/components/article/ArticleCard";

export default function HomePage() {
  const featured = getFeaturedArticle();

  return (
    <div className="flex flex-col gap-12">
      <ArticleHero article={featured} />

      {categories.map((category) => {
        const categoryArticles = articles
          .filter((article) => article.category === category.slug)
          .slice(0, 3);

        if (categoryArticles.length === 0) return null;

        return (
          <section key={category.slug} className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">{category.label}</h2>
              <Link
                href={`/category/${category.slug}`}
                className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
              >
                See all →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categoryArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
