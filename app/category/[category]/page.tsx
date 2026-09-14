import { notFound } from "next/navigation";
import { categories, getCategoryMeta } from "@/data/categories";
import { getArticlesByCategory } from "@/lib/articles";
import ArticleCard from "@/components/article/ArticleCard";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategoryMeta(slug);
  if (!category) notFound();

  const categoryArticles = getArticlesByCategory(category.slug);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">{category.label}</h1>
        <p className="mt-1 text-neutral-600 dark:text-neutral-400">{category.description}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categoryArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
