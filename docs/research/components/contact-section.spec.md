# ContactSection Specification

## Overview
- **Target file:** `src/components/ContactSection.tsx` (client component — form state)
- **Interaction model:** form; no real backend — preventDefault and no-op (or console)
- Data: `budgetOptions` from `@/lib/content`; `SectionTitle`, `ChevronDownIcon`

## Section container
- id="contact"; padding-top 120px; flex column, align start, gap 50px, width 100%

## Heading
- `<SectionTitle solid="LET'S WORK" ghost="TOGETHER" />`

## Form (flex column, gap 20px, width 100%)
1. **Name & Email row**: flex row gap 20px (phone: column); each field flex-1
2. **Field pattern** (label wrapping input):
   - label block: flex column, gap 10px
   - label text `<span>`: Poppins 500 12px, color rgb(136,136,136)
   - input wrapper: height 40px, border-radius 8px, padding 12px,
     background rgba(182,180,189,0.2) (bg-ghost), flex align center
   - `<input>`: transparent bg, Poppins 400 14px / 16.8px, text white, w-full,
     placeholder color #999 (placeholder:text-[#999999])
   - placeholders: "Your Name", "Your Email"; types text / email
3. **Budget select**: same wrapper (height 40); `<select>` transparent, Poppins 14px,
   full width, appearance-none; initial color #999 (when value empty), white after selection;
   options from `budgetOptions`; custom chevron: `ChevronDownIcon` 16x16 text-[#999]
   absolute right-3, pointer-events-none. Option elements: give them dark bg
   (`bg-page text-white`) so the dropdown is legible.
4. **Message textarea**: wrapper auto height; `<textarea>` height 100px (h-[100px]), padding 12px,
   bg-ghost rounded-8, Poppins 14px white, placeholder "Message", resize-none, w-full.
   Label text: Poppins 400 12px #998f8f ("Message" label was 12px/400 warmgray).
5. **Submit button**: `<button type="submit">` width 100%, height 40px, bg #f46c38 (bg-orange),
   border-radius 8px, flex center. Label "Submit": white, Poppins 500 14px.
   Hover: slight opacity/brightness (e.g. hover:brightness-110, transition).

## Labels (exact)
- "Name" (12px 500 #888), "Email" (12px 500 #888), "Budget" (12px 500 #888),
  "Message" (12px 400 #998f8f)
