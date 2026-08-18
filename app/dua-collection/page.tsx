import type { Metadata } from "next";
import DuasPageClient from "./DuasPageClient";

export const metadata: Metadata = {
  title: "Dua & Azkar Collection – Daily Islamic Supplications",
  description: "Explore authentic Dua and Azkar for daily life, morning and evening remembrance, prayer, protection, forgiveness, and spiritual growth in Islam.",
  alternates: {
    canonical: "/dua-collection",
  },
  openGraph: {
    title: "Dua & Azkar Collection – Daily Islamic Supplications",
    description: "Explore authentic Dua and Azkar for daily life, morning and evening remembrance, prayer, protection, forgiveness, and spiritual growth in Islam.",
    url: "/dua-collection",
  },
};

export default function DuasPage() {
  return <DuasPageClient />;
}
