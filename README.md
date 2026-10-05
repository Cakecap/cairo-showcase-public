# CAIRO Showcase

Public, static showcase for the Centre for Artificial Intelligence & Robotics (CAIRO), Universiti Teknologi Malaysia.

## Architecture

- React, TypeScript, Vite, and Tailwind CSS
- Static project catalogue in `src/data/projects.ts`
- Static public media under `public/media`
- Public routes only: `/` and `/projects/:slug`
- No server, database, API, authentication, uploads, or admin interface
- Vercel SPA fallback configured in `vercel.json`

The interface is based on the strongest public-facing work from CAIRO Showcase V4. Its deployment-safe static structure comes from the V4 Stage 1 snapshot, with curated project imagery sourced from the V3 media library.

## Local development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run typecheck
npm run lint
npm run build
```

## Deployment

Import the repository into Vercel as a Vite project. No environment variables are required.
