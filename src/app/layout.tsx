import type { Metadata } from "next";

import { GoogleAnalytics } from "@/components/google-analytics";
import { SiteHeader } from "@/components/site-header";
import { siteContent } from "@/content/site";

import "./globals.css";

export const metadata: Metadata = {
  title: siteContent.metadata.siteTitle,
  description: siteContent.owner.introduction,
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
        <GoogleAnalytics />
      </body>
    </html>
  );
}
