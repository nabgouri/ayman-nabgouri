---
name: Ayman Nabgouri Portfolio
description: Full-stack developer portfolio — a single committed molten amber signal in warm pitch.
colors:
  void-bg: "#15110b"
  depth-bg: "#0e0a05"
  surface-mid: "#1f1810"
  surface-elevated: "#2c2317"
  surface-chip: "#2c2317"
  divider: "#342a1c"
  text-primary: "#f6f1ea"
  text-secondary: "#c4b39c"
  text-muted: "#847258"
  accent: "#ff8a3d"
  accent-muted: "#e2b894"
typography:
  display:
    fontFamily: "'Clash Grotesk', system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 9vw, 8rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Clash Grotesk', system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Clash Grotesk', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "'General Sans', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "'General Sans', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.04em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "32px"
  lg: "64px"
  xl: "128px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.void-bg}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "{colors.void-bg}"
    textColor: "{colors.text-primary}"
  chip:
    backgroundColor: "{colors.surface-chip}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  sidebar-link-active:
    backgroundColor: "{colors.surface-mid}"
    textColor: "{colors.text-primary}"
  sidebar-link-inactive:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
---

# Design System: Ayman Nabgouri Portfolio

## 1. Overview

**Creative North Star: "The Signal in the Forge"**

A personal developer portfolio where the interface itself is the first work sample. The visual system operates on a single principle: one committed signal — molten amber — glowing inside warm pitch. Everything else recedes. The amber earns attention precisely because nothing else competes for it. The room is dark, but the dark is warm — coal cooled overnight, not deep space.

The typography carries the ambition. Clash Grotesk at display scale is wide, geometric, and unambiguous — the voice of a developer who knows what they want. General Sans at body scale is transparent, stepping aside so content reads cleanly. The contrast between them is the voice: assertive headlines, legible depth.

Motion is purposeful and orchestrated. Scroll-triggered reveals with an amber wipe, staggered section entries — a choreography that rewards reading rather than decorating the surface. `prefers-reduced-motion` is respected at every animated element.

This system explicitly rejects: the generic dev portfolio template (gradient blobs, skills progress bars, identical icon-heading-text card grids); over-animated flash (particle systems, cursor trails, neon glow); resume-as-website (no personality, no stakes); the saturated editorial-typographic lane (display serif, italic headlines, mono labels, ruled separators — that lane is full by 2026); and the SaaS-violet reflex (which the previous version of this site used and discarded — the category default has saturated).

**Key Characteristics:**
- One accent color. Zero negotiation.
- Typography does the heavy lifting at display scale. Color supports; it never decorates.
- Flat surfaces with tonal depth. The only shadow in the system belongs to the modal.
- Orchestrated scroll choreography over scattered micro-interactions.
- Every neutral carries a faint warm hue — the palette reads as a single warm-dark world, not a theme over neutral gray. The neutrals are coal, not slate.

## 2. Colors: The Forge Palette

One committed molten amber accent against a near-void warm-dark background. Depth through tonal surface layering, not color multiplicity. The neutrals are warm by 30–40° on the OKLCH hue wheel — the room reads as ember-light, not as dark with an orange dropped on top.

### Primary
- **Molten Amber** (`#ff8a3d` / `oklch(72% 0.18 55)`): The single accent. Used on the punctuation period after headings, the Reveal wipe overlay, the active sidebar border, link hover states, and the CTA button background. Nowhere else. Its rarity is the point. Light enough to read as a glow on dark; saturated enough to never look pastel.

