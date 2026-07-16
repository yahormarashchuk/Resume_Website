# ProjectsSection Specification

## Overview
- **Target file:** `src/components/ProjectsSection.tsx`
- **Interaction model:** static rows with hover arrow micro-interaction
- Data: `projects` from `@/lib/content`; `SectionTitle`, `HoverArrow` components

## Section container
- id="projects"; padding-top 120px; flex column, gap 20px, width 100%

## Heading
- `<SectionTitle solid="RECENT" ghost="PROJECTS" />`

## Rows (3, from content)
Each row is an `<a>` (href from content), class `group`:
- width 100%; padding 20px 16px; border-radius 16px; flex row, justify-between, align center;
  position relative; overflow hidden; background transparent (unchanged on hover — verified)
- **Left cluster** (flex row, gap 20px, align center):
  - Image: 130x134.7px box (use h-[135px] w-[130px]), border-radius 8px, object-cover,
    next/image with project image
  - Details (flex column, gap 4px, max-width 420px):
    - Title `<h3>`: Poppins 600 26px / 31.2px, white
    - Subtitle `<p>`: Poppins 400 16px / 22.4px, #998f8f (text-warmgray)
- **Arrow**: positioned top-right of row — absolute top-[36px] right-4;
  `<HoverArrow />` (orange, default)

## Responsive
- Phone: same structure; row keeps horizontal layout (verified 350px wide, h 175);
  Details max-width shrinks naturally. Image stays 130px wide.

## Appear
- none (below the fold)
