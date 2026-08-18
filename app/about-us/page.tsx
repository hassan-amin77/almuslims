import type { Metadata } from "next";
import AboutContent from "@/components/modules/about/AboutContent";

export const metadata: Metadata = {
  title: "About AlMuslims – Authentic Islamic Knowledge & Guidance",
  description:
    "Learn about AlMuslims, an Islamic knowledge platform providing reliable Quran, Hadith, Dua, Seerah, prayer, and Islamic resources for Muslims worldwide.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About AlMuslims – Authentic Islamic Knowledge & Guidance",
    description:
      "Learn about AlMuslims, an Islamic knowledge platform providing reliable Quran, Hadith, Dua, Seerah, prayer, and Islamic resources for Muslims worldwide.",
    url: "/about-us",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
