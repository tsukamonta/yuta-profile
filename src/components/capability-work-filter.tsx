"use client";

import { useState } from "react";

import {
  genreFilters as genreFilterLabels,
  genreFilterOptions,
  type GenreFilter,
} from "@/content/site-constants";
import { siteContent } from "@/content/site";
import { type SectionGenre } from "@/content/site-types";
import { CapabilitiesArea } from "@/components/capability-sections";
import { WorksArea } from "@/components/work-sections";
import { trackAnalyticsEvent } from "@/lib/analytics";

function matchesGenre(section: { genre: SectionGenre }, activeGenre: GenreFilter) {
  return activeGenre === genreFilterLabels.all || section.genre === activeGenre;
}

export function CapabilityWorkFilter() {
  const [activeGenre, setActiveGenre] = useState<GenreFilter>(genreFilterLabels.all);

  const capabilitySections = siteContent.capabilities.sections.filter(
    (section) => matchesGenre(section, activeGenre),
  );
  const workSections = siteContent.works.sections.filter(
    (section) => matchesGenre(section, activeGenre),
  );

  return (
    <>
      <GenreFilterPanel activeGenre={activeGenre} onGenreChange={setActiveGenre} />
      <CapabilitiesArea sections={capabilitySections} />
      <WorksArea sections={workSections} />
    </>
  );
}

type GenreFilterPanelProps = {
  activeGenre: GenreFilter;
  onGenreChange: (genre: GenreFilter) => void;
};

function GenreFilterPanel({ activeGenre, onGenreChange }: GenreFilterPanelProps) {
  function handleGenreClick(genre: GenreFilter) {
    onGenreChange(genre);
    trackAnalyticsEvent("genre_filter_change", {
      genre,
    });
  }

  return (
    <section className="home-section genre-hub" aria-labelledby="genre-hub-title">
      <h2 id="genre-hub-title">{siteContent.labels.genreFilterHeading}</h2>
      <p className="genre-hub__lead">
        能力・趣向と成果物を、共通のジャンルでまとめて切り替える。
      </p>
      <div className="genre-filter" role="toolbar" aria-label={siteContent.labels.genreFilterHeading}>
        {genreFilterOptions.map((genre) => (
          <button
            type="button"
            key={genre}
            className={`genre-filter__button${activeGenre === genre ? " is-active" : ""}`}
            aria-pressed={activeGenre === genre}
            onClick={() => handleGenreClick(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    </section>
  );
}
