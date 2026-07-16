# ProfileCard Specification

## Overview
- **Target file:** `src/components/ProfileCard.tsx` (server component OK)
- **Interaction model:** static; page column makes it sticky
- Data: `profile`, `profileSocials` from `@/lib/content`; `SocialGlyph` from `@/components/icons`

## Container (laptop/desktop ≥1080px)
- Width 344px, height 640px. White card: background #fff (use bg-white; NOT cream —
  computed value was rgb(255,255,255)), border-radius 16px, padding 30px 20px,
  display flex column, align center, gap 24px, overflow hidden, position relative.
- Stickiness is applied by the PAGE (`sticky top-10`), not this component.

## Children (top to bottom)
1. **Decorative doodle (top)**: absolute, top -18px, centered; 194x100;
   `<img src="/images/doodles/card-circle.svg" alt="" width={194} height={100}>` (plain img fine)
2. **Photo**: 240x284, border-radius 16px, object-cover.
   src `/images/profile.jpg` (next/image, priority). aspect natural 3456x5184 cropped by fixed box.
3. **Bio block**: width 304 (full inner), flex column, justify space-between, align center, flex-1:
   - Name `<p>`: Poppins 700 36px / 39.6px, letter-spacing -1.44px, color near-black (#111 group;
     computed rgb(0,0,0) — use text-black), text-center. Text: "Aaabad Ahmed"
   - **Description & icons** block: flex column center, gap 30px:
     - Bio text: Poppins 500 18px / 19.8px, color #6a6b6e (text-gray-mid), max-width 300px, centered.
       Text: "A Software Engineer who has developed countless innovative solutions."
     - Social row: flex row center, gap 16px; 4 icons (dribbble, twitter, instagram, youtube).
       Each: 36x36 container (p-1.5, rounded-6), inner `SocialGlyph` 24x24 with bg #f46c38
       (orange) — `<SocialGlyph name="..." className="bg-orange" />`. Wrap each in `<a>` to
       social href with aria-label.
4. **Decorative doodle (bottom)**: absolute, top 348px, centered; 270x166;
   `<img src="/images/doodles/card-squiggle.svg" ...>`

## Responsive
- **Tablet (810-1079)**: card full width (max ~750), same stacked layout, natural height.
- **Phone (<810)**: width 100%, same column layout, photo 240x284 centered, natural height.
- Component should therefore use `w-full lap:w-[344px] lap:h-[640px]` style sizing; inner
  fixed sizes (photo 240x284) stay constant at all breakpoints.

## Appear
- Wrap content in `animate-fade-in` (no delay).
