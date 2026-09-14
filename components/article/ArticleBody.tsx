import Image from "next/image";
import { Article } from "@/types/article";
import { heroImageUrl } from "@/lib/articles";

export default function ArticleBody({ article }: { article: Article }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900">
        <Image
          src={heroImageUrl(article, 1600, 900)}
          alt={article.heroImageAlt}
          fill
          priority
          sizes="(min-width: 768px) 720px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 text-base leading-relaxed text-neutral-800 dark:text-neutral-200">
        {article.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
