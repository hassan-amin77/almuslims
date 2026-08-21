import type { Metadata } from "next";
import NamesPageClient from "./NamesPageClient";

export const metadata: Metadata = {
  title: "99 Names of Allah – Asmaul Husna, Meanings & Benefits",
  description:
    "Explore the 99 Names of Allah (Asmaul Husna) with Arabic names, meanings, pronunciation, Quranic references, and lessons for understanding Allah.",
  alternates: {
    canonical: "/names-of-allah",
  },
  openGraph: {
    title: "99 Names of Allah – Asmaul Husna, Meanings & Benefits",
    description:
      "Explore the 99 Names of Allah (Asmaul Husna) with Arabic names, meanings, pronunciation, Quranic references, and lessons for understanding Allah.",
    url: "/names-of-allah",
  },
};

export default function NamesPage() {
  return <NamesPageClient />;
}
