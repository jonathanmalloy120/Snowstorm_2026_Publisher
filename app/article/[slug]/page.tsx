import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/lib/articles";
import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleBody from "@/components/article/ArticleBody";
import RelatedArticles from "@/components/article/RelatedArticles";
import ArticleViewTracker from "@/components/article/ArticleViewTracker";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <article className="flex flex-col gap-8">
      <ArticleViewTracker article={article} />
      <ArticleHeader article={article} />
      <ArticleBody article={article} />
      <RelatedArticles article={article} />
    </article>
  );
}
