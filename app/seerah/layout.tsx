import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seerah of Prophet Muhammad (PBUH) – Life & Lessons Guide",
  description:
    "Learn the Seerah of Prophet Muhammad (PBUH), from his birth and prophethood to major events, character, leadership, and timeless Islamic lessons.",
  alternates: {
    canonical: "/seerah",
  },
  openGraph: {
    title: "Seerah of Prophet Muhammad (PBUH) – Life & Lessons Guide",
    description:
      "Learn the Seerah of Prophet Muhammad (PBUH), from his birth and prophethood to major events, character, leadership, and timeless Islamic lessons.",
    url: "/seerah",
  },
  twitter: {
    title: "Seerah of Prophet Muhammad (PBUH) – Life & Lessons Guide",
    description:
      "Learn the Seerah of Prophet Muhammad (PBUH), from his birth and prophethood to major events, character, leadership, and timeless Islamic lessons.",
  },
};

export default function SeerahLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
