import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../data/types";
export function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-links" aria-label={`${project.title} public links`}>
      {project.links.map((link) => (
        <a
          className="text-link"
          href={link.url}
          key={link.url}
          target="_blank"
          rel="noreferrer"
        >
          {link.label}
          <ArrowUpRight size={15} />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ))}
    </div>
  );
}
