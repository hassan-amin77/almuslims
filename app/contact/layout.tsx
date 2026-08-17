import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — AlMuslims",
  description:
    "Get in touch with the AlMuslims team for inquiries, corrections, partnerships, or support regarding our Islamic knowledge platform.",
  openGraph: {
    title: "Contact Us — AlMuslims",
    description:
      "Get in touch with the AlMuslims team for inquiries, corrections, partnerships, or support regarding our Islamic knowledge platform.",
  },
  twitter: {
    title: "Contact Us — AlMuslims",
    description:
      "Get in touch with the AlMuslims team for inquiries, corrections, partnerships, or support regarding our Islamic knowledge platform.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
