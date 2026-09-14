import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageViewTracker from "@/components/analytics/PageViewTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Snowstorm Herald",
  description: "A fictional demo news site built for Snowstorm 2026 — real-time editorial analytics.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-neutral-50 dark:bg-neutral-950">
        <Header />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">{children}</main>
        <Footer />
        {/*
          Deliberately rendered AFTER {children}, not before it. Renders
          nothing either way, but React fires effects in tree/JSX order —
          children's effects before a later sibling's. On an article page,
          {children} contains ArticleViewTracker, which registers the
          `article` global context in its effect. PageViewTracker's effect
          fires the actual OOTB page view. Keeping PageViewTracker after
          {children} guarantees the article context is registered before
          that page view fires, so it's attached from the very first page
          view — not just from page pings that happen to fire later. Moving
          this above {children} again will silently drop the entity from
          the first page view on every article page load/navigation.
        */}
        <PageViewTracker />
      </body>
    </html>
  );
}
