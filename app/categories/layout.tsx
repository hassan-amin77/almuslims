import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Categories — AlMuslims",
  description:
    "Browse authentic Islamic knowledge by categories including Quran, Hadith, Duas & Azkar, Seerah, Aqeedah, Fiqh, and 99 Names of Allah.",
  alternates: {
    canonical: "/categories",
  },
  openGraph: {
    title: "Explore Categories — AlMuslims",
    description:
      "Browse authentic Islamic knowledge by categories including Quran, Hadith, Duas & Azkar, Seerah, Aqeedah, Fiqh, and 99 Names of Allah.",
    url: "/categories",
  },
  twitter: {
    title: "Explore Categories — AlMuslims",
    description:
      "Browse authentic Islamic knowledge by categories including Quran, Hadith, Duas & Azkar, Seerah, Aqeedah, Fiqh, and 99 Names of Allah.",
  },
};

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
