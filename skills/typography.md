# Typography System Rules

This document defines the typography system used throughout the Omotola Portfolio project.

The typography system establishes:

- visual hierarchy
- readability
- scanning behavior
- content rhythm
- editorial structure
- interface consistency

The system is influenced by Material Design typography principles, adapted into a more minimal and editorial product design aesthetic.

Typography is one of the primary visual foundations of this portfolio.

---

# 1. Source of Truth

The single source of truth for typography tokens is:

- `design-tokens.tokens.json`

All typography decisions must reference approved typography tokens and styles.

Typography values should not be hardcoded arbitrarily across components.

---

# 2. Typography Philosophy

The typography system is designed to create:

- strong hierarchy
- calm readability
- modern presentation
- structured scanning
- premium editorial feel

The portfolio should feel:

- clean
- intentional
- spacious
- product-focused
- easy to read

Typography should carry most of the visual hierarchy, supported by spacing and layout.

---

# 3. Font Family

## Primary Font

Primary UI font:

- Onest

The font should be used consistently across:
- marketing sections
- navigation
- project case studies
- buttons
- supporting UI elements

---

# 4. Fallback Fonts

Fallback stack:

- `Onest`
- `Inter`
- `system-ui`
- `-apple-system`
- `sans-serif`
- `Arial`
- `Roboto`

Fallbacks should preserve readability and layout stability if the primary font fails to load.

---

# 5. Typography Structure

The typography system should follow a structured scale with clear hierarchy levels.

Recommended categories include:

- Display
- Headline
- Title
- Body
- Label

Typography hierarchy should remain predictable throughout the portfolio.

---

# 6. Type Scale Usage

Typography scale values must come from approved design tokens.

Do not introduce arbitrary font sizes outside the token system.

The typography scale should maintain:
- rhythm
- consistency
- proportional hierarchy

---

# 7. Usage Guidelines

## Display Text

Used for:
- hero headings
- landing page statements
- major portfolio introductions

Display text should feel:
- confident
- spacious
- visually balanced

Avoid overly long display headlines.

---

## Headline Text

Used for:
- section titles
- featured content headers
- project headings

Headline text should create strong content separation.

---

## Title Text

Used for:
- card titles
- project summaries
- grouped content headings

Titles should remain readable and structured.

---

## Body Text

Used for:
- paragraphs
- descriptions
- case study content
- supporting explanations

Body text should prioritize readability over visual styling.

Long-form content should feel comfortable to scan.

---

## Label Text

Used for:
- buttons
- navigation items
- metadata
- tags
- form labels (if applicable)

Labels should remain compact and legible.

---

# 8. Readability Rules

Typography should prioritize:

- readability
- spacing rhythm
- line length balance
- visual clarity

Recommended behavior:
- avoid overly dense text blocks
- maintain comfortable paragraph spacing
- use consistent line-height
- preserve strong contrast against surfaces

The portfolio should feel readable across long scrolling sessions.

---

# 9. Responsive Typography

Typography must scale smoothly across:
- desktop
- tablet
- mobile

All heading and display text should use responsive scaling techniques where applicable.

Recommended:
- CSS `clamp()` for large text scaling

Typography should never feel oversized on mobile or compressed on desktop.

---

# 10. Accessibility Rules

Typography must support accessibility standards.

Requirements:
- readable contrast ratios
- scalable font sizing
- responsive text behavior
- sufficient line spacing
- accessible text hierarchy

Low-contrast text combinations are prohibited.

Text placed on colored surfaces must maintain readable contrast.

---

# 11. Measurement Rules

Typography values should use:
- `rem`
- `em`

Avoid using fixed pixel values for scalable typography systems.

Relative sizing improves:
- responsiveness
- accessibility
- browser scaling behavior

---

# 12. Hierarchy Rules

Typography hierarchy should be obvious without relying heavily on color.

Hierarchy should primarily come from:
- size
- weight
- spacing
- positioning

Avoid excessive font weight variation within the same content block.

---

# 13. Prohibited Practices

The following practices are prohibited:

- arbitrary font sizes outside the token system
- inconsistent heading hierarchy
- excessive font weights
- overly decorative typography
- long unreadable line lengths
- low-contrast typography
- mixing unrelated typography styles within the same section

The portfolio should maintain a restrained and cohesive editorial feel.

---

# 14. Implementation Rules

All typography must reference approved design tokens from:

- `design-icoin-tokens.json`

Preferred implementation patterns:
- tokenized font sizes
- tokenized line heights
- tokenized font weights
- responsive typography scaling

Typography should remain centralized and reusable across the entire system.

---

# 15. Final Rule

The typography system must feel:

- modern
- editorial
- readable
- structured
- premium
- calm
- product-focused

Typography is one of the strongest identity systems within this portfolio.

Every typography decision should reinforce:
- clarity
- hierarchy
- readability
- intentional design structure