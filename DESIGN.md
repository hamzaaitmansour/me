---
name: Hamza Ait Mansour · Portfolio
description: A Flutter engineer's career printed as a postwar crime-film one-sheet in two inks on poster stock.
colors:
  poster-stock: "#F1E9D3"
  stock-shade: "#E7DCBE"
  stock-deep: "#D9CBA6"
  ink: "#0E0D0B"
  ink-rule: "#2C2923"
  sour-amber: "#D1A23A"
  muted-sepia: "#554D3E"
  muted-night: "#B9AF97"
typography:
  display:
    fontFamily: "League Gothic, Oswald, Arial Narrow, sans-serif"
    fontSize: "15.4vw"
    fontWeight: 400
    lineHeight: 0.84
    letterSpacing: "0.004em"
  display-close:
    fontFamily: "League Gothic, Oswald, Arial Narrow, sans-serif"
    fontSize: "clamp(76px, 12.5vw, 200px)"
    fontWeight: 400
    lineHeight: 0.84
    letterSpacing: "0.005em"
  display-dossier:
    fontFamily: "League Gothic, Oswald, Arial Narrow, sans-serif"
    fontSize: "clamp(68px, 10vw, 160px)"
    fontWeight: 400
    lineHeight: 0.84
    letterSpacing: "0.005em"
  display-fin:
    fontFamily: "League Gothic, Oswald, Arial Narrow, sans-serif"
    fontSize: "clamp(96px, 16vw, 250px)"
    fontWeight: 400
    lineHeight: 0.78
    letterSpacing: "0.02em"
  ghost:
    fontFamily: "League Gothic, Oswald, Arial Narrow, sans-serif"
    fontSize: "clamp(110px, 17vw, 270px)"
    fontWeight: 400
    lineHeight: 0.8
    letterSpacing: "0.02em"
  headline:
    fontFamily: "League Gothic, Oswald, Arial Narrow, sans-serif"
    fontSize: "clamp(52px, 6.6vw, 104px)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0.01em"
  headline-row:
    fontFamily: "League Gothic, Oswald, Arial Narrow, sans-serif"
    fontSize: "clamp(40px, 6.2vw, 96px)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "0.01em"
  title:
    fontFamily: "League Gothic, Oswald, Arial Narrow, sans-serif"
    fontSize: "clamp(34px, 3.2vw, 48px)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.01em"
  label:
    fontFamily: "League Gothic, Oswald, Arial Narrow, sans-serif"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.06em"
  label-sm:
    fontFamily: "League Gothic, Oswald, Arial Narrow, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.07em"
  label-stamp:
    fontFamily: "League Gothic, Oswald, Arial Narrow, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.14em"
  field-label:
    fontFamily: "League Gothic, Oswald, Arial Narrow, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.2em"
  body:
    fontFamily: "Courier Prime, Courier New, monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
    fontFeature: "tnum"
  body-lede:
    fontFamily: "Courier Prime, Courier New, monospace"
    fontSize: "clamp(19px, 1.7vw, 23px)"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "tnum"
  body-small:
    fontFamily: "Courier Prime, Courier New, monospace"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "tnum"
  count:
    fontFamily: "Courier Prime, Courier New, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0"
    fontFeature: "tnum"
rounded:
  none: "0px"
spacing:
  sheet-inset: "10px"
  gutter: "clamp(16px, 3.2vw, 44px)"
  bar: "68px"
  section-top: "clamp(96px, 12vw, 168px)"
  section-bottom: "clamp(72px, 8vw, 120px)"
  head-gap: "clamp(36px, 4vw, 56px)"
  card-gap: "clamp(18px, 2.2vw, 30px)"
  cluster: "10px"
  cell: "14px"
