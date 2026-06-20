import {
  sectionGenres,
  sectionHeadings,
  siteLabels,
  workStatuses,
} from "@/content/site-constants";
import type { LinkItem, SiteContent } from "@/content/site-types";

const externalLinks: LinkItem[] = [
  { label: "X / Twitter", note: "@tsukamonta", href: "https://x.com/tsukamonta" },
  { label: "Instagram", note: "@yuta_t._", href: "https://www.instagram.com/yuta_t./" },
  { label: "GitHub", note: "TSUKAMOTO-Yuta", href: "https://github.com/TSUKAMOTO-Yuta" },
  { label: "Zenn", note: "tsukamonta", href: "https://zenn.dev/tsukamonta" },
  { label: "読書メーター", note: "yuta", href: "https://bookmeter.com/users/1128915" },
  { label: "Filmarks", note: "tsukamonta", href: "https://filmarks.com/users/tsukamonta" },
];

const ownerName = "つかもとゆうた";
const siteTitle = `${ownerName} | Profile`;

export const siteContent = {
  metadata: {
    siteTitle,
  },
  labels: siteLabels,
  owner: {
    name: ownerName,
    role: "職業開発者・趣味開発者",
    introduction:
      "個人としての総合的なプロフィールサイトです。",
  },
  externalLinks,
  facts: [
    { label: "構成", value: "React + Next.js Static Exports" },
    { label: "公開", value: "Cloudflare Pages" },
  ],
  homeSections: [
    { href: "#profile", label: sectionHeadings.profile },
    { href: "#capabilities", label: sectionHeadings.capabilities },
    { href: "#works", label: sectionHeadings.works },
  ],
  profile: {
    heading: sectionHeadings.profile,
    sections: [
      {
        title: "現在地",
        body: [],
        subsections: [
          {
            title: "仕事",
            body: [
              "インターネット広告代理店でIT開発職に従事。\n社内向け業務支援システムの開発を、上流から実装、保守まで一貫して担当。\n「開発職らしい『怠惰な』人間」だと自負している。(cf.[「プログラマーの三大美徳」](https://thethreevirtues.com/)ラリー・ウォール「Programming Perl」より)",
            ],
          },
          {
            title: "生活",
            body: [
              "都内在住。\n公/私や物理/ネットで人格を切り分けるのが苦手のため、まとめて「自分」として生きることにした結果がこのサイト。",
            ],
          },
        ],
      },
      {
        title: "これまでの歩み",
        body: [],
        subsections: [
          {
            title: "幼少期",
            body: [
              "2000年大阪府生まれ。年中から高校まで滋賀県で育つ。京都での大学時代と合わせ、アイデンティティは広く「関西」。",
              "小中高と、趣味や文化祭で動画を編集していたのが、PCと向き合う日々の始まり。",
              "高校時代、図書委員長として図書館に住み着き、3年間で200冊ほど読書に没頭する日々を送る。\n高1から今日まで10年超、連続したアカウントで実名顔出しTwitterをしているのはネットリテラシーが信頼されるに値する特記事項だと思っている。",
            ],
          },
          {
            title: "大学時代: 京都大学 総合人間学部 卒業",
            body: [
              "大学では、社会学を専攻。テーマは高等教育へのキャリア接続。教育をフィールドとする中で、教員免許も取得。\n副専攻として、量的研究の方法論のために、数理統計を学ぶ。このデータ分析手法でPythonとRに触れ、現在のデータエンジニアとしての歩みに繋がる。\n京都大学の自由な環境で、合計256単位を取得。",
              "課外活動として、スパイス料理研究サークル「京大カレー部」でにて、運営メンバーとして大規模出店やメディア出演、レシピ本出版を経験。2回生の運営代のときに新型コロナ禍に突入し、学園祭の中止といった料理サークルに危機的な状況の中で、「コロナ前を知る最後の世代」として、外部イベントの企画や、復活した学園祭での出店により、サークルの復活に尽力。",
            ],
          },
          {
            title: "現在: IT開発職",
            body: [
              "新卒で現在の勤務先に就職。就活軸は連結雇用人数「4桁」の会社(ルールベースだが管理部門の遠すぎない組織規模という仮説)。",
            ],
          },
        ],
      },
    ],
  },
  capabilities: {
    heading: sectionHeadings.capabilities,
    sections: [
      {
        genre: sectionGenres.work,
        attributeGroups: [
          {
            label: "メインスキル",
            items: [
              {
                name: "バックエンド",
                description: "REST APIや、DBの設計・運用を経験。ドメイン駆動開発の考え方を取り入れ、ビジネス文脈のドメインモデルへの落とし込み方を重視。",
                tech: ["Scala(Pekko HTTP)", "PostgreSQL", "Cloud Run"],
              },
              {
                name: "データ/ワークフロー",
                description: "データ処理基盤の構築。TB単位のテーブルを扱うプロジェクトで、リソース効率性も重視しつつ、可能な限りシンプルな実装で済むことを目指した設計と運用を経験。",
                tech: ["BigQuery", "Cloud Composer/Apache Airflow", "Python","Cloud Workflows"],
              },
              {
                name: "インフラ/運用",
                description: "AWS/GCPを利用したインフラ構築と運用経験。CI/CD等を積極的に活用した保守性の高さと安全性を重視。「人間を信頼するべきではないので、絶対手作業しない/認証情報を露出させない」という気持ちでインフラタスクに取り掛かっている。",
                tech: ["AWS", "Google Cloud", "GitHub Actions", "Terraform"],
              },
            ],
          },
          {
            label: "サブスキル",
            items: [
              {
                name: "上流工程",
                description: "小規模なプロジェクトで、ユーザーグループとの直接の対話により、まだ具体化していない要求を引き出し、申し込み内容に落とし込む段階から担当。ユーザーと開発者の認識ズレの修正に強み。",
                tech: null,
              },
              {
                name: "フロントエンド",
                description: "モックアップ作成等の具現化フェーズの早期展開や、対顧客会議での積極的な懸念点説明により、難しいUI駆動でのユーザー要求の整理・具体化に強み。また、モックアップコードから本番コードへの移行に際し、保守性を重視した再設計を行うことも忘れない。",
                tech: ["React", "Next.js", "TypeScript"],
              },
            ],
        },
        ],
        certificationGroups: [
          {
            label: "ITスキル",
            items: [
              {
                name: "応用情報技術者試験 合格",
              },
              {
                name: "情報処理安全確保支援士試験 合格(未登録)",
              },
              {
                name: "G検定 合格",
              },
              {
                name: "AtCoder Algorithm部門 最高レート866(緑色)",
              },
            ],
          },
          {
            label: "その他",
            items: [
              {
                name: "実用英語技能検定準1級 合格",
              },
              {
                name: "TOEIC L&R 875点 獲得",
              },
              {
                name: "中学校教諭一種免許状(数学・英語) 取得",
              },
              {
                name: "高等学校教諭一種免許状(数学・英語) 取得",
              },
            ],
          },
        ],
      },
      {
        genre: sectionGenres.culture,
        attributeGroups: [
          {
            label: "日常・趣味",
            items: [
              {
                name: "読書",
                description: "読む量は高校時代より落ちたが、現在も重要なインプット手段。\n最近の関心は、ロールズ周辺の正義論的リベラリズムや、アーレントの政治哲学など。\n山本理顕が『権力の空間/空間の権力』でアーレントをベースに、建築家の業務の創造性を示した議論を、IT開発職で横展開できないかと構想中。",
                tech: null,
              },
              {
                name: "料理",
                description: "基本的に効率主義者なので、現在では125L冷凍庫を活用して、食材をまとめて管理するタイプの自炊が主。アジア料理をワンパンパスタに魔改造するのが十八番。\n\n魔改造リスト(一部)\n\n- 親子丼\n- 回鍋肉\n- 豚骨ラーメン\n- 肉骨茶\n\n製菓も趣味で、自作だと得意菓子はマカロン。\n勤務先でも料理をテーマの交流チャンネルを作成し、美味しい料理屋情報やおすすめカルディ製品情報を流したり、全社BBQにタンドリーチキンを持ち込んだりして存在感を発揮している。",
                tech: null,
              },
            ],
          },
        ],
      },
    ],
  },
  works: {
    heading: sectionHeadings.works,
    sections: [
      {
        genre: sectionGenres.work,
        items: [
          {
            title: "vanilla-deck",
            description: "Twitter専用session分離カラムブラウザ。Electron内蔵Chromiumを用いた素の描画で、Twitterの仕様変更やbot判定に堅牢であることを目的とする。",
            status: workStatuses.published,
            links: [
              { label: "GitHub(ダウンロードもこちらから)", href: "https://github.com/TSUKAMOTO-Yuta/vanilla-deck" },
            ],
            tech: ["Electron", "TypeScript"],
          },
          {
            title: "yuta-profile",
            description: "当プロフィールサイト。IT開発者としてだけでなく、パーソナリティを表現する場としての拡張性を求めて自作。サーバー代のかからない静的サイトであることと、変更が容易であることを重視して作成。",
            status: workStatuses.published,
            links: [
              { label: "GitHub", href: "https://github.com/TSUKAMOTO-Yuta/yuta-profile" },
            ],
            tech: ["Next.js", "TypeScript", "Cloudflare Pages"],
          },
        ],
      },
      {
        genre: sectionGenres.culture,
        items: [
          {
            title: "レシピ「夏野菜の和製ラッサム」",
            description: "わたしの人生のオールジャンルベスト創作物。印度の酸味あるスパイススープ「ラッサム」を、日本のスーパーで手に入る食材で大胆にアレンジ。料理サークル時代に、東大のスパイスサークルと対決する雑誌企画のために考案。掲載雑誌『女性セブン』のweb版『NEWSポストセブン』で公開中。",
            status: workStatuses.published,
            links: [
              {
                label: "NEWSポストセブン",
                href: "https://www.news-postseven.com/archives/20220719_1774930.html?DETAIL",
              },
            ],
            tech: null,
          },
        ],
      },
    ],
  },
} as const satisfies SiteContent;
