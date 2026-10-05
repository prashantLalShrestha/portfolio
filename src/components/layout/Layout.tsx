import { useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { ArrowUpRight, Moon, Sun, Menu, X } from "lucide-react";
import { profile } from "../../data/portfolio";
import { useTheme } from "../../theme/theme-context";
const navigation = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/articles", label: "Articles" },
  { to: "/contact", label: "Get in touch" },
];
export function Layout() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="header container">
        <Link to="/" className="brand" aria-label="Prashant Shrestha home">
          ps<span>.</span>
        </Link>
        <nav
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
          id="main-navigation"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a className="resume-link" href={profile.cv} download>
            Résumé <ArrowUpRight size={15} />
          </a>
          <button
            className="icon-button menu-button"
            aria-expanded={open}
            aria-controls="main-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>
      <main id="main" className="container">
        <Outlet />
      </main>
      <footer className="footer container">
        <Link className="footer-name" to="/">
          Prashant Shrestha
          <span>Mobile apps, a little writing, and a few things about me.</span>
        </Link>
        <div className="footer-socials">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={14} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={14} />
          </a>
        </div>
        <p>© {new Date().getFullYear()} · Amsterdam, NL</p>
      </footer>
    </>
  );
}
