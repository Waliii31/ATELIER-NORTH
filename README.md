# Atelier North

A responsive, single-page portfolio for Atelier North, a fictional architecture and interiors studio. The site pairs editorial typography and architectural photography with a restrained palette, project storytelling, and a contact-focused layout.

## Features

- Responsive landing page with hero, studio philosophy, services, selected projects, testimonial, contact details, and newsletter sections.
- Lenis-powered smooth scrolling and in-page anchor navigation.
- Scroll-triggered section reveals and a subtle stagger across project cards.
- Reduced-motion support: smooth scrolling and reveal transitions are disabled when the visitor prefers reduced motion.
- Interactive services list that updates its background image.
- Mobile navigation and a sticky header that changes appearance while scrolling.
- Vercel Web Analytics, enabled in production builds.

## Tech stack

- [Next.js](https://nextjs.org/) App Router and React
- TypeScript
- Tailwind CSS 4 with PostCSS
- Lenis for smooth scrolling
- Lucide React icons
- Vercel Web Analytics

## Requirements

- Node.js compatible with the installed Next.js version
- npm

## Getting started

Install the exact dependency versions recorded in `package-lock.json`:

```bash
npm ci
```

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The development server supports hot reloading.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server. |
| `npm run build` | Create an optimized production build. |
| `npm run start` | Serve the production build locally; run `npm run build` first. |
| `npx tsc --noEmit` | Check TypeScript types without emitting files. |

## Project structure

```text
app/
  globals.css       Global design system, layout, responsive styles, and animations
  layout.tsx        Root layout, metadata, and analytics integration
  page.tsx          Landing-page content and interactive behavior
components/
  smooth-scroll.tsx Lenis lifecycle and reduced-motion handling
  ui/
    button.tsx      Shared button primitive
lib/
  utils.ts          Shared class-name utility
public/
  icon.svg          Atelier North architectural favicon
  apple-icon.png    Atelier North Apple touch icon
```

## Customization

- Edit the page sections, project descriptions, service names, and image URLs in `app/page.tsx`.
- Adjust colors, typography, spacing, breakpoints, and animation timing in `app/globals.css`.
- Update the document title, description, and icon paths in `app/layout.tsx`; the current brand icons are in `public/`.
- Project and hero photography currently use externally hosted Unsplash image URLs. Replace them with approved assets if you need local hosting or different imagery.

## Forms and deployment

The contact and newsletter forms are presentation-only at the moment: their submit handlers prevent a page reload but do not send or store submissions. Connect them to an API route or a form provider before using the page to collect enquiries.

Deployments should use npm and the committed `package-lock.json` (`npm ci`). The project is configured for Next.js and can be deployed to Vercel or another platform that supports Next.js. Vercel Analytics is rendered only in production.
