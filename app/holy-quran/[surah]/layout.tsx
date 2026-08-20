import type { Metadata } from "next";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ surah: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ surah: string }>;
}): Promise<Metadata> {
  const { surah } = await params;
  const formattedTitle = surah
    .replace(/^surah-/, "Surah ")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const title = `${formattedTitle} — Holy Quran | AlMuslims`;
  const description = `Read and reflect on ${formattedTitle} with Arabic text, transliteration, and authentic English translation on AlMuslims.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/holy-quran/${surah}`,
    },
    openGraph: {
      title,
      description,
      url: `/holy-quran/${surah}`,
    },
  };
}

export default function SurahLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
