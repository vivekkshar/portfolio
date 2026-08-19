# Developer Portfolio — Next.js

A single-page portfolio with an "editor" visual theme: a file-tab nav
(`intro.tsx / projects.tsx / skills.tsx / contact.tsx`), a typewriter-animated
intro, and scroll-triggered reveals throughout, built with Next.js 14 (App
Router), TypeScript, Tailwind CSS, and Framer Motion.

## 1. Requirements

- Node.js 18.18 or newer (Node 20 LTS recommended) — check with `node -v`
- npm (comes with Node) — check with `npm -v`

If you don't have Node installed, get it from https://nodejs.org (choose the
LTS version) and restart your terminal afterward.

## 2. Install dependencies

Open a terminal in this project folder and run:

```bash
npm install
```

This reads `package.json` and downloads Next.js, React, Tailwind, and
Framer Motion into a `node_modules` folder. It needs an internet
connection and only has to be done once (or again whenever you change
`package.json`).

## 3. Run it locally

```bash
npm run dev
```

Then open **http://localhost:3000** in your browser. The page hot-reloads
as you edit and save files — no need to restart the server.

## 4. Where to edit things

**Almost everything you'll want to change lives in one file:**

```
src/data/portfolio.ts
```

Edit that file to change:
- your name, role, tagline, bio, location
- your GitHub / LinkedIn / email links
- the list of projects (title, description, tech stack, links)
- the grouped skills list

Save the file and the browser will update automatically.

For deeper layout/style changes, the sections live here:

```
src/components/Nav.tsx        → top file-tab navigation
src/components/Hero.tsx       → intro section (typing animation, name, CTA)
src/components/Projects.tsx   → projects grid + shared SectionHeading
src/components/Skills.tsx     → skills groups
src/components/Contact.tsx    → contact form + links
src/components/Footer.tsx     → footer
src/app/globals.css           → global styles, scrollbar, selection color
tailwind.config.ts            → color palette, fonts, animation tokens
```

Colors and fonts are defined once in `tailwind.config.ts` under `theme.colors`
and `theme.fontFamily` (`ink`, `surface`, `amber`, `cyan`, `rose`, etc.) —
change a value there and it updates everywhere that color is used.

## 5. Add a profile photo, resume, or favicon (optional)

Put files in the `public/` folder — anything there is served from the site
root. For example, add `public/resume.pdf`, then set:

```ts
resumeUrl: "/resume.pdf"
```

in `src/data/portfolio.ts`, and link to it from `Hero.tsx` if you want a
"Download résumé" button.

## 6. Build for production (optional, before deploying)

```bash
npm run build
npm run start
```

`build` compiles an optimized production version and will also show you any
TypeScript/lint errors; `start` serves that build locally on port 3000 so
you can double check it before deploying.

## 7. Deploy it

The easiest path for a Next.js site is **Vercel** (made by the Next.js team,
free for personal projects):

1. Push this folder to a GitHub repository.
2. Go to https://vercel.com, sign in with GitHub, and click "New Project."
3. Select the repo — Vercel auto-detects Next.js, so you can leave all
   settings as default — and click Deploy.
4. You'll get a live `.vercel.app` URL in about a minute; you can attach a
   custom domain afterward from the project settings.

Netlify and your own Node server work too, but Vercel needs zero config for
Next.js specifically.

## 8. Project structure

```
portfolio/
├── public/                  static files (images, resume, favicon)
├── src/
│   ├── app/
│   │   ├── layout.tsx        fonts + <html>/<body> shell + metadata
│   │   ├── page.tsx           assembles the sections in order
│   │   └── globals.css        global styles
│   ├── components/           one file per section (see above)
│   └── data/
│       └── portfolio.ts       ← your content lives here
├── tailwind.config.ts         color palette, fonts, animations
├── next.config.mjs
├── package.json
└── tsconfig.json
```

## Notes

- The contact form uses a `mailto:` link (opens the visitor's email client
  pre-filled with their message) — there's no backend, so nothing to
  configure. If you'd rather receive submissions directly, swap it for a
  form service like Formspree or a small API route.
- Animations respect `prefers-reduced-motion` automatically.
- This project was scaffolded by hand in an environment without internet
  access, so dependencies have **not** been installed or build-tested here —
  run `npm install` followed by `npm run build` once on your machine as a
  sanity check; if TypeScript flags anything, paste the error and it's a
  quick fix.
