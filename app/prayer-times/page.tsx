import type { Metadata } from "next";
import PrayerTimesPageClient from "./PrayerTimesPageClient";

export const metadata: Metadata = {
  title: "Prayer Times — AlMuslims",
  description: "Accurate daily and monthly prayer times for your location.",
  alternates: {
    canonical: "/prayer-times",
  },
  openGraph: {
    title: "Prayer Times — AlMuslims",
    description: "Accurate daily and monthly prayer times for your location.",
    url: "/prayer-times",
  },
};

export default function PrayerTimesPage() {
  return <PrayerTimesPageClient />;
}
