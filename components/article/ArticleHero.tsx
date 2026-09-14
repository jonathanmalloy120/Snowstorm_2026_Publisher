import Image from "next/image";
import Link from "next/link";
import { Article } from "@/types/article";
import { articleDataAttrs, formatPublishedDate, heroImageUrl } from "@/lib/articles";
import { categories } from "@/data/categories";
import Badge from "@/components/ui/Badge";
import InteractionBar from "@/components/interactions/InteractionBar";

export default function ArticleHero({ article }: { article: Article }) {
  const categoryLabel = categories.find((c) => c.slug === article.category)?.label ?? article.category;

  return (
    <article
      {...articleDataAttrs(article)}
      className="grid gap-6 overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 md:grid-cols-2"
    >
      <Link href={`/article/${article.slug}`} className="block">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 md:h-full md:aspect-auto">
          <Image
            src={heroImageUrl(article, 1200, 675)}
            alt={article.heroImageAlt}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </Link>
      <div className="flex flex-col gap-3 p-6">
        <Badge category={article.category} label={categoryLabel} />
        <Link href={`/article/${article.slug}`} className="block">
          <h2 className="text-2xl font-bold leading-tight text-neutral-900 hover:underline dark:text-neutral-50 md:text-3xl">
            {article.headline}
          </h2>
        </Link>
        <p className="text-neutral-600 dark:text-neutral-400">{article.dek}</p>
        <div className="text-sm text-neutral-500 dark:text-neutral-400">
          {article.author.name} · {formatPublishedDate(article.publishedAt)} · {article.readTimeMinutes} min read
        </div>
        <div className="mt-auto border-t border-neutral-100 pt-3 dark:border-neutral-800">
          <InteractionBar article={article} />
        </div>
      </div>
    </article>
  );
}
