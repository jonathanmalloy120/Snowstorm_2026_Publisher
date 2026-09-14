import Image from "next/image";
import Link from "next/link";
import { Article } from "@/types/article";
import { articleDataAttrs, formatPublishedDate, heroImageUrl } from "@/lib/articles";
import { categories } from "@/data/categories";
import Badge from "@/components/ui/Badge";
import InteractionBar from "@/components/interactions/InteractionBar";

export default function ArticleCard({ article }: { article: Article }) {
  const categoryLabel = categories.find((c) => c.slug === article.category)?.label ?? article.category;

  return (
    <article
      {...articleDataAttrs(article)}
      className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
    >
      <Link href={`/article/${article.slug}`} className="block">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          <Image
            src={heroImageUrl(article, 800, 450)}
            alt={article.heroImageAlt}
            fill
            sizes="(min-width: 1024px) 400px, 100vw"
            className="object-cover"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <Badge category={article.category} label={categoryLabel} />
        <Link href={`/article/${article.slug}`} className="block">
          <h3 className="text-lg font-semibold leading-snug text-neutral-900 hover:underline dark:text-neutral-50">
            {article.headline}
          </h3>
        </Link>
        <p className="line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">{article.dek}</p>
        <div className="mt-auto flex items-center justify-between pt-2 text-xs text-neutral-500 dark:text-neutral-400">
          <span>
            {article.author.name} · {formatPublishedDate(article.publishedAt)} · {article.readTimeMinutes} min read
          </span>
        </div>
        <div className="border-t border-neutral-100 pt-2 dark:border-neutral-800">
          <InteractionBar article={article} />
        </div>
      </div>
    </article>
  );
}
