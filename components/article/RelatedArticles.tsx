import { Article } from "@/types/article";
import { getRelatedArticles } from "@/lib/articles";
import ArticleCard from "@/components/article/ArticleCard";

export default function RelatedArticles({ article }: { article: Article }) {
  const related = getRelatedArticles(article);
  if (related.length === 0) return null;

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">More in {article.category}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((related) => (
          <ArticleCard key={related.id} article={related} />
        ))}
      </div>
    </section>
  );
}
