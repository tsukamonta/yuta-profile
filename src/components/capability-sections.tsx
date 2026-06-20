import { siteContent } from "@/content/site";
import {
  type AttributeGroup,
  type CapabilitySection,
  type CertificationGroup,
} from "@/content/site-types";
import { StackItem } from "@/components/stack-item";

export function CapabilitiesArea({ sections }: { sections: CapabilitySection[] }) {
  return (
    <section className="home-section" id="capabilities" aria-labelledby="capabilities-title">
      <h2 id="capabilities-title">{siteContent.capabilities.heading}</h2>
      <div className="profile-sections">
        {sections.map((section) => (
          <CapabilityBlock section={section} key={section.genre} />
        ))}
      </div>
    </section>
  );
}

function CapabilityBlock({ section }: { section: CapabilitySection }) {
  return (
    <section className="profile-block">
      <h3>{section.genre}</h3>
      <div className="attribute-groups">
        {section.attributeGroups.map((group, index) => (
          <AttributeGroupBlock group={group} key={`${section.genre}-${group.label}-${index}`} />
        ))}

        {section.certificationGroups ? (
          <CertificationGroupList groups={section.certificationGroups} />
        ) : null}
      </div>
    </section>
  );
}

function AttributeGroupBlock({ group }: { group: AttributeGroup }) {
  return (
    <section className="attribute-group">
      <h4>{group.label}</h4>
      <ul className="stack-list">
        {group.items.map((item, index) => (
          <StackItem
            title={item.name}
            description={item.description}
            headingLevel="h5"
            tech={item.tech}
            techLabel={`${item.name} の技術`}
            key={`${group.label}-${item.name}-${index}`}
          />
        ))}
      </ul>
    </section>
  );
}

function CertificationGroupList({ groups }: { groups: CertificationGroup[] }) {
  return (
    <section className="attribute-group">
      <h4>{siteContent.labels.certifications}</h4>
      <div className="attribute-groups attribute-groups--nested">
        {groups.map((group, index) => (
          <section className="attribute-group attribute-group--nested" key={`${group.label}-${index}`}>
            <h5>{group.label}</h5>
            <ul className="list">
              {group.items.map((item, itemIndex) => (
                <li key={`${item.name}-${itemIndex}`}>
                  <strong>{item.name}</strong>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
