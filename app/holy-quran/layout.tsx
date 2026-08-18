import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Holy Quran Online – Read in Arabic & Translation| AlMuslims",
  description: "Read Holy Quran online with Arabic, English translations, and authentic Islamic resources. Learn the meaning, teachings, and message of the Quran.",
  alternates: {
    canonical: "/holy-quran",
  },
  openGraph: {
    title: "Holy Quran Online – Read in Arabic & Translation| AlMuslims",
    description: "Read Holy Quran online with Arabic, English translations, and authentic Islamic resources. Learn the meaning, teachings, and message of the Quran.",
    url: "/holy-quran",
  },
};

export default function QuranLayout({ children }: { children: React.ReactNode }) {
  return children;
}
