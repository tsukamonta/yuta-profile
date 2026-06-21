# Yuta Profile

Next.jsの静的エクスポートで構築するプロフィールサイト。
確定仕様は [`spec/overview.md`](./spec/overview.md)、技術判断は [`spec/decisions/`](./spec/decisions/) を参照する。

## 必要環境

- Node.js 24 LTS推奨（Next.jsの最低要件は20.9.0以上）
- npm 10.9.2推奨（Cloudflare Pages のビルド環境に合わせる）

## 開発

```bash
npm install
npm run dev
```

`http://localhost:3000`を開く。

## 環境変数

必要な環境変数は [`.env.example`](./.env.example) に一覧化する。
実値は `.env.local` に置き、Gitには含めない。
GA4やSearch Consoleの運用は [`doc/analytics.md`](./doc/analytics.md) を参照する。

## 確認

```bash
npm run lint
npm run typecheck
npm run build
```

`npm run build`で静的ファイルが`out/`へ出力される。
Cloudflare Pagesではビルドコマンドを`npm run build`、出力先を`out`に設定する。
Cloudflare Pages は依存インストール時に `npm ci` を使うため、`package-lock.json` は npm 10.9.2 で検証する。

```bash
npx npm@10.9.2 ci --dry-run --progress=false
```

## コンテンツ更新

プロフィール、スキル、資格、成果物、外部リンク、画面に表示する見出しやラベルは
[`src/content/site.ts`](./src/content/site.ts) で管理する。
現段階ではTypeScriptの型によってデータ形式を検証する。

## 運用手順

- [運用手順の一覧](./doc/README.md)
- [Cloudflare Pages デプロイ手順](./doc/deploy.md)