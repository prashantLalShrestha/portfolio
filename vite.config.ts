import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { projects } from "./src/data/portfolio";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "github-pages-route-entries",
      apply: "build",
      generateBundle: {
        order: "post",
        handler(_, bundle) {
          const entry = bundle["index.html"];
          if (!entry || entry.type !== "asset") {
            this.error("The built index.html is missing.");
          }

          // GitHub Pages serves files, so each React route needs an HTML entry.
          const routes = [
            "about",
            "work",
            "articles",
            "contact",
            ...projects.map((project) => `work/${project.slug}`),
          ];
          for (const route of routes) {
            this.emitFile({
              type: "asset",
              fileName: `${route}/index.html`,
              source: entry.source,
            });
          }
          this.emitFile({
            type: "asset",
            fileName: "404.html",
            source: entry.source,
          });
        },
      },
    },
  ],
});
