export interface FAQItem {
  q: string;
  a: string;
}

export interface TOCItem {
  title: string;
  id: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  category: string;
  categoryId: string;
  excerpt: string;
  content: string;
  author: string;
  authorImg: string;
  authorRole?: string;
  isVerified?: boolean;
  date: string;
  displayDate: string;
  readTime: string;
  image: string;
  color?: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  isFeatured?: boolean;
  topics?: string[];
  tableOfContents?: TOCItem[];
  faqs?: FAQItem[];
}

export interface CategoryInfo {
  id: string;
  name: string;
  slug: string;
  count: number;
  description: string;
  href: string;
  iconType: "all" | "quran" | "hadith" | "seerah" | "aqeedah" | "fiqh" | "duas" | "names-of-allah" | "lifestyle" | "general";
}

export const categoriesMeta: CategoryInfo[] = [
  {
    id: "all",
    name: "All Categories",
    slug: "all",
    count: 22,
    description: "Browse all authentic Islamic knowledge and guides",
    href: "/categories",
    iconType: "all"
  },
  {
    id: "quran",
    name: "Quran",
    slug: "quran",
    count: 4,
    description: "Tafsir, recitation rules, and Surah insights",
    href: "/holy-quran",
    iconType: "quran"
  },
  {
    id: "hadith",
    name: "Hadith",
    slug: "hadith",
    count: 3,
    description: "Prophetic traditions, authentic narrations & explanations",
    href: "/categories?category=hadith",
    iconType: "hadith"
  },
  {
    id: "seerah",
    name: "Seerah",
    slug: "seerah",
    count: 3,
    description: "Life and times of Prophet Muhammad ﷺ",
    href: "/seerah",
    iconType: "seerah"
  },
  {
    id: "aqeedah",
    name: "Aqeedah",
    slug: "aqeedah",
    count: 3,
    description: "Foundations of Islamic creed, Tawheed & theology",
    href: "/categories?category=aqeedah",
    iconType: "aqeedah"
  },
  {
    id: "fiqh",
    name: "Fiqh",
    slug: "fiqh",
    count: 3,
    description: "Islamic jurisprudence, rulings and everyday guidance",
    href: "/categories?category=fiqh",
    iconType: "fiqh"
  },
  {
    id: "duas",
    name: "Duas",
    slug: "duas",
    count: 3,
    description: "Authentic supplications, Adhkar and morning/evening prayers",
    href: "/dua-collection",
    iconType: "duas"
  },
  {
    id: "names-of-allah",
    name: "99 Names",
    slug: "names-of-allah",
    count: 2,
    description: "Discover the Divine Names of Allah & their meanings",
    href: "/names-of-allah",
    iconType: "names-of-allah"
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    slug: "lifestyle",
    count: 2,
    description: "Islamic morals, family life, work ethics and wellness",
    href: "/categories?category=lifestyle",
    iconType: "lifestyle"
  },
  {
    id: "general",
    name: "General",
    slug: "general",
    count: 2,
    description: "Articles, reflections, stories and knowledge",
    href: "/categories?category=general",
    iconType: "general"
  }
];

export const popularTopics = [
  { name: "Tawheed", count: 3, categoryId: "aqeedah" },
  { name: "Prayer", count: 3, categoryId: "fiqh" },
  { name: "Tafsir", count: 4, categoryId: "quran" },
  { name: "Sunnah", count: 3, categoryId: "hadith" },
  { name: "Adhkar", count: 3, categoryId: "duas" },
  { name: "Madinah", count: 3, categoryId: "seerah" },
  { name: "Asma-ul-Husna", count: 2, categoryId: "names-of-allah" },
  { name: "Family", count: 2, categoryId: "lifestyle" }
];

export function getArticleCategoryPath(categoryOrId: string): string {
  const cat = (categoryOrId || '').toLowerCase().trim();
  if (cat === "quran" || cat === "holy-quran") return "quran";
  return cat;
}

export function getArticleUrl(article: Article): string {
  const categoryPath = getArticleCategoryPath(article.categoryId || article.category);
  return `/${categoryPath}/${article.slug}`;
}

