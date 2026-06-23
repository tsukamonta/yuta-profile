import { mkdir, writeFile } from "node:fs/promises";

const siteUrl = "https://yu-ta.jp/";
const urls = [
  {
    loc: siteUrl,
    changefreq: "weekly",
    priority: "1.0",
  },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

await mkdir("public", { recursive: true });
await writeFile("public/sitemap.xml", sitemap, "utf8");
