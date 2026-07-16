# Page Topology — sawad.framer.website (single page)

Viewport used for base extraction: 1265px (Laptop variant 1080–1439).

```
body (#151312)
├── <nav> floating icon nav — absolute, top 30px, centered, z-10, 292x48
│     5 circular icon links: Home(./), Projects(./projects), Experience(./experience),
│     Tools(./tools), Thoughts(./blog) — each with hover tooltip label below
├── Wrapper (relative, w-full)
│   └── Container (1140px, centered, 2 columns, starts ~160px from top)
│       ├── Left — sticky top-40, 344x640: profile card (cream #faf7f3)
│       │     photo (240x360 area), name, orange badge dot, bio, social icons row
│       └── Right — 666px flow column
│           ├── Hero (h≈776): "SOFTWARE ENGINEER" display, intro paragraph,
│           │     stats row (+12 / +46 / +20), 2 promo cards (orange, lime)
│           ├── Projects (h≈844): "RECENT PROJECTS" title + 3 project cards
│           │     (NajmAI, Damas, Majd) + arrow button → ./projects
│           ├── Experience (h≈914): "12 YEARS OF EXPERIENCE" + 3 job rows
│           │     (PixelForge, BlueWave, TrendCraft) + arrow button → ./experience
│           ├── Tools (h≈616): "PREMIUM TOOLS" + 6 tool cards in grid
│           │     (Framer, Figma, Lemon Squeezy, ChatGPT, Notion, Nextjs)
│           ├── Blog (h≈1156): "DESIGN THOUGHTS" + 3 article rows with meta
│           └── Contact (h≈706): "LET'S WORK TOGETHER" + form
│                 (Name, Email, Budget <select>, Message, Submit)
└── Footer "Variant 1" (h≈262, full width):
      "Made by Templyo | Powered by Framer" + social links
      (Dribbble, Twitter, Instagram, mailto)
```

## Interaction models
- Nav: hover-driven tooltips (opacity/translate), JS-driven (Framer variants).
- Left card: `position: sticky; top: 40px` — static content.
- All sections: static flow content + load-time fade-in; hover states on cards/rows/buttons.
- No scroll-driven switching, no tabs, no carousels, no scroll-snap, no smooth-scroll lib.
- Contact form: plain form fields + custom-styled select; Framer form (POST) — clone as
  client-side form with no real backend.

## Skipped platform chrome (not part of the design)
- "Use Template for Free", "More Templates", "Video Tutorial" fixed promo pills
- "Made in Framer" badge

## Nav anchor decision
Original nav links to subpages (./projects etc.) that exist in the template but are
out of scope (single-page clone). Clone maps them to in-page anchors (#projects,
#experience, #tools, #blog).