components:
  button-amber:
    backgroundColor: "{colors.sour-amber}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "52px"
  button-amber-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sour-amber}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.poster-stock}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "52px"
  button-ink-hover:
    backgroundColor: "{colors.sour-amber}"
    textColor: "{colors.ink}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "52px"
  button-line-hover:
    backgroundColor: "{colors.sour-amber}"
    textColor: "{colors.ink}"
  button-line-ink:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "52px"
  button-line-ink-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sour-amber}"
  button-sm:
    typography: "{typography.label-sm}"
    padding: "0 16px"
    height: "42px"
  button-lg:
    padding: "0 28px"
    height: "60px"
  chip:
    backgroundColor: "{colors.poster-stock}"
    textColor: "{colors.ink}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "42px"
  chip-hover:
    backgroundColor: "{colors.sour-amber}"
  chip-ink:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-small}"
    padding: "0 14px"
    height: "42px"
  chip-ink-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sour-amber}"
  stamp:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label-stamp}"
    rounded: "{rounded.none}"
    padding: "0 10px"
    height: "30px"
  stamp-on-plate:
    backgroundColor: "{colors.poster-stock}"
    textColor: "{colors.ink}"
  stamp-on-night:
    backgroundColor: "transparent"
    textColor: "{colors.sour-amber}"
  status-pill:
    backgroundColor: "{colors.poster-stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "40px"
  status-pill-hover:
    backgroundColor: "{colors.sour-amber}"
  filter:
    backgroundColor: "{colors.poster-stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  filter-hover:
    backgroundColor: "{colors.sour-amber}"
  filter-pressed:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.poster-stock}"
  bill-card:
    backgroundColor: "{colors.poster-stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "18px 20px 20px"
  plate-well:
    backgroundColor: "{colors.stock-shade}"
    rounded: "{rounded.none}"
  billing-cell:
    backgroundColor: "{colors.poster-stock}"
    textColor: "{colors.ink}"
    padding: "10px 14px 11px"
  facts-cell:
    backgroundColor: "{colors.poster-stock}"
    textColor: "{colors.ink}"
    padding: "14px 16px 16px"
  accordion-row-open:
    backgroundColor: "{colors.sour-amber}"
    textColor: "{colors.ink}"
    typography: "{typography.headline-row}"
    padding: "clamp(14px, 1.6vw, 22px) clamp(4px, 1vw, 16px)"
  night-section:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.poster-stock}"
  reel-still:
    backgroundColor: "{colors.poster-stock}"
    width: "230px"
  contact-close:
    backgroundColor: "{colors.sour-amber}"
    textColor: "{colors.ink}"
    typography: "{typography.display-close}"
  fin-footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.poster-stock}"
    typography: "{typography.display-fin}"
  menu:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.poster-stock}"
---

# Design System: Hamza Ait Mansour · Portfolio

## Overview

**Creative North Star: "The Credits One-Sheet"**

The whole site is one film poster for one engineer, printed in two inks. Ink black and sour amber sit on cream poster stock that carries a visible paper fibre; nothing else is on the press. The lead's name runs across the full sheet in condensed caps, his cut-out figure stands in front of it, and the stack sits at the foot as the billing block. Projects are features on the bill, the experience list is the filmography, a project page is a dossier, and the page closes on "Fin". Every surface is either stock, ink or amber, and every form is drawn by a hard rule or a hard cast shadow, never by a tone gradient.

Density is poster density: very large condensed type, generous section air (96 to 168px between acts), and dense typewritten copy in short measures. The signature is light: the cursor is the light source on the hero, and the portrait's shadow swings across the name while the letters inside the shadow print amber. The rest of the motion grammar stays inside the film vocabulary: a countdown leader once per session, letters rising from a baseline mask, labels rolling inside their billing boxes, a still that follows the cursor over the filmography, and an amber wipe between the bill and a dossier. Everything eases on one long expo-out curve.

The confirmed rejection is the dark-terminal developer portfolio: no code-editor chrome, no skill bars or percentage meters, no glowing accents. Proof is shown as printed matter: screens, plates, credits.

**Key Characteristics:**
- Two inks on poster stock: ink, sour amber, cream, plus two muted text tones.
- League Gothic condensed caps for everything you would read on a poster; Courier Prime for everything you would read in a screenplay.
- 1.5px ink rules frame the sheet and every box; corners are square.
- Depth comes from solid ink cast shadows thrown by one light, never from blur or elevation.
- Photographs and screens are printed in grey ink and develop to colour only on hover, focus or an explicit toggle.
- Hover floods amber; pressed, current and done states recede to ink.

