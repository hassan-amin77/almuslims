import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seerah Timeline — AlMuslims",
  description:
    "Explore the key milestones in the blessed life of Prophet Muhammad ﷺ — his spiritual mission, constitutional leadership, and enduring legacy.",
  openGraph: {
    title: "Seerah Timeline — AlMuslims",
    description:
      "Explore the key milestones in the blessed life of Prophet Muhammad ﷺ — his spiritual mission, constitutional leadership, and enduring legacy.",
  },
  twitter: {
    title: "Seerah Timeline — AlMuslims",
    description:
      "Explore the key milestones in the blessed life of Prophet Muhammad ﷺ — his spiritual mission, constitutional leadership, and enduring legacy.",
  },
};

export default function SeerahLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
