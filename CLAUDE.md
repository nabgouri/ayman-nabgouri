# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal developer portfolio for Ayman Nabgouri. Built with Next.js 14 (Pages Router), React 18, and Tailwind CSS. Single-page site with sections: Hero, About, Projects, and Contact.

## Commands

- `npm run dev` — Start dev server on localhost:3000
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — ESLint (extends `next/core-web-vitals`)

## Architecture

**Routing:** Uses Next.js Pages Router (`src/pages/`), not the App Router. Single route at `src/pages/index.jsx` renders `HomPage` from `src/components/index.jsx`.

**Component layout:** `src/components/index.jsx` is the main page compositor — it assembles the full page with a CSS Grid layout (`grid-cols-[54px_1fr]`) placing the fixed `SideBar` alongside the main content.

**Section components** live in `src/components/<section>/`:
- `hero/` — Hero section with animated `DotGrid` (uses anime.js)
- `about/` — About section with `Stats` sub-component
- `projects/` — Project cards with modal details; project data is defined inline in `Projects.jsx`
- `experience/` — Experience timeline (currently commented out in `index.jsx`)
- `contact/` — Contact form/section
- `nav/` — `Header`, `SideBar`, `SideBarLink`

**Shared utilities** in `src/components/util/`: `Reveal` (scroll-triggered animation wrapper using framer-motion), `SectionHeader`, `Chip`.

## Key Libraries

- **framer-motion** — Primary animation library (scroll reveals, transitions)
- **anime.js** — Used specifically for the staggered dot grid animation in `Hero`
- **react-icons** — Icon set
- **tailwind-merge** — Utility for merging Tailwind class names

## Styling

- Tailwind CSS with dark theme: body has `bg-zinc-900 text-zinc-50` (set in `_document.jsx`)
- Color palette: `indigo` for primary/accent, `zinc` for neutrals
- Custom CSS in `src/styles/globals.css`: `.no-scrollbar`, `.writing-vertical`, smooth scroll
- Font: Inter (loaded via `next/font/google` in `src/pages/index.jsx`)

## ESLint Overrides

- `@next/next/no-img-element`: off (uses `<img>` instead of `next/image`)
- `react/no-unescaped-entities`: off
- `react-hooks/exhaustive-deps`: off

## Path Aliases

`@/*` maps to `./src/*` (configured in `jsconfig.json`).

## Static Assets

Project images in `public/project-imgs/`. Resume PDF at `public/Ayman_Nabgouri_Resume.pdf`.
