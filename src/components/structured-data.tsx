import { siteContent } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": siteContent.metadata.siteUrl,
  url: siteContent.metadata.siteUrl,
  name: siteContent.metadata.siteTitle,
  description: siteContent.metadata.description,
  mainEntity: {
    "@type": "Person",
    name: siteContent.owner.name,
    alternateName: siteContent.metadata.alternateNames,
    jobTitle: siteContent.owner.role,
    url: siteContent.metadata.siteUrl,
    sameAs: siteContent.externalLinks
      .map((link) => link.href)
      .filter((href): href is string => Boolean(href)),
  },
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
