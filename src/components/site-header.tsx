import Link from "next/link";

import { siteContent } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-title" href="/">
          {siteContent.metadata.siteTitle}
        </Link>
      </div>
    </header>
  );
}
