# Color System Rules

This document defines how color is used across the Omotola Portfolio project.

It does not define raw color values.

Raw color values belong in:

- `design-tokens.tokens.json`

This file defines:
- semantic color usage
- hierarchy rules
- accessibility expectations
- interaction behavior
- visual consistency standards

All color usage across the portfolio must follow these rules.

The color system is influenced by Material Design principles, with emphasis on:

- semantic color roles
- accessible contrast
- clear hierarchy
- surface-based layouts
- restrained use of accent colors

The portfolio adapts these principles into a more minimal, editorial, and product-focused visual system.

---

# 1. Source of Truth

The single source of truth for all colors is:

- `design-tokens.tokens.json`

All colors must be referenced through approved token variables.

Approved color variables include:

- `--color-primary`
- `--color-surface`
- `--color-surface-secondary`
- `--color-text-primary`
- `--color-text-secondary`
- `--color-text-muted`
- `--color-border`
- `--color-border-hover`
- `--color-link-hover`
- `--color-secondary-hover`
- `--color-focus-ring`

Direct hex, rgb, or hsl usage inside components is prohibited when approved tokens exist.

Do not hardcode color values directly into components.

---

# 2. Color Philosophy

This portfolio is a product-focused and editorial-style experience.

The color system should communicate:

- clarity
- confidence
- calmness
- technical maturity
- structure
- premium simplicity

The interface should feel:

- minimal
- modern
- restrained
- intentional
- spacious

Color should support hierarchy, not dominate attention.

Typography, spacing, and layout should remain the primary visual tools.

---

# 3. Design Direction

The color system follows a restrained product design aesthetic inspired by:

- modern editorial websites
- minimal SaaS interfaces
- product design portfolios
- system-driven design thinking
- Material Design semantic structure

The interface should avoid:

- excessive gradients
- visually noisy surfaces
- decorative color usage
- aggressive contrast combinations
- overly saturated UI elements

Accent colors should be used intentionally and sparingly.

---

# 4. Semantic Color Roles

All colors must map to semantic roles.

Recommended semantic roles include:

## Brand and emphasis
- `--color-primary`

## Background and surfaces
- `--color-surface`
- `--color-surface-secondary`

## Typography
- `--color-text-primary`
- `--color-text-secondary`
- `--color-text-muted`

## Borders and separation
- `--color-border`
- `--color-border-hover`

## Interactive states
- `--color-link-hover`
- `--color-secondary-hover`
- `--color-focus-ring`

---

# 5. Primary Color Usage

The primary color is the strongest visual accent in the portfolio.

Use primary color for:

- primary buttons
- active navigation states
- links
- focus states
- selected interactions
- important highlights
- subtle interaction emphasis

The primary color should guide attention carefully.

Do not overuse accent color across large surfaces or long-form content.

The interface should remain calm and visually balanced.

---

# 6. Surface and Background Usage

The portfolio relies heavily on whitespace and surface hierarchy.

Use surface tokens for:

- page backgrounds
- cards
- project containers
- navigation areas
- overlays
- grouped content sections

Recommended behavior:

- main layout areas use `--color-surface`
- subtle hierarchy uses `--color-surface-secondary`
- hover interactions use approved hover tokens

Avoid using strong accent colors as large background fills.

The experience should feel editorial and spacious rather than promotional.

---

# 7. Typography Color Usage

Text colors must always use semantic roles.

Use:

- `--color-text-primary` for headings and important content
- `--color-text-secondary` for supporting content and descriptions
- `--color-text-muted` for captions, metadata, timestamps, and low-emphasis information

Typography contrast must prioritize readability and accessibility.

Muted text should remain readable at all times.

Do not reduce opacity excessively for muted content.

---

# 8. Border and Divider Usage

Borders should remain subtle and supportive.

Use:
- `--color-border`
- `--color-border-hover`

Borders may be used for:
- card boundaries
- section separation
- navigation structure
- input fields
- subtle grouping

Avoid visually heavy borders.

Structure should primarily come from spacing and layout rhythm.

---

# 9. Hover and Interactive States

Interactive states should feel smooth and restrained.

Hover and active states should:
- slightly increase emphasis
- preserve readability
- maintain calm hierarchy

Use:
- `--color-link-hover`
- `--color-secondary-hover`
- `--color-border-hover`

Recommended hover behavior:
- subtle surface tint shifts
- restrained accent emphasis
- minimal visual noise

Avoid dramatic hover animations or aggressive color shifts.

---

# 10. Focus States

Focus indicators must remain visible and accessible.

Use:
- `--color-focus-ring`

Focus states should:
- remain clearly visible
- avoid overpowering surrounding UI
- support keyboard accessibility
- preserve visual consistency

Do not remove focus visibility for aesthetic purposes.

---

# 11. Accessibility Rules

Color usage must support accessibility standards.

Requirements:
- sufficient foreground/background contrast
- readable typography
- visible interactive states
- accessible focus indicators

Critical information must never rely on color alone.

Interactive elements should remain identifiable through structure, typography, and layout.

---

# 12. Responsive Experience

Color behavior must remain visually consistent across:
- desktop
- tablet
- mobile

Contrast, readability, and hierarchy should remain stable across all breakpoints.

Avoid mobile layouts that feel visually compressed or overly dense.

---

# 13. Prohibited Color Practices

The following practices are prohibited:

- direct hex usage in components
- arbitrary decorative colors
- excessive gradients
- overly saturated surfaces
- inconsistent semantic color mapping
- random hover colors
- introducing component-specific colors outside the token system
- using accent colors as large-scale backgrounds unnecessarily

The portfolio should maintain a restrained and cohesive visual language.

---

# 14. Implementation Rules

All components must consume colors from token variables defined in:

- `design-tokens.tokens.json`

Preferred implementation examples:

- `background-color: var(--color-surface)`
- `color: var(--color-text-primary)`
- `border-color: var(--color-border)`

Do not bypass the token system.

All color decisions should remain centralized and reusable.

If utility frameworks are used, color decisions must still map back to approved token variables.

---

# 15. Final Rule

The Omotola Portfolio color system must feel:

- modern
- editorial
- calm
- premium
- restrained
- structured
- product-focused

Color is a supporting system within this portfolio.

The primary visual emphasis should come from:
- typography
- spacing
- hierarchy
- layout rhythm
- content clarity

Every color choice should reinforce readability, intentionality, and design maturity.