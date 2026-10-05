import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { profile } from "../data/portfolio";
export function ContactPage() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  }
  return (
    <>
      <section className="page-heading">
        <p className="eyebrow">GET IN TOUCH</p>
        <h1>
          Got an idea?
          <br />
          <em>Or just fancy a chat?</em>
        </h1>
        <p>
          A role, a project, or a question about something I’ve built? Drop me a
          line. I’m happy to talk.
        </p>
      </section>
      <div className="contact-grid">
        <section className="email-card">
          <Mail size={27} strokeWidth={1.5} />
          <p className="eyebrow">MY INBOX IS A GOOD PLACE TO START</p>
          <a className="email-address" href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowUpRight size={24} />
          </a>
          <div className="email-actions">
            <a className="button primary" href={`mailto:${profile.email}`}>
              Write an email <ArrowUpRight size={17} />
            </a>
            <button className="text-link" onClick={() => void copyEmail()}>
              {copyState === "copied" ? (
                <Check size={16} />
              ) : (
                <Copy size={16} />
              )}{" "}
              {copyState === "copied" ? "Copied!" : "Copy address"}
            </button>
          </div>
          <p className="copy-feedback" role="status">
            {copyState === "error"
              ? "Copy unavailable. You can select the email address above."
              : copyState === "copied"
                ? "Email address copied to clipboard."
                : ""}
          </p>
        </section>
        <div className="contact-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={22} />
            <div>
              <h3>GitHub</h3>
              <p>A look behind the code</p>
            </div>
            <ArrowUpRight size={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={22} />
            <div>
              <h3>LinkedIn</h3>
              <p>Let’s stay connected</p>
            </div>
            <ArrowUpRight size={20} />
          </a>
          <div className="contact-location">
            <MapPin size={22} />
            <div>
              <h3>Amsterdam, Netherlands</h3>
              <p>Based here, happy to connect from anywhere.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