### Neutral
- **Void Background** (`#15110b` / `oklch(11% 0.008 40)`): Page background. The darkest surface; establishes the depth anchor. Warm pitch — coal, not space.
- **Depth Surface** (`#0e0a05` / `oklch(8% 0.006 40)`): Sidebar background. Recedes behind main content.
- **Mid Surface** (`#1f1810` / `oklch(16% 0.010 40)`): Cards, contact box, modal panel.
- **Elevated Surface** (`#2c2317` / `oklch(22% 0.012 40)`): Chip backgrounds, project thumbnail placeholder.
- **Divider** (`#342a1c` / `oklch(25% 0.012 40)`): Horizontal rules, section separators, subtle borders.
- **Text Primary** (`#f6f1ea` / `oklch(96% 0.005 60)`): Headings, primary UI text. Warm bone — not pure white.
- **Text Secondary** (`#c4b39c` / `oklch(72% 0.018 50)`): Body copy, descriptions, secondary labels.
- **Text Muted** (`#847258` / `oklch(50% 0.015 50)`): Inactive nav links, metadata, placeholder text.
- **Accent Muted** (`#e2b894` / `oklch(78% 0.10 55)`): Link hover states, tech list labels, secondary amber references. Not a second accent — a quieter version of the same signal.

### Named Rules
**The One Signal Rule.** The accent (`#ff8a3d`) appears in five contexts maximum across the entire page: heading period, Reveal wipe overlay, active sidebar border, link hovers, CTA button. Every additional use requires justification. Impact depends on scarcity.

**The Warm Neutral Rule.** No pure `#000` or `#fff`. Every neutral carries a warm hue tint (`oklch` hue ~40–60). The palette is a single warm-dark world — not a neutral theme with amber dropped on top. Background hues sit at ~40°; text hues sit at ~50–60° (slightly more golden as lightness rises) so the warmth amplifies into the highlights instead of flattening into them.

**The Inverted Button Rule.** Because the accent is light (L≈72%), the primary button uses dark text on amber (`text-bg` on `bg-accent`) — not light-on-light. The hover sweep slides the dark `bg` color in from the bottom-right; the text inverts to the bone `fg`. This is the opposite of what a darker accent would do, and it must stay this way as long as the accent's lightness remains above ~60%.

## 3. Typography

**Display Font:** Clash Grotesk (Fontshare CDN) — fallback: `system-ui, sans-serif`
**Body Font:** General Sans (Fontshare CDN) — fallback: `system-ui, sans-serif`

**Character:** Clash Grotesk commands at display scale — geometric, slightly wider than neutral grotesks, confident at extreme sizes. General Sans disappears into legibility at body size. The pairing is about contrast: one font that announces, one that carries.

Load via Fontshare before any other style:
```
@import url('https://api.fontshare.com/v2/css?f[]=clash-grotesk@400,500,600,700&f[]=general-sans@400,500,600&display=swap');
```

### Hierarchy
- **Display** (Clash Grotesk 600, `clamp(3.5rem, 9vw, 8rem)`, line-height 0.95, tracking `-0.03em`): Hero headline only. At maximum size the heading fills most of the viewport width. Tight line-height gives it mass; negative tracking locks it together.
- **Headline** (Clash Grotesk 600, `clamp(2rem, 5vw, 3.5rem)`, line-height 1.0, tracking `-0.02em`): Section headings. Paired with the horizontal rule in SectionHeader.
- **Title** (Clash Grotesk 500, `1.25rem`, line-height 1.3): Project names, modal headings, prominent labels.
- **Body** (General Sans 400, `1rem`, line-height 1.7, max-width `68ch`): All prose. Capped at 68ch for readable line length. Light text on dark needs the extra line-height.
- **Label** (General Sans 500, `0.75rem`, letter-spacing `0.04em`): Chip text, tech list items, sidebar nav links (vertical writing mode).

### Named Rules
**The Weight Cliff Rule.** Minimum weight contrast between adjacent hierarchy levels: 100 units (e.g. 600→400, not 500→400 if the level above is also 500). Two adjacent elements in the same weight read as the same level.

**The No-Reflex Font Rule.** Inter, IBM Plex (any variant), Space Mono, DM Sans, Plus Jakarta Sans, Space Grotesk are prohibited. These are training-data defaults. Using them signals the choice wasn't made.

## 4. Elevation

This system is flat by default. Depth is communicated through tonal surface layering: the deeper the z-layer, the darker the background token (`void-bg` → `depth-bg` → `surface-mid` → `surface-elevated`). Shadows describe modal elevation only — they do not describe rest state for any other element.

