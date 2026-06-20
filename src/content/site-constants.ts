export const sectionHeadings = {
  profile: "プロフィール",
  capabilities: "能力・趣向",
  works: "成果物",
} as const;

export const sectionGenres = {
  work: "IT・しごと",
  culture: "文化的趣味・生活",
} as const;

export const genreFilters = {
  all: "すべて",
} as const;

export const genreFilterOptions = [
  genreFilters.all,
  sectionGenres.work,
  sectionGenres.culture,
] as const;

export type GenreFilter = (typeof genreFilterOptions)[number];

export const workStatuses = {
  published: "公開中",
  unpublished: "公開停止",
} as const;

export const siteLabels = {
  externalLinks: "外部リンク",
  pageTableOfContents: "目次",
  pageTableOfContentsLabel: "ページ内目次",
  genreFilterHeading: "ジャンルで絞り込む",
  certifications: "資格",
  technicalSnapshot: "本サイトの技術構成",
  openLink: "開く",
  comingSoon: "準備中",
} as const;
