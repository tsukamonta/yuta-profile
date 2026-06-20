# GA4 と Search Console の運用

Google Analytics 4 と Google Search Console の設定・確認手順をまとめる。
固定仕様は [`../spec/overview.md`](../spec/overview.md) を参照する。

## 環境変数

必要な環境変数は [`.env.example`](../.env.example) に一覧化する。
実値は `.env.local` に置き、Gitには含めない。

```bash
cp .env.example .env.local
```

GA4を有効にする場合は、`.env.local` または Cloudflare Pages の環境変数に以下を設定する。

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Search ConsoleのHTML meta tag確認を有効にする場合は、以下も設定する。

```env
GOOGLE_SITE_VERIFICATION=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Cloudflare Pages では、プロジェクトの `Settings` -> `Environment variables` に同じ名前で設定する。
未設定の場合、GA4タグは出力されない。
`GOOGLE_SITE_VERIFICATION` が未設定の場合、Search Console確認用のmetaタグは出力されない。

## ローカル確認

`.env.local` を追加・変更した後は、`npm run dev` を再起動する。

```bash
npm run build
```

ビルドログに `Environments: .env.local` が表示されれば、Next.jsが `.env.local` を読んでいる。

ブラウザではDevToolsのNetworkで以下を確認する。

- `googletagmanager.com/gtag/js?id=G-...` が読み込まれる
- `google-analytics.com/g/collect` または `region1.google-analytics.com/g/collect` が送信される

広告ブロッカーが有効な場合、GA4の読み込みや送信はブロックされることがある。
これは想定内であり、計測値は広告ブロッカー分だけ欠ける。

## GA4 管理画面での確認

通常の確認はGA4の「リアルタイム」で行う。
より確実に確認したい場合はTag AssistantやDebugViewを使う。

ローカル環境でも、GA4タグが読み込まれてイベントが送信されればGA4側に表示される。
ただし本番用のMeasurement IDを `.env.local` に入れると、ローカルアクセスも本番計測に混ざる。

## 送信イベント

- `page_view`: ページ表示と画面遷移
- `genre_filter_change`: 能力・趣向と成果物の絞り込み変更

GA4の拡張計測で、スクロールや外部リンククリックも自動計測できる。
このサイトでは外部リンククリックはGA4の自動計測に任せ、コード側では送らない。

## Search Console

Search Consoleは `https://yu-ta.jp/` のURL-prefixプロパティとして導入する。
`yu-ta.jp` 全体を1つの資産とは扱わない。

この方針では、`blog.yu-ta.jp` はプロフィールサイトとは別資産として扱う。
必要になった時点で、`https://blog.yu-ta.jp/` を別のURL-prefixプロパティとして追加する。

### 導入手順

1. Search Consoleで `URL-prefix` を選び、`https://yu-ta.jp/` を追加する
2. 所有権確認方法として `HTML tag` を選ぶ
3. `content="..."` の中身だけを `GOOGLE_SITE_VERIFICATION` に設定する
4. Cloudflare Pagesの本番環境にも `GOOGLE_SITE_VERIFICATION` を設定する
5. 再ビルド・再デプロイ後、Search Consoleで確認する

Next.jsでは `src/app/layout.tsx` の `metadata.verification.google` から以下のmetaタグが出力される。

```html
<meta name="google-site-verification" content="..." />
```

### DNS確認を使わない理由

DNS確認は `yu-ta.jp` 配下全体をまとめて確認するDomain propertyに向く。
今回のプロフィールサイトでは、`https://yu-ta.jp/` と `https://blog.yu-ta.jp/` を別資産として扱うため、HTML meta tag確認を基本にする。

DNS確認を使う場合は、`yu-ta.jp` 配下を横断して見る必要が出たときに再検討する。
