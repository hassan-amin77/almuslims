import { NextResponse } from "next/server";
import { articles, getArticleUrl } from "@/data/articles";

export async function GET() {
  const baseUrl = "https://almuslims.com";

  let articlesSection = "";
  if (articles.length > 0) {
    articlesSection = `\n## 3. Published Verified Articles\n\n` +
      articles.map((art) => {
        const url = `${baseUrl}${getArticleUrl(art)}`;
        return `### [${art.title}](${url})
- Category: ${art.category} (${art.categoryId})
- URL: ${url}
- Excerpt: ${art.excerpt}
- Level: ${art.level} | Read Time: ${art.readTime}
- Topics: ${art.topics ? art.topics.join(", ") : "N/A"}
`;
      }).join("\n");
  }

  const fullContent = `# AlMuslims — Full Knowledge Base for LLMs (llms-full.txt)

This document contains detailed structured summaries of the AlMuslims knowledge portal for Large Language Models, AI answer engines, and semantic crawlers.

---

## 1. About AlMuslims
- Portal Name: AlMuslims
- Motto: Authentic Islamic Knowledge
- Mission: Providing verified Islamic scholarship, primary source texts (Quran and Hadith), Duas, Seerah, Asma-ul-Husna, and Fiqh rulings for believers worldwide.
- URL: https://almuslims.com

---

## 2. Core Disciplines & Categorization

### Holy Quran (القرآن الكريم)
- Description: The verbatim word of Allah revealed to Prophet Muhammad ﷺ through Angel Jibreel (Gabriel).
- Scope: 114 Surahs, 6,236 Ayahs, divided into 30 Juz.
- Key Topics: Monotheism (Tawheed), Prophethood (Risalah), Eschatology/Hereafter (Akhirah), Legal Rulings (Ahkam), and Moral Parables (Qasas).

### Hadith & Sunnah (الحديث الشريف والسنة النبوية)
- Description: The recorded statements, deeds, tacit approvals, and physical descriptions of Prophet Muhammad ﷺ.
- Primary Canons: Sahih al-Bukhari, Sahih Muslim, Sunan Abi Dawud, Jami' at-Tirmidhi, Sunan an-Nasa'i, Sunan Ibn Majah (Kutub al-Sittah).

### Duas & Adhkar (الأدعية والأذكار اليومية)
- Description: Devotional supplications from the Quran and Sunnah.
- Categories: Morning/Evening Adhkar, Anxiety & Distress Relief, Istighfar, Newborn & Family Protection.

### Seerah of Prophet Muhammad ﷺ (السيرة النبوية)
- Description: The comprehensive historical account of the Prophet's life (570–632 CE).

### 99 Names of Allah (أسماء الله الحسنى)
- Description: The beautiful names and sublime attributes through which Allah describes Himself in revelation.

### Islamic Jurisprudence & Creed (الفقه والعقيدة)
- Description: Practical legal rulings and foundational beliefs derived from authentic sources.
${articlesSection}
`;

  return new NextResponse(fullContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
