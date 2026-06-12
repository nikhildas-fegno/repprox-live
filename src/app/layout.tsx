import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import { SITE_NAME, defaultMetadata } from "@/lib/seo";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("antialiased", inter.variable, "font-sans", geist.variable)}>
      <body className="min-h-screen flex flex-col bg-paper text-ink selection:bg-accent/30 selection:text-ink">
        {children}
      </body>
    </html>
  );
}
