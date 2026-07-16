# FloatingNav Specification

## Overview
- **Target file:** `src/components/FloatingNav.tsx` (client component — hover state)
- **Interaction model:** hover-driven tooltips
- Data: `navItems` from `@/lib/content`; icons Home/Folder/Briefcase/Tool/Edit from `@/components/icons`.

## Placement (page provides positioning context)
Absolutely positioned: `top: 30px`, horizontally centered (`left-1/2 -translate-x-1/2`), `z-10`.
It scrolls away with the page (NOT fixed). Render position inside the component.

## Computed styles (exact, from getComputedStyle)
### Pill container `<nav>`
- width 292px, height 48px; display flex row, justify center, align center; gap 18px
- padding 0 20px; border-radius 16px; background rgba(255,255,255,0.03)

### Each item (5 total): `<a>` 36x36
- border-radius 50%; display flex center; cursor pointer
- inner icon holder: 28x28, border-radius 6px, padding 4px, background transparent
  - on hover: background rgba(255,255,255,0.1) (transition ~0.2s)
- svg icon: 20x20, stroke white, strokeWidth 2 (icons already sized via className)

### Tooltip label (hidden by default, one per item)
- absolute, below icon: top ~46px (orig: top 16px relative to link bottom area), centered horizontally
- background rgba(255,255,255,0.1); border-radius 8px; padding 4px 10px; white-space nowrap
- text: Poppins 400 12px/12px, color white
- default: opacity 0, translateX(-28px) shifted left behind; on hover: opacity 1, translateX(0)
  (Framer slides it; a simple fade+slide-in from left over 0.25s ease matches)
- z-index: tooltip behind pill (-1) when hidden; visible above when shown — simplest: opacity + pointer-events-none

## Notes
- Links: hrefs from content (#, #projects, #experience, #tools, #blog)
- Appear animation: whole nav `animate-fade-in` with `animation-delay: 1s` (utility exists in globals.css)
- Responsive: identical at all breakpoints (still centered, 292px)
