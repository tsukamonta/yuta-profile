import {
  sectionGenres,
  siteLabels,
  workStatuses,
} from "@/content/site-constants";

export type NavigationItem = { href: string; label: string };

export type AttributeItem = {
  name: string;
  description: string;
  tech: string[] | null;
};

export type AttributeGroup = { label: string; items: AttributeItem[] };

export type FactItem = { label: string; value: string };

export type LinkItem = {
  label: string;
  href?: string;
  note?: string;
};

export type ProfileSection = {
  title: string;
  body: string[];
  subsections?: {
    title: string;
    body: string[];
  }[];
};

export type Certification = { name: string };

export type CertificationGroup = { label: string; items: Certification[] };

export type SectionGenre = (typeof sectionGenres)[keyof typeof sectionGenres];
export type WorkStatus = (typeof workStatuses)[keyof typeof workStatuses];

export type CapabilitySection = {
  genre: SectionGenre;
  attributeGroups: AttributeGroup[];
  certificationGroups?: CertificationGroup[];
};

export type Work = {
  title: string;
  description: string;
  status: WorkStatus;
  links?: LinkItem[];
  tech: string[] | null;
};

export type WorkSection = {
  genre: SectionGenre;
  items: Work[];
};

export type SiteContent = {
  metadata: { siteTitle: string };
  labels: typeof siteLabels;
  owner: { name: string; role: string; introduction: string };
  externalLinks: LinkItem[];
  facts: FactItem[];
  homeSections: NavigationItem[];
  profile: { heading: string; sections: ProfileSection[] };
  capabilities: { heading: string; sections: CapabilitySection[] };
  works: { heading: string; sections: WorkSection[] };
};
