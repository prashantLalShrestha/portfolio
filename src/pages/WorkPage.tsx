import { useState } from "react";
import { projects } from "../data/portfolio";
import { ProjectCard } from "../features/projects/ProjectCard";
const filters = ["All work", "React Native", "iOS", "Android"] as const;
export function WorkPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All work");
  const visible = projects.filter(
    (project) => filter === "All work" || project.platforms.includes(filter),
  );
  return (
    <>
      <section className="page-heading">
        <p className="eyebrow">SOME OF MY WORK</p>
        <h1>
          A few apps
          <br />
          <em>I’ve helped build.</em>
        </h1>
        <p>
          Checking an energy bill, heading out for a walk, or sending money
          home. Here are a few everyday moments I’ve worked on.
        </p>
      </section>
      <div className="work-toolbar">
        <div className="filter-group" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              key={item}
              aria-pressed={filter === item}
              className={filter === item ? "filter active" : "filter"}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <span className="eyebrow" aria-live="polite">
          {visible.length} PROJECTS
        </span>
      </div>
      <div className="project-grid work-grid">
        {visible.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
      <p className="work-note">
        The pictures are illustrations. Open a project to see what I worked on.
      </p>
    </>
  );
}
