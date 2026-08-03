import React from "react";
import { articles } from "@/data/articles";
import ArticleView from "@/components/modules/blog/ArticleView";
import Link from "next/link";

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export default async function CategoryArticlePage({ params }: PageProps) {
  const { category, slug } = await params;

  const article =
    articles.find(
      (a) =>
        (a.slug === slug || String(a.id) === String(slug)) &&
        (a.categoryId.toLowerCase() === category.toLowerCase() ||
          a.category.toLowerCase().replace(/\s+/g, "-") === category.toLowerCase())
    ) || articles.find((a) => a.slug === slug || String(a.id) === String(slug));

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFCF9] p-6 text-center">
        <p className="text-red-500 font-bold mb-4">Article Not Found</p>
        <Link href="/blog" className="px-6 py-2 bg-primary text-white rounded-xl shadow-lg">
          Back to Blog
        </Link>
      </div>
    );
  }

  return <ArticleView article={article} />;
}
