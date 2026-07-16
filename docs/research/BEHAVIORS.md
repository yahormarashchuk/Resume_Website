# Behaviors — sawad.framer.website

## Page-level
- Native scrolling. No Lenis/Locomotive, no scroll-snap, no scroll-driven section switching.
- Nav is **absolute** (top 30px, horizontally centered, z-10) — it scrolls away with the page. Verified: after scrollY=600 nav top = -570.
- Left profile card: `position: sticky; top: 40px` on Desktop/Laptop only. Static, full-width on Tablet/Phone.

## Load-time appear animations (Framer springs)
- Elements fade in: opacity 0.001 → 1, **no translate** (except Framer badge).
- Spring: `{ type: spring, stiffness: 400, damping: 30, mass: 1 }` ≈ 0.55s settle.
- Delays: nav 1.0s, floating promo pills 1.1s. Left card and Hero use effect ids
  12pw29r / 1vx03a9 (same spring; delay not encoded in JSON → treat as 0).
- CSS approximation for clone: `animation: fadeIn 0.6s cubic-bezier(0.215,0.61,0.355,1) both` with matching delays.

## Hover behaviors (JS-driven Framer variants — verified by dispatching pointer events)
1. **Nav icon links**: tooltip label pill below icon — default `opacity: 0, x: ~-28px, z -1`;
   on hover fades in below the icon (bg rgba(255,255,255,0.1), radius 8, padding 4px 10px,
   Poppins 12px white). Icon circle 36px; inner 28px rounded-6 container.
   Assumed hover bg on icon: rgba(255,255,255,0.1) (verify in QA).
2. **Project/Experience/Blog row arrow**: 20px arrow (Material ArrowForward, rotated -45° =
   pointing up-right), orange #f46c38. On hover the arrow translates diagonally
   (measured settle: translate(-10px, 12px) in rotated space — implement as
   "fly out up-right, fly back in from down-left" swap, spring ~0.5s).
   Row background does NOT change (verified: stays transparent).
3. **Tool cards**: no background change on hover (verified).
4. **Links** (footer/nav text): default Framer link hover (no color change captured).
5. **Submit button**: assume slight brightness/scale change (not extractable; keep subtle).

## Forms
- Budget `<select>` options: Select… / <$3k / $3k - $5k / $5k - $10k / >$10k
- Inputs: wrapper pill bg rgba(182,180,189,0.2), radius 8, height 40, padding 12;
  input text Poppins 14px white; placeholder #999-ish. Textarea height 100.
- Labels: Poppins 12px, weight 500, color rgb(136,136,136); "Message" label 12px 400 #998f8f.
- Select chevron: inline 16x16 svg stroke #999.
- Submit: full-width, orange #f46c38, radius 8, height 40.

## Responsive summary (verified live)
| Breakpoint | Container | Left card | H1 | Section H2 | Tools grid | Hero cards |
|---|---|---|---|---|---|---|
| ≥1440 | 1140px, 2-col (344 + 696, gap 100) | sticky 344x640 | 110px | 90px | 2 col (328) | 260+386 wait: right col 696 → cards scale |
| 1080–1439 | 1140→(vw-based) 2-col (344 + 666) | sticky 344x640 | 94px | 90px | 2×328 | 260 + 386 |
| 810–1079 | single col, max 810, pad 30 | static 750w | 86px | 74px | 3 col ~243 | 300w each |
| ≤809 | single col, pad 20 | static 350w compact | 52px | 42px | 1 col 350 | stacked full-w 212h |

Stats numbers stay 70px at all widths.

## Framer promo overlays (SKIPPED in clone — platform chrome)
- "Use Template for Free" (red pill), "More Templates" (lime pill), "Made in Framer" badge,
  "Video Tutorial" (red pill, left edge).
