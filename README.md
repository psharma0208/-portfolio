# Prashant Kumar Sharma — Portfolio

Premium, production-ready developer portfolio built with:

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- Dark futuristic theme + light toggle
- SEO: metadata, `robots.txt`, `sitemap.xml`
- Vercel-ready (static-first with a simple API route for the contact form)

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Environment

Copy `.env.example` to `.env` and set your deployed domain:

- `NEXT_PUBLIC_SITE_URL` (used for absolute Open Graph/Twitter image URLs)

## Structure

- `app/` routes, layout, global CSS, sitemap/robots, API route
- `components/` reusable UI + sections (Navbar, Hero, About, Skills, Experience, Projects, AIReady, Contact, Footer, ThemeToggle, Loader)
- `lib/` types + portfolio content data (`lib/site-data.ts`)
- `styles/` design tokens + global utilities
- `public/` static assets (`resume.pdf`, `og.svg`)
