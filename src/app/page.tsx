import Image from "next/image";

import { siteContent } from "@/content/site";
import {
  type FactItem as FactContentItem,
  type LinkItem,
  type ProfileSection,
} from "@/content/site-types";
import { CapabilityWorkFilter } from "@/components/capability-work-filter";
import { RichText } from "@/components/rich-text";

export default function HomePage() {
  return (
    <div className="home-shell">
      <HeroSection />
      <PageTableOfContents />
      <ProfileArea />
      <CapabilityWorkFilter />
      <TechnicalSnapshot />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-main">
        <HeroPhoto />
        <HeroCopy />
      </div>

      <aside className="hero-panel" aria-label={siteContent.labels.externalLinks}>
        <ExternalLinks />
      </aside>
    </section>
  );
}

function HeroPhoto() {
  return (
    <section className="hero-photo" aria-label="プロフィール写真">
      <div className="hero-photo__frame" aria-hidden="true">
        <Image
          src="/images/hero.jpg"
          alt="プロフィール写真"
          fill
          unoptimized
          priority
          sizes="(max-width: 44rem) calc(100vw - 4.2rem), 15rem"
          className="hero-photo__image"
        />
      </div>
      <p className="hero-photo__credit">Photo by yuya amo</p>
    </section>
  );
}

function HeroCopy() {
  return (
    <div className="hero-copy">
      <p className="eyebrow">{siteContent.owner.role}</p>
      <h1 id="hero-title">{siteContent.owner.name}</h1>
      <p>{siteContent.owner.introduction}</p>
    </div>
  );
}

function ExternalLinks() {
  return (
    <section className="hero-links" aria-labelledby="links-title">
      <p className="toc-label" id="links-title">
        {siteContent.labels.externalLinks}
      </p>
      <ul className="link-tree">
        {siteContent.externalLinks.map((link, index) => (
          <HeroLinkItem
            link={link}
            key={`${link.label}-${link.href ?? link.note ?? "placeholder"}-${index}`}
          />
        ))}
      </ul>
    </section>
  );
}

function HeroLinkItem({ link }: { link: LinkItem }) {
  const actionLabel =
    link.note ??
    (link.href ? siteContent.labels.openLink : siteContent.labels.comingSoon);
  const content = (
    <>
      <span className="link-list__label">{link.label}</span>
      <span className="link-list__action">{actionLabel}</span>
    </>
  );

  return (
    <li>
      {link.href ? (
        <a className="link-card" href={link.href} target="_blank" rel="noreferrer">
          {content}
        </a>
      ) : (
        <span className="link-card link-card--placeholder">{content}</span>
      )}
    </li>
  );
}

function PageTableOfContents() {
  return (
    <nav
      className="section-toc"
      aria-label={siteContent.labels.pageTableOfContentsLabel}
    >
      <p className="toc-label">{siteContent.labels.pageTableOfContents}</p>
      <ul className="navigation navigation--toc">
        {siteContent.homeSections.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ProfileArea() {
  return (
    <section
      className="home-section content-page"
      id="profile"
      aria-labelledby="profile-title"
    >
      <h2 id="profile-title">{siteContent.profile.heading}</h2>
      <div className="profile-sections">
        {siteContent.profile.sections.map((section, index) => (
          <ProfileBlock section={section} key={`${section.title}-${index}`} />
        ))}
      </div>
    </section>
  );
}

function ProfileBlock({ section }: { section: ProfileSection }) {
  return (
    <section className="profile-block">
      <h3>{section.title}</h3>
      <RichTextBlocks blocks={section.body} />
      {section.subsections ? (
        <div className="profile-subsections">
          {section.subsections.map((subsection, index) => (
            <section className="profile-subsection" key={`${subsection.title}-${index}`}>
              <h4>{subsection.title}</h4>
              <RichTextBlocks blocks={subsection.body} />
            </section>
          ))}
        </div>
      ) : null}
    </section>
  );
}

function RichTextBlocks({ blocks }: { blocks: string[] }) {
  return blocks.map((block, index) => (
    <div className="rich-text-block" key={`${index}-${block}`}>
      <RichText text={block} />
    </div>
  ));
}

function TechnicalSnapshot() {
  return (
    <section className="home-section technical-snapshot" aria-labelledby="snapshot-title">
      <h2 id="snapshot-title">{siteContent.labels.technicalSnapshot}</h2>
      <dl className="fact-list">
        {siteContent.facts.map((fact, index) => (
          <FactItem fact={fact} key={`${fact.label}-${index}`} />
        ))}
      </dl>
    </section>
  );
}

function FactItem({ fact }: { fact: FactContentItem }) {
  return (
    <div className="fact-item">
      <dt>{fact.label}</dt>
      <dd>{fact.value}</dd>
    </div>
  );
}
