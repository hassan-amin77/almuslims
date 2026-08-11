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
  date: string;
  displayDate: string;
  readTime: string;
  image: string;
  color?: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  tableOfContents?: TOCItem[];
  faqs?: FAQItem[];
}

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
  {
    id: "9",
    slug: "what-is-the-quran",
    title: "What Is the Quran? A Complete Guide to Islam's Holy Book",
    metaTitle: "What Is the Quran? Meaning, History & Importance",
    metaDescription: "Learn what the Quran is, how it was revealed, preserved, structured, and used in Muslim life. Explore its history, teachings, translations, and significance in one comprehensive guide.",
    category: "Quran",
    categoryId: "quran",
    excerpt: "",
    content: `
  <div class="space-y-10">

    <!-- Quick Answer -->
    <section id="quick-answer" class="scroll-mt-16">
      
      <p class="text-lg text-gray-700 leading-relaxed mb-4">
        The Quran is the central religious text of Islam. Muslims hold it to be the literal, unaltered word of God (Allah), revealed in Arabic to the Prophet Muhammad (PBUH) between 610 and 632 CE through the angel Gabriel (Jibril). It consists of 114 chapters (surahs) and approximately 6,236 verses (ayat), totaling roughly 77,000–78,000 words in the original Arabic.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed">
        The Quran functions as the primary source of Islamic theology, law, and daily practice. It is recited as an act of worship, not simply read as reference material.
      </p>
    </section>

    <!-- Quick Facts -->
    <section id="quick-facts" class="scroll-mt-28">
      <h2 class="text-2xl sm:text-3xl font-bold text-primary font-heading mb-6">Quick Facts</h2>
      <div class="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-sm bg-white">
        <table class="w-full text-left text-sm text-gray-700 border-collapse">
          <thead>
            <tr class="bg-[#0A3A2F]/5 border-b border-gray-200 text-xs font-bold text-primary uppercase tracking-wider">
              <th class="p-4 border-r border-gray-200">Fact</th>
              <th class="p-4">Detail</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Chapters (surahs)</td><td class="p-4">114</td></tr>
            <tr class="bg-gray-50/50"><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Verses (ayat)</td><td class="p-4">~6,236</td></tr>
            <tr><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Words (Arabic)</td><td class="p-4">~77,000–78,000</td></tr>
            <tr class="bg-gray-50/50"><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Revelation period</td><td class="p-4">610–632 CE (23 years)</td></tr>
            <tr><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Original language</td><td class="p-4">Classical Arabic</td></tr>
            <tr class="bg-gray-50/50"><td class="p-4 font-bold text-gray-900 border-r border-gray-100">First verses revealed</td><td class="p-4">Surah Al-Alaq, verses 1–5 (Quran 96:1–5)</td></tr>
            <tr><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Site of first revelation</td><td class="p-4">Cave of Hira, near Mecca</td></tr>
            <tr class="bg-gray-50/50"><td class="p-4 font-bold text-gray-900 border-r border-gray-100">First full compilation</td><td class="p-4">Under Caliph Abu Bakr</td></tr>
            <tr><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Standardized text</td><td class="p-4">Under Caliph Uthman</td></tr>
            <tr class="bg-gray-50/50"><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Reading divisions</td><td class="p-4">30 juz, 60 hizb, 7 manzil</td></tr>
          </tbody>
        </table>
      </div>

      <div class="bg-[#FFFCF6] border-l-4 border-secondary p-6 rounded-2xl my-6">
        <p class="text-sm font-bold text-amber-900 uppercase tracking-wider mb-2">💡 Did You Know?</p>
        <p class="text-gray-700 italic">
          The Quran was not compiled into a single bound book during Muhammad's (PBUH) lifetime. It existed as a combination of memorized recitation and scattered written fragments until after his death in 632 CE.
        </p>
      </div>
    </section>

    <!-- Revelation Timeline (610–632 CE) -->
    <section id="revelation-timeline" class="scroll-mt-28">
      <h2 class="text-2xl sm:text-3xl font-bold text-primary font-heading mb-6">Revelation Timeline (610–632 CE)</h2>
      <div class="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-primary/20 pl-8">
        <div class="relative">
          <div class="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-white"></div>
          <h4 class="font-bold text-gray-900 text-lg">610 CE</h4>
          <p class="text-gray-700 mt-1">Muhammad (Sallallahu alaihi wasallam) receives the first revelation in the Cave of Hira, traditionally identified as the opening verses of Surah Al-Alaq (Quran 96:1–5).</p>
        </div>
        <div class="relative">
          <div class="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-white"></div>
          <h4 class="font-bold text-gray-900 text-lg">610–622 CE</h4>
          <p class="text-gray-700 mt-1">The Meccan period. Revelations during this phase center on monotheism and the afterlife, forming what scholars classify as the Makki surahs.</p>
        </div>
        <div class="relative">
          <div class="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-white"></div>
          <h4 class="font-bold text-gray-900 text-lg">622 CE</h4>
          <p class="text-gray-700 mt-1">The Hijrah: Muhammad (PBUH) and his followers migrate to Medina.</p>
        </div>
        <div class="relative">
          <div class="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-white"></div>
          <h4 class="font-bold text-gray-900 text-lg">622–632 CE</h4>
          <p class="text-gray-700 mt-1">The Medinan period. Revelation shifts toward law and community governance, forming the Madani surahs.</p>
        </div>
        <div class="relative">
          <div class="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-white"></div>
          <h4 class="font-bold text-gray-900 text-lg">632 CE</h4>
          <p class="text-gray-700 mt-1">Muhammad (Sallallahu alaihi wasallam) dies. The Quran exists only in memorized form and scattered written fragments.</p>
        </div>
        <div class="relative">
          <div class="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-white"></div>
          <h4 class="font-bold text-gray-900 text-lg">632–634 CE</h4>
          <p class="text-gray-700 mt-1">Under Caliph Abu Bakr, the text is compiled into a single manuscript (mushaf) by the scribe Zaid ibn Thabit, at the urging of the companion Umar ibn al-Khattab. The master copy is entrusted to Hafsah, one of Muhammad's (PBUH) wives.</p>
        </div>
        <div class="relative">
          <div class="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-white"></div>
          <h4 class="font-bold text-gray-900 text-lg">650 CE</h4>
          <p class="text-gray-700 mt-1">Caliph Uthman ibn Affan commissions a standardized version to resolve regional recitation differences and distributes copies to major cities.</p>
        </div>
      </div>
    </section>

    <!-- What Does the Word "Quran" Mean? -->
    <section id="what-does-the-word-quran-mean" class="scroll-mt-28">
      <h2 class="text-2xl sm:text-3xl font-bold text-primary font-heading mb-4">What Does the Word "Quran" Mean?</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-4">
        The word derives from the Arabic root <em>qara'a</em>, meaning "to read" or "to recite." Its most accurate translation is "the recitation," reflecting how the text was transmitted orally for years before existing as a complete written book.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed mb-4">
        Several related terms recur throughout Islamic scholarship:
      </p>
      <div class="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-sm bg-white">
        <table class="w-full text-left text-sm text-gray-700 border-collapse">
          <thead>
            <tr class="bg-[#0A3A2F]/5 border-b border-gray-200 text-xs font-bold text-primary uppercase tracking-wider">
              <th class="p-4 border-r border-gray-200">Term</th>
              <th class="p-4">Meaning</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Mushaf</td><td class="p-4">The physical written copy of the Quran</td></tr>
            <tr class="bg-gray-50/50"><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Tanzil</td><td class="p-4">"The sending down", the act of revelation</td></tr>
            <tr><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Wahy</td><td class="p-4">Divine revelation as a concept</td></tr>
            <tr class="bg-gray-50/50"><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Al-Kitab</td><td class="p-4">"The Book", a Quranic self-reference</td></tr>
            <tr><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Furqan</td><td class="p-4">"The criterion" that which distinguishes right from wrong</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Who Revealed the Quran — and Who Wrote It? -->
    <section id="who-revealed-the-quran-and-who-wrote-it" class="scroll-mt-28">
      <h2 class="text-2xl sm:text-3xl font-bold text-primary font-heading mb-4">Who Revealed the Quran — and Who Wrote It?</h2>
      <p class="text-gray-700 leading-relaxed mb-6">These are frequently conflated, though they refer to distinct roles.</p>
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p><strong class="text-primary">Revealer:</strong> In Islamic belief, God is the source of the Quran's content and exact wording.</p>
        <p><strong class="text-primary">Transmitter:</strong> The angel Gabriel (Jibril) delivered the revelation to Muhammad (Sallallahu alaihi wasallam).</p>
        <p><strong class="text-primary">Recipient:</strong> Muhammad (Sallallahu alaihi wasallam) received the revelations but is not considered their author. Islamic theology explicitly rejects the idea that he composed the text, a position reinforced by his traditional description as <em>ummi</em> (unlettered), unable to read or write (Quran 29:48).</p>
        <p><strong class="text-primary">Scribes:</strong> Companions recorded verses as they were revealed, using palm-leaf stalks, flat stones, and parchment. The ordered, bound compilation came only after Muhammad's (Sallallahu alaihi wasallam) death.</p>
      </div>
    </section>

    <!-- Why Was the Quran Revealed? -->
    <section id="why-was-the-quran-revealed" class="scroll-mt-28">
      <h2 class="text-2xl sm:text-3xl font-bold text-primary font-heading mb-4">Why Was the Quran Revealed?</h2>
      <p class="text-gray-700 leading-relaxed mb-4">Islamic teaching identifies several core purposes behind the revelation:</p>
      <ul class="list-disc pl-6 space-y-3 text-gray-700">
        <li>To reaffirm the oneness of God after what Islamic tradition regards as centuries of theological drift in earlier communities</li>
        <li>To provide moral and legal guidance for individual and communal life</li>
        <li>To warn of accountability in the afterlife and outline a path toward salvation</li>
        <li>To serve as a final revelation, confirming and correcting earlier scriptures given to Moses and Jesus</li>
      </ul>
    </section>

    <!-- How Was the Quran Preserved? -->
    <section id="how-was-the-quran-preserved" class="scroll-mt-28">
      <h2 class="text-2xl sm:text-3xl font-bold text-primary font-heading mb-4">How Was the Quran Preserved?</h2>
      <img src="/blogs/Quran/what-is-quran/how-was-the-quran-preserved.webp" alt="how-was-the-quran-preserved" class="w-full h-64 object-cover rounded-2xl mb-6" />
      <p class="text-gray-700 leading-relaxed mb-6">Islamic scholarship identifies two parallel preservation methods.</p>
      
      <div class="space-y-6">
        <div class="border-l-4 border-primary pl-6">
          <h4 class="font-bold text-gray-900 text-lg mb-2">Oral transmission:</h4>
          <p class="text-gray-700">Large numbers of Muhammad's (Sallallahu alaihi wasallam) companions memorized portions some the entire text during his lifetime. This practice of memorization (hifz) has continued unbroken; millions of hafiz worldwide today serve as a continuing verification against textual alteration.</p>
        </div>
        <div class="border-l-4 border-primary pl-6">
          <h4 class="font-bold text-gray-900 text-lg mb-2">Written transmission:</h4>
          <p class="text-gray-700">The Abu Bakr compilation, followed by the Uthmanic standardization, established a single fixed reference. Early manuscript evidence supports early textual stability: the Birmingham manuscript, for example, has been radiocarbon-dated to within decades of Muhammad's (Sallallahu alaihi wasallam) life, though academic discussion continues regarding dating methodology and minor regional recitation variants (qira'at).</p>
        </div>
      </div>

      <p class="text-gray-700 leading-relaxed mt-6">
        Muslims also cite a theological guarantee of preservation. Quran 15:9 states that God Himself preserves the text, a concept often referenced through the term <em>Lawh al-Mahfuz</em>, "the Preserved Tablet."
      </p>
    </section>

    <!-- How Is the Quran Structured? -->
    <section id="how-is-the-quran-structured" class="scroll-mt-28">
      <h2 class="text-2xl sm:text-3xl font-bold text-primary font-heading mb-6">How Is the Quran Structured?</h2>
      <img src="/blogs/Quran/what-is-quran/how-is-the-quran-structured.webp" alt="how-is-the-quran-structured" class="w-full h-64 object-cover rounded-2xl mb-6" />
      
      <h3 class="text-xl font-bold text-gray-800 mb-3">Surahs (Chapters)</h3>
      <p class="text-gray-700 leading-relaxed mb-4">
        The Quran contains 114 surahs, arranged primarily by length rather than by the order of revelation. Every surah except one (At-Tawbah) opens with the phrase "In the name of God, the Most Gracious, the Most Merciful."
      </p>

      <div class="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-sm bg-white">
        <table class="w-full text-left text-sm text-gray-700 border-collapse">
          <thead>
            <tr class="bg-[#0A3A2F]/5 border-b border-gray-200 text-xs font-bold text-primary uppercase tracking-wider">
              <th class="p-4 border-r border-gray-200">Fact</th>
              <th class="p-4">Surah</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Longest</td><td class="p-4">Al-Baqarah ("The Cow") — 286 verses</td></tr>
            <tr class="bg-gray-50/50"><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Shortest</td><td class="p-4">Al-Kawthar — 3 verses</td></tr>
            <tr><td class="p-4 font-bold text-gray-900 border-r border-gray-100">First by placement</td><td class="p-4">Al-Fatiha ("The Opening")</td></tr>
            <tr class="bg-gray-50/50"><td class="p-4 font-bold text-gray-900 border-r border-gray-100">First revealed</td><td class="p-4">Al-Alaq</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-xl font-bold text-gray-800 mt-8 mb-3">Makki vs. Madani Surahs</h3>
      <p class="text-gray-700 leading-relaxed mb-4">
        Surahs are also classified by the period in which they were revealed. This classification directly affects interpretation.
      </p>
      <ul class="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Makki surahs (Mecca, pre-622 CE):</strong> shorter verses; emphasis on monotheism and the afterlife</li>
        <li><strong>Madani surahs (Medina, 622–632 CE):</strong> longer verses; emphasis on law and community structure</li>
      </ul>

      <h3 class="text-xl font-bold text-gray-800 mt-8 mb-3">Ayat, Juz, Hizb, and Manzil</h3>
      <ul class="list-disc pl-6 space-y-2 text-gray-700">
        <li><strong>Ayat:</strong> individual verses, approximately 6,236 in total; the term literally means "sign"</li>
        <li><strong>Juz:</strong> 30 equal divisions, enabling a complete reading across 30 days (commonly used during Ramadan)</li>
        <li><strong>Hizb:</strong> 60 sections, two per juz</li>
        <li><strong>Manzil:</strong> 7 divisions, used in some traditions for weekly completion</li>
        <li><strong>Sajdah verses:</strong> 14–15 specific verses requiring physical prostration when recited or heard</li>
      </ul>
    </section>

    <!-- What Language Is It In? -->
    <section id="what-language-is-it-in" class="scroll-mt-28">
      <h2 class="text-2xl sm:text-3xl font-bold text-primary font-heading mb-4">What Language Is It In?</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        The Quran was revealed in Classical Arabic, specifically the dialect of the Quraysh tribe. Islamic theology holds that the precise Arabic wording is itself part of the revelation, not merely a vehicle for meaning. For this reason, formal prayer recitation is conducted in Arabic regardless of the worshiper's native language.
      </p>

      <h3 class="text-xl font-bold text-gray-800 mb-3">Is a Translation Still "the Quran"?</h3>
      <p class="text-gray-700 leading-relaxed mb-4">
        In strict Islamic terms, no. Translations are classified as interpretations of meaning (<em>tafsir al-ma'ani</em>), not the Quran itself. They remain essential for study and understanding.
      </p>

      <div class="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-sm bg-white">
        <table class="w-full text-left text-sm text-gray-700 border-collapse">
          <thead>
            <tr class="bg-[#0A3A2F]/5 border-b border-gray-200 text-xs font-bold text-primary uppercase tracking-wider">
              <th class="p-4 border-r border-gray-200">Translation</th>
              <th class="p-4 border-r border-gray-200">Translator/Editor</th>
              <th class="p-4">Notable for</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr><td class="p-4 font-bold text-gray-900 border-r border-gray-100">The Clear Quran</td><td class="p-4 border-r border-gray-100">Dr. Mustafa Khattab</td><td class="p-4">Modern, accessible English</td></tr>
            <tr class="bg-gray-50/50"><td class="p-4 font-bold text-gray-900 border-r border-gray-100">The Study Quran</td><td class="p-4 border-r border-gray-100">Seyyed Hossein Nasr (ed.)</td><td class="p-4">Extensive scholarly commentary</td></tr>
            <tr><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Sahih International</td><td class="p-4 border-r border-gray-100">Committee</td><td class="p-4">Literal rendering, widely cited</td></tr>
            <tr class="bg-gray-50/50"><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Oxford World's Classics</td><td class="p-4 border-r border-gray-100">M.A.S. Abdel Haleem</td><td class="p-4">Academic, readable prose</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- What Does the Quran Teach? -->
    <section id="what-does-the-quran-teach" class="scroll-mt-28">
      <h2 class="text-2xl sm:text-3xl font-bold text-primary font-heading mb-4">What Does the Quran Teach?</h2>
      <p class="text-gray-700 leading-relaxed mb-6">The Quran's teachings span several distinct thematic categories. Each is treated separately below for clarity.</p>

      <div class="">
        <div class="bg-gray-50 p-2 rounded-2xl border border-gray-100">
          <h4 class="font-bold text-gray-900 text-lg ">Monotheism (Tawhid)</h4>
          <p class="text-gray-700">The Quran's most consistently repeated theme is <em>tawhid</em>, the absolute oneness of God. Surah Al-Ikhlas (Quran 112:1–4) is frequently cited as the clearest concise statement of this doctrine.</p>
        </div>
        <div class="bg-gray-50 p-2 rounded-2xl border border-gray-100">
          <h4 class="font-bold text-gray-900 text-lg ">Prophets and Shared Figures</h4>
          <p class="text-gray-700">The Quran discusses many figures found in Jewish and Christian scripture, including Adam, Noah, Abraham, and Moses, generally reframed within an Islamic theological structure. Jesus (Isa) appears by name in more than 20 verses, including a detailed account of his birth to the Virgin Mary (Quran 19:16–34). He is honored as a prophet and the Messiah, but the Quran explicitly rejects his divinity and the doctrine of the Trinity (Quran 5:116).</p>
        </div>
        <div class="bg-gray-50 p-2 rounded-2xl border border-gray-100">
          <h4 class="font-bold text-gray-900 text-lg ">The Unseen World</h4>
          <p class="text-gray-700">The Quran describes jinn beings created from "smokeless fire" (Quran 15:27), distinct from both angels and humans, and possessing free will. Surah Al-Jinn (Quran 72) is devoted entirely to this subject.</p>
        </div>
        <div class="bg-gray-50 p-2 rounded-2xl border border-gray-100">
          <h4 class="font-bold text-gray-900 text-lg ">The Afterlife</h4>
          <p class="text-gray-700">Paradise (Jannah) and hell (Jahannam) are described in extensive, sensory detail throughout the text, tied consistently to themes of moral accountability and final judgment.</p>
        </div>
        <div class="bg-gray-50 p-2 rounded-2xl border border-gray-100">
          <h4 class="font-bold text-gray-900 text-lg ">Law and Ethics</h4>
          <p class="text-gray-700">Verses addressing marriage, inheritance, commerce, and criminal justice form a foundational though not sole source of Islamic jurisprudence (sharia), alongside the Sunnah.</p>
        </div>
      </div>
    </section>

    <!-- Quran vs. Bible -->
    <section id="quran-vs-bible" class="scroll-mt-28">
      <h2 class="text-2xl sm:text-3xl font-bold text-primary font-heading mb-6">Quran vs. Bible</h2>
      
      <div class="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-sm bg-white">
        <table class="w-full text-left text-sm text-gray-700 border-collapse">
          <thead>
            <tr class="bg-[#0A3A2F]/5 border-b border-gray-200 text-xs font-bold text-primary uppercase tracking-wider">
              <th class="p-4 border-r border-gray-200">Topic</th>
              <th class="p-4 border-r border-gray-200">Quran</th>
              <th class="p-4">Bible</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Religion</td><td class="p-4 border-r border-gray-100">Islam</td><td class="p-4">Judaism (Old Testament) / Christianity (Old + New Testament)</td></tr>
            <tr class="bg-gray-50/50"><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Believed origin</td><td class="p-4 border-r border-gray-100">Single revelation, one prophet, 23 years</td><td class="p-4">Multiple human authors across centuries</td></tr>
            <tr><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Original language</td><td class="p-4 border-r border-gray-100">Classical Arabic</td><td class="p-4">Hebrew, Aramaic, Greek</td></tr>
            <tr class="bg-gray-50/50"><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Structure</td><td class="p-4 border-r border-gray-100">114 surahs</td><td class="p-4">66–73 books (tradition-dependent)</td></tr>
            <tr><td class="p-4 font-bold text-gray-900 border-r border-gray-100">View of Jesus</td><td class="p-4 border-r border-gray-100">Prophet and Messiah; not divine</td><td class="p-4">Son of God; central to salvation</td></tr>
            <tr class="bg-gray-50/50"><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Compiled</td><td class="p-4 border-r border-gray-100">~7th century CE</td><td class="p-4">Old Testament composed over ~1,000 years earlier; New Testament ~1st century CE</td></tr>
          </tbody>
        </table>
      </div>

      <p class="text-gray-700 leading-relaxed italic mt-4">
        The Quran is not older than the Bible. Both the Hebrew Bible and the New Testament predate it, the Hebrew Bible by close to a millennium in parts.
      </p>
    </section>

    <!-- Quran, Hadith, and Sunnah -->
    <section id="quran-hadith-and-sunnah" class="scroll-mt-28">
      <h2 class="text-2xl sm:text-3xl font-bold text-primary font-heading mb-4">Quran, Hadith, and Sunnah</h2>
      <p class="text-gray-700 leading-relaxed mb-6">These three terms are related but distinct, and confusing them is common.</p>

      <ul class="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li><strong>Quran:</strong> Believed to be God's direct, verbatim speech</li>
        <li><strong>Hadith:</strong> Individually recorded reports of Muhammad's (Sallallahu alaihi wasallam) sayings and actions, compiled later and graded by authenticity (sahih, hasan, da'if)</li>
        <li><strong>Sunnah:</strong> The broader example and practice of Muhammad (Sallallahu alaihi wasallam), evidenced through hadith</li>
      </ul>

      <p class="text-gray-700 leading-relaxed">
        Muslims treat the Quran as the primary source of guidance and the Sunnah as the essential framework for interpreting and applying it.
      </p>
    </section>

    <!-- How Muslims Use the Quran Today -->
    <section id="how-muslims-use-the-quran-today" class="scroll-mt-28">
      <h2 class="text-2xl sm:text-3xl font-bold text-primary font-heading mb-4">How Muslims Use the Quran Today</h2>
      <img src="/blogs/Quran/what-is-quran/how-muslims-use-the-quran-today.webp" alt="how-muslims-use-the-quran-today" class="w-full h-64 object-cover rounded-2xl mb-6" />
      <p class="text-gray-700 leading-relaxed mb-6">The Quran is embedded in daily and seasonal religious practice through specific, structured routines:</p>

      <div class="space-y-4 text-gray-700">
        <div><strong>Daily prayer (salah):</strong> Surah Al-Fatiha is recited in every unit (rakah) of each of the five daily prayers, making it one of the most frequently recited passages in the world.</div>
        <div><strong>Ramadan:</strong> Many mosques conduct nightly taraweeh prayers during Ramadan, reciting one juz per night so the congregation completes the full Quran (khatm) by the month's end.</div>
        <div><strong>Memorization programs (hifz):</strong> Formal Quran memorization schools (often called madrasas or hifz academies) enroll students — commonly starting between ages 5 and 10 — in multi-year structured memorization programs, with regular testing by qualified instructors.</div>
        <div><strong>Recitation competitions:</strong> International Quran recitation competitions are held annually in numerous Muslim-majority countries, judged on both memorization accuracy and tajwid application.</div>
        <div><strong>Life events:</strong> Verses are commonly recited at weddings, naming ceremonies, and funerals, and portions are referenced in religious rulings on marriage and inheritance.</div>
        <div><strong>Digital tools:</strong> Quran mobile applications now offer audio recitation, verse-by-verse translation, tajwid color-coding, and memorization tracking reflecting continued adaptation of traditional practice to modern formats.</div>
      </div>

      <div class="bg-[#FFFCF6] border-l-4 border-secondary p-6 rounded-2xl my-6">
        <p class="text-sm font-bold text-amber-900 uppercase tracking-wider mb-2">💡 Did You Know?</p>
        <p class="text-gray-700 italic">
          Surah Al-Fatiha is recited a minimum of 17 times daily by observant Muslims performing the five daily prayers, making it likely the most repeated text in religious practice worldwide.
        </p>
      </div>
    </section>

    <!-- Recitation and Study -->
    <section id="recitation-and-study" class="scroll-mt-28">
      <h2 class="text-2xl sm:text-3xl font-bold text-primary font-heading mb-4">Recitation and Study</h2>
      <p class="text-gray-700 leading-relaxed mb-4">Several disciplines govern how the <b><a href='/holy-quran'>Holy Quran</a></b> is read and interpreted:</p>
      
      <ul class="list-disc pl-6 space-y-3 text-gray-700">
        <li><strong>Tajwid:</strong> The rules of correct pronunciation and articulation during recitation</li>
        <li><strong>Tarteel:</strong> Slow, deliberate recitation, distinct from rapid reading</li>
        <li><strong>Qira'at:</strong> The accepted recitation styles (traditionally seven, sometimes counted as ten), reflecting minor regional pronunciation variants preserved since the early compilation</li>
        <li><strong>Tafsir:</strong> Scholarly exegesis providing historical and legal context for interpretation</li>
      </ul>
    </section>

    <!-- Common Misconceptions -->
    <section id="common-misconceptions" class="scroll-mt-28">
      <h2 class="text-2xl sm:text-3xl font-bold text-primary font-heading mb-6">Common Misconceptions</h2>

      <div class="space-y-4 mb-8">
        <div class="p-2 bg-red-50/50 border border-red-100 rounded-2xl">
          <h4 class="font-bold text-red-900 text-base mb-1"> Misconception: Muhammad (Sallallahu alaihi wasallam) wrote the Quran</h4>
          <p class="text-gray-700 text-sm">Islamic theology explicitly rejects this. He is considered a recipient of revelation, not its author, and is traditionally described as unable to read or write.</p>
        </div>
        <div class="p-2 bg-red-50/50 border border-red-100 rounded-2xl">
          <h4 class="font-bold text-red-900 text-base mb-1"> Misconception: Quran has no real structure</h4>
          <p class="text-gray-700 text-sm">The Quran has a defined chapter-and-verse system, along with additional reading divisions (juz, hizb, manzil) designed for structured study and memorization.</p>
        </div>
        <div class="p-2 bg-red-50/50 border border-red-100 rounded-2xl">
          <h4 class="font-bold text-red-900 text-base mb-1"> Misconception: Only Arabic speakers can read it</h4>
          <p class="text-gray-700 text-sm">Translations are widely used for study. Muslims regard the Arabic text as uniquely significant to formal worship, but this does not restrict study in translation.</p>
        </div>
        <div class="p-2 bg-red-50/50 border border-red-100 rounded-2xl">
          <h4 class="font-bold text-red-900 text-base mb-1"> Misconception: Arranged chronologically</h4>
          <p class="text-gray-700 text-sm">It is not. Surahs are arranged primarily by length, not by the order in which they were revealed.</p>
        </div>
        <div class="p-5 bg-red-50/50 border border-red-100 rounded-2xl">
          <h4 class="font-bold text-red-900 text-base mb-1"> Misconception: Non-Muslims cannot read it</h4>
          <p class="text-gray-700 text-sm">There is no restriction on non-Muslims reading a translation or the Arabic text for study. Some traditions request ritual purity before physically handling an Arabic mushaf, a devotional custom rather than a prohibition on reading.</p>
        </div>
      </div>

      <h3 class="text-xl font-bold text-gray-800 mb-3">Common Beginner Mistakes</h3>
      <ul class="list-disc pl-6 space-y-2 text-gray-700">
        <li>Reading the Quran cover-to-cover in surah order, expecting a linear narrative</li>
        <li>Skipping historical context (asbab al-nuzul) on legally or historically dense verses</li>
        <li>Assuming surah order reflects revelation order</li>
        <li>Starting with Al-Baqarah, the longest and one of the most legally dense surahs, rather than shorter thematic surahs</li>
      </ul>
    </section>

    <!-- Why Is the Quran Still Memorized Today? -->
    <section id="why-is-the-quran-still-memorized-today" class="scroll-mt-28">
      <h2 class="text-2xl sm:text-3xl font-bold text-primary font-heading mb-4">Why Is the Quran Still Memorized Today?</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Full memorization of a 77,000-word text might seem unnecessary in an age of print and digital search, yet the practice has not declined if anything, formal hifz programs have expanded globally. Several factors explain why.
      </p>

      <div class="space-y-6">
        <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
          <h4 class="font-bold text-gray-900 text-base mb-2">1. Oral tradition predates the written text:</h4>
          <p class="text-gray-700 text-sm">The Quran was preserved through memorization before it existed as a complete book (see How Was the Quran Preserved?). Memorization is not a later devotional add-on; it is the original transmission method, and the tradition of learning it by heart has simply continued unbroken for 1,400 years.</p>
        </div>
        <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
          <h4 class="font-bold text-gray-900 text-base mb-2">2. Functions as a preservation safeguard:</h4>
          <p class="text-gray-700 text-sm">Because millions of hafiz around the world hold the same text in memory, any printing error or textual alteration would be immediately detectable against a living, independent record, a built-in check that predates and now supplements the written manuscript tradition.</p>
        </div>
        <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
          <h4 class="font-bold text-gray-900 text-base mb-2">3. Foundational to Islamic education:</h4>
          <p class="text-gray-700 text-sm">Historically, memorizing some or all of the Quran was the first stage of formal education across the Islamic world, taught in institutions called maktab or kuttab before a student advanced to grammar, law, or theology. That structure still shapes religious education today in many countries.</p>
        </div>
        <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
          <h4 class="font-bold text-gray-900 text-base mb-2">4. Required for worship, not optional study:</h4>
          <p class="text-gray-700 text-sm">Recitation from memory rather than reading from a page — is standard in the five daily prayers and in leading congregational prayer (imamate). A working level of memorization is functionally necessary for religious practice, not just academic interest.</p>
        </div>
        <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
          <h4 class="font-bold text-gray-900 text-base mb-2">5. Operates at a global scale:</h4>
          <p class="text-gray-700 text-sm">Full-hifz academies operate across South Asia, the Middle East, Southeast Asia, Africa, and Muslim communities in Europe and North America. Countries such as Indonesia where Arabic is not a native language nonetheless produce large numbers of hafiz annually, demonstrating that the practice is sustained by devotional commitment rather than linguistic familiarity. International competitions, such as the Dubai International Holy Quran Award, draw memorizers from dozens of countries each year, judged on both accuracy and tajwid.</p>
        </div>
      </div>
    </section>

    <!-- How Long Does It Take to Memorize the Quran? -->
    <section id="how-long-does-it-take-to-memorize-the-quran" class="scroll-mt-28">
      <h2 class="text-2xl sm:text-3xl font-bold text-primary font-heading mb-4">How Long Does It Take to Memorize the Quran?</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        There is no single answer — completion time depends heavily on age, schedule intensity, and prior Arabic exposure. Approximate ranges reported by hifz institutions:
      </p>

      <div class="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-sm bg-white">
        <table class="w-full text-left text-sm text-gray-700 border-collapse">
          <thead>
            <tr class="bg-[#0A3A2F]/5 border-b border-gray-200 text-xs font-bold text-primary uppercase tracking-wider">
              <th class="p-4 border-r border-gray-200">Path</th>
              <th class="p-4 border-r border-gray-200">Typical Duration</th>
              <th class="p-4">Notes</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Full-time child student (dedicated hifz madrasa)</td><td class="p-4 border-r border-gray-100 font-semibold text-primary">1–3 years</td><td class="p-4">Several hours daily, often replacing or supplementing general schooling</td></tr>
            <tr class="bg-gray-50/50"><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Part-time adult learner</td><td class="p-4 border-r border-gray-100 font-semibold text-primary">3–7+ years</td><td class="p-4">Evenings/weekends alongside work or other study</td></tr>
            <tr><td class="p-4 font-bold text-gray-900 border-r border-gray-100">Intensive residential program</td><td class="p-4 border-r border-gray-100 font-semibold text-primary">Under 1 year</td><td class="p-4">Rare; requires many hours daily and prior Quranic reading fluency</td></tr>
          </tbody>
        </table>
      </div>

      <p class="text-gray-700 leading-relaxed mt-4">
        Two factors matter more than raw memorization speed. The first is <em>muraja'ah</em> (revision) memorizing the text once is not the same as retaining it permanently, and hafiz typically continue structured review for years, sometimes for life, to prevent forgetting. The second is prior fluency in reading Arabic script (even without full comprehension); students who can already read Quranic Arabic accurately tend to memorize substantially faster than those learning the script and the text simultaneously.
      </p>
    </section>

    <!-- How the Quran Influenced Civilization -->
    <section id="how-the-quran-influenced-civilization" class="scroll-mt-28">
      
      <h2 class="text-2xl sm:text-3xl font-bold text-primary font-heading mb-4">How the Quran Influenced Civilization</h2>
      <img src="/blogs/Quran/what-is-quran/how-the-quran-influenced-civilization.webp" alt="how-the-quran-influenced-civilization" class="w-full h-64 object-cover rounded-2xl mb-6" />
      <p class="text-gray-700 leading-relaxed mb-6">The Quran's influence extends well beyond religious practice, shaping several fields across the history of the Islamic world.</p>

      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p><strong class="text-primary">1. Arabic language:</strong> The Quran functions as the linguistic benchmark for Classical Arabic; its grammar, vocabulary, and style became the standard against which formal Arabic has been measured for over a millennium, contributing directly to the spread and standardization of the language across a geographically vast and linguistically diverse region.</p>
        <p><strong class="text-primary">2. Education:</strong> Quran memorization schools (maktab, kuttab) formed the base of literacy education across much of the historical Islamic world, and Quranic study was foundational to institutions that grew into some of the world's oldest continuously operating universities including the University of Al-Qarawiyyin in Fez, Morocco (founded 859 CE) and Cairo's Al-Azhar (founded 970 CE), both of which began as centers of Quranic and religious learning before expanding into broader scholarship.</p>
        <p><strong class="text-primary">3. Literature:</strong> Quranic rhetorical style including its distinctive rhymed prose (saj') influenced centuries of subsequent Arabic literary and poetic tradition, shaping prose style well beyond religious writing.</p>
        <p><strong class="text-primary">4. Calligraphy:</strong> Because Islamic tradition generally discourages figurative depiction in religious art, Arabic calligraphy developed as the primary visual art form associated with the faith, largely in service of reproducing the Quran itself. Distinct scripts including Kufic, Naskh, and Thuluth were developed specifically for Quranic manuscripts and later extended into architectural and decorative use.</p>
        <p><strong class="text-primary">5. Architecture:</strong> Quranic verses appear as structural ornamentation in some of the most significant buildings in Islamic history, including the Dome of the Rock in Jerusalem and the Alhambra in Granada. Mosque design itself from the mihrab's orientation toward Mecca to acoustic considerations for recitation developed in direct response to how the Holy Quran is read and heard in communal worship.</p>
        <p><strong class="text-primary">6. Law:</strong> Quranic verses form the primary textual basis for Islamic jurisprudence (fiqh), which developed into distinct legal schools (madhahib) including the Hanafi, Maliki, Shafi'i, and Hanbali traditions in Sunni Islam that shaped governance, commerce, and civil law across a succession of Islamic empires and continue to inform legal systems in parts of the world today.</p>
      </div>
    </section>

    <!-- A Beginner's Roadmap -->
    <section id="beginners-roadmap" class="scroll-mt-28">
      <h2 class="text-2xl sm:text-3xl font-bold text-primary font-heading mb-4">A Beginner's Roadmap</h2>
      <p class="text-gray-700 leading-relaxed mb-6">For readers approaching the Quran for the first time:</p>

      <div class="space-y-4">
        <div class="flex items-start gap-4 p-5 bg-[#0A3A2F]/5 rounded-2xl">
          <div class="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center shrink-0">1</div>
          <div>
            <h4 class="font-bold text-gray-900 text-base mb-1">Choose a reputable translation</h4>
            <p class="text-gray-700 text-sm">Rather than a rigid, overly literal one. Abdel Haleem's Oxford translation and The Clear Quran are commonly recommended starting points.</p>
          </div>
        </div>
        <div class="flex items-start gap-4 p-5 bg-[#0A3A2F]/5 rounded-2xl">
          <div class="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center shrink-0">2</div>
          <div>
            <h4 class="font-bold text-gray-900 text-base mb-1">Avoid reading strictly cover-to-cover</h4>
            <p class="text-gray-700 text-sm">Many newcomers begin with shorter, self-contained surahs Al-Fatiha, Al-Ikhlas, Ya-Sin — rather than the lengthy, legally focused Al-Baqarah.</p>
          </div>
        </div>
        <div class="flex items-start gap-4 p-5 bg-[#0A3A2F]/5 rounded-2xl">
          <div class="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center shrink-0">3</div>
          <div>
            <h4 class="font-bold text-gray-900 text-base mb-1">Pair reading with tafsir (commentary)</h4>
            <p class="text-gray-700 text-sm">For historical context, particularly for verses referencing specific 7th-century events.</p>
          </div>
        </div>
        <div class="flex items-start gap-4 p-5 bg-[#0A3A2F]/5 rounded-2xl">
          <div class="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center shrink-0">4</div>
          <div>
            <h4 class="font-bold text-gray-900 text-base mb-1">Note the Makki/Madani distinction</h4>
            <p class="text-gray-700 text-sm">While reading, since it shapes the tone and legal weight of a given passage.</p>
          </div>
        </div>
      </div>
    </section>

  </div>
`,
    author: "Al-Muslims Editorial Team",
    authorImg: "https://i.pravatar.cc/150?u=quran-guide",
    date: "2026-07-31",
    displayDate: "July 31, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1200",
    color: "#0A3A2F",
    level: "Beginner",
    tableOfContents: [
      { title: "Quick Answer", id: "quick-answer" },
      { title: "Quick Facts", id: "quick-facts" },
      { title: "Revelation Timeline (610–632 CE)", id: "revelation-timeline" },
      { title: "What Does the Word \"Quran\" Mean?", id: "what-does-the-word-quran-mean" },
      { title: "Who Revealed the Quran — and Who Wrote It?", id: "who-revealed-the-quran-and-who-wrote-it" },
      { title: "Why Was the Quran Revealed?", id: "why-was-the-quran-revealed" },
      { title: "How Was the Quran Preserved?", id: "how-was-the-quran-preserved" },
      { title: "How Is the Quran Structured?", id: "how-is-the-quran-structured" },
      { title: "What Language Is It In?", id: "what-language-is-it-in" },
      { title: "What Does the Quran Teach?", id: "what-does-the-quran-teach" },
      { title: "Quran vs. Bible", id: "quran-vs-bible" },
      { title: "Quran, Hadith, and Sunnah", id: "quran-hadith-and-sunnah" },
      { title: "How Muslims Use the Quran Today", id: "how-muslims-use-the-quran-today" },
      { title: "Recitation and Study", id: "recitation-and-study" },
      { title: "Common Misconceptions", id: "common-misconceptions" },
      { title: "Why Is the Quran Still Memorized Today?", id: "why-is-the-quran-still-memorized-today" },
      { title: "How Long Does It Take to Memorize the Quran?", id: "how-long-does-it-take-to-memorize-the-quran" },
      { title: "How the Quran Influenced Civilization", id: "how-the-quran-influenced-civilization" },
      { title: "A Beginner's Roadmap", id: "beginners-roadmap" },
      { title: "Frequently Asked Questions", id: "faqs" }
    ],
    faqs: [
      {
        q: "What is the Quran in simple terms?",
        a: "Islam's holy book believed to be the literal word of God, revealed to Muhammad (Sallallahu alaihi wasallam), covering belief, worship, law, and daily conduct."
      },
      {
        q: "Who wrote the Quran?",
        a: "According to Islamic belief, no human authored it. Muhammad (Sallallahu alaihi wasallam) received it through revelation; scribes recorded it, and it was compiled into a single book after his death."
      },
      {
        q: "Who revealed the Quran to Muhammad (Sallallahu alaihi wasallam)?",
        a: "The angel Gabriel (Jibril), transmitting the words of God."
      },
      {
        q: "Why was the Quran revealed?",
        a: "To restore monotheistic belief, provide moral and legal guidance, and confirm and correct earlier revelations given to Moses and Jesus."
      },
      {
        q: "What language was the Quran written in?",
        a: "Classical Arabic, in the dialect of the Quraysh tribe."
      },
      {
        q: "How many surahs are in the Quran?",
        a: "114, arranged primarily from longest to shortest."
      },
      {
        q: "How many words are in the Quran?",
        a: "Approximately 77,000–78,000 in the original Arabic; estimates vary slightly by counting method."
      },
      {
        q: "What is a Mushaf?",
        a: "The physical written copy of the Quran, as distinct from the revelation itself."
      },
      {
        q: "What is the difference between Makki and Madani surahs?",
        a: "Makki surahs were revealed in Mecca and emphasize belief and the afterlife. Madani surahs were revealed in Medina and emphasize law and community."
      },
      {
        q: "What is the difference between the Quran and the Sunnah?",
        a: "The Quran is God's direct speech. The Sunnah is Muhammad's (Sallallahu alaihi wasallam) recorded example, used to interpret and apply the Quran."
      },
      {
        q: "What is the difference between the Quran and Hadith?",
        a: "Hadith are individually recorded, separately graded reports of Muhammad's (Sallallahu alaihi wasallam) sayings and actions. The Quran is treated as a single, verbatim revelation."
      },
      {
        q: "Is the Quran older than the Bible?",
        a: "No. Both the Hebrew Bible and the New Testament predate the Quran, in some cases by close to a millennium."
      },
      {
        q: "Has the Quran remained unchanged?",
        a: "Yes. Muslims believe so, citing continuous oral memorization since the 7th century alongside early manuscript evidence. Academic textual criticism of manuscript variants continues."
      },
      {
        q: "Can non-Muslims read the Quran?",
        a: "Yes. There is no restriction on reading a translation or the Arabic text for study purposes."
      },
      {
        q: "Is the Quran difficult to understand for beginners?",
        a: "It can be, particularly the legally dense Madani surahs. A paired commentary (tafsir) is commonly recommended."
      },
      {
        q: "Which Quran translation is easiest for beginners?",
        a: "The Clear Quran (Khattab) and Abdel Haleem's Oxford translation are frequently recommended for accessible modern English."
      },
      {
        q: "Is the Quran arranged in the order it was revealed?",
        a: "No. It is arranged primarily by surah length, not revelation chronology."
      },
      {
        q: "What is the shortest surah in the Quran?",
        a: "Al-Kawthar, with three verses."
      },
      {
        q: "What is the longest surah in the Quran?",
        a: "Al-Baqarah, with 286 verses."
      },
      {
        q: "Does the Quran mention Jesus?",
        a: "Yes, in more than 20 verses. He is honored as a prophet and Messiah, though the Quran does not affirm his divinity."
      },
      {
        q: "Does the Quran mention science?",
        a: "The Quran describes natural phenomena that some modern commentators interpret as compatible with scientific understanding. This remains a subject of ongoing theological and academic discussion."
      },
      {
        q: "What is Tajwid?",
        a: "The set of rules governing correct pronunciation and articulation when reciting the Quran aloud."
      },
      {
        q: "What is Hafiz?",
        a: "A person who has memorized the entire Quran."
      },
      {
        q: "How long does it take to read the entire Quran?",
        a: "This varies by reader. Many Muslims complete a full reading (khatm) over the 30 days of Ramadan, using the 30-juz structure designed for that purpose."
      },
      {
        q: "How long does it take to memorize the Quran?",
        a: "It varies significantly. Full-time child students in dedicated hifz programs often complete memorization in 1–3 years; part-time adult learners typically take 3–7 years or longer. Ongoing revision (muraja'ah) continues well after initial memorization to maintain retention."
      },
      {
        q: "Why do Muslims still memorize the Quran when printed copies are widely available?",
        a: "Memorization predates the written text, serves as a continuing safeguard against textual error, remains foundational to Islamic religious education, and is functionally required for leading or performing the five daily prayers from memory."
      },
      {
        q: "How did the Quran influence Islamic civilization?",
        a: "Its influence extends to Arabic language standardization, the founding of early Islamic universities, Arabic literary style, the development of calligraphy as a major art form, mosque architecture, and the legal schools (madhahib) underlying Islamic jurisprudence."
      }
    ]
  },
  {
    id: "1",
    slug: "lessons-from-surah-al-kahf",
    title: "Lessons from Surah Al-Kahf for Our Daily Lives",
    category: "Quran",
    categoryId: "quran",
    excerpt: "Discover timeless lessons from the Quran that guide our daily decisions and protect us from the trials of life.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-6">
        Surah Al-Kahf is the 18th chapter of the Holy Quran, which the Prophet Muhammad ﷺ recommended Muslims to recite every Friday. It contains four powerful stories that offer eternal lessons for navigating the tests of modern life.
      </p>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">1. The People of the Cave (The Trial of Faith)</h2>
      <p class="mb-6">
        The story of the young believers who fled their pagan kingdom to preserve their faith. Allah granted them refuge in a cave and put them to sleep for over 300 years. This story teaches us the value of companionship in faith and that Allah is the ultimate protector of those who stand firm in their belief.
      </p>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">2. The Owner of the Two Gardens (The Trial of Wealth)</h2>
      <p class="mb-6">
        A tale of two men: one blessed with immense wealth and beautiful gardens who became proud and ungrateful, and another who possessed very little but remained grateful. Eventually, the gardens were destroyed, leaving the wealthy man in deep regret. This lesson reminds us that wealth is a temporary blessing and a test of gratitude.
      </p>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">3. Moses and Al-Khidr (The Trial of Knowledge)</h2>
      <p class="mb-6">
        Prophet Moses believed he was the most knowledgeable person on Earth. Allah directed him to meet Al-Khidr, who performed actions that seemed baffling at first but revealed divine wisdom in the end. This teaches us humility in seeking knowledge and patience with Allah's divine decree, which we might not always understand immediately.
      </p>

      <blockquote class="border-l-4 border-secondary pl-4 py-2 my-6 italic bg-primary/5 dark:bg-card text-zinc-600 dark:text-zinc-400">
        "Whoever recites Surah Al-Kahf on the day of Friday, there will be a light shining for him between the two Fridays." — Prophet Muhammad ﷺ (Sunan al-Kubra)
      </blockquote>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">Conclusion</h2>
      <p class="mb-6">
        Reciting Surah Al-Kahf is not just a weekly ritual, but a source of light and guidance. It offers practical reminders to protect our faith, recognize that wealth is a test, keep seeking knowledge with humility, and use power justly for the sake of Allah.
      </p>
    `,
    author: "Shaykh Ahmed Saeed",
    authorImg: "https://i.pravatar.cc/150?u=ahmed",
    date: "2026-06-12",
    displayDate: "June 12, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800",
    color: "#0A3A2F",
    level: "Beginner"
  },
  {
    id: "2",
    slug: "understanding-tafsir-methodology",
    title: "Understanding Tafsir: Classical vs. Modern Methodologies",
    category: "Quran",
    categoryId: "quran",
    excerpt: "An in-depth look at how scholars interpret the Holy Quran, highlighting differences between classical schools and contemporary approaches.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-6">
        The Quran is the foundational text of Islam, believed by Muslims to be the literal word of God revealed to the Prophet Muhammad ﷺ. To comprehend its deep theological, jurisprudential, and moral instructions, the science of <strong>Tafsir</strong> (exegesis) was established.
      </p>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">What is Tafsir?</h2>
      <p class="mb-6">
        Tafsir literally means "explanation" or "interpretation." In Islamic scholarship, it is the systematic study aimed at understanding the Quranic text, explaining its meanings, clarifying its legal rulings, and uncovering the wisdom behind its revelation (Asbab al-Nuzul).
      </p>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">Classical Tafsir Methodologies</h2>
      <p class="mb-4">
        Classical Tafsir is generally divided into two main categories:
      </p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Tafsir bi'l-Ma'thur (Tradition-based):</strong> This is interpretation of the Quran using the Quran itself, followed by Hadith, and the explanations of the Sahaba (companions) and Tabi'un. The most famous example is <em>Tafsir al-Tabari</em> and <em>Tafsir Ibn Kathir</em>.
        </li>
        <li>
          <strong>Tafsir bi'r-Ra'y (Reason-based):</strong> This approach utilizes rational analysis, Arabic linguistics, and theological speculation alongside traditional reports. A prominent example is <em>Tafsir al-Kabir</em> by Imam Fakhr al-Din al-Razi.
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">Modern Approaches to Exegesis</h2>
      <p class="mb-6">
        In the 19th and 20th centuries, modern scholars began writing Tafsirs aimed at addressing contemporary scientific, social, and political challenges. Thinkers like Muhammad Abduh, Rashid Rida, and Sayyid Qutb sought to connect Quranic teachings with modern societal reform, science, and anti-colonial movements, emphasizing the dynamic relevance of the text in the modern age.
      </p>

      <blockquote class="border-l-4 border-secondary pl-4 py-2 my-6 italic bg-primary/5 dark:bg-card text-zinc-600 dark:text-zinc-400">
        "The best of you are those who learn the Quran and teach it." — Prophet Muhammad ﷺ (Sahih al-Bukhari)
      </blockquote>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">Conclusion</h2>
      <p class="mb-6">
        Whether studying classical exegesis to understand traditional jurisprudence or modern works to connect the scripture with contemporary lifestyle issues, the science of Tafsir remains a vital bridge for believers trying to live their lives according to divine wisdom.
      </p>
    `,
    author: "Dr. Bilal Abdul Karim",
    authorImg: "https://i.pravatar.cc/150?u=bilal",
    date: "2026-06-10",
    displayDate: "June 10, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1590076175582-459437ff7087?q=80&w=800",
    color: "#1F9E77",
    level: "Advanced"
  },
  {
    id: "3",
    slug: "preserving-the-prophetic-legacy",
    title: "Preserving the Legacy: The Compilation of Hadith",
    category: "Aqeedah",
    categoryId: "aqeedah",
    excerpt: "Discover the rigorous criteria and historic efforts made by early scholars like Imam Bukhari and Sheikh al-Kulayni to document and authenticate hadiths.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-6">
        After the Quran, the Sunnah (sayings and actions of the Prophet ﷺ) represents the second source of Islamic law and spirituality. But how did these traditions travel from verbal narrations in 7th-century Arabia to the structured volumes we read today?
      </p>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">The Need for Compilation</h2>
      <p class="mb-6">
        During the lifetime of the Prophet ﷺ, the primary focus was compiling the Quran. While some companions wrote down sayings on parchments, most hadiths were memorized. By the late 1st century Hijri, as the generation of companions passed away and political factions arose, the necessity to officially document and verify sayings grew critical.
      </p>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">The Sunni Methodology (Imam Bukhari & Muslim)</h2>
      <p class="mb-4">
        Imam Muhammad al-Bukhari (d. 256 AH) spent 16 years traveling the Islamic world to compile his <em>Sahih</em>. He set incredibly rigorous standards:
      </p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Linguistic and Moral Integrity:</strong> The narrator must be truthful, religious, and have a strong memory.
        </li>
        <li>
          <strong>Continuous Chain (Isnad):</strong> Every narrator in the chain must have explicitly met the person they narrated from.
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">The Shia Methodology (Sheikh al-Kulayni & Saduq)</h2>
      <p class="mb-6">
        In the Shia tradition, hadith compilation centered around documenting the teachings of the Prophet ﷺ and the Twelve Imams (Ahl al-Bayt). Sheikh Muhammad al-Kulayni (d. 329 AH) compiled <em>Al-Kafi</em>, selecting over 16,000 narrations to preserve theology and law during the period of Minor Occultation. Shia scholars categorized narrations by examining the trustworthiness of the chain back to an Imam or the Prophet.
      </p>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">Conclusion</h2>
      <p class="mb-6">
        The rigorous methodology of early Islamic collectors created a sophisticated science of biographical evaluation (Ilm al-Rijal). This intellectual heritage remains one of the most remarkable documentation efforts in human history.
      </p>
    `,
    author: "Prof. Zainab Al-Alawi",
    authorImg: "https://i.pravatar.cc/150?u=zainab",
    date: "2026-06-05",
    displayDate: "June 5, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=800",
    color: "#6B9FBC",
    level: "Intermediate"
  },
  {
    id: "4",
    slug: "spirituality-tazkiyah-heart",
    title: "Tazkiyah: The Spiritual Art of Purifying the Heart",
    category: "Aqeedah",
    categoryId: "aqeedah",
    excerpt: "Exploring the concepts of Tazkiyah (purification) and Ihsan (perfection) in daily life to achieve inner peace and connection with the Creator.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-6">
        In our fast-paced modern world, it is easy to become spiritually exhausted. The Islamic tradition offers a direct antidote: the science of <strong>Tazkiyah</strong>, or self-purification.
      </p>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">What is Tazkiyah?</h2>
      <p class="mb-6">
        Tazkiyah literally means "purification" and "growth." It refers to cleansing the soul from spiritual diseases like pride, jealousy, greed, and insincerity, while cultivating virtues such as humility, gratitude, patience, and love for God.
      </p>

      <blockquote class="border-l-4 border-secondary pl-4 py-2 my-6 italic bg-primary/5 dark:bg-card text-zinc-600 dark:text-zinc-400">
        "He has succeeded who purifies it, and he has failed who instills it [with corruption]." — Surah Ash-Shams (91:9-10)
      </blockquote>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">Practical Steps for Tazkiyah in Daily Life</h2>
      <p class="mb-4">
        To start a spiritual detox, scholars suggest focusing on three core areas:
      </p>
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>
          <strong>Muraqabah (Mindfulness):</strong> Becoming conscious that Allah is constantly observing your actions, thoughts, and intentions.
        </li>
        <li>
          <strong>Muhasabah (Self-Accounting):</strong> Reviewing your actions daily before going to sleep to seek forgiveness for shortcomings and express gratitude for good deeds.
        </li>
        <li>
          <strong>Dhikr (Remembrance):</strong> Daily meditation and recitation of prayers to keep the tongue and heart connected with the Creator.
        </li>
      </ol>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">Conclusion</h2>
      <p class="mb-6">
        Tazkiyah is not about isolation from the world; it is about engaging with the world while keeping your heart detached from material desires. It is the path to achieving a sound heart (Qalb Salim).
      </p>
    `,
    author: "Sheikh Omar Farooq",
    authorImg: "https://i.pravatar.cc/150?u=omar",
    date: "2026-05-28",
    displayDate: "May 28, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800",
    color: "#E89E54",
    level: "Intermediate"
  },
  {
    id: "5",
    slug: "migration-to-madinah-turning-point",
    title: "The Migration to Madinah: A Turning Point",
    category: "Seerah",
    categoryId: "seerah",
    excerpt: "The event that changed the course of Islamic history forever, establishing the first Islamic state.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-6">
        The Hijrah (Migration) of the Prophet Muhammad ﷺ and his companions from Mecca to Yathrib (later renamed Madinah) is one of the most critical events in human history. It marks the beginning of the Islamic Hijri calendar.
      </p>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">The Context of Hijrah</h2>
      <p class="mb-6">
        For thirteen years, the Muslims in Mecca faced intense persecution, boycotts, and torture. Realizing that the Quraysh elite were planning to assassinate him, the Prophet ﷺ received divine instruction to migrate to Yathrib, whose representatives had pledged loyalty to him.
      </p>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">The Cave of Thawr</h2>
      <p class="mb-6">
        Accompanied by his loyal companion Abu Bakr, the Prophet ﷺ hid in the Cave of Thawr for three days. When the search parties reached the mouth of the cave, Abu Bakr feared they would be caught. The Prophet ﷺ comforted him saying, "Do not grieve; indeed Allah is with us." (Quran 9:40).
      </p>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">Establishing the New Society</h2>
      <p class="mb-6">
        Upon arriving in Madinah, the Prophet ﷺ established brotherhood between the Meccan immigrants (Muhajirun) and the local helpers (Ansar). He built the Prophetic Mosque and drafted the Covenant of Madinah, securing religious freedom and co-existence for all citizens, including the Jewish tribes.
      </p>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">Conclusion</h2>
      <p class="mb-6">
        The Migration was not a flight from fear, but a strategic step to construct a secure and just community. It stands as an eternal symbol of sacrifice, reliance on Allah, planning, and brotherhood.
      </p>
    `,
    author: "Shaykh Farhan Malik",
    authorImg: "https://i.pravatar.cc/150?u=farhan",
    date: "2026-05-17",
    displayDate: "May 17, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800",
    color: "#0A3A2F",
    level: "Intermediate"
  },
  {
    id: "6",
    slug: "islamic-rulings-modern-financial-issues",
    title: "Islamic Rulings on Modern Financial Issues",
    category: "Fiqh",
    categoryId: "fiqh",
    excerpt: "Learn how Islam guides our financial transactions and business contracts today, including banking and investments.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-6">
        Islamic commercial law (Fiqh al-Mu'amalat) governs financial transactions. As modern finance grows more complex, Islamic scholars utilize principles from Quran and Sunnah to determine the permissibility of new financial instruments.
      </p>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">Core Principles of Islamic Finance</h2>
      <p class="mb-4">
        Islamic finance differs fundamentally from conventional finance by enforcing three major prohibitions:
      </p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Riba (Interest):</strong> Any guaranteed premium charged on loans is strictly prohibited. Money is considered a medium of exchange, not an asset that generates wealth on its own.
        </li>
        <li>
          <strong>Gharar (Uncertainty):</strong> Contracts that involve excessive ambiguity or speculation are void. Both parties must have clear knowledge of terms and outcomes.
        </li>
        <li>
          <strong>Maysir (Gambling):</strong> Profit must be earned through real value creation, not games of chance.
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">Halal Alternatives</h2>
      <p class="mb-6">
        Instead of interest-bearing loans, Islamic finance relies on profit-and-loss sharing structures (Mudarabah and Musharakah) and cost-plus sales (Murabaha). Modern Islamic banks use these tools to offer home financing, auto financing, and investment funds.
      </p>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">Conclusion</h2>
      <p class="mb-6">
        The ultimate goal of Islamic economics is justice, shared risk, and societal welfare. Exploring modern halal investment avenues helps Muslims keep their earnings pure while contributing to ethical economic growth.
      </p>
    `,
    author: "Shaykh Assim Al-Hakeem",
    authorImg: "https://i.pravatar.cc/150?u=assim",
    date: "2026-05-16",
    displayDate: "May 16, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=800",
    color: "#0A3A2F",
    level: "Advanced"
  },
  {
    id: "7",
    slug: "powerful-duas-for-every-situation",
    title: "Powerful Duas for Every Situation",
    category: "Duas",
    categoryId: "duas",
    excerpt: "A collection of authentic, powerful duas from the Quran and Sunnah for everyday challenges and peace of mind.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-6">
        Supplication (Dua) is described by the Prophet Muhammad ﷺ as the "brain of worship." It is a direct channel of communication between the servant and the Creator, offering comfort in times of joy and distress.
      </p>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">1. Dua for Worry and Grief</h2>
      <p class="mb-4">
        The Prophet ﷺ used to make this supplication for relief from distress:
      </p>
      <div class="bg-[#FFFCF6] border-l-4 border-secondary p-6 rounded-2xl mb-6">
        <p class="font-arabic text-2xl text-gray-900 text-center mb-3" dir="rtl">
          اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحُزْنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ
        </p>
        <p class="text-sm italic text-gray-700 text-center">
          "O Allah, I seek refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being overpowered by men." (Sahih al-Bukhari)
        </p>
      </div>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">2. Dua for Protection</h2>
      <p class="mb-4">
        To seek protection from harm, the Prophet ﷺ recommended reciting this three times every morning and evening:
      </p>
      <div class="bg-[#FFFCF6] border-l-4 border-secondary p-6 rounded-2xl mb-6">
        <p class="font-arabic text-2xl text-gray-900 text-center mb-3" dir="rtl">
          بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ
        </p>
        <p class="text-sm italic text-gray-700 text-center">
          "In the name of Allah, with whose name nothing can cause harm on Earth or in the heaven, and He is the All-Hearing, the All-Knowing." (Sunan Abi Dawud)
        </p>
      </div>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">Conclusion</h2>
      <p class="mb-6">
        Consistently making dua keeps our hearts humble and connected to Allah. By memorizing these authentic supplications and reciting them with deep conviction, we can find true peace and divine protection.
      </p>
    `,
    author: "Ustadhah Aisha Khalid",
    authorImg: "https://i.pravatar.cc/150?u=aisha",
    date: "2026-05-15",
    displayDate: "May 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800",
    color: "#0A3A2F",
    level: "Beginner"
  },
  {
    id: "8",
    slug: "understanding-tawheed-right-way",
    title: "Understanding Tawheed the Right Way",
    category: "Aqeedah",
    categoryId: "aqeedah",
    excerpt: "Strengthen your belief in the Oneness of Allah with absolute clarity, avoiding common misconceptions.",
    content: `
      <p class="lead text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-6">
        Tawheed is the core foundation of the Islamic creed. It is the belief in the absolute Oneness, uniqueness, and supremacy of Allah, the Creator of the universe.
      </p>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">The Three Divisions of Tawheed</h2>
      <p class="mb-4">
        To understand Tawheed completely, scholars explain it through three main categories:
      </p>
      <ul class="list-disc pl-6 mb-6 space-y-4">
        <li>
          <strong>Tawheed ar-Rububiyyah (Oneness of Lordship):</strong> Believing that Allah is the sole Creator, Provider, Maintainer, and Master of everything in existence. None shares in His acts of creation or control.
        </li>
        <li>
          <strong>Tawheed al-Uluhiyyah (Oneness of Worship):</strong> Directing all acts of worship — such as prayer, fasting, sacrifice, fear, and hope — exclusively to Allah alone, without assigning any partners, intercessors, or rivals.
        </li>
        <li>
          <strong>Tawheed al-Asma was-Sifat (Oneness of Names and Attributes):</strong> Affirming the names and attributes that Allah and His Messenger ﷺ have established for Him, without distortion, negation, comparison, or asking "how".
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-primary dark:text-secondary mt-8 mb-4">Why Tawheed Matters</h2>
      <p class="mb-6">
        Tawheed is the message with which all prophets were sent. It frees the human mind from superstition and submission to created beings, guiding the heart to find peace and purpose in serving the only One worthy of worship.
      </p>
    `,
    author: "Shaykh Abu Bakr Zoud",
    authorImg: "https://i.pravatar.cc/150?u=abubakr",
    date: "2026-05-14",
    displayDate: "May 14, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800",
    color: "#E89E54",
    level: "Intermediate"
  }
];