## Colors

Two inks and a paper: a near-black with a warm cast, one sour amber, and a cream stock in three shades.

### Primary
- **Sour Amber** (#D1A23A): the only colour on the press. It is the light: the panel behind the hero portrait, the open services row, the contact close, the page wipe, the leader sweep, every hover flood, the amber clone of the name inside the shadow, the slash before section titles and the list markers. Ink on amber reads at 8.3:1.

### Neutral
- **Poster Stock** (#F1E9D3): the paper. Page background (always with the fibre texture), button and chip fills, card bodies, billing cells. Ink on stock reads at 16:1.
- **Stock Shade** (#E7DCBE): the recessed well behind plates and gallery images, and the scrollbar track.
- **Stock Deep** (#D9CBA6): the fold shade inside authored SVG plates.
- **Ink** (#0E0D0B): all text, all rules, all cast shadows, the night section, the menu, the leader and the Fin footer (ink fields carry the ink mottle).
- **Ink Rule** (#2C2923): the rule colour between rows on ink fields (night reel, menu), where a full ink rule would vanish.
- **Muted Sepia** (#554D3E): secondary text on stock: years, sub-lines, field labels, counts, captions (6.9:1 on stock).
- **Muted Night** (#B9AF97): secondary text on ink: places, dates, credits, the aside beside the experience title (8.9:1 on ink).

### Named Rules
**The Two Inks Rule.** The palette is ink and amber on stock. There is no fourth hue; colour beyond the two inks exists only inside a photograph or screen that has developed on hover, focus or toggle.

**The Ink Keyline Rule.** Amber on stock is 1.9:1, so amber never sits bare on stock as text or a mark. The slash, the billing bullets and every list marker wear an ink keyline (1.5px on titles, 1px on the billing line, 0.6px on small tags, a 1px ink ring on the dossier dash).

**The Printed Field Rule.** Every amber field (hero light panel, about door, contact close) has the paper fibre multiplied over it, and every large ink field (night section, Fin, the hero shadow) carries the ink mottle. Flat untextured fills only appear at component scale.

## Typography

**Display Font:** League Gothic (self-hosted, 400 only; fallbacks Oswald, Arial Narrow, sans-serif)
**Body Font:** Courier Prime (self-hosted 400, 400 italic, 700; fallbacks Courier New, monospace)

**Character:** a condensed wood-type bill face against screenplay typewriter copy. The caps carry the poster; the monospace carries the story at a reading pace, with tabular figures throughout.

### Hierarchy
- **Display** (400, fitted to the sheet width by measurement, 15.4vw before fitting, 27vw stacked on phones, line-height 0.84): the hero name only. HAMZA is set as an ink outline (stroke max(1.5px, 0.011em)), AIT MANSOUR solid.
- **Display Close / Dossier** (400, clamp(76px, 12.5vw, 200px) and clamp(68px, 10vw, 160px), line-height 0.84): the contact title (max 9ch) and the dossier title.
- **Display Fin** (400, clamp(96px, 16vw, 250px), line-height 0.78, slanted with skewX(-6deg)): the end card only.
- **Ghost** (400, clamp(110px, 17vw, 270px), 31vw on phones, line-height 0.8): outline-only scene words behind section titles.
- **Headline** (400, clamp(52px, 6.6vw, 104px), line-height 0.9): section titles. Row-scale headlines: services rows clamp(40px, 6.2vw, 96px), next-dossier link clamp(44px, 6vw, 92px), dossier subheads clamp(36px, 3.6vw, 54px).
- **Title** (400, clamp(34px, 3.2vw, 48px), line-height 0.95): bill card titles; the reel organisation name runs clamp(32px, 3.4vw, 50px) and the hero role clamp(30px, 3vw, 44px).
- **Label** (400, 22px, 0.06em, uppercase): buttons and nav. Small labels 19px at 0.07 to 0.08em (chips, small buttons, language, menu); stamps 17px at 0.14em; field labels 15 to 16px at 0.18 to 0.2em in muted tone.
- **Body** (400, 16px, line-height 1.6, tabular figures): running copy. Measures stay short: 40ch on the contact line, 44 to 46ch for ledes, 54ch in services, 60 to 62ch in cards and about.
- **Body Lede** (400, clamp(19px, 1.7vw, 23px), line-height 1.5): the about lede; the dossier summary and contact line run 17 to 21px.
- **Body Small** (400, 13 to 15.5px): card summaries, sub-lines, captions, the contact chips.
- **Count** (400, 11px, Courier Prime): bracketed two-digit counts as superscripts beside nav items and filters, e.g. [08].

### Named Rules
**The Bill and Screenplay Rule.** League Gothic, always uppercase, for every title, label, button, stamp, date and credit; Courier Prime, sentence case, for every sentence. Never mix the roles: a label is never typewriter, a paragraph is never condensed caps.

**The Fitted Name Rule.** The hero name is measured and fitted to the sheet width, never set at a guessed size: one line on desktop, three stacked lines (HAMZA / AIT / MANSOUR) on phones.

## Layout

The page is one sheet inside a held frame: a fixed 1.5px ink border at a 10px inset (6px on phones) stays put while content scrolls beneath it, and the top bar sits inside that frame. Content is capped at 1480px with a gutter of clamp(16px, 3.2vw, 44px). The top bar is 68px tall (60px on phones).

The hero stage is sized so the billing block lands on the fold: height clamp(540px, 100svh minus the bar minus 172px, 860px). The name spans the stage, the portrait stands at 52% (81% of the stage height), the amber light panel sits just right of centre, role and actions hold the bottom-left (about 27% wide), and the social column holds the bottom-right.

Sections are acts with poster air: clamp(96px, 12vw, 168px) above, clamp(72px, 8vw, 120px) below, and clamp(36px, 4vw, 56px) between a section head and its content. Heads are centred (work), left (services, about) or split with an aside (experience). The ground alternates by act: stock (hero, work, services), ink (experience), stock (about), amber (contact), ink (Fin). Bills sit in a two-column grid with a clamp(18px, 2.2vw, 30px) gap. Small clusters of buttons and chips use 10 to 12px gaps; ruled cells pad 10 to 16px.

Breakpoints: at 1180px the nav tightens and the status pill shortens to one word; at 980px the nav folds into a full-screen ink menu and the services, about and dossier grids go to one column; at 760px the name stacks, the portrait drops below it at min(100vw, 540px), the hero copy flows after the figure, bills and billing cells go single-column, and reel rows collapse to organisation, role, dates and a toggle column. No layout scrolls horizontally.

### Named Rules
**The Held Frame Rule.** The sheet frame never scrolls and never breaks; new surfaces live inside the same 1480px sheet and the same gutter.

## Elevation & Depth

There is no elevation. Nothing lifts on a box-shadow, nothing blurs, and no surface is modelled with a tone gradient. Depth comes from three printed devices: the z-order of cut-outs (light panel, then the name, then the shadow, then the portrait, then the copy), the inversion of whole acts between stock, ink and amber, and solid ink cast shadows. The hero shadow is the portrait's own matte filled with ink, skewed up to 36 degrees away from the light and scaled 1.24 to 1.40 (1.5 when stacked). The contact close repeats it as a silhouette skewed -22 degrees, settling to -14 on entry. Authored SVG plates throw every object's shadow to the left from a light on the right: a horizontal throw of 1.5 to 2.2 times the object height and a drop of 0.26 times.

### Shadow Vocabulary
- **Matte cast** (portrait matte as a mask over ink plus the ink mottle, transformed by a skew and scale matrix): the hero and contact silhouettes.
- **Plate cast** (an ink polygon from the object's base, throw -1.5 to -2.2 x height, drop 0.26 x height): every object inside an authored plate.
- **Structural rings** (`box-shadow: inset 0 0 0 14px var(--ink), inset 0 0 0 16px var(--stock)` on the leader dial; `box-shadow: 0 0 0 1px var(--ink)` on the dossier list dash): drawn rules, not elevation.

### Named Rules
**The One Light Rule.** Every shadow on the sheet falls from one light: the cursor on the hero, the right-hand side everywhere else. Shadows are solid ink shapes with hard edges and point away from the light.

**The No-Lift Rule.** Hover never raises a surface. A hovered element changes ink (amber flood, ink flood) or moves a part inside its own frame; it never gains a shadow.

## Shapes

Square, ruled and printed. Every corner is 0px. Boxes are drawn with a 1.5px ink rule; stamps, plate frames, screen frames and the reel still use 2px. Adjoining boxes share a single rule (filters overlap by 1.5px, the second language box drops its left border, billing and facts cells divide with one rule) so a row of boxes reads as one ruled form. Stamps tilt -4 degrees. Phone screens inside plates are framed on three sides and open at the bottom, rising from the plate's lower edge. Icons are line drawings at stroke 2 with square caps and mitred joins. The only circle on the sheet is the film-leader dial.

### Named Rules
**The Butt-Joint Rule.** Boxes that touch share one rule. Never double a border where two ruled boxes meet.

## Components

### Buttons
Ruled billing boxes: confident, typeset, flat.
- **Shape:** square (0px), 1.5px ink rule, height 52px with 22px side padding; small 42px / 16px / 19px type; large 60px / 28px / 26px type; on phones 50px / 18px / 21px type.
- **Type:** League Gothic 22px, 0.06em, uppercase, with an 18px line arrow after the label.
- **Amber (primary):** amber fill, ink text; hover and focus flood ink with amber text. The CV download in the bar and the hero.
- **Ink:** ink fill, stock text; hover and focus flood amber with ink text. The primary on amber ground and the dossier links.
- **Line (secondary on stock):** transparent with ink text; hover and focus flood amber.
- **Line-ink (secondary on amber):** transparent with ink text; hover and focus flood ink with amber text, because an amber flood would vanish on amber.
- **Motion:** colour changes over 0.25s; the arrow nudges 2px up and right over 0.35s; the label rolls (below).

### Text Roll
Every button, nav link, chip, bill "open" label and the back-to-top link carries its label in a mask 1.2em tall. A copy of the label sits 1.2em below as a text shadow; on hover or focus the label slides up 1.2em over 0.45s so the copy rolls into place. Reduced motion holds it still.

### Chips, Stamps and the Status Pill
- **Chip:** 42px minimum height, 0 14px padding, 1.5px ink rule on stock, League Gothic 19px at 0.07em, 17px icon, 10px gap. Linked or button chips flood amber on hover and focus. The plain variant (location) drops the border and goes muted. The ink variant on the amber close is transparent, Courier Prime 15px in sentence case, and floods ink with amber text; the copy chip confirms by turning ink and amber with a check for 2.2s.
- **Stamp:** 30px tall, 0 10px padding, 2px rule in the current colour, League Gothic 17px at 0.14em, rotated -4 degrees. It marks a project's kind on cards and dossiers and the current job in the reel (amber on ink).
- **Status pill:** 40px ruled stock box, League Gothic 18px at 0.08em, led by a 9px amber square with a 1.5px ink border that blinks like a recording light (2.4s, stepped, dimming to 25% for the last 29%). Hover floods amber. Below 1180px it shows one word.

### Billing Block
The credits at the foot of the hero, ruled in 1.5px ink on stock. The stars line sets the stack in League Gothic caps at clamp(22px, 2.7vw, 40px), 0.08em, each name led by an amber bullet keylined in ink. Under it, four ruled credit cells (currently, trained at, certified, languages) each pair a muted 15px field label at 0.2em with a value at clamp(19px, 1.6vw, 24px). On phones the stars wrap and the cells stack, divided by top rules.

### Section Heads
A section title in Headline caps is led by an amber "/" keylined in 1.5px ink. Behind it, a ghost word (a scene term such as the playbill, know-how, filmography, backstage) is set in outline only: a 1.5px stroke of ink at 16% (stock at 13% on the night act), aligned with the head (centred or left) and lifted to straddle the title, and unmasked left to right by a clip over 1.2s when the head enters the viewport.

### Marker Lists
Stacks and tags are inline lists where every item carries its own marker: an amber bullet with a 0.6px ink keyline, a 0.32em gap, and a no-wrap item, laid out with a 0.75em column gap. A wrapped line therefore never starts or ends on a bare separator. On amber ground (the open services row) the bullets turn ink. Block lists use dashes instead: 12 x 2px amber dashes in the reel, 22 x 3px amber dashes ringed in ink in the dossier.

### Bill Cards and Plates
- **Card:** a 1.5px ruled stock box, square, with a 16:10 plate on top divided by a rule, the kind stamp pinned 14px from the plate's top-left corner on stock, then a body padded 18px 20px 20px: title and year on one line, a muted sub-line, a 60ch summary, and a ruled foot with the marker-list tags and a rolling "open" label whose arrow slides 4px. Cards enter on filter change by rising 18px over 0.6s, 60ms apart.
- **Screen plates:** up to three app screens framed in 2px ink, open at the bottom, rising from a stock-shade well, printed in grey ink by grayscale and multiply. On hover or focus the well floods amber over 0.5s, the screens rise and develop to full colour over 0.6s.
- **Authored plates:** flat SVG scenes (800 x 500) in amber, ink and stock only, lit from the right with long ink plate casts. On hover one element moves over 0.5 to 1.4s: a scan line sweeps, an orbit turns, a stamp presses, a car drives off.

### Services Accordion
Full-width rows between 1.5px ink rules, each title in row-scale caps with a plus icon at clamp(26px, 3vw, 40px). On hover a closed title slides 14px right and the plus turns 90 degrees. The open row is flooded amber from the left by a clip over 0.6s, its plus turns to a cross (45 degrees), and its panel opens over 0.55s: copy at 17px / 1.6 on the left, a visual on the right (a fan of three grey screens tilted plus and minus 5 degrees, a board, or an infrastructure plate). One row is open at a time.

### Night Reel
The experience act inverts to ink with the mottle and stock text, with rows divided by ink-rule lines. Each row is a button: organisation in Title caps with its place in Courier, role, dates in muted-night caps, and a plus. Hover, focus and open turn the organisation amber; open turns the plus 45 degrees and unfolds a list of points marked with amber dashes over 0.5s. On a fine pointer, a 230px still (4:5, 2px stock frame) follows the cursor 28px right and 150px above it, easing at 0.16 per frame and tilting with its speed up to 9 degrees; screens inside it print in grey. Touch devices never show it.

### About Colour Toggle
The graduation photograph stands in front of an amber door panel with the fibre multiplied over it. The print is a button with a pressed state: hover, focus or a press fades the colour print in over 0.8s, a second press returns it to grey ink. Its caption sits under a 1.5px rule in muted League Gothic 18px at 0.14em. Beside it, a ruled facts box (three cells, then one full-width cell) pairs muted field labels with 15px Courier values.

### Dossier
A project opens in place as a dossier page behind an amber wipe. A bar holds a small line button back to the bill and the kind stamp. The head splits into the title (Display Dossier) with summary and actions on the left and a ruled facts box (context, role, period, stack as a marker list in 20px caps) on the right. "What I built" sets a subhead beside an ordered list ruled top and bottom with amber dashes. Then either a ruled gallery (auto-fill columns from 190px, figures on stock shade with 13px captions under a rule) or a 16:7 authored plate. The page ends on a full-width ruled "next project" band with the next title at row scale; it floods amber on hover and its arrow slides 8px.

### Contact Close and Fin
- **Contact close:** the whole act is amber with the fibre multiplied over it. The portrait silhouette stands in ink at the right edge, settling from -22 to -14 degrees of skew over 1.6s on entry. The title runs in Display Close caps, followed by a 40ch line, a large ink button and a large line-ink button, the ink chips, and a status line led by an ink dot.
- **Fin:** an ink footer with the mottle. "Fin" runs at Display Fin size, slanted like an end card; the credits (copyright, printed-in line, back to top) sit right-aligned in muted-night League Gothic 19px at 0.14em, the back-to-top link turning amber on hover.

### Navigation
- **Top bar:** fixed inside the sheet frame, 68px. Transparent over the hero; once scrolled it takes the stock and fibre with a 1.5px ink bottom rule; over the night act it inverts to ink with stock-ruled controls and an amber pressed language box.
- **Nav links:** League Gothic 22px at 0.07em with a bracketed two-digit count in 11px muted Courier as a superscript; labels roll on hover.
- **Language switch:** two joined 42px boxes; the pressed language is ink with stock text, the other floods amber on hover.
- **Filters:** joined 44px ruled boxes at 20px with counts; pressed is ink with stock text, hover floods amber.
- **Menu (980px and below):** a full-screen ink sheet; links at clamp(54px, 15vw, 96px) divided by ink-rule lines turn amber on hover; the CV link is amber; language as two full-width boxes.
- **Focus:** a 2px ink outline at a 3px offset on stock and amber; amber on ink fields.

### Film Leader and Page Wipe
- **Leader:** once per session, skipped on a deep link or under reduced motion, skippable by any key or click. An ink screen with a dial of min(62vw, 380px): a stock double ring, a crosshair at 55% opacity, and an amber sweep that fills the dial once per count. Numbers 3, 2, 1 at 520ms each in stock League Gothic with a 4px ink stroke, over a production credit at 0.3em tracking. It exits by clipping upward over 0.55s on the ease-in curve, then the name's letters rise from their baseline mask (0.9s each, 38ms apart, after 80ms), the portrait develops from a washed print over 1.4s and the light begins to move 650ms later.
- **Wipe:** an amber sheet rises from the bottom over 0.34s on the ease-in curve, the page swaps at 360ms, and the sheet leaves upward over 0.5s. Under reduced motion it becomes a 0.2s fade.

### Hero Light and Shadow (signature)
The cursor is the light. Pointer position sets a goal for the light, which eases toward it at 0.075 per frame; the shadow's lean and length follow, and an amber clone of the name, transformed by the inverse of the shadow's matrix, shows only inside the shadow so the letters it covers print amber. The shadow is clamped so the head always lands inside the stage. On touch devices the light sways on slow sine waves (2.6s and 3.4s periods); under reduced motion it stays still.

## Do's and Don'ts

### Do:
- **Do** keep every surface on the two inks and the stock: ink (#0E0D0B), sour amber (#D1A23A), poster stock (#F1E9D3), with muted sepia (#554D3E) on stock and muted night (#B9AF97) on ink for secondary text only.
- **Do** give every amber mark on stock an ink keyline (1.5px on titles, 1px on the billing line, 0.6px on tags).
- **Do** multiply the paper fibre over every amber field and lay the ink mottle on every large ink field.
- **Do** draw every box with the 1.5px ink rule and let touching boxes share one rule.
- **Do** flood amber on hover and focus, and mark pressed, current and done states in ink.
- **Do** set every title, label, button, date and credit in League Gothic caps, and every sentence in Courier Prime with tabular figures.
- **Do** print screens and photographs in grey ink on stock and let colour arrive only on hover, focus or an explicit toggle.
- **Do** throw shadows as solid ink shapes from one light on the right (the cursor on the hero), 1.5 to 2.2 times the object height long.
- **Do** ease motion on cubic-bezier(0.16, 1, 0.3, 1) and keep cubic-bezier(0.7, 0, 0.84, 0) for exits only (leader out, wipe in).
- **Do** honour reduced motion: no leader, no letter rise, a still light, no rolls or slides, and a 0.2s fade for the wipe.

### Don't:
- **Don't** round a corner; the film-leader dial is the only circle.
- **Don't** lift anything with a box-shadow, blur or tone gradient; depth is cut-out order, act inversion and hard ink casts.
- **Don't** set amber text or marks bare on stock (1.9:1).
- **Don't** put muted sepia on amber (3.5:1); on amber ground, text and markers are ink.
- **Don't** add a fourth hue or a coloured status chip; state is shown by ink, amber and stamps.
- **Don't** dress the work as a dark-terminal developer portfolio: no code-editor chrome, no skill bars or percentage meters.
