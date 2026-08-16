import { redirect } from "next/navigation";
import { articles, getArticleUrl } from "@/data/articles";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ArticleDetailRedirect({ params }: PageProps) {
  const { id } = await params;

  const article = articles.find(
    (a) => a.slug === id || String(a.id) === String(id)
  );

  if (article) {
    redirect(getArticleUrl(article));
  } else {
    redirect("/categories");
  }
}
