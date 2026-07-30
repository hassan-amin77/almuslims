"use client";

import React, { useMemo } from "react";
import { articles } from "@/data/articles";
import ArticleView from "@/components/modules/blog/ArticleView";

interface PageProps {
  params: React.ComponentProps<any>['params'];
}

export default function ArticleDetail({ params }: PageProps) {
  const unwrappedParams = React.use(params) as { id: string };
  const { id } = unwrappedParams;

  const article = useMemo(() => {
    return articles.find(a => a.slug === id || a.id === id) || articles[0];
  }, [id]);

  return <ArticleView article={article} />;
}
