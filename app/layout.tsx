import type { Metadata, Viewport } from "next";
import "./globals.css";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import GlobalSearch from "@/components/layout/GlobalSearch";
import { OrganizationAndWebsiteJsonLd } from "@/components/seo/JsonLd";

export const viewport: Viewport = {
  themeColor: "#0A3A2F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://almuslims.com"),
  title: {
    default: "Quran, Duas, Seerah & Islamic Knowledge | AlMuslims",
    template: "%s",
  },
  description:
    "Discover the Quran, Names of Allah, Seerah, authentic Duas, and meaningful Islamic knowledge designed to help you learn, reflect, and strengthen your faith.",
  applicationName: "AlMuslims",
  authors: [{ name: "AlMuslims Scholars & Research Team" }],
  generator: "Next.js",
  icons: {
    icon: "/favicon.jpeg",
  },
  creator: "AlMuslims",
  publisher: "AlMuslims",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AlMuslims",
    title: "Quran, Duas, Seerah & Islamic Knowledge | AlMuslims",
    description:
      "Discover the Quran, Names of Allah, Seerah, authentic Duas, and meaningful Islamic knowledge designed to help you learn, reflect, and strengthen your faith.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "AlMuslims - Quran, Duas, Seerah & Islamic Knowledge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quran, Duas, Seerah & Islamic Knowledge | AlMuslims",
    description:
      "Discover the Quran, Names of Allah, Seerah, authentic Duas, and meaningful Islamic knowledge designed to help you learn, reflect, and strengthen your faith.",
    images: ["/logo.png"],
    creator: "@officialalmuslims",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <OrganizationAndWebsiteJsonLd />
        <link rel="help" href="/llms.txt" type="text/markdown" title="LLM Site Summary" />
      </head>
      <body suppressHydrationWarning className="flex flex-col min-h-screen">
        <StickyHeader />
        <main className="flex-1 w-full pt-[124px] md:pt-[110px]">
          {children}
        </main>
        <Footer />
        <GlobalSearch />
      </body>
    </html>
  );
}
