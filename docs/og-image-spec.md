# Open Graph Image — Design Specification

Target: 1200 × 630 px, PNG (or JPEG), optimized under 300 KB.

This image appears when the portfolio URL is shared on LinkedIn,
WhatsApp, Facebook, Slack, Discord, and Twitter/X.

## Layout

┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                                                              │
│   DOUAA BEJOU                            [        ]          │
│                                          [        ]          │
│   Ingénieure en Génie Industriel         [        ]          │
│                                          [ PORTRAIT]         │
│   Qualité · Transformation digitale      [        ]          │
│   Technologie                            [        ]          │
│                                          [        ]          │
│                                                              │
│  ────────────────────────────────────────────────            │
│                                                              │
│  portfolio-douaa.vercel.app                                  │
│                                                              │
└─────────────────────────────────────────────────────────────┘

## Exact specifications

- **Canvas**: 1200 × 630 px
- **Background**: solid #202124 (charcoal)
- **Text colour**: #F7F6F2 (off-white)
- **Accent**: #C65D2E (orange) — used only for the horizontal rule above the URL

### Typography

- Font: **IBM Plex Sans** (same as the site)
- Name: 64 px, weight 500 (Medium), letter-spacing -1px
- Role: 24 px, weight 400 (Regular), opacity 78%
- Tagline: 16 px, weight 500 (Medium), uppercase, letter-spacing 4px, opacity 55%
- URL: 16 px, weight 400, opacity 55%

### Portrait

- Place the portrait (transparent-background PNG) on the right side
- Max height: ~480 px, aligned to bottom edge
- Optional: 1 px border #F7F6F2 at 15% opacity around the portrait's bounding box

### Margins

- Left/right padding: 80 px
- Top/bottom padding: 60 px
- Portrait area starts at x = 720 px, ends at x = 1160 px

## Export

- Format: PNG-24 (transparency not needed — solid background)
- Colour profile: sRGB
- Optimize with https://tinypng.com or `squoosh.app` — target under 300 KB
- Save to: `public/og-image.png`

## Quick alternative

If recreating in Figma/Photoshop is too much: use https://og-playground.vercel.app
or https://og-image.vercel.app — templates exist. Just match the colour palette
and content above.