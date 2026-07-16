# BlogSection Specification

## Overview
- **Target file:** `src/components/BlogSection.tsx`
- **Interaction model:** static rows with hover arrow
- Data: `articles` from `@/lib/content`; `SectionTitle`, `HoverArrow`

## Section container
- id="blog"; padding-top 120px; flex column, gap 20px, width 100%

## Heading
- `<SectionTitle solid="DESIGN" ghost="THOUGHTS" />`

## Rows (3, from content) — `<a>` href from content, class `group`
- width 100%; padding 30px 16px; border-radius 16px; flex column, justify start,
  align start, gap 20px; relative; overflow hidden
- **Arrow**: absolute top-[46px] right-4; `<HoverArrow />`
- **Details** (flex column, gap 14px, max-width 480px):
  - Title `<h3>`: Poppins 600 26px / 31.2px, white
  - Excerpt `<p>`: Poppins 400 16px / 22.4px, #998f8f
- **Meta row**: full width (spans row minus padding), flex row justify-between align center:
  - date `<p>` and readTime `<p>`: Poppins 400 16px / 17.6px, #998f8f
