import { siteContent } from "@/content/site";
import { type LinkItem } from "@/content/site-types";
import { RichText } from "@/components/rich-text";

type StackItemProps = {
  title: string;
  description: string;
  headingLevel: "h4" | "h5";
  eyebrow?: string;
  links?: LinkItem[];
  tech: string[] | null;
  techLabel: string;
};

export function StackItem({
  title,
  description,
  headingLevel,
  eyebrow,
  links,
  tech,
  techLabel,
}: StackItemProps) {
  const Heading = headingLevel;

  return (
    <li className="stack-item">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Heading>{title}</Heading>
      <div className="stack-item__body">
        <RichText text={description} />
      </div>
      <TechList items={tech} label={techLabel} />
      {links ? <StackItemLinks links={links} /> : null}
    </li>
  );
}

function StackItemLinks({ links }: { links: LinkItem[] }) {
  return (
    <ul className="stack-link-list">
      {links.map(({ href, label, note }, index) => {
        if (!href) {
          return null;
        }

        return (
          <li key={`${label}-${href ?? note ?? "placeholder"}-${index}`}>
            <a
              className="stack-link-meta stack-link-meta--link"
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-list__label">{label}</span>
              <span className="link-list__action link-list__action--arrow">
                {note ?? siteContent.labels.openLink}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function TechList({ items, label }: { items: string[] | null; label: string }) {
  if (!items) {
    return null;
  }

  return (
    <ul className="tech-list" aria-label={label}>
      {items.map((item, index) => (
        <li className="tech-chip" key={`${item}-${index}`}>
          {item}
        </li>
      ))}
    </ul>
  );
}
