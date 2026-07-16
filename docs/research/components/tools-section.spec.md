# ToolsSection Specification

## Overview
- **Target file:** `src/components/ToolsSection.tsx`
- **Interaction model:** static cards (no hover bg change — verified)
- Data: `tools` from `@/lib/content`; `SectionTitle`

## Section container
- id="tools"; padding-top 120px; flex column, gap 20px, width 100%

## Heading
- `<SectionTitle solid="PREMIUM" ghost="TOOLS" />`

## Grid
- display grid; gap 10px
- Columns: lap/desk (≥1080): 2 columns (each ~328px — use grid-cols-2);
  tablet (810-1079): 3 columns; phone: 1 column
  → `grid-cols-1 tab:grid-cols-3 lap:grid-cols-2`

## Card (6, from content) — `<a>` with href, target _blank rel noopener
- height 92px; padding 16px; border-radius 8px; flex row, align center, gap 16px;
  overflow hidden; background transparent
- Logo: 60x60, border-radius 8px, next/image from content
- Text block (flex column, gap 4px):
  - Name `<h3>`: Poppins 600 24px / 28.8px, white
  - Category `<p>`: Poppins 400 16px / 22.4px, #998f8f (text-warmgray)
