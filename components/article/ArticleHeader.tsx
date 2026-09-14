import { Article } from "@/types/article";
import { articleDataAttrs, formatPublishedDate } from "@/lib/articles";
import { categories } from "@/data/categories";
import Badge from "@/components/ui/Badge";
import InteractionBar from "@/components/interactions/InteractionBar";

export default function ArticleHeader({ article }: { article: Article }) {
  const categoryLabel = categories.find((c) => c.slug === article.category)?.label ?? article.category;

  return (
    <header {...articleDataAttrs(article)} className="flex flex-col gap-4">
      <Badge category={article.category} label={categoryLabel} />
      <h1 className="text-3xl font-bold leading-tight text-neutral-900 dark:text-neutral-50 md:text-4xl">
        {article.headline}
      </h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-400">{article.dek}</p>
      <div className="flex flex-wrap items-center justify-between gap-3 border-y border-neutral-100 py-3 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
        <div>
          <span className="font-medium text-neutral-700 dark:text-neutral-300">{article.author.name}</span>
          <span> · {article.author.title}</span>
          <div>
            {formatPublishedDate(article.publishedAt)} · {article.readTimeMinutes} min read
          </div>
        </div>
        <InteractionBar article={article} />
      </div>
    </header>
  );
}
