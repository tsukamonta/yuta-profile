# SEO 運用メモ

SEOで扱う作業を、コードで管理するものと外部サービスの画面で管理するものに分ける。

Google Search Centralでは、SEOは検索エンジンがコンテンツを理解し、ユーザーが検索結果から訪問判断しやすくするための改善と説明されている。
順位を即座に上げる固定設定はなく、変更の反映には数時間から数か月かかる場合がある。

## コードで管理するもの

- `src/app/layout.tsx`
  - title
  - description
  - canonical URL
  - Open Graph
  - Twitter Card
  - Search Console の verification meta tag
- `src/components/structured-data.tsx`
  - JSON-LD
  - `ProfilePage`
  - `Person`
  - `alternateName`
  - `sameAs`
- `src/content/site.ts`
  - サイトURL
  - メタ説明文
  - 検索エンジン向けの別名表記
- `public/robots.txt`
  - crawler へのクロール許可
  - sitemap の場所
- `scripts/generate-sitemap.mjs`
  - `prebuild` で `public/sitemap.xml` を生成する
  - インデックスしてほしいURLを管理する

画面本文に出したくない別名表記は、本文には書かず、JSON-LDの `alternateName` とメタ情報で検索エンジンに伝える。
現在は `塚本祐太`、`Yuta Tsukamoto`、`TSUKAMOTO Yuta`、`tsukamonta` を別名表記として持つ。

## Cloudflare で管理するもの

- Pages のデプロイ
- `yu-ta.jp` の独自ドメイン接続
- `www` から apex への扱い
- `Always Use HTTPS`
- DNS レコード

Cloudflare側の設定は検索順位を直接上げるものではないが、HTTPS、リダイレクト、DNSの安定性はクロールやユーザー体験の前提になる。

## Search Console で行うもの

- `https://yu-ta.jp/` の URL-prefix プロパティ確認
- URL検査
- インデックス登録リクエスト
- `sitemap.xml` の送信
- クロール・インデックス作成エラーの確認
- 検索パフォーマンスの確認

`インデックス作成: データを処理しています。1日後にもう一度ご確認ください` が長く続く場合でも、公開URLが取得可能で、robotsやnoindexでブロックしていなければ、まずはURL検査とsitemap送信で状態を確認する。

## 1ページ構成について

1ページしかないこと自体は、ただちにSEO上の失敗ではない。
ただし、検索意図ごとの情報量や外部からのリンク機会は増えにくい。

今後、成果物や記事が増えた場合は、トップページで概要を維持しつつ、成果物詳細や記事を個別URLに分けることを検討する。

## 参考

- Google Search Central: SEO Starter Guide
  - https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Central: robots.txt
  - https://developers.google.com/search/docs/crawling-indexing/robots/intro
- Google Search Central: Sitemaps
  - https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- Google Search Central: Structured data
  - https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