export const articles: Article[] = [
  // ─── QURAN ───
  {
    id: "9",
    slug: "what-is-the-quran",
    title: "What Is the Quran? A Complete Guide to Islam's Holy Book",
    metaTitle: "What Is the Quran? Meaning, History & Importance",
    metaDescription: "Learn what the Quran is, how it was revealed, preserved, structured, and used in Muslim life. Explore its history, teachings, translations, and significance in one comprehensive guide.",
    category: "Quran",
    categoryId: "quran",
    excerpt: "Learn what the Quran is, how it was revealed to Prophet Muhammad ﷺ, preserved through oral memorization, and structured into 114 Surahs for daily life.",
    content: `
      <div class="space-y-10">
        <section id="quick-answer" class="scroll-mt-16">
          <p class="text-lg text-gray-700 leading-relaxed mb-4">
            The Quran is the central religious text of Islam. Muslims hold it to be the literal, unaltered word of God (Allah), revealed in Arabic to the Prophet Muhammad ﷺ between 610 and 632 CE through the angel Gabriel (Jibril). It consists of 114 chapters (surahs) and approximately 6,236 verses (ayat), totaling roughly 77,000–78,000 words in the original Arabic.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            The Quran functions as the primary source of Islamic theology, law, and daily practice. It is recited as an act of worship, not simply read as reference material.
          </p>
        </section>
        <section id="quick-facts" class="scroll-mt-28">
          <h2 class="text-2xl sm:text-3xl font-bold text-primary font-heading mb-6">Quick Facts</h2>
          <div class="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-sm bg-white">
            <table class="w-full text-left text-sm text-gray-700 border-collapse">
              <tbody class="divide-y divide-gray-100">
                <tr><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Chapters (surahs)</td><td class="p-4">114</td></tr>
                <tr class="bg-gray-50/50"><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Verses (ayat)</td><td class="p-4">~6,236</td></tr>
                <tr><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Revelation period</td><td class="p-4">610–632 CE (23 years)</td></tr>
                <tr class="bg-gray-50/50"><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Original language</td><td class="p-4">Classical Arabic</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    `,
    author: "Shaykh Yasir Qadhi",
    authorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    authorRole: "Islamic Scholar & Theologian",
    isVerified: true,
    date: "2026-06-15",
    displayDate: "June 15, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800",
    color: "#0A3A2F",
    level: "Beginner",
    isFeatured: true,
    topics: ["Quran", "Tafsir", "Revelation"]
  },
  {
    id: "1",
    slug: "lessons-from-surah-al-kahf",
    title: "Lessons from Surah Al-Kahf for Our Daily Lives",
    category: "Quran",
    categoryId: "quran",
    excerpt: "Discover timeless lessons from the 4 major trials in Surah Al-Kahf (Faith, Wealth, Knowledge, and Power) that guide our daily decisions and protect us from fitnah.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 mb-6">
        Surah Al-Kahf is the 18th chapter of the Holy Quran, which the Prophet Muhammad ﷺ recommended Muslims to recite every Friday. It contains four powerful stories that offer eternal lessons for navigating the tests of modern life.
      </p>
      <h2 class="text-2xl font-bold text-primary mt-8 mb-4">1. The People of the Cave (The Trial of Faith)</h2>
      <p class="mb-6">
        The story of the young believers who fled their pagan kingdom to preserve their faith. Allah granted them refuge in a cave and put them to sleep for over 300 years. This story teaches us the value of companionship in faith and that Allah is the ultimate protector.
      </p>
      <h2 class="text-2xl font-bold text-primary mt-8 mb-4">2. The Owner of the Two Gardens (The Trial of Wealth)</h2>
      <p class="mb-6">
        A tale of two men: one blessed with immense wealth and beautiful gardens who became proud, and another who possessed little but remained grateful. This reminds us that wealth is a test of gratitude.
      </p>
    `,
    author: "Dr. Omar Suleiman",
    authorImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    authorRole: "Founder, Yaqeen Institute",
    isVerified: true,
    date: "2026-06-12",
    displayDate: "June 12, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800",
    color: "#0A3A2F",
    level: "Beginner",
    topics: ["Quran", "Tafsir", "Reflection"]
  },
  {
    id: "2",
    slug: "understanding-tafsir-methodology",
    title: "Understanding Tafsir: Classical vs. Modern Methodologies",
    category: "Quran",
    categoryId: "quran",
    excerpt: "An in-depth guide to the foundational sciences of Quranic exegesis (Tafsir), explaining differences between traditional tradition-based commentary and modern thematic study.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 mb-6">
        Tafsir literally means "explanation" or "clarification." In Islamic scholarship, it is the systematic study aimed at understanding the Quranic text and uncovering the wisdom behind its revelation.
      </p>
      <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Classical Methodologies</h2>
      <p class="mb-4">
        Classical Tafsir is divided into <em>Tafsir bi'l-Ma'thur</em> (tradition-based, relying on Quran, Hadith, and Sahaba narrations) and <em>Tafsir bi'r-Ra'y</em> (linguistic analysis alongside transmitted reports).
      </p>
    `,
    author: "Mufti Ismail Menk",
    authorImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    authorRole: "Grand Mufti & Scholar",
    isVerified: true,
    date: "2026-06-10",
    displayDate: "June 10, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1590076175582-459437ff7087?q=80&w=800",
    color: "#1F9E77",
    level: "Advanced",
    topics: ["Quran", "Tafsir", "Methodology"]
  },
  {
    id: "10",
    slug: "the-miracle-of-quranic-eloquence",
    title: "The Inimitability (I'jaz) and Eloquence of the Holy Quran",
    category: "Quran",
    categoryId: "quran",
    excerpt: "Exploring the linguistic precision, rhetorical beauty, and structural harmony that challenged and captivated the master poets of 7th-century Arabia.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 mb-6">
        The Quran challenged the greatest poets of pre-Islamic Arabia to produce a single chapter like it (Surah Al-Baqarah 2:23). Its unique meter, rhythm, and semantic depth remains unmatched in Arabic literature.
      </p>
      <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Linguistic Precision</h2>
      <p class="mb-4">
        Every word, vowel, and grammatical construction in the Quran is positioned with divine intent, conveying layers of legal, spiritual, and theological meaning simultaneously.
      </p>
    `,
    author: "Ustadh Nouman Ali Khan",
    authorImg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200",
    authorRole: "CEO, Bayyinah Institute",
    isVerified: true,
    date: "2026-06-08",
    displayDate: "June 8, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?q=80&w=800",
    color: "#0A3A2F",
    level: "Intermediate",
    topics: ["Quran", "Arabic", "Eloquence"]
  },

  // ─── HADITH ───
  {
    id: "3",
    slug: "preserving-the-prophetic-legacy",
    title: "Preserving the Legacy: The Compilation and Science of Hadith",
    category: "Hadith",
    categoryId: "hadith",
    excerpt: "Discover the rigorous criteria and historic efforts made by early scholars like Imam Bukhari and Muslim to document, verify, and authenticate prophetic narrations.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 mb-6">
        After the Quran, the Sunnah represents the second source of Islamic legislation and guidance. Early scholars established the science of biographical evaluation (Ilm al-Rijal) to ensure no fabrication entered the prophetic tradition.
      </p>
      <h2 class="text-2xl font-bold text-primary mt-8 mb-4">The Criteria of Sahih Hadith</h2>
      <p class="mb-4">
        A narration must satisfy five stringent conditions: continuous chain of narrators (Ittisal al-Sanad), righteous character (Adalah), retentive memory (Dabt), absence of irregularity (Shudhudh), and freedom from subtle defects (Illah).
      </p>
    `,
    author: "Shaykh Assim Al-Hakeem",
    authorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    authorRole: "Islamic Jurist & Lecturer",
    isVerified: true,
    date: "2026-06-05",
    displayDate: "June 5, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=800",
    color: "#115E59",
    level: "Intermediate",
    isFeatured: true,
    topics: ["Hadith", "Sunnah", "Bukhari"]
  },
  {
    id: "11",
    slug: "the-importance-of-sunnah-in-our-life",
    title: "The Authority and Importance of the Sunnah in Daily Life",
    category: "Hadith",
    categoryId: "hadith",
    excerpt: "How the authentic Prophetic tradition serves as the practical implementation of Quranic revelation and shapes moral character.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 mb-6">
        The Quran commands believers: "Whoever obeys the Messenger has indeed obeyed Allah" (4:80). The Sunnah provides practical details for prayer, zakat, manners, and communal life.
      </p>
    `,
    author: "Dr. Bilal Philips",
    authorImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    authorRole: "Founder, Islamic Online University",
    isVerified: true,
    date: "2026-05-29",
    displayDate: "May 29, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1590076175582-459437ff7087?q=80&w=800",
    color: "#115E59",
    level: "Beginner",
    topics: ["Hadith", "Sunnah", "Ethics"]
  },
  {
    id: "12",
    slug: "understanding-the-40-hadith-nawawi",
    title: "Essential Lessons from Imam An-Nawawi's 40 Hadith",
    category: "Hadith",
    categoryId: "hadith",
    excerpt: "A comprehensive summary of the core principles of faith, sincere intentions, ethics, and jurisprudence encapsulated in An-Nawawi's famous collection.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 mb-6">
        Imam Yahya ibn Sharaf an-Nawawi compiled 42 comprehensive traditions that scholars consider the foundational pillars of the Islamic religion.
      </p>
    `,
    author: "Shaykh Abu Bakr Zoud",
    authorImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    authorRole: "Senior Hadith Lecturer",
    isVerified: true,
    date: "2026-05-22",
    displayDate: "May 22, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800",
    color: "#115E59",
    level: "Intermediate",
    topics: ["Hadith", "Nawawi", "Faith"]
  },

  // ─── SEERAH ───
  {
    id: "5",
    slug: "migration-to-madinah-turning-point",
    title: "The Migration to Madinah: Strategic Turning Point in History",
    category: "Seerah",
    categoryId: "seerah",
    excerpt: "The event that changed the course of Islamic history forever: the Hijrah from Mecca, the brotherhood between Muhajirun and Ansar, and the Madinah state.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 mb-6">
        The Hijrah (Migration) of Prophet Muhammad ﷺ and his companions from Mecca to Yathrib (Madinah) marks the beginning of the Islamic calendar and the establishment of the first Islamic commonwealth.
      </p>
      <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Establishing the New Society</h2>
      <p class="mb-4">
        Upon arriving in Madinah, the Prophet ﷺ instituted the bond of brotherhood (Mu'akhah), constructed the Prophetic Mosque, and drafted the Constitution of Madinah, securing civil and religious rights for all citizens.
      </p>
    `,
    author: "Dr. Yasir Qadhi",
    authorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    authorRole: "Author of The Sirah of the Prophet",
    isVerified: true,
    date: "2026-05-17",
    displayDate: "May 17, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800",
    color: "#065F46",
    level: "Intermediate",
    isFeatured: true,
    topics: ["Seerah", "Madinah", "History"]
  },
  {
    id: "13",
    slug: "the-character-and-mercy-of-prophet-muhammad",
    title: "The Sublime Character and Universal Mercy of Prophet Muhammad ﷺ",
    category: "Seerah",
    categoryId: "seerah",
    excerpt: "Reflecting upon the manners, compassion, forbearance, and justice of the Messenger sent as an unconditional mercy to all of creation.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 mb-6">
        "And We have not sent you, [O Muhammad], except as a mercy to the worlds." (Quran 21:107). His life was a living example of moral perfection and empathy.
      </p>
    `,
    author: "Shaykh Hamza Yusuf",
    authorImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    authorRole: "President, Zaytuna College",
    isVerified: true,
    date: "2026-05-10",
    displayDate: "May 10, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800",
    color: "#065F46",
    level: "Beginner",
    topics: ["Seerah", "Prophet", "Character"]
  },
  {
    id: "14",
    slug: "the-treaty-of-hudaybiyyah-lessons",
    title: "The Treaty of Hudaybiyyah: A Manifest Victory in Diplomacy",
    category: "Seerah",
    categoryId: "seerah",
    excerpt: "How prophetic foresight, strategic patience, and peace pacts paved the way for the exponential spread of Islam and the peaceful conquest of Mecca.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 mb-6">
        Though appearing disadvantageous initially to some companions, Allah described the Treaty of Hudaybiyyah as a "clear victory" (Fathan Mubeena) in Surah Al-Fath.
      </p>
    `,
    author: "Dr. Omar Suleiman",
    authorImg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200",
    authorRole: "Scholar & Theologian",
    isVerified: true,
    date: "2026-05-02",
    displayDate: "May 2, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=800",
    color: "#065F46",
    level: "Advanced",
    topics: ["Seerah", "Diplomacy", "History"]
  },

  // ─── AQEEDAH ───
  {
    id: "8",
    slug: "understanding-tawheed-right-way",
    title: "Understanding Tawheed: The Three Dimensions of Monotheism",
    category: "Aqeedah",
    categoryId: "aqeedah",
    excerpt: "Strengthen your core belief with clarity on Tawheed ar-Rububiyyah (Lordship), Tawheed al-Uluhiyyah (Worship), and Tawheed al-Asma was-Sifat (Names & Attributes).",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 mb-6">
        Tawheed is the fundamental core of Islamic creed. It is the belief in the absolute Oneness, uniqueness, and supremacy of Allah, free from partners or intermediaries.
      </p>
      <h2 class="text-2xl font-bold text-primary mt-8 mb-4">The Three Divisions of Tawheed</h2>
      <ul class="list-disc pl-6 mb-6 space-y-3 text-gray-700">
        <li><strong>Tawheed ar-Rububiyyah:</strong> Believing Allah is the sole Creator, Provider, and Sustainer of the universe.</li>
        <li><strong>Tawheed al-Uluhiyyah:</strong> Directing all worship (prayer, dua, sacrifice, hope) solely to Allah.</li>
        <li><strong>Tawheed al-Asma was-Sifat:</strong> Affirming the divine names and attributes as revealed without comparison or distortion.</li>
      </ul>
    `,
    author: "Shaykh Abu Bakr Zoud",
    authorImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    authorRole: "Aqeedah Scholar",
    isVerified: true,
    date: "2026-05-14",
    displayDate: "May 14, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800",
    color: "#D48C46",
    level: "Intermediate",
    isFeatured: true,
    topics: ["Aqeedah", "Tawheed", "Creed"]
  },
  {
    id: "4",
    slug: "spirituality-tazkiyah-heart",
    title: "Tazkiyah: The Spiritual Art of Purifying the Heart",
    category: "Aqeedah",
    categoryId: "aqeedah",
    excerpt: "Exploring the concepts of Tazkiyah (purification) and Ihsan (excellence) in daily life to cure spiritual diseases and achieve peace with the Creator.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 mb-6">
        Tazkiyah refers to cleansing the heart from pride, jealousy, and insincerity while cultivating humility, gratitude, and sincere love for God.
      </p>
    `,
    author: "Shaykh Omar Farooq",
    authorImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    authorRole: "Spiritual Counselor",
    isVerified: true,
    date: "2026-05-28",
    displayDate: "May 28, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800",
    color: "#D48C46",
    level: "Intermediate",
    topics: ["Aqeedah", "Tazkiyah", "Heart"]
  },
  {
    id: "15",
    slug: "pillars-of-iman-and-their-impact",
    title: "The Six Pillars of Iman and Their Transformative Impact",
    category: "Aqeedah",
    categoryId: "aqeedah",
    excerpt: "How firm conviction in Allah, His Angels, Revealed Books, Messengers, the Day of Judgment, and Divine Decree builds an unshakeable mind.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 mb-6">
        Faith in Islam is not mere intellectual assent; it is an active conviction that transforms human ethics, resilience during trials, and moral choices.
      </p>
    `,
    author: "Dr. Bilal Abdul Karim",
    authorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    authorRole: "Senior Researcher in Theology",
    isVerified: true,
    date: "2026-04-20",
    displayDate: "April 20, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800",
    color: "#D48C46",
    level: "Beginner",
    topics: ["Aqeedah", "Iman", "Pillars"]
  },

  // ─── FIQH ───
  {
    id: "6",
    slug: "islamic-rulings-modern-financial-issues",
    title: "Islamic Rulings on Modern Financial Issues & Investments",
    category: "Fiqh",
    categoryId: "fiqh",
    excerpt: "Learn how Islam guides financial transactions today, including the prohibition of Riba, ethical stock investing, and profit-and-loss sharing contracts.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 mb-6">
        Islamic commercial law (Fiqh al-Mu'amalat) governs economic transactions with the goals of justice, transparency, and mutual benefit.
      </p>
      <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Core Prohibitions in Finance</h2>
      <p class="mb-4">
        Islamic finance strictly bans <strong>Riba</strong> (usury/interest), <strong>Gharar</strong> (excessive contractual ambiguity), and <strong>Maysir</strong> (gambling/speculation).
      </p>
    `,
    author: "Shaykh Assim Al-Hakeem",
    authorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    authorRole: "Islamic Jurist",
    isVerified: true,
    date: "2026-05-16",
    displayDate: "May 16, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=800",
    color: "#44403C",
    level: "Advanced",
    isFeatured: true,
    topics: ["Fiqh", "Finance", "Zakat"]
  },
  {
    id: "16",
    slug: "the-essential-rules-of-taharah-and-salah",
    title: "Essential Fiqh of Purification (Taharah) and Daily Prayer (Salah)",
    category: "Fiqh",
    categoryId: "fiqh",
    excerpt: "A practical guide to the obligations, Sunan, and nullifiers of Wudu and Salah, helping you pray with confidence and presence of heart.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 mb-6">
        Purification is half of faith (Sahih Muslim). Understanding the legal conditions of valid Wudu and the essential pillars of Salah is an individual obligation upon every Muslim.
      </p>
    `,
    author: "Mufti Ismail Menk",
    authorImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    authorRole: "Islamic Jurist",
    isVerified: true,
    date: "2026-05-04",
    displayDate: "May 4, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1590076175582-459437ff7087?q=80&w=800",
    color: "#44403C",
    level: "Beginner",
    topics: ["Fiqh", "Prayer", "Taharah"]
  },
  {
    id: "17",
    slug: "fiqh-of-zakat-and-wealth-purification",
    title: "The Fiqh of Zakat: Calculation, Nisab, and Eligible Recipients",
    category: "Fiqh",
    categoryId: "fiqh",
    excerpt: "Everything you need to know about calculating 2.5% on qualifying wealth, gold, and savings, ensuring your charity fulfills divine commandments.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 mb-6">
        Zakat is the third pillar of Islam that purifies wealth and guarantees social welfare for the impoverished and indebted.
      </p>
    `,
    author: "Dr. Yasir Qadhi",
    authorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    authorRole: "Dean of Academic Affairs",
    isVerified: true,
    date: "2026-04-28",
    displayDate: "April 28, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800",
    color: "#44403C",
    level: "Intermediate",
    topics: ["Fiqh", "Zakat", "Charity"]
  },

  // ─── DUAS ───
  {
    id: "7",
    slug: "powerful-duas-for-every-situation",
    title: "Powerful Duas for Every Situation: Daily Protection & Relief",
    category: "Duas",
    categoryId: "duas",
    excerpt: "A collection of authentic supplications from the Quran and Sunnah for anxiety, morning protection, seeking forgiveness, and peace of mind.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 mb-6">
        Supplication (Dua) is the essence of worship. It is a direct channel of communication between the servant and the Creator.
      </p>
      <h2 class="text-2xl font-bold text-primary mt-8 mb-4">1. Dua for Worry and Grief</h2>
      <div class="bg-[#FFFCF6] border-l-4 border-secondary p-6 rounded-2xl mb-6">
        <p class="font-arabic text-2xl text-gray-900 text-center mb-3" dir="rtl">
          اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحُزْنِ، وَالْعَجْزِ وَالْكَسَلِ
        </p>
        <p class="text-sm italic text-gray-700 text-center">
          "O Allah, I seek refuge in You from anxiety and sorrow, weakness and laziness." (Sahih al-Bukhari)
        </p>
      </div>
    `,
    author: "Ustadhah Aisha Khalid",
    authorImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200",
    authorRole: "Islamic Educator",
    isVerified: true,
    date: "2026-05-15",
    displayDate: "May 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800",
    color: "#9A3412",
    level: "Beginner",
    isFeatured: true,
    topics: ["Duas", "Azkar", "Protection"]
  },
  {
    id: "18",
    slug: "morning-and-evening-adhkar-guide",
    title: "The Shield of the Believer: Morning & Evening Adhkar Guide",
    category: "Duas",
    categoryId: "duas",
    excerpt: "Essential protective remembrances taught by the Prophet ﷺ to start and end each day in tranquility, guarding against all harm.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 mb-6">
        Reciting the morning and evening Adhkar brings immense tranquility and forms a spiritual shield against anxiety and negativity.
      </p>
    `,
    author: "Dr. Omar Suleiman",
    authorImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    authorRole: "Scholar & Author",
    isVerified: true,
    date: "2026-05-01",
    displayDate: "May 1, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800",
    color: "#9A3412",
    level: "Beginner",
    topics: ["Duas", "Adhkar", "Morning"]
  },
  {
    id: "19",
    slug: "the-etiquettes-and-best-times-for-dua",
    title: "Etiquettes and Optimal Times for Dua Acceptance (Istijabah)",
    category: "Duas",
    categoryId: "duas",
    excerpt: "How to supplicate with presence of heart during the last third of the night, prostration (Sujud), and between Adhan and Iqamah.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 mb-6">
        Allah loves those who persistently call upon Him. Observing key etiquettes like praising Allah, sending blessings upon the Prophet ﷺ, and having certain hope accelerates acceptance.
      </p>
    `,
    author: "Shaykh Yasir Qadhi",
    authorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    authorRole: "Theologian",
    isVerified: true,
    date: "2026-04-18",
    displayDate: "April 18, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800",
    color: "#9A3412",
    level: "Intermediate",
    topics: ["Duas", "Supplication", "Worship"]
  },

  // ─── 99 NAMES OF ALLAH ───
  {
    id: "20",
    slug: "the-beauty-and-depth-of-asma-ul-husna",
    title: "Understanding the 99 Beautiful Names of Allah (Asma-ul-Husna)",
    category: "99 Names",
    categoryId: "names-of-allah",
    excerpt: "How meditating upon the divine names and sublime attributes of Allah transforms our prayers, character, and relationship with the Creator.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 mb-6">
        "And to Allah belong the best names, so invoke Him by them." (Quran 7:180). Understanding the meanings behind each name brings profound peace.
      </p>
    `,
    author: "Shaykh Hamza Yusuf",
    authorImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    authorRole: "Islamic Scholar",
    isVerified: true,
    date: "2026-05-18",
    displayDate: "May 18, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1590076175582-459437ff7087?q=80&w=800",
    color: "#B45309",
    level: "Beginner",
    isFeatured: true,
    topics: ["99 Names", "Tawheed", "Attributes"]
  },
  {
    id: "21",
    slug: "living-with-the-names-ar-rahman-and-ar-raheem",
    title: "Living with the Divine Names: Ar-Rahman and Ar-Raheem",
    category: "99 Names",
    categoryId: "names-of-allah",
    excerpt: "Exploring the profound difference between the General All-Encompassing Mercy and the Specific Mercy of Allah in our daily lives.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 mb-6">
        Every chapter of the Quran except one begins with the Basmalah, emphasizing the infinite mercy that precedes and encompasses divine wrath.
      </p>
    `,
    author: "Dr. Omar Suleiman",
    authorImg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200",
    authorRole: "Scholar & Educator",
    isVerified: true,
    date: "2026-04-25",
    displayDate: "April 25, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=800",
    color: "#B45309",
    level: "Beginner",
    topics: ["99 Names", "Mercy", "Reflection"]
  },

  // ─── LIFESTYLE ───
  {
    id: "22",
    slug: "islamic-etiquette-in-the-digital-age",
    title: "Islamic Ethics & Etiquette in the Age of Social Media",
    category: "Lifestyle",
    categoryId: "lifestyle",
    excerpt: "Practical guidance on mindful digital communication, avoiding backbiting (Gheebah), guarding time, and spreading beneficial knowledge.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 mb-6">
        Our digital speech and online interactions carry moral weight. Practicing Islamic mindfulness online guards our spiritual state and preserves relationships.
      </p>
    `,
    author: "Ustadh Nouman Ali Khan",
    authorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    authorRole: "Teacher & Speaker",
    isVerified: true,
    date: "2026-05-12",
    displayDate: "May 12, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800",
    color: "#0A3A2F",
    level: "Beginner",
    isFeatured: true,
    topics: ["Lifestyle", "Ethics", "Digital"]
  },
  {
    id: "23",
    slug: "building-a-blessed-islamic-household",
    title: "Building a Blessed Muslim Home: Sunnah Principles of Family Life",
    category: "Lifestyle",
    categoryId: "lifestyle",
    excerpt: "Cultivating mutual compassion, respect, patience, and Islamic upbringing for children in the modern world.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 mb-6">
        The Prophet ﷺ stated: "The best among you are those who are best to their families" (Tirmidhi). Establishing a peaceful home starts with prophetic empathy.
      </p>
    `,
    author: "Mufti Ismail Menk",
    authorImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    authorRole: "Scholar",
    isVerified: true,
    date: "2026-04-14",
    displayDate: "April 14, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800",
    color: "#0A3A2F",
    level: "Beginner",
    topics: ["Lifestyle", "Family", "Sunnah"]
  },

  // ─── GENERAL ───
  {
    id: "24",
    slug: "islamic-golden-age-contributions-to-science",
    title: "The Islamic Golden Age: Major Contributions to Medicine & Science",
    category: "General",
    categoryId: "general",
    excerpt: "How pioneer scholars like Ibn al-Haytham, Al-Khwarizmi, and Ibn Sina harmonized religious seeking with revolutionary scientific inquiry.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 mb-6">
        During the Islamic Golden Age (8th–14th centuries), scholars in Baghdad, Cairo, and Cordoba made breakthrough advancements in optics, mathematics, and pharmacology.
      </p>
    `,
    author: "Prof. Salim Al-Hassani",
    authorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    authorRole: "Historian of Islamic Science",
    isVerified: true,
    date: "2026-05-08",
    displayDate: "May 8, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=800",
    color: "#D48C46",
    level: "Intermediate",
    isFeatured: true,
    topics: ["General", "History", "Science"]
  },
  {
    id: "25",
    slug: "the-concept-of-patience-sabrun-jameel",
    title: "The Essence of Sabrun Jameel (Beautiful Patience) in Islam",
    category: "General",
    categoryId: "general",
    excerpt: "Understanding how true patience in the face of life's tests elevates the believer's spiritual rank and brings divine peace.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 mb-6">
        Sabr in Islam is not passive resignation; it is active spiritual fortitude, restraint from anger, and continuous reliance upon Allah's divine decree.
      </p>
    `,
    author: "Shaykh Yasir Qadhi",
    authorImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    authorRole: "Scholar & Theologian",
    isVerified: true,
    date: "2026-04-10",
    displayDate: "April 10, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800",
    color: "#0A3A2F",
    level: "Beginner",
    topics: ["General", "Patience", "Reflection"]
  }
];
