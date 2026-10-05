import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../data/types";
import { ProjectVisual } from "./ProjectVisual";
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to={`/work/${project.slug}`} className="project-card">
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
  );
}
