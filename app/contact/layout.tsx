import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact AlMuslims – Questions, Feedback & Islamic Content",
  description:
    "Contact AlMuslims for questions, feedback, corrections, suggestions, or content inquiries. We welcome your feedback as we work to provide reliable Islamic resources.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact AlMuslims – Questions, Feedback & Islamic Content",
    description:
      "Contact AlMuslims for questions, feedback, corrections, suggestions, or content inquiries. We welcome your feedback as we work to provide reliable Islamic resources.",
    url: "/contact",
  },
  twitter: {
    title: "Contact AlMuslims – Questions, Feedback & Islamic Content",
    description:
      "Contact AlMuslims for questions, feedback, corrections, suggestions, or content inquiries. We welcome your feedback as we work to provide reliable Islamic resources.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
