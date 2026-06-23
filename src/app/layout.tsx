import type { Metadata } from "next";

import { GoogleAnalytics } from "@/components/google-analytics";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { siteContent } from "@/content/site";

import "./globals.css";

export const metadata: Metadata = {
  title: siteContent.metadata.siteTitle,
  description: siteContent.metadata.description,
  metadataBase: new URL(siteContent.metadata.siteUrl),
  alternates: {
    canonical: siteContent.metadata.siteUrl,
  },
  keywords: siteContent.metadata.alternateNames,
  openGraph: {
    title: siteContent.metadata.siteTitle,
    description: siteContent.metadata.description,
    url: siteContent.metadata.siteUrl,
    siteName: siteContent.metadata.siteTitle,
    type: "profile",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: siteContent.metadata.siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.metadata.siteTitle,
    description: siteContent.metadata.description,
    images: ["/images/hero.jpg"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <SiteHeader />
        <main className="page-container">{children}</main>
        <StructuredData />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
