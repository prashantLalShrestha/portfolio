import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../data/types";
import { ProjectVisual } from "./ProjectVisual";
import { ProjectLinks } from "./ProjectLinks";
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link to={`/work/${project.slug}`} className="project-card-main">
        <ProjectVisual project={project} />
        <div className="project-card-info">
          <p className="eyebrow">{project.category}</p>
          <div className="project-title">
            <h3>{project.title}</h3>
            <span className="project-arrow">
              <ArrowUpRight size={23} />
            </span>
          </div>
          <p className="project-description">{project.description}</p>
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </Link>
      <ProjectLinks project={project} />
    </article>
  );
}
