import React from "react";
import { articles } from "@/data/articles";
import ArticleView from "@/components/modules/blog/ArticleView";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ArticleDetail({ params }: PageProps) {
  const { id } = await params;

  const article = articles.find(
    (a) => a.slug === id || String(a.id) === String(id)
  ) || articles[0];

  return <ArticleView article={article} />;
}
