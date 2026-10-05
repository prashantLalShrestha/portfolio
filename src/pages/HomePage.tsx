import { Link } from "react-router-dom";
import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { profile, experience } from "../data/portfolio";
import { highlights } from "../data/highlights";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ArticleList } from "../features/articles/ArticleList";
export function HomePage() {
  return (
    <>
      <section className="hero recruiter-hero">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" /> {profile.role.toUpperCase()}
          </p>
          <h1>
            Prashant
            <br />
            <span>Shrestha.</span>
          </h1>
          <p className="hero-intro">{profile.summary}</p>
          <div className="hero-platforms">
            iOS <span>·</span> Android <span>·</span> React Native
          </div>
          <div className="hero-actions">
            <a className="button primary" href={profile.cv} download>
              Download résumé <Download size={17} />
            </a>
            <Link className="text-link" to="/contact">
              Get in touch <ArrowUpRight size={16} />
            </Link>
          </div>
          <p className="location">
            <MapPin size={15} /> {profile.location}{" "}
            <span>· Currently at Essent</span>
          </p>
        </div>
        <figure className="profile-photo">
          <img
            src={profile.picture}
            alt="Prashant Shrestha at the Swift Heroes developer conference"
            width={810}
            height={540}
            fetchPriority="high"
          />
          <figcaption>
            <span>Out meeting fellow developers</span>
            <span>Swift Heroes conference</span>
          </figcaption>
        </figure>
      </section>
      <section className="impact-section" aria-labelledby="impact-heading">
        <SectionHeading
          eyebrow="A FEW THINGS I CARE ABOUT"
          title="Apps that feel good to use."
        />
        <h2 className="sr-only" id="impact-heading">
          A few things I care about
        </h2>
        <div className="impact-grid">
          {highlights.map((item) => (
            <article className="impact-card" key={item.label}>
              <p className="eyebrow">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section experience-preview">
        <div>
          <p className="eyebrow">EXPERIENCE</p>
          <h2>
            A little about <br />the journey.
          </h2>
          <p className="section-copy">
            My work has taken me from Kathmandu to the Netherlands, building
            apps with some lovely teams along the way.
          </p>
          <Link to="/about" className="text-link">
            More about me <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="experience-list">
          {experience.slice(0, 3).map((item) => (
            <div
              className="experience-preview-row"
              key={item.role + item.company}
            >
              <div>
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>
              <span>{item.period}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="section writing-section">
        <SectionHeading
          eyebrow="A LITTLE WRITING"
          title="Things I’ve learned along the way."
          action={
            <Link className="text-link" to="/articles">
              All articles <ArrowUpRight size={16} />
            </Link>
          }
        />
        <ArticleList />
      </section>
      <section className="contact-banner">
        <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
        <div>
          <h2>
            Let’s have <em>a chat.</em>
          </h2>
          <Link to="/contact" className="round-link" aria-label="Get in touch">
            <ArrowUpRight size={29} />
          </Link>
        </div>
      </section>
    </>
  );
}
