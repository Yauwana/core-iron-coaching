# Core Iron Coaching

Marketing site for Core Iron Coaching — online and 1-on-1 personal training in Mickleham, Melbourne. Built with Next.js (App Router) + TypeScript, implementing the design handed off from Claude Design.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

- `app/` — Next.js App Router entry (`layout.tsx`, `page.tsx`, `globals.css` with the design tokens)
- `components/ui/` — design-system primitives ported from the Claude Design bundle (Button, Card, Section, SectionHeading, Eyebrow, Badge, StatCard, FeatureCard, ContactTile, PhotoFrame, Icon)
- `components/sections/` — page sections (Header, Hero, Coaching options, Who I work with, About, Results, How it works, FAQ, Contact, Footer)
- `lib/content.ts` — site-wide links (Calendly, WhatsApp, email) and section visibility toggles (`SHOW_RESULTS`, `SHOW_FAQ`)
- `public/images/` — logo and photography used on the site

## Design source

`project/` contains the original Claude Design handoff bundle (`Core Iron Coaching.dc.html`, the design-system tokens/components, and source images) and `chats/` has the design conversation transcript. These are kept for reference — the live implementation is the Next.js app above, not the `.dc.html` file (which only renders inside Claude Design's own preview runtime).

To change copy, links, or which sections are shown, edit the files under `components/` and `lib/content.ts` directly.