### Shadow Vocabulary
- **Modal Lift** (`box-shadow: 0 24px 80px rgba(0, 0, 0, 0.6)`): Used exclusively on the ProjectModal panel. The heavy darkness is intentional — on a near-void background, subtle shadows vanish.

### Named Rules
**The Flat-By-Default Rule.** No element carries a shadow at rest. The modal is the single exception because it must visually separate from the page it covers. Adding shadows to cards, chips, headers, or nav elements is prohibited.

## 5. Components

### Buttons
Tactile and confident. The primary button (OutlineButton) uses a border-contained fill sweep — the fill travels in from the bottom-right corner on hover, giving the button physical weight.

- **Shape:** Gently curved (6px radius — `rounded.md`)
- **Default:** Accent background (`#ff8a3d`), accent border, `void-bg` label (dark text on the bright amber — see The Inverted Button Rule). Padding: 8px 16px. Font: General Sans 500, 0.875rem.
- **Hover:** Fill sweeps in from bottom-right via a scaled pseudo-element (translate + scale, not opacity). Fill color becomes `void-bg` (dark slides over amber); label inverts to `text-primary` (bone). Text transition: 300ms. Fill transition: 700ms ease-out.
- **Active:** `scale(0.95)` — physical pushback.
- **Secondary / Ghost:** Not yet in the system. If needed: `accent-muted` border, transparent background, `accent-muted` label. Same sweep animation with `accent` fill.

### Chips
Small, flat, read-only tech taxonomy labels. Exist to convey information, not attract attention.

- **Style:** `surface-chip` background (`#2c2317`), `text-secondary` label, 4px radius (`rounded.sm`), 4px 8px padding.
- **Typography:** Label scale (General Sans 500, 0.75rem, letter-spacing 0.04em).
- **No hover state.** Chips are not interactive in the current system.
- **No border.** Background tint provides sufficient definition on the dark surface.

### Project Cards
Thumbnail-forward. The image is the card — there is no card container behind it.

- **Thumbnail:** `aspect-video` ratio, `surface-elevated` background placeholder, 8px radius (`rounded.lg`), `overflow-hidden`. Project image sits at 75% width, bottom-aligned, shifted below the visible edge. On hover: width grows to 90%, rotates 2deg. Transition: all 300ms ease-out.
- **Title row:** Title-scale project name + 1px `divider`-colored horizontal rule + icon links flush right. Icon hover: `text-secondary` → `accent-muted`.
- **Tech list:** `accent-muted` text, dash-separated, Label scale.
- **Description:** Body scale, `text-secondary`. "Learn more >" in `accent-muted`, inline.
- **No outer card border. No card background panel.** Text block is content flow below the thumbnail, not a contained card.

### Project Modal
- **Backdrop:** `depth-bg` at 50% opacity with `backdrop-blur-md`. Click on backdrop to dismiss.
- **Panel:** `surface-mid` background, 8px radius (`rounded.lg`), max-width 672px, Modal Lift shadow.
- **Header image:** Full-width, no radius — flush with the panel top edge.
- **Content padding:** 32px (`spacing.md`) on all sides.
- **Close button:** Top-right corner, `text-secondary`, no background, `text-primary` on hover.
- **Entry animation:** y: 100→0, opacity: 0→1, duration 500ms, ease-out.

### Navigation — Sidebar
The deepest surface in the z-stack. Recedes behind content.

- **Background:** `depth-bg` (`#0e0a05`) — darkest token.
- **Width:** 54px fixed, full viewport height, sticky left.
- **Logo mark:** "A" + accent period. Clash Grotesk 900, 20px. The only display-weight element in the nav.
- **Link height:** 96px (h-24). Vertical writing mode. Full-width clickable area.
- **Active state:** `surface-mid` background, `accent` right-border (2px solid), full opacity.
- **Inactive state:** Transparent, transparent border, 50% opacity. Hover: `void-bg` background, `text-primary` right-border.
- **Entry animation:** x: -70→0, 500ms ease-out.

### Section Header
A horizontal rule paired with a large headline. The rule direction alternates per section to prevent monotony.

