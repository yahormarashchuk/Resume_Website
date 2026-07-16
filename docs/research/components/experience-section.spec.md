# ExperienceSection Specification

## Overview
- **Target file:** `src/components/ExperienceSection.tsx`
- **Interaction model:** static rows with hover arrow
- Data: `jobs` from `@/lib/content`; `SectionTitle`, `HoverArrow`

## Section container
- id="experience"; padding-top 120px; flex column, gap 20px, width 100%; overflow hidden

## Heading
- `<SectionTitle solid="12 YEARS OF" ghost="EXPERIENCE" />`

## Rows (3, from content)
Each row is a `<div>` (not a link on the original rows themselves — they had cursor default;
keep as div), class `group`:
- width 100%; height ~198px (auto ok); padding 24px 16px; border-radius 16px;
  flex column, justify start, align start, gap 20px; relative; overflow hidden
- **Arrow**: absolute top-[46px] right-4; `<HoverArrow />`
- **Details** (flex column, gap 14px, max-width 420px):
  - Company `<h3>`: Poppins 600 26px / 31.2px, white
  - Description `<p>`: Poppins 400 16px / 22.4px, #998f8f
- **Period row** below: `<p>` Poppins 400 16px / 17.6px (leading-[1.1]), #998f8f
  e.g. "Jan 2020 - Present"

## Responsive
- Identical column structure at all breakpoints; width follows container.
