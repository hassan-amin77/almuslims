import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — AlMuslims",
  description:
    "Find answers to frequently asked questions about AlMuslims, our authentic Islamic resources, and platform features.",
  openGraph: {
    title: "Frequently Asked Questions — AlMuslims",
    description:
      "Find answers to frequently asked questions about AlMuslims, our authentic Islamic resources, and platform features.",
  },
  twitter: {
    title: "Frequently Asked Questions — AlMuslims",
    description:
      "Find answers to frequently asked questions about AlMuslims, our authentic Islamic resources, and platform features.",
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
