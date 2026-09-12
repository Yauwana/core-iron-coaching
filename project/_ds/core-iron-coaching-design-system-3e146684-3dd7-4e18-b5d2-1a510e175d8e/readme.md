# CoreIron Coaching — Design System

A brand and interface system for **CoreIron Coaching**, a one-coach personal training and online coaching practice. The product surface is a single marketing site whose job is to convert a visitor into a booked consultation: hero, proof, method, credentials, client results, contact.

## Where this came from

The user supplied two screenshots of third-party fitness-coaching websites as **aesthetic reference only**:

- `uploads/FullLogo.png`, `uploads/IconOnly.png` — **the real brand assets.** The fist-and-dumbbell mark, the italic "CORE IRON" wordmark, and the upright wide-tracked "COACHING" tail. The palette, the display register and the accent colour are all sampled from these, not from the reference sites.
- `uploads/8zOPTBOUl4.jpg` — dark navy site with a gold/amber accent, condensed uppercase display type, a light editorial biography band, an expandable achievement timeline, stat band, and a media gallery with pill filters.
- `uploads/57aJdgTXKJ.jpg` — black site with an orange accent and a long two-column grid of before/after client testimonials.

The user was explicit: *"This isn't a website that I own and this isn't my brand. I just like the design and the way that it looks and the style."* Nothing was traced, copied, or reconstructed from those sites — no logos, no photography, no body copy. What was taken is a **direction**: dark base, one hot metallic accent, condensed uppercase athletic display type, proof-driven content structure.

No codebase, Figma file, font binary, logo, or photography was supplied. Every value in this system was authored from that direction.

### Substitutions to review

| Thing | What we did | Why |
| --- | --- | --- |
| Display + text fonts | **Archivo** (variable, run at `wdth` 70–84) and **Sora**, both from Google Fonts | No font files were supplied. Archivo run narrow is the closest widely-licensable match to the condensed athletic display face in the reference. |
| Icons | **Lucide** (`lucide-static` via unpkg CDN), masked to `currentColor` | No icon set was supplied. Lucide's 2px line style matches the reference's thin outline glyphs. |
| Logo | **Supplied by the user** — `assets/logo-full.png`, `assets/logo-full-dark.png`, `assets/logo-icon.png`. The flat background was keyed out and the artwork cropped to content. | The originals (`uploads/FullLogo.png`, `uploads/IconOnly.png`) came on an opaque light-blue field, which is not a brand colour. |
| Photography | Labelled placeholder frames throughout | No imagery was supplied and the reference photos are third-party. |

---

## Content fundamentals

**Voice.** Direct, second person, evidence-first. The brand talks *to you* about *your* body and *your* schedule, and talks about itself only through verifiable facts — years, certifications, client counts, kilos lost. It never sells with adjectives.

- Write: "Every program is tailored to your specific goals, lifestyle and current fitness level."
- Not: "Unlock your ultimate potential with our revolutionary transformative approach."

**Person.** *You* for the reader, *we* for the practice, *I* only inside a coach's signed quote. Client testimonials are always first person and always verbatim.

**Casing.** Three registers, applied strictly:
- **Display headings** — ALL UPPERCASE, condensed. `TRANSFORMATION STARTS TODAY`
- **Eyebrows, buttons, labels, badges** — ALL UPPERCASE, wide tracking.
- **Everything else** — sentence case. Card titles are sentence case, not title case. `Goal-specific programming`, not `Goal-Specific Programming`.

**Headline construction.** The signature move is a two-tone headline: the setup in white, the payoff in orange. `Real results, **real people**` · `Ready to start your **transformation?**` One accent phrase per headline, always trailing.

**Sentence length.** Body copy runs long and calm — 20 to 35 words per sentence, two to four sentences per block. It is not punchy. The display type carries the energy so the prose does not have to.

**Numbers.** Always specific and always in the shortest form: `500+`, `12 weeks`, `27kgs`, `10+ years`. Never "hundreds of" or "over a decade" in a stat position. Metric units, NZ conventions.

**Client words are never edited.** Testimonial quotes keep the client's grammar, spelling and phrasing. Attribution is a real name plus a real occupation or competitive title.

**No emoji. Ever.** Not in copy, not in headings, not as icons or bullets.

