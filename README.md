# Hasan Mahmud — Portfolio

Premium dark-themed portfolio site built with React, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (defaults to http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

`npm run build` outputs a deployable static bundle to `dist/`. That folder can be
pushed to Vercel, Netlify, GitHub Pages, or any static host.

## Editing content

Everything content-related — projects, services, experience, skills, stats, and
social links — lives in one place:

```
src/data/portfolioData.js
```

Add or edit a project by adding an object to the `PROJECTS` array. Each project's
`image` and `gallery` fields are plain URLs — swap the placeholder `picsum.photos`
links for your own hosted images (or import local files from `src/assets/` and
reference them directly).

## Project structure

```
src/
  App.jsx               # assembles all sections
  main.jsx              # React entry point
  index.css             # Tailwind + custom animation/utility classes
  lib/theme.js           # shared color palette
  data/portfolioData.js  # central content config
  hooks/index.js          # scroll reveal, counters, reduced-motion, etc.
  components/
    common/               # Reveal, Magnetic, EyebrowLabel, AmbientCursor
    Navbar.jsx
    Hero.jsx
    About.jsx
    Portfolio.jsx
    ProjectCard.jsx
    ProjectModal.jsx
    Services.jsx
    Experience.jsx
    Skills.jsx
    Philosophy.jsx
    Contact.jsx
    Footer.jsx
```

## Notes

- Animations are built with CSS transitions/keyframes and `IntersectionObserver`
  rather than Framer Motion, so there's no extra animation dependency to install.
  `prefers-reduced-motion` is respected throughout.
- The contact form is front-end only (no backend wired up) — it shows a
  confirmation state on submit. Connect it to a form service (Formspree, Resend,
  a serverless function, etc.) when you're ready to receive real messages.
- The custom ambient cursor and card tilt effects only activate on devices with a
  fine pointer (desktop); touch devices get the default cursor and static cards.
