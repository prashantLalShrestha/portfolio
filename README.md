# Prashant Shrestha · Portfolio

An original editorial portfolio built with React, TypeScript, Vite, and React Router. Content comes from the supplied CV; project visuals are CSS illustrations, not screenshots of the actual apps.

## Run locally

```sh
npm install
npm run dev
```

Open http://127.0.0.1:5173. `npm run build` creates a production build in `dist`; `npm run preview` serves it. `npm run lint` checks application code.

## Architecture

```text
src/
  app/                 Route configuration and page metadata
  components/
    layout/            Shared header, navigation, footer
    ui/                Reusable presentation components
  data/                Typed profile, projects, experience, skills
  features/projects/   Project cards and illustrative artwork
  pages/               Overview, work, project details, about, contact, 404
  theme/               Design tokens, context, ThemeProvider
  styles/              Global, component, responsive, motion styles
public/                Favicon and downloadable original CV
```

The data layer has no UI dependencies. Pages compose shared components and consume typed data. Project visuals receive project data through props. The site uses local static content without a backend.

## Routes

- `/` — overview, selected work, experience
- `/work` — filterable project collection
- `/work/:slug` — documented project contributions
- `/about` — timeline, skills, interests, languages
- `/articles` — published Essent IT articles
- `/contact` — email, clipboard action, professional profiles
- Other routes display a 404 page.

## Design system

Edit `src/theme/tokens.ts` for semantic colors, typography, spacing, radii, layout width, and motion durations. `ThemeProvider` exposes these as CSS custom properties and supplies the theme through `useTheme`. Light and dark palettes use the same semantic names. First load follows system preference; an explicit toggle persists in local storage. The early script in `index.html` matches the saved preference before React loads to prevent a background flash.

Responsive layouts adapt at 1000px and 760px. Navigation becomes a toggle menu on smaller screens. The UI includes keyboard focus styles, skip navigation, semantic landmarks, descriptive labels, reduced-motion support, and live feedback for filters and clipboard results.

## Updating content

Edit `src/data/portfolio.ts` to update profile information, experience, skills, or projects. Types are defined in `src/data/types.ts`. Replace `public/prashant-shrestha-cv.pdf` to update the résumé download.

The source CV includes a street address and phone number; those are omitted from the page content. The downloadable CV is now a simplified one-page version without the street address or phone number. The original PDF remains at the repository root.

## Hosting

Deploy the `dist` directory to a static host. Configure an SPA fallback that serves `index.html` for non-file routes so direct links such as `/about` work. No deployment has been performed.

## Content boundaries

Descriptions summarize the CV and do not claim unprovided performance metrics. Artwork is labeled as concept illustration. Podwalks supports iOS and Android, as confirmed by Prashant. No contact form is simulated: email links open the visitor’s email client.

## Rebuilding the simplified CV

The CV uses the same typed profile, experience, skills, and article data as the website. Run `node scripts/export-cv-data.mjs`, then run `python scripts/generate_cv.py` in an environment with PyMuPDF installed. The script writes the one-page CV to `output/pdf` and updates the public download. Source content and portrait are maintained under `src/data` and `public`.

## Restore agent skills

Run `npm run skills:install` to restore the skills listed in `skills-lock.json` into `.agents/skills/` using the Skills CLI. This requires network access. Local `.agents/` and `.claude/` directories stay ignored by Git.
