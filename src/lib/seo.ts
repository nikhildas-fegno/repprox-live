import type { Metadata } from "next";

export const SITE_NAME = "RepProX";
export const SITE_URL = "https://www.repprox.com";
export const SITE_DESCRIPTION =
  "RepProX is the ERP system that unifies finance, inventory, operations, and reporting into one connected platform — built for growing companies that have outgrown spreadsheets.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "ERP software",
    "enterprise resource planning",
    "inventory management",
    "operations platform",
    "financial reporting software",
    "business management system",
    "RepProX",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Run the whole business from one system`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Run the whole business from one system`,
    description: SITE_DESCRIPTION,
  },
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
  icons: {
    icon: "/favicon.ico",
  },
};

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

/**
 * Builds page-level Metadata with canonical URL + Open Graph/Twitter overrides
 * layered on top of the site-wide defaults. Social preview images are supplied
 * by the opengraph-image/twitter-image route conventions, so Next.js resolves
 * and injects them automatically — no static asset to keep in sync here.
 */
export function buildMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} — ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${SITE_NAME}`,
      description,
    },
  };
}
