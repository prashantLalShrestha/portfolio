import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { ArticlesPage } from "../pages/ArticlesPage";
import { HomePage } from "../pages/HomePage";
import { WorkPage } from "../pages/WorkPage";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { ProjectPage } from "../pages/ProjectPage";
import { NotFoundPage } from "../pages/NotFoundPage";
const titles: Record<string, string> = {
  "/": "Overview",
  "/work": "Work",
  "/about": "Experience",
  "/articles": "Articles",
  "/contact": "Contact",
};
export function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const routePath = pathname.replace(/\/+$/, "") || "/";
    document.title = `${titles[routePath] ?? (routePath.startsWith("/work/") ? "Project" : "Page not found")} — Prashant Shrestha`;
  }, [pathname]);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="work/:slug" element={<ProjectPage />} />
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
