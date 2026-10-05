import {
  ArrowUpRight,
  AudioLines,
  Fingerprint,
  Leaf,
  Play,
  ShieldCheck,
  Sun,
  Wallet,
} from "lucide-react";
import { EverydayProjectVisual } from "./EverydayProjectVisual";
import type { Project } from "../../data/types";
export function ProjectVisual({ project }: { project: Project }) {
  if (["retail", "payment", "delivery", "community"].includes(project.visual))
    return <EverydayProjectVisual project={project} />;
  return (
    <div className={`project-visual ${project.color}`} aria-hidden="true">
      <div className="visual-grid" />
      <span className="visual-index">
        {project.visual === "energy"
          ? "01"
          : project.visual === "audio"
            ? "02"
            : project.visual === "identity"
              ? "03"
              : "04"}{" "}
        / MOBILE EXPERIENCES
      </span>
      {project.visual === "energy" ? (
        <>
          <div className="energy-orbit">
            <Sun size={34} />
          </div>
          <div className="phone energy-phone">
            <div className="phone-notch" />
            <div className="mock-header">
              <span>
                essent<span className="brand-dot">.</span>
              </span>
              <Leaf size={18} />
            </div>
            <p className="mock-greeting">Your energy, at a glance</p>
            <div className="energy-number">
              12.4 <small>kWh</small>
            </div>
            <div className="mock-bars">
              {[30, 45, 38, 62, 48, 78, 67, 53, 85, 69, 48, 36].map(
                (height, i) => (
                  <i key={i} style={{ height: `${height}%` }} />
                ),
              )}
            </div>
            <div className="mock-bottom">
              <span>Today’s consumption</span>
              <ArrowUpRight size={16} />
            </div>
          </div>
          <span className="visual-note">
            A little clarity.
            <br />
            Every day.
          </span>
        </>
      ) : project.visual === "audio" ? (
        <>
          <div className="map-path" />
          <div className="map-circle circle-one" />
          <div className="map-circle circle-two" />
          <div className="audio-card">
            <div className="audio-landscape">
              <div className="hill hill-one" />
              <div className="hill hill-two" />
              <span className="landscape-sun" />
            </div>
            <div className="audio-body">
              <p>TAKE THE SCENIC ROUTE</p>
              <h3>
                Listen. Wander.
                <br />
                Discover.
              </h3>
              <div className="audio-player">
                <AudioLines size={52} />
                <span className="play-circle">
                  <Play size={16} fill="currentColor" />
                </span>
              </div>
            </div>
          </div>
          <span className="visual-note">
            Stories worth
            <br />
            stepping into.
          </span>
        </>
      ) : project.visual === "identity" ? (
        <>
          <div className="identity-orbit" />
          <div className="credential">
            <ShieldCheck size={25} />
            <p>DIGITAL CREDENTIAL</p>
            <Fingerprint size={64} strokeWidth={1} />
            <h3>Simply. Securely. You.</h3>
            <div className="credential-line" />
            <span>
              Verified identity <ShieldCheck size={15} />
            </span>
          </div>
          <span className="visual-note">Trust, by design.</span>
        </>
      ) : (
        <>
          <div className="wallet-orbit" />
          <div className="wallet-card">
            <Wallet size={28} />
            <p>CONNECTIONS WITHOUT BORDERS</p>
            <h3>
              A little closer.
              <br />
              Wherever you are.
            </h3>
            <div className="transfer">
              <span>NL</span>
              <div>→ → →</div>
              <span>NP</span>
            </div>
            <div className="credential-line" />
            <span className="wallet-verified">
              <ShieldCheck size={16} /> Secure by design
            </span>
          </div>
          <span className="visual-note">
            Made for the
            <br />
            people who matter.
          </span>
        </>
      )}
      <span className="visual-caption">CONCEPT ILLUSTRATION</span>
    </div>
  );
}
