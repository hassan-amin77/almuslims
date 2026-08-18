import React from "react";
import type { Metadata } from "next";
import { articles } from "@/data/articles";
import ArticleView from "@/components/modules/blog/ArticleView";
import Link from "next/link";

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;

  const article =
    articles.find(
      (a) =>
        (a.slug === slug || String(a.id) === String(slug)) &&
        (a.categoryId.toLowerCase() === category.toLowerCase() ||
          a.category.toLowerCase().replace(/\s+/g, "-") === category.toLowerCase())
    ) || articles.find((a) => a.slug === slug || String(a.id) === String(slug));

  if (!article) {
    return {
      title: "Article Not Found — AlMuslims",
    };
  }

  const title = article.metaTitle || article.title;
  const description = article.metaDescription || article.excerpt;
  const canonicalUrl = `/${category}/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: article.image ? [{ url: article.image }] : undefined,
    },
    twitter: {
      title,
      description,
      images: article.image ? [article.image] : undefined,
    },
  };
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
        <Link href="/categories" className="px-6 py-2 bg-primary text-white rounded-xl shadow-lg">
          Back to Categories
        </Link>
      </div>
    );
  }

  return <ArticleView article={article} />;
}
