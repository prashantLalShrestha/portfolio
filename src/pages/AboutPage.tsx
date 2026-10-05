import { ArrowUpRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { profile, experience, skills } from "../data/portfolio";
import { SectionHeading } from "../components/ui/SectionHeading";
export function AboutPage() {
  return (
    <>
      <section className="page-heading about-heading">
        <p className="eyebrow">HELLO AGAIN</p>
        <h1>
          A little code.
          <br />
          <em>A little clay.</em>
        </h1>
        <div className="about-intro">
          <p>{profile.bio}</p>
          <p>
            Away from the laptop, I enjoy pottery, playing the ukulele, hiking,
            and finding something good to eat. There’s usually something new to
            try.
          </p>
        </div>
        <a className="button secondary" href={profile.cv} download>
          Download résumé <Download size={17} />
        </a>
      </section>
      <section className="section">
        <SectionHeading
          eyebrow="WHERE I’VE BEEN"
          title="The teams I’ve worked with."
        />
        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-row" key={item.role}>
              <div className="timeline-date">
                <span className="eyebrow">0{index + 1}</span>
                <p>{item.period}</p>
              </div>
              <div>
                <h3>{item.role}</h3>
                <p className="company-name">
                  {item.company} <span>· {item.location}</span>
                </p>
                <ul>
                  {item.highlights.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <SectionHeading
          eyebrow="FOR THE TECH-CURIOUS"
          title="Tools I work with."
        />
        <div className="skills-grid">
          {skills.map((group) => (
            <article className="skill-card" key={group.label}>
              <p className="eyebrow">{group.label}</p>
              <h3>{group.title}</h3>
              <div className="tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="life-section">
        <div>
          <p className="eyebrow">AWAY FROM THE KEYBOARD</p>
          <h2>
            Still making.
            <br />
            <em>Still exploring.</em>
          </h2>
          <p className="section-copy">
            I like making things, exploring new places, and taking a break
            outside. Here are a few favourites.
          </p>
          <div className="tags">
            {profile.interests.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="language-card">
          <p className="eyebrow">WAYS TO SAY HELLO</p>
          {profile.languages.map((item) => (
            <p key={item}>{item}</p>
          ))}
          <Link className="text-link" to="/contact">
            Start a conversation <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
