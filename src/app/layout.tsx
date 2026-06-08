import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SITE_NAME, defaultMetadata } from "@/lib/seo";
import { OrganizationJsonLd } from "@/components/seo/json-ld";
import { CursorDot } from "@/components/cursor-dot";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  ...defaultMetadata,
  title: {
    default: `${SITE_NAME} — AI-Powered Field Force Automation & Distribution Management Platform`,
    template: `%s — ${SITE_NAME}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink selection:bg-accent/30 selection:text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper focus:font-mono focus:text-sm"
        >
          Skip to content
        </a>
        <OrganizationJsonLd />
        <CursorDot />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
