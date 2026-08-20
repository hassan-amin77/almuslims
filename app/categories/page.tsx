"use client";

import React, { useState, useMemo, useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaFilter,
  FaCheckCircle,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaPaperPlane,
  FaTimes,
  FaShareAlt,
  FaCheck
} from "react-icons/fa";
import { articles, Article, categoriesMeta, popularTopics, getArticleUrl } from "@/data/articles";
import {
  PremiumIslamicIcon,
  QuranIcon,
  DuasIcon,
  SeerahIcon,
  NamesOfAllahIcon,
} from "@/components/ui/IslamicIcons";
import { BreadcrumbJsonLd, CategoriesItemListJsonLd } from "@/components/seo/JsonLd";

// ─── Custom Select Dropdown ──────────────────────────────────────────────────
interface DropdownOption {
  value: string;
  label: string;
}

function FilterDropdown({
  value,
  options,
  onChange,
  labelPrefix = ""
}: {
  value: string;
  options: DropdownOption[];
  onChange: (val: string) => void;
  labelPrefix?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value) ?? options[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative inline-block text-left w-full sm:w-auto">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full sm:w-auto flex items-center justify-between sm:justify-start gap-2.5 bg-white border rounded-xl py-2.5 px-4 text-xs font-semibold cursor-pointer transition-all ${open ? "border-primary ring-2 ring-primary/10 text-primary shadow-sm" : "border-gray-200 text-gray-700 hover:border-gray-300"
          }`}
      >
        <span className="text-gray-500 font-normal">{labelPrefix}</span>
        <span className="font-semibold text-gray-800">{selected.label}</span>
        <FaChevronDown className={`text-[10px] text-gray-400 transition-transform duration-200 ${open ? "rotate-180 text-primary" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 sm:left-0 top-[calc(100%+6px)] z-40 w-48 bg-white rounded-xl border border-gray-100 shadow-xl py-1.5 overflow-hidden"
          >
            {options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-2 text-xs font-medium text-left transition-colors cursor-pointer ${opt.value === value
                  ? "bg-primary/5 text-primary font-bold"
                  : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                  }`}
              >
                <span>{opt.label}</span>
                {opt.value === value && <FaCheck className="text-[10px] text-primary" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Categories Page Content ──────────────────────────────────────────
function CategoriesPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialTopic = searchParams.get("topic") || "";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedTopic, setSelectedTopic] = useState(initialTopic);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [sortBy, setSortBy] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [footerEmail, setFooterEmail] = useState("");
  const [footerEmailSuccess, setFooterEmailSuccess] = useState(false);

  const articleSectionRef = useRef<HTMLDivElement>(null);
  const ARTICLES_PER_PAGE = 6;

  // Dynamic category list with real article counts
  const dynamicCategories = useMemo(() => {
    return categoriesMeta.map((cat) => {
      const count =
        cat.id === "all"
          ? articles.length
          : articles.filter(
            (a) => a.categoryId.toLowerCase() === cat.id.toLowerCase()
          ).length;
      return { ...cat, count };
    });
  }, []);

  // Dynamic topic list with real article counts
  const dynamicTopics = useMemo(() => {
    return popularTopics.map((topic) => {
      const count = articles.filter(
        (a) =>
          (a.topics && a.topics.some((t) => t.toLowerCase() === topic.name.toLowerCase())) ||
          a.category.toLowerCase() === topic.name.toLowerCase() ||
          a.categoryId.toLowerCase() === topic.categoryId.toLowerCase()
      ).length;
      return { ...topic, count: Math.max(count, 1) };
    });
  }, []);

  // Sync category param from URL
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && cat !== activeCategory) {
      setActiveCategory(cat);
      setCurrentPage(1);
    }
  }, [searchParams]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Find Featured Article (strictly from active category if category is selected)
  const featuredArticle = useMemo(() => {
    if (activeCategory === "all") {
      return articles.find((a) => a.isFeatured) || articles[0];
    }
    return (
      articles.find((a) => a.categoryId.toLowerCase() === activeCategory.toLowerCase() && a.isFeatured) ||
      articles.find((a) => a.categoryId.toLowerCase() === activeCategory.toLowerCase()) ||
      null
    );
  }, [activeCategory]);

  // Filter and sort articles
  const filteredArticles = useMemo(() => {
    let list = articles.filter((article) => {
      const matchCat =
        activeCategory === "all" ||
        article.categoryId.toLowerCase() === activeCategory.toLowerCase();

      const matchSearch =
        !searchQuery ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchLevel =
        selectedLevel === "all" ||
        article.level.toLowerCase() === selectedLevel.toLowerCase();

      const matchTopic =
        !selectedTopic ||
        (article.topics &&
          article.topics.some((t) =>
            t.toLowerCase().includes(selectedTopic.toLowerCase())
          )) ||
        article.title.toLowerCase().includes(selectedTopic.toLowerCase()) ||
        article.category.toLowerCase().includes(selectedTopic.toLowerCase());

      return matchCat && matchSearch && matchLevel && matchTopic;
    });

    if (sortBy === "latest") {
      list = [...list].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (sortBy === "oldest") {
      list = [...list].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    } else if (sortBy === "alphabetical") {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    }

    return list;
  }, [activeCategory, searchQuery, selectedLevel, selectedTopic, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE));
  const currentArticles = useMemo(() => {
    const start = (currentPage - 1) * ARTICLES_PER_PAGE;
    return filteredArticles.slice(start, start + ARTICLES_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const handleCategorySelect = (categoryId: string) => {
    setActiveCategory(categoryId);
    setSelectedTopic("");
    setCurrentPage(1);
    router.push(`/categories?category=${categoryId}`, { scroll: false });
  };

  const handleTopicSelect = (topicName: string) => {
    if (selectedTopic === topicName) {
      setSelectedTopic("");
    } else {
      setSelectedTopic(topicName);
      setCurrentPage(1);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (articleSectionRef.current) {
      articleSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleFooterEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (footerEmail) {
      setFooterEmailSuccess(true);
      showToast("JazakAllah Khair! Welcome to the AlMuslims knowledge circle.");
      setTimeout(() => {
        setFooterEmail("");
        setFooterEmailSuccess(false);
      }, 4000);
    }
  };

  const levelOptions: DropdownOption[] = [
    { value: "all", label: "All Levels" },
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" }
  ];

  const sortOptions: DropdownOption[] = [
    { value: "latest", label: "Latest" },
    { value: "oldest", label: "Oldest" },
    { value: "alphabetical", label: "Alphabetical (A-Z)" }
  ];

  const breadcrumbs = [
    { name: "Home", url: "https://almuslims.com" },
    { name: "Categories", url: "https://almuslims.com/categories" },
    ...(activeCategory !== "all" ? [{ name: activeCategory.toUpperCase(), url: `https://almuslims.com/categories?category=${activeCategory}` }] : [])
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen font-body text-gray-800 pb-16">
      <BreadcrumbJsonLd items={breadcrumbs} />
      <CategoriesItemListJsonLd categories={dynamicCategories} />

      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 bg-[#0A3A2F] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-secondary/30 text-xs font-semibold"
          >
            <FaCheckCircle className="text-secondary text-sm" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative w-full bg-linear-to-b from-[#F3ECE0]/80 via-[#FAF7F2] to-[#FAF7F2] border-b border-stone-200/60 pt-8 pb-10 overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 lg:w-5/12 pointer-events-none hidden md:block select-none overflow-hidden z-0">
          <div className="relative w-full h-full opacity-35 mix-blend-multiply [mask-image:linear-gradient(to_left,black_40%,transparent_100%)]">
            <Image
              src="/assets/categories-hero.webp"
              alt="Category Header Background"
              fill
              className="object-cover object-right-center"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-[#FAF7F2] via-[#FAF7F2]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-linear-to-t from-[#FAF7F2] via-transparent to-[#F3ECE0]/40 pointer-events-none" />
        </div>

        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-3">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="text-gray-300">›</span>
            <Link href="/categories" className="text-secondary font-bold hover:underline">Categories</Link>
            {activeCategory !== "all" && (
              <>
                <span className="text-gray-300">›</span>
                <span className="text-primary font-bold capitalize">{activeCategory}</span>
              </>
            )}
          </nav>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary tracking-tight leading-tight">
                {activeCategory === "all" ? "Explore Categories" : activeCategory.toUpperCase()}
              </h1>
              <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Authentic scholarly knowledge from the Quran, Sunnah, Seerah and scholars on every aspect of Islamic life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex items-center justify-between gap-2 mb-3 px-1">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Featured Streams</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {dynamicCategories
            .filter((cat) => ["quran", "duas"].includes(cat.id.toLowerCase()))
            .map((cat) => {
              const isSelected = activeCategory.toLowerCase() === cat.id.toLowerCase();
              return (
                <Link
                  key={cat.id}
                  href={cat.href || `/categories?category=${cat.id}`}
                  className={`flex flex-col justify-between p-4.5 rounded-2xl border transition-all duration-300 cursor-pointer text-left group ${isSelected
                    ? "bg-[#0A3A2F] text-white border-[#0A3A2F] shadow-lg shadow-emerald-950/15 scale-[1.02]"
                    : "bg-white text-gray-700 border-gray-100/90 hover:border-amber-700/20 hover:shadow-md hover:-translate-y-0.5"
                    }`}
                >
                  <div className="flex items-center justify-between mb-3 w-full">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${isSelected
                        ? "bg-white/15 text-white"
                        : "bg-[#FAF7F2]"
                        }`}
                    >
                      <PremiumIslamicIcon
                        type={cat.iconType}
                        className="w-6 h-6"
                        primaryColor={isSelected ? "#FFFFFF" : "#0A3A2F"}
                        secondaryColor={isSelected ? "#E89E54" : "#D48C46"}
                      />
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                    )}
                  </div>

                  <div>
                    <h2 className={`text-base font-bold tracking-tight transition-colors ${isSelected ? "text-white" : "text-gray-800 group-hover:text-primary"
                      }`}>
                      {cat.name}
                    </h2>
                    <p className={`text-xs font-medium mt-0.5 ${isSelected ? "text-emerald-100/80" : "text-gray-400"
                      }`}>
                      {cat.count} {cat.count === 1 ? "Article" : "Articles"}
                    </p>
                  </div>
                </Link>
              );
            })}
        </div>
      </section>

      <section className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 mt-5">
        <div className="bg-white rounded-2xl p-3 sm:p-4 border border-gray-100 shadow-sm">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search articles, topics or keywords..."
              className="w-full bg-[#FAF7F2] border border-transparent focus:border-primary focus:bg-white rounded-xl pl-10 pr-9 py-2.5 text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 text-xs cursor-pointer"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>
      </section>

      <div ref={articleSectionRef} className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          <div className="lg:col-span-8 space-y-8">
            {featuredArticle && currentPage === 1 && !searchQuery && !selectedTopic && (
              <div className="space-y-3">
                <div className="flex items-center justify-between px-1">
                  <h2 className="text-lg font-heading font-bold text-gray-900">Featured Article</h2>
                  <span className="text-xs text-secondary font-bold tracking-widest uppercase">Editor's Pick</span>
                </div>
                <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
                  <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
                    <div className="md:col-span-6 relative min-h-[260px] md:min-h-[340px] bg-gray-100 overflow-hidden">
                      <Image
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent md:hidden" />
                      <span className="absolute top-4 left-4 bg-secondary text-white text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md">
                        FEATURED
                      </span>
                    </div>
                    <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <span className="text-[10px] font-extrabold text-secondary tracking-widest uppercase">
                            {featuredArticle.category}
                          </span>
                          <span className="text-[11px] font-semibold text-gray-400">
                            {featuredArticle.readTime}
                          </span>
                        </div>

                        <Link href={getArticleUrl(featuredArticle)}>
                          <h3 className="font-heading font-bold text-gray-900 text-xl sm:text-2xl leading-tight group-hover:text-primary transition-colors">
                            {featuredArticle.title}
                          </h3>
                        </Link>

                        <p className="mt-3 text-xs sm:text-sm text-gray-500 line-clamp-3 leading-relaxed font-normal">
                          {featuredArticle.excerpt}
                        </p>
                      </div>

                      <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative w-9 h-9 rounded-full bg-gray-200 overflow-hidden ring-2 ring-emerald-50">
                            <Image
                              src={featuredArticle.authorImg}
                              alt={featuredArticle.author}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-bold text-gray-800">
                                {featuredArticle.author}
                              </span>
                              {featuredArticle.isVerified && (
                                <FaCheckCircle className="text-blue-500 text-[10px]" title="Verified Scholar" />
                              )}
                            </div>
                            <span className="text-[11px] text-gray-400">
                              {featuredArticle.displayDate}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Link
                            href={getArticleUrl(featuredArticle)}
                            className="px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full hover:bg-primaryHover transition-colors"
                          >
                            Read Article
                          </Link>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            )}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-1">
                <div>
                  <h2 className="text-lg sm:text-xl font-heading font-bold text-gray-900">
                    {searchQuery
                      ? `Search results for "${searchQuery}"`
                      : selectedTopic
                        ? `Articles on #${selectedTopic}`
                        : activeCategory !== "all"
                          ? `${activeCategory.toUpperCase()} Articles`
                          : "All Islamic Knowledge Articles"}
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Showing {currentArticles.length} of {filteredArticles.length} articles
                  </p>
                </div>

                <Link
                  href="/categories"
                  className="text-xs font-bold text-secondary hover:text-primary transition-colors flex items-center gap-1.5 group"
                >
                  <span>View All Articles</span>
                  <FaArrowRight className="text-[10px] group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {currentArticles.length === 0 ? (
                <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-amber-50 text-secondary rounded-2xl flex items-center justify-center mx-auto text-xl">
                    <FaSearch />
                  </div>
                  <h3 className="text-base font-bold text-gray-800">No articles found</h3>
                  <p className="text-xs text-gray-500 max-w-sm mx-auto">
                    We couldn't find any articles matching your search criteria. Try switching categories or clearing active filters.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory("all");
                      setSearchQuery("");
                      setSelectedTopic("");
                      setSelectedLevel("all");
                    }}
                    className="px-5 py-2 bg-primary text-white text-xs font-bold rounded-full hover:bg-primaryHover transition-colors cursor-pointer"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {currentArticles.map((article) => {
                    return (
                      <div
                        key={article.id}
                        className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
                      >
                        {/* Thumbnail */}
                        <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />

                          {/* Category Tag */}
                          <span className="absolute top-3 left-3 bg-[#0A3A2F]/90 backdrop-blur-xs text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                            {article.category}
                          </span>
                        </div>

                        {/* Body */}
                        <div className="p-5 flex flex-col flex-1 justify-between">
                          <div>
                            <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                              <span className="text-secondary">{article.level}</span>
                              <span>{article.readTime}</span>
                            </div>

                            <Link href={getArticleUrl(article)}>
                              <h3 className="font-heading font-bold text-gray-900 text-base leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                                {article.title}
                              </h3>
                            </Link>

                            <p className="mt-2 text-xs text-gray-500 line-clamp-2 leading-relaxed font-normal">
                              {article.excerpt}
                            </p>
                          </div>

                          {/* Author & Date Footer */}
                          <div className="mt-5 pt-4 border-t border-gray-50 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <div className="relative w-7 h-7 rounded-full bg-gray-200 overflow-hidden shrink-0">
                                <Image
                                  src={article.authorImg}
                                  alt={article.author}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[11px] font-bold text-gray-800 line-clamp-1">
                                  {article.author}
                                </span>
                              </div>
                            </div>
                            <span className="text-[10px] text-gray-400 font-medium">
                              {article.displayDate}
                            </span>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              )}

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 pt-6">
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="w-9 h-9 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-xs font-bold text-gray-600 hover:border-primary hover:text-primary disabled:opacity-30 disabled:pointer-events-none cursor-pointer transition-colors"
                  >
                    <FaChevronLeft className="text-[10px]" />
                  </button>

                  {Array.from({ length: totalPages }).map((_, idx) => {
                    const pageNum = idx + 1;
                    const isActive = pageNum === currentPage;
                    return (
                      <button
                        key={pageNum}
                        type="button"
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${isActive
                          ? "bg-primary text-white shadow-md shadow-emerald-950/15 scale-105"
                          : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                          }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="w-9 h-9 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-xs font-bold text-gray-600 hover:border-primary hover:text-primary disabled:opacity-30 disabled:pointer-events-none cursor-pointer transition-colors"
                  >
                    <FaChevronRight className="text-[10px]" />
                  </button>
                </div>
              )}
            </div>

          </div>

          <div className="lg:col-span-4 space-y-6">

            <div className="relative overflow-hidden bg-linear-to-br from-[#063327] via-[#0A3A2F] to-[#04241B] rounded-3xl p-6 text-white shadow-lg border border-emerald-800/40">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold tracking-widest text-secondary uppercase bg-white/10 px-2.5 py-1 rounded-full">
                  Daily Reminder
                </span>
              </div>

              <div className="my-6 text-center py-2">
                <p className="font-heading italic text-lg sm:text-xl font-bold leading-relaxed text-amber-100">
                  “So remember Me; I will remember you.”
                </p>
                <span className="block text-xs font-semibold text-white/60 mt-3 uppercase tracking-widest">
                  — Qur'an 2:152
                </span>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                <Link
                  href="/dua-collection"
                  className="text-secondary hover:underline font-bold text-xs flex items-center gap-1"
                >
                  <span>Read Duas & Azkar</span>
                  <FaArrowRight className="text-[9px]" />
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    if (navigator.clipboard) {
                      navigator.clipboard.writeText("“So remember Me; I will remember you.” — Qur'an 2:152");
                      showToast("Copied verse to clipboard!");
                    }
                  }}
                  className="hover:text-white transition-colors cursor-pointer p-1"
                  title="Share Verse"
                >
                  <FaShareAlt className="text-xs" />
                </button>
              </div>
            </div>


          </div>

        </div>
      </div>


    </div>
  );
}

export default function CategoriesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-3 border-primary border-t-transparent rounded-full animate-spin" />
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              Loading Categories Hub...
            </span>
          </div>
        </div>
      }
    >
      <CategoriesPageContent />
    </Suspense>
  );
}