- **Pattern:** Full-width 1px `divider`-colored rule + Headline-scale heading. Direction flag: `dir="r"` places the rule left of the heading (right-aligned); `dir="l"` reverses it.
- **The Accent Period:** Every section title ends with a period rendered in `accent` color (`#ff8a3d`). This is the system's visual signature — used here and in the sidebar logo mark only.
- **Spacing:** 48px below (`mb-12`) before section content begins.

### Reveal (Scroll Animation Wrapper)
The system's signature motion component. Every content element enters through a Reveal.

- **Content animation:** opacity: 0→1, y: 75→0, duration 500ms, delay 250ms, ease-out.
- **Wipe overlay:** An `accent`-colored rectangle slides from left to right, covering then uncovering the element. Duration 500ms, ease-in. The wipe is the reveal — the content appears after the wipe passes.
- **`prefers-reduced-motion`:** Both animations must be disabled. Content appears without transition when `prefers-reduced-motion: reduce` is detected.

## 6. Do's and Don'ts

### Do:
- **Do** use `oklch()` for all new color definitions. The hex values in the frontmatter are sRGB approximations for tooling; the canonical values are the OKLCH specs in this document.
- **Do** load Clash Grotesk and General Sans from Fontshare CDN (`api.fontshare.com`) before any component renders.
- **Do** reserve the accent (`#ff8a3d`) for exactly five contexts: heading period, Reveal wipe overlay, active sidebar border, link hover states, CTA button. Treat any additional use as a design decision requiring justification.
- **Do** end every section heading and the logo mark "A" with a period in accent color — it is the system's one recurring visual signature.
- **Do** respect `prefers-reduced-motion` on all Reveal and sidebar entry animations.
- **Do** cap body copy at 68ch line length.
- **Do** use tonal surface layering to express depth: `void-bg` (background) → `depth-bg` (sidebar) → `surface-mid` (cards) → `surface-elevated` (chips, placeholders).
- **Do** tint every neutral toward warm hue 40–60. No neutral is hue-neutral gray, and no neutral leans cool.
- **Do** use `text-bg` (dark) on `bg-accent` for the primary button. The accent is too light to carry bone text; treat amber-as-button as an inversion case.

### Don't:
- **Don't** use Inter, IBM Plex (any variant), Space Mono, DM Sans, Plus Jakarta Sans, or Space Grotesk. They are training-data defaults; their presence signals a choice that wasn't made.
- **Don't** apply a gradient to any text. No `background-clip: text` with a gradient fill. Emphasis is delivered through weight and size — never through gradient.
- **Don't** use a `border-left` or `border-right` stripe wider than 1px as a colored accent on any card, list item, or callout. Rewrite with background tints, leading numbers, or nothing.
- **Don't** add shadows to cards, chips, headers, or the sidebar. The Modal Lift is the only shadow in the system.
- **Don't** introduce a second accent color. `accent-muted` exists as a quieter version of the same amber signal, not as a distinct second color. Especially do not introduce a complementary teal/cyan to "pair with" the orange — that is the next reflex one tier deeper, and the system rejects it explicitly.
- **Don't** build identical card grids (same-size card, icon + heading + text, repeated). Project cards are thumbnail-forward and visually specific to their content.
- **Don't** add glassmorphism decoratively. The header and modal backdrop use `backdrop-blur` for structural reasons only. Applying blur to chips, tooltips, or panels is prohibited.
- **Don't** use Tailwind's `orange-*` or `amber-*` tokens. The accent is `oklch(72% 0.18 55)` — a committed molten amber, not Tailwind's default orange ramp.
- **Don't** revert to violet/indigo. The previous version of this site used a violet accent; the category default has saturated by 2026 and the swap is intentional.
- **Don't** use `#000` or `#fff` anywhere. Every surface and text token carries a warm hue tint.
- **Don't** use the editorial-typographic aesthetic lane: no display serif headlines, no italic drop caps, no broadsheet column grids, no lowercase track-spaced metadata labels with rule separators. That lane is saturated.
