# Cloudflare Pages デプロイ手順

このプロジェクトは Next.js の静的エクスポートを Cloudflare Pages で配信する。

## Cloudflare Pages 設定

- Build command: `npm run build`
- Build output directory: `out`
- Node.js: `24`
- npm: `10.9.2`

Node.js は `.nvmrc` の `24` に合わせる。
Cloudflare Pages のビルドログでは `npm clean-install`、つまり `npm ci` が実行される。

## 環境変数

Cloudflare Pages の Production 環境に次を設定する。

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `GOOGLE_SITE_VERIFICATION`

実値は Git に含めない。
ローカルでは `.env.local` を使い、必要な変数名は `.env.example` に置く。

## デプロイ前確認

```bash
npm run lint
npm run typecheck
npm run build
npx npm@10.9.2 ci --dry-run --progress=false
```

`npx npm@10.9.2 ci --dry-run --progress=false` は、Cloudflare Pages と同じ npm 10 系の lock 検証をローカルで再現するために使う。

## package-lock.json の注意

手元の npm が 11 系以上だと、`package-lock.json` が一見問題なく見えても、Cloudflare Pages の npm 10.9.2 では次のように失敗することがある。

```text
npm error `npm ci` can only install packages when your package.json and package-lock.json are in sync.
npm error Missing: @emnapi/runtime@1.11.1 from lock file
npm error Missing: @emnapi/core@1.11.1 from lock file
```

この場合は npm 10.9.2 で lock だけ更新する。

```bash
npx npm@10.9.2 install --package-lock-only --progress=false
npx npm@10.9.2 ci --dry-run --progress=false
```

更新後の `package-lock.json` を commit してから Cloudflare Pages を再デプロイする。
