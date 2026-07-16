# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** static + hover on the two promo-card arrow buttons
- Data: `hero`, `stats`, `heroCards` from `@/lib/content`; `LayersIcon`, `LayoutIcon` from icons;
  `HoverArrow` from `@/components/HoverArrow`

## Section container
- flex column, gap 60px (phone: gap 70px), width 100%

## 1. Info block
- flex column, gap 10px
- `<h1>`: Poppins 700, white; two words: "SOFTWARE" (solid white) then `<br/>` "ENGINEER"
  in ghost color rgba(182,180,189,0.2) (`text-ghost`).
  Sizes: desk(≥1440) 110px/1; lap(1080-1439) 94px/94px; tab 86px; phone 52px. leading-none.
- Intro `<p>`: Poppins 400 18px / 25.2px (leading-[1.4]), color #998f8f (text-warmgray),
  max-width 480px. Text from content.

## 2. Stats row
- flex row, gap 40px, align center (phone: stays row — numbers 70px at ALL breakpoints)
- Per stat (flex column):
  - value `<p>`: Poppins 600 70px / 84px, letter-spacing -0.7px, white
  - two label lines `<p>`: Poppins 400 16px / 19.2px, letter-spacing -0.16px, #998f8f, uppercase
    (content already uppercase)

## 3. Promo cards row
- flex row, gap 20px, height 260px (lap); phone: column, cards full-width h-[212px]
- **Orange card** (`heroCards.orange` → href #experience):
  - 260x260 (lap) fixed; phone 100%x212. bg #f46c38 (bg-orange), radius 10px,
    padding 40px 20px 22px, flex column, justify start, align start, gap 24px,
    overflow hidden, relative.
  - Decorative lines (absolute, behind content):
    `<img src="/images/doodles/orange-line-a.svg">` 388x155 at top:-57px left:-58px;
    `<img src="/images/doodles/orange-line-b.svg">` 388x155 at top:106px left:-54px
  - Icon: `LayersIcon` 38x41 white (stroke), strokeWidth 2
  - Bottom block (flex column justify-between align-end, flex-1, w-full):
    - Text `<p>`: Poppins 500 24px / 26.4px, white, self-start, max-w-[220px]
      "DYNAMIC ANIMATION, MOTION DESIGN"
    - Arrow link (self-end): 32x32 rounded-6 flex center, `group` +
      `<HoverArrow className="text-white" />` — arrow WHITE on orange card
- **Lime card** (`heroCards.lime` → href #projects):
  - 386x260 (lap, flex-1); phone 100%x212. bg #c5ff41 (bg-lime), radius 10px, same padding/layout.
  - Decorative: `<img src="/images/doodles/lime-line.svg">` 422x284 at top:-60px right:-36px;
    second copy at top:166px left:-36px rotated 4deg
  - Icon: `LayoutIcon` 38x41, stroke near-black #151312 (text-page)
  - Text: Poppins 500 24px/26.4px, color #151312 (text-page), max-w-[346px]
    "FRAMER, FIGMA, WORDPRESS, REACTJS"
  - Arrow: `<HoverArrow className="text-page" />` — dark arrow on lime card

## Appear
- Section wrapped in `animate-fade-in`.

## Note
h1 element with id anchor is not needed; hero has no #id (nav Home scrolls to top).
