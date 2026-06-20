import { siteContent } from "@/content/site";
import { type WorkSection } from "@/content/site-types";
import { StackItem } from "@/components/stack-item";

export function WorksArea({ sections }: { sections: WorkSection[] }) {
  return (
    <section className="home-section" id="works" aria-labelledby="works-title">
      <h2 id="works-title">{siteContent.works.heading}</h2>
      <div className="profile-sections">
        {sections.map((section) => (
          <WorkBlock section={section} key={section.genre} />
        ))}
      </div>
    </section>
  );
}

function WorkBlock({ section }: { section: WorkSection }) {
  return (
    <section className="profile-block">
      <h3>{section.genre}</h3>
      <ul className="stack-list">
        {section.items.map((work, index) => (
          <StackItem
            title={work.title}
            description={work.description}
            headingLevel="h4"
            eyebrow={work.status}
            links={work.links}
            tech={work.tech}
            techLabel={`${work.title} の技術`}
            key={`${section.genre}-${work.title}-${index}`}
          />
        ))}
      </ul>
    </section>
  );
}