**Tone bans.** No exclamation marks outside a verbatim client quote. No "unlock", "elevate", "journey" as a verb, "game-changer", "next level". No countdown urgency or scarcity language. No "this, not that" constructions.

---

## Visual foundations

### Colour

Everything is sampled from the logo mark. The mark gives three things: a **graphite fist**, a **chrome dumbbell**, and an **orange plate**. That is the whole palette.

- **Iron** (`--iron-950` → `--iron-050`) is the base — warm-neutral graphite from the fist, `#0B0C0D` through to near-white. No blue cast anywhere. The page is `--iron-900`; cards sit one step lighter at `--iron-850`; raised cards at `--iron-800`; inset fields drop to `--iron-950`.
- **Orange** (`--orange-500 #E2691F`) is the accent, taken straight off the plate, and it is rationed. Per page it appears on: eyebrow rules, the trailing accent phrase in headings, the primary CTA, the active nav link, stat figures, and icon tiles. Nothing else.
- **Steel** (`--steel-600` → `--steel-100`) is the chrome. It is a *surface and rule* colour — dividers, plate-like fills, metallic badges. **Never body text**; `--steel-500` on graphite does not clear 4.5:1.
- **Paper** (`--paper-000` → `--paper-200`) supports exactly **one light editorial band per page** — the biography/testimonial section. Neutral off-whites, not warm.
- Semantic green / red / blue exist for state and never appear decoratively. There is no second brand colour.

Grey and orange are the only two things a viewer should be able to name.

### Typography

The logo splits type into two registers, and the system follows it exactly.

- **Display — italic, condensed, uppercase.** Archivo with the variable width axis run at `wdth` 70–84, weight 800, `font-style: italic`, line-height 0.96. This is the "CORE IRON" register: every section heading, hero headline, stat figure and watermark. Narrower at larger sizes (`70` at hero, `84` at card-title scale). The italic and the width axis together *are* the voice — do not set display type upright, and do not swap to a static width.
- **Labels — upright, wide-tracked, uppercase.** The "COACHING" register: eyebrows, buttons, badges, field labels, stat captions. Never italic.
- **Text** — Sora, 15px default, line-height 1.65, 62ch measure, sentence case.
- **Mono** — JetBrains Mono, for token names and data readouts only.
- **Tracking** is the tell on the label register: `0.24em` on eyebrows, `0.18em` on stat captions, `0.16em` on field labels, `0.09em` on buttons, `0` on body.

### Layout, spacing, shape

- Container 1180px, narrow variant 760px. Bands are 96px tall in vertical padding, 48px horizontal.
- 4-based spacing scale to 32, then a coarser jump (40 / 56 / 72 / 96 / 128) for band rhythm.
- **Radii are tight** — 3px chips, 5px buttons and fields, 8px media, 12px cards. Nothing is pill-shaped except filter tabs and badges. The system reads engineered, not friendly.
- Grids: three-up services, two-up testimonials, four-up contact tiles, three or four stat cards centred. `gap: 16px`.

### Backgrounds

Bands alternate `--iron-900` (default) and `--iron-950` (darker), with a single `gradient` band easing into the one light `--paper-100` section per page. There are no repeating patterns, no textures, no noise overlays, and **no purple or blue gradients**. The only decorative device is an oversized watermark word set in 5.5%-white italic display type, bled off the bottom edge of the hero.

### Photography

Warm-lit gym and stage imagery, high contrast, dark surroundings. Before/after pairs are shot flat and honest — same lighting, same pose, week labels burnt in. Nothing is heavily colour-graded; no black-and-white, no grain filters. Portraits are cut out against dark ground where possible. **Type over a photograph always sits on a scrim** (`--scrim-bottom` or `--scrim-left`), never on the image alone.

### Elevation and borders

- Borders are **hairlines**: `rgba(255,255,255,.08)` default, `.14` subtle, `.28` strong. On light bands, `--paper-200`.
- Shadows are near-black and low-spread — depth, not glow. `--shadow-xs` on resting cards, `--shadow-md` on hover, `--shadow-lg` on the CTA banner.
- **`--shadow-glow-orange` is the one glow in the system** and it belongs to the primary button only.
- Inner shadow is used once, as a 1px top highlight (`--shadow-inset-top`) on raised surfaces.
- Left-border accent rules appear exactly once: the 3px orange rule on `QuoteBlock`. Nowhere else.

