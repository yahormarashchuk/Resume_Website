# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static links
- Data: `footer` from `@/lib/content`; `SocialGlyph`, `MailIcon` from icons

## Container (full page width, outside the 2-col container)
- padding 160px 0 80px; flex column, align center, justify center, gap 30px; overflow hidden

## Children
1. **Credit line** `<p>`: Poppins 400 16px / 22.4px, #998f8f (text-warmgray):
   "Made by [Templyo](https://templyo.io/templates) | Powered by [Framer](https://www.framer.com)"
   — links same color, underline on hover.
2. **Social row** ("Links"): flex row, gap ~16px, height 22px area; 4 items from footer.socials:
   dribbble, twitter, instagram, mail(mailto:your@email.com).
   Each `<a>`: 36x36 flex center rounded-6; glyph 24x24 orange (#f46c38):
   - dribbble/twitter/instagram: `<SocialGlyph name="..." className="bg-orange" />`
   - mail: `<MailIcon className="size-6 text-orange" strokeWidth={2} />`
   aria-labels required.
