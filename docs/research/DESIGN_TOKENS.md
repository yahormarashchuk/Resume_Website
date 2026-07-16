# Design Tokens — sawad.framer.website

## Colors (from Framer body tokens)
| Token | Value | Usage |
|---|---|---|
| bg-page | `#151312` | page background (warm near-black) |
| white | `#fff` | primary headings, nav text |
| text-muted | `#998f8f` | body copy, secondary text (warm gray) |
| accent-lime | `#c5ff41` | lime accent (hero card 2, highlights) |
| accent-orange | `#f46c38` | orange accent (hero card 1, profile ring, badges) |
| gray | `#6a6b6e` | tertiary text |
| border | `#b6b4bd33` | hairline borders (lavender-gray @ 20%) |
| cream | `#faf7f3` | profile card background (off-white) |
| near-black | `#111` | text on cream card |

Derived (observed in DOM):
- Nav pill bg: `rgba(255,255,255,0.03)`; nav tooltip bg: `rgba(255,255,255,0.1)`
- Outlined display text: transparent fill with `-webkit-text-stroke` (≈1px) in `#998f8f`-ish / white-alpha — verify per section

## Typography
- **Poppins** (Google Fonts): 400, 500, 600, 700, 900 + italics. Body/UI font.
- **Satoshi** (Fontshare via framerusercontent, weight **700 only**): display headings.
  woff2: `https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2`
- **Inter** 400 loaded but only used by Framer badge (skip).
- Nav labels/tooltips: Poppins 400 12px/12px white.

## Breakpoints (Framer variants)
| Variant | Media query |
|---|---|
| Desktop | `min-width: 1440px` |
| Laptop | `1080px – 1439.98px` |
| Tablet | `810px – 1079.98px` |
| Phone | `max-width: 809.98px` |

## Layout
- Page container: max-width **1140px**, centered; two columns: Left sticky **344px** (top: 40px), Right **666px**; column gap ≈ 130px (1140 − 344 − 666).
- Content starts ≈160px from top; sections stacked in right column with large gaps.
- Page scroll: native (no Lenis, no scroll-snap).

## Appear animations (on load, Framer springs)
- Pure opacity fade 0.001 → 1, spring `{stiffness: 400, damping: 30, mass: 1}`.
- Staggered delays: nav 1.0s, floating buttons 1.1s / 1.2s, Left card + Hero ~0 (verify — they use effect ids 12pw29r / 1vx03a9 with their own timing).
- Framer badge: translateY(10px) → 0 + fade (skip — platform chrome).

## Radii & effects
- Nav pill: 16px; nav icon circle: 50%; tooltip: 8px; icon inner: 6px.
- Cards: verify per section (hero cards, project cards, tool cards ≈ 12–24px).
