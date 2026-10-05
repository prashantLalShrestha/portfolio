import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { projects } from "../data/portfolio";
import { ProjectVisual } from "../features/projects/ProjectVisual";
import { NotFoundPage } from "./NotFoundPage";
export function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFoundPage />;
  return (
    <>
      <Link className="text-link back-link" to="/work">
        <ArrowLeft size={16} /> Back to work
      </Link>
      <section className="page-heading project-heading">
        <p className="eyebrow">{project.category}</p>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>
      <div className="project-detail">
        <ProjectVisual project={project} />
        <div>
          <p className="eyebrow">{project.company}</p>
          <h2>My contribution.</h2>
          <ul className="contribution-list">
            {project.contributions.map((item) => (
              <li key={item}>
                <Check size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link className="button primary" to="/contact">
            Talk about a project <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
      <p className="work-note">
        Illustrative concept. Experience and contributions sourced from my
        résumé.
      </p>
    </>
  );
}