### Transparency and blur

Glass is reserved for the site header sitting over hero imagery — `rgba(14,20,34,.68)` at 14px blur. Cards are never translucent. Orange tints (`rgba(226,105,31,.07–.14)`) wash accent surfaces but never carry body text.

### Motion

- Durations: 90ms instant, 150ms fast (hover/press), 220ms base (cards), 420ms slow, 700ms reveal.
- Easing is `cubic-bezier(.2,.6,.2,1)` standard and `cubic-bezier(.16,1,.3,1)` on entrances. **Nothing bounces, nothing overshoots.**
- **Hover** lifts −2px and brightens 8%; card borders turn orange. **Press** scales to 0.975 — no colour change on primary, one step darker on solid surfaces. **Focus** is a 2px orange ring offset by the page colour, never blue. **Disabled** is opacity 0.42 with `not-allowed`.
- Section reveals fade up 12px over 700ms. No parallax, no counters, no typewriter.

---

## Iconography

**Lucide**, loaded from `https://unpkg.com/lucide-static@0.460.0/icons/<slug>.svg` and masked to `currentColor` by the `Icon` component. No icon set was supplied by the user, so this is a **flagged substitution** — Lucide was chosen because its 2px outline style matches the thin line glyphs in the reference material.

- **Line only.** Never mix filled or duotone glyphs into the set.
- Sizes: 13–14 inline with caption text, 15–16 in buttons and list rows, 18 default, 19–22 in orange tiles and discs, 26 in play buttons.
- Icons take `currentColor`, so they inherit orange on accent surfaces and `--iron-200` on neutral ones. Never hard-code an icon colour except to force orange on a neutral row.
- Recurring vocabulary: `dumbbell` `trophy` `target` `heart-pulse` `trending-up` `calendar-days` `calendar-check` `shield-check` `video` `play` `message-circle` `mail` `phone` `map-pin` `clock` `user` `check` `chevron-down` `arrow-right` `search` `quote` `instagram` `facebook` `youtube`.
- **No emoji, no unicode dingbats.** Bullet-style lists use a 15px orange `check` icon, never a `•` or `✓` character.
- No SVG was hand-drawn for this system, and none should be.

---

## Index

**Root**
- `styles.css` — the single entry point consumers link. Imports only.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent Skills wrapper.
- `readme.md` — this file.

**Tokens** (`tokens/`) — `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css` · `motion.css` · `base.css`

**Guidelines** (`guidelines/`) — specimen cards for the Design System tab, under `colors/`, `type/`, `space/`, `effects/`.

**Components**

| Group | Components |
| --- | --- |
| `components/brand/` | `Wordmark` |
| `components/core/` | `Button`, `Badge`, `Eyebrow`, `SectionHeading`, `Icon` |
| `components/cards/` | `Card`, `FeatureCard`, `StatCard`, `TestimonialCard`, `TimelineEntry`, `ContactTile`, `QuoteBlock` |
| `components/forms/` | `Field`, `Input`, `Textarea`, `Select`, `Checkbox` |
| `components/media/` | `PhotoFrame` |
| `components/site/` | `SiteHeader`, `Hero`, `Section`, `CTABanner`, `FilterTabs`, `SiteFooter` |

Every component has a sibling `.d.ts` props contract and a `.prompt.md` usage note.

**Assets** (`assets/`) — `logo-full.png` (stacked artwork, off-white type, for dark grounds) · `logo-full-dark.png` (graphite type, for light grounds) · `logo-icon.png` (mark alone). All three are the user's supplied artwork with the flat background keyed out. The mark is never recoloured, outlined, or set on a mid-tone; it needs near-black or near-white behind it, with clear space equal to the plate height.

**Intentional additions.** No source defined a component inventory, so the set above was authored from the reference screenshots' visible structure. Three entries are scaffolding rather than observed UI: `Icon` (a wrapper for the substituted Lucide set), `PhotoFrame` (a placeholder container standing in for unsupplied photography), and `Section` (the band wrapper that enforces the 96px rhythm).

**UI kits** (`ui_kits/`)
- `marketing/` — four-screen click-through of the public site. See its `README.md`.

No slide template was supplied, so no sample slides exist.
