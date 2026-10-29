# GoldAcres Learning Center

Website for GoldAcres Learning Center, Jos South, Plateau State.

Built with Next.js 16 (App Router), React 19, Tailwind CSS 4 and TypeScript.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build && npm start
```

## Where things live

- `src/lib/site.ts`: contact details, motto, vision/mission/values, testimonials and the gallery photo list. Edit this for most content changes.
- `src/app/`: pages (`/`, `/about`, `/gallery`, `/contact`). `/more` and `/read-more` redirect to `/about` (see `next.config.ts`).
- `src/components/`: header, footer, shared sections, gallery lightbox and contact form.
- `src/app/globals.css`: theme colours, fonts and shared button styles.
- `public/`: photos; `public/brand/emblem.png` is the logo emblem.

The contact form has no backend: it opens the visitor's email app with the message pre-filled, addressed to the email in `site.ts`.
