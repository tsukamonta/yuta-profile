# 0001: 静的サイトのフレームワークと更新方式

- 状態: 採用
- 検討開始日: 2026-06-13
- 決定日: 2026-06-13

## 背景

- モダンな静的サイトを構築したい
- ランニングコストを原則として無料または既存契約の範囲に抑えたい
- Xserverのレンタルサーバーを契約済み
- サイトはYuta本人だけが更新する
- ブラウザ上の編集機能は不要
- ブラウザへ送るJavaScriptは必要な範囲に抑えたい
- Reactを実務で扱える水準まで学ぶことを長期目標とする
- ブログとCMSは将来の拡張候補とし、初期構築には含めない
- プロフィールの各セクションは、UIコンポーネントを修正せずに内容を更新できるようにしたい

## 決定

Next.jsのApp Router、TypeScript、静的エクスポートを採用する。
ビルド結果をCloudflare Pagesから静的アセットとして配信する。

### 採用理由

- Reactをサイト全体で使用し、コンポーネント設計と宣言的UIを実践できる
- React Server ComponentsとClient Componentsの境界を学べる
- 静的エクスポートにより、実行時サーバーなしで運用できる
- Cloudflare PagesではFunctionsを呼ばない静的アセットへのリクエストが無料かつ無制限である
- 無料枠は月500ビルド、1サイト20,000ファイル、単一ファイル25 MiBであり、プロフィールサイトには十分な余裕がある

### 制約

- `next.config.ts`で`output: "export"`を維持する
- Pages Functionsを使用しない
- Server Actions、ISR、リクエスト時のCookie参照など、実行時サーバーを必要とする機能を使用しない
- `next/image`を使う場合は、静的エクスポートで利用可能な構成に限定する
- サーバー機能が必要になった場合は、静的運用と維持費への影響を再評価して別の技術判断を記録する

## 比較した候補

### Astro + React

- ページの大部分を静的HTMLとして生成できる
- 操作が必要なコンポーネントだけをReactとしてブラウザで動かせる
- Markdown等のコンテンツ管理機能を標準で持つ
- Reactを使う範囲を意識して設計する必要がある
- Reactだけで構成された業務アプリの構造とは異なる部分も学ぶことになる

### Next.jsの静的エクスポート

- Reactを中心に、コンポーネント、ルーティング、Server Componentsを学べる
- ビルド結果を通常の静的ファイルとして配信できる
- 静的エクスポートでは、リクエスト時のサーバー処理が必要な機能を利用できない
- Next.jsの機能を追加すると、静的ホスティングを維持できるか継続的に確認する必要がある

### React Router Framework Modeのプリレンダリング

- ReactとReact Routerを中心に構成できる
- `ssr: false`と`prerender`の組み合わせで静的ファイルとして公開できる
- ルーティング、loader、遷移状態など、Reactアプリ寄りの設計を学べる
- 静的コンテンツ管理はAstroほど組み込みで整っておらず、別途設計が必要
- 実行時サーバーを使わない場合、actionやheadersなどのサーバー機能は使えない

### Gatsby

- Reactを中心とする静的サイトジェネレーター
- ビルド時に静的HTMLを生成し、ブラウザではReactアプリとして動作する
- Reactの利用範囲は広いが、ページ全体のJavaScript実行を抑えたい要件とはAstroより相性が弱い
- 今回は新規採用を積極的に選ぶ決め手が少ない

### Eleventy

- JavaScriptで動く、構成の薄い静的サイトジェネレーター
- 出力HTMLと送信JavaScriptを細かく管理しやすい
- React学習との直接的な接続が弱く、インタラクティブUIの設計を自分で組み立てる範囲が広い

### Vite + Reactによる独自SSG

- Reactとビルド処理の仕組みを深く理解できる
- ViteのSSGは高水準の完成機能ではなく、プリレンダリング、ルーティング、メタデータ、Markdown処理などを自分で構築する必要がある
- 学習対象がサイト制作よりフレームワーク実装へ寄るため、今回は優先度が低い

## 更新方式

プロフィール、スキル、経歴、成果物などを構造化データとしてGitで管理する。
短い定型データにはJSONやYAML、長い本文にはMarkdownなどを使い、GitHubへのpushを契機にCloudflare Pagesでビルド、公開する。

データはスキーマで検証し、必須項目の欠落や不正な値をビルド時に検出する。

この節で示したファイル形式と検証方式の具体案は、後続の
[`0003: 初期のページ構成とコンテンツ管理`](./0003-single-page-content-architecture.md)
で更新した。現行の初期実装は `src/content/site.ts` とTypeScriptの型を使用する。

```text
ローカルで内容を編集
  -> GitHubへpush
  -> Cloudflare Pagesがビルド
  -> 静的ファイルを公開
```

ブログとCMSはプロフィールサイト完成後に必要性を判断し、採用する場合は別の技術判断として扱う。

## 今後決定する事項

- Reactを使う機能と、静的HTMLに留める機能の境界
- CSSの設計方式
- 各コンテンツに使うファイル形式とスキーマ

コンテンツの初期管理方式は
[`0003: 初期のページ構成とコンテンツ管理`](./0003-single-page-content-architecture.md)
で決定した。

## 参照した公式情報

- [Astro: Islands architecture](https://docs.astro.build/en/concepts/islands/)
- [Astro: React integration](https://docs.astro.build/en/guides/integrations-guide/react/)
- [Astro: Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Next.js: Static Exports](https://nextjs.org/docs/app/guides/static-exports)
- [React Router: Pre-Rendering](https://reactrouter.com/how-to/pre-rendering)
- [Gatsby: Overview of the Gatsby Build Process](https://www.gatsbyjs.com/docs/conceptual/overview-of-the-gatsby-build-process/)
- [Eleventy: Documentation](https://www.11ty.dev/docs/)
- [Vite: Server-Side Rendering and Pre-Rendering](https://vite.dev/guide/ssr.html)
- [React: You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)
- [Cloudflare Pages: Pricing](https://developers.cloudflare.com/pages/functions/pricing/)
- [Cloudflare Pages: Limits](https://developers.cloudflare.com/pages/platform/limits/)
