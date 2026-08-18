"use client";

import React, { useMemo, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HiChevronRight,
  HiChevronDown, HiChevronUp, HiSearch
} from "react-icons/hi";
import { articles, Article, getArticleUrl } from "@/data/articles";
import ArticleContent from "./ArticleContent";

interface ArticleViewProps {
  article: Article;
}

export default function ArticleView({ article }: ArticleViewProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [faqQuery, setFaqQuery] = useState("");

  // Update page title and meta description dynamically
  useEffect(() => {
    if (typeof document !== "undefined") {
      const titleToSet = article.metaTitle || article.title;
      document.title = titleToSet;

      if (article.metaDescription) {
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
          metaDesc = document.createElement('meta');
          metaDesc.setAttribute('name', 'description');
          document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', article.metaDescription);
      }
    }
  }, [article]);

  // Filter FAQs if query entered
  const filteredFaqs = useMemo(() => {
    if (!article.faqs) return [];
    if (!faqQuery.trim()) return article.faqs;
    const q = faqQuery.toLowerCase();
    return article.faqs.filter(
      f => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
    );
  }, [article.faqs, faqQuery]);

  // Find related articles (same category)
  const finalRelatedArticles = useMemo(() => {
    const primaryRelated = articles
      .filter(a => a.id !== article.id)
      .filter(a => a.categoryId === article.categoryId);

    if (primaryRelated.length >= 3) {
      return primaryRelated.slice(0, 3);
    }

    const ids = new Set(primaryRelated.map(a => a.id));
    const extras = articles.filter(a => a.id !== article.id && !ids.has(a.id));
    return [...primaryRelated, ...extras].slice(0, 3);
  }, [article]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] pb-24 font-body text-gray-800">

      {/* ── Hero Section with Featured Image ── */}
      <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[500px] overflow-hidden">
        {/* Background Image */}
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover object-center scale-105"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/70 to-gray-900/30" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-between px-4 sm:px-8 lg:px-16 py-6 max-w-[1400px] mx-auto w-full left-1/2 -translate-x-1/2">
          <nav className="flex items-center gap-2 text-xs font-bold text-white/60 uppercase tracking-widest flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <HiChevronRight className="text-white/40 shrink-0" />
            <Link
              href={`/categories?category=${article.categoryId || article.category.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-white transition-colors"
            >
              {article.category}
            </Link>
            <HiChevronRight className="text-white/40 shrink-0" />
            <span className="text-white/80 truncate max-w-[200px] sm:max-w-xs">{article.title}</span>
          </nav>

          {/* Title */}
          <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-40 drop-shadow-lg">
            {article.title}
          </h1>
        </div>
      </div>

      {/* ── Main Content Container ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Main Article Content (Left Column) */}
          <article className="lg:col-span-8">

            {/* Content Body */}
            <div className="prose prose-lg max-w-none prose-emerald text-gray-800">
              <ArticleContent content={article.content} />
            </div>

            {/* FAQs Section */}
            {article.faqs && article.faqs.length > 0 && (
              <section id="faqs" className="mt-20 pt-12 border-t border-gray-200 scroll-mt-28">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1 block">
                      Got Questions?
                    </span>
                    <h2 className="font-heading text-3xl font-bold text-gray-900">
                      Frequently Asked Questions ({article.faqs.length})
                    </h2>
                  </div>

                  {/* FAQ Filter input */}
                  <div className="relative w-full sm:w-72">
                    <HiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                    <input
                      type="text"
                      placeholder="Search FAQs..."
                      value={faqQuery}
                      onChange={(e) => setFaqQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredFaqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div
                        key={index}
                        className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? "border-primary/40 shadow-md ring-1 ring-primary/10" : "border-gray-200/80 hover:border-gray-300"
                          }`}
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full text-left p-5 flex items-center justify-between gap-4 hover:text-primary transition-colors"
                        >
                          <h3 className="font-bold text-gray-900 text-base sm:text-lg m-0">
                            {faq.q}
                          </h3>
                          {isOpen ? (
                            <HiChevronUp className="text-primary text-xl shrink-0" />
                          ) : (
                            <HiChevronDown className="text-gray-400 text-xl shrink-0" />
                          )}
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-6 pt-1 border-t border-gray-50 bg-gray-50/50">
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base m-0">
                              {faq.a}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {filteredFaqs.length === 0 && (
                    <div className="text-center py-10 bg-white rounded-2xl border border-gray-100 text-gray-500">
                      No FAQs found matching &quot;{faqQuery}&quot;.
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Author Bio Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-sm mt-16 flex flex-col sm:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 shrink-0 relative border-2 border-primary/20 shadow-md">
                <Image src={article.authorImg} alt={article.author} fill className="object-cover" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <span className="block text-xl font-bold text-gray-900 mb-2">
                  {article.author}
                </span>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Dedicated editorial team and scholars providing authentic, accessible Islamic knowledge based on authentic Quranic and Prophetic sources.
                </p>
              </div>
            </div>

          </article>

          {/* Sidebar (Right Column) */}
          <aside className="lg:col-span-4 space-y-8 h-fit lg:sticky lg:top-28">

            {/* Related Articles */}
            <div className="bg-white rounded-3xl border border-gray-200/80 p-6 shadow-sm">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                Related Articles
              </h2>
              <div className="space-y-4">
                {finalRelatedArticles.map((rel) => (
                  <Link
                    key={rel.id}
                    href={getArticleUrl(rel)}
                    className="group block p-3 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                  >
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">
                      {rel.category}
                    </span>
                    <h3 className="font-heading font-bold text-gray-900 text-sm group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2">{rel.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
