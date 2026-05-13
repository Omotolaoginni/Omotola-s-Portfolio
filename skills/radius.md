# Radius System Rules

This document defines how border radius is used across the Omotola Portfolio project.

It does not define visual styling or component-specific design decisions.

All radius values are defined in the design tokens system and must be used consistently across all UI components.

---

# 1. Source of Truth

The single source of truth for border radius values is:

- `design-tokens.tokens.json`

All radius values must be referenced through token variables.

Direct pixel values should not be used in components.

---

# 2. Radius Philosophy

The radius system defines the softness and character of the interface.

It supports:

- visual hierarchy
- component grouping
- modern UI aesthetics
- emotional tone (soft vs structured surfaces)

The portfolio should feel:

- modern
- minimal
- slightly soft but structured
- product-focused

Radius is subtle, not decorative.

---

# 3. Radius Scale

The system follows a progressive radius scale from sharp to fully rounded.

## Defined Radius Tokens

| Token | Value | Description |
|------|------|-------------|
| radius-sm | 4 | Subtle rounding for tight UI elements |
| radius-md | 8 | Default radius for most components |
| radius-lg | 12 | More noticeable rounding for cards |
| radius-xl | 16 | Soft, modern UI surfaces |
| radius-full | 10000 | Fully rounded elements (pill shapes) |

---

# 4. Radius Usage Rules

## 4.1 Small Radius (sm - 4)

Used for:
- inputs
- small buttons
- tags
- compact UI elements

This level keeps UI structured and sharp.

---

## 4.2 Medium Radius (md - 8)

Default radius for most components.

Used for:
- buttons (default)
- form fields
- dropdowns
- small cards

This is the baseline radius across the system.

---

## 4.3 Large Radius (lg - 12)

Used for:
- cards
- modals
- content containers
- grouped UI sections

This introduces softness while maintaining structure.

---

## 4.4 Extra Large Radius (xl - 16)

Used for:
- hero sections
- large cards
- featured components
- elevated UI blocks

This level is used sparingly for emphasis.

---

## 4.5 Full Radius (10000)

Used for:

- pill buttons
- tags/chips
- avatar elements (if circular)
- status badges (optional)

This creates fully rounded shapes.

---

# 5. Component Mapping Rules

## Buttons
- default: radius-md
- pill buttons: radius-full

## Inputs
- radius-sm or radius-md depending on density

## Cards
- default: radius-lg
- featured cards: radius-xl

## Modals
- radius-lg or radius-xl depending on hierarchy

## Badges / Chips
- radius-full

---

# 6. Consistency Rules

- Do not mix radius styles randomly within the same component type
- Keep button radius consistent across the system
- Cards should follow a predictable radius pattern
- Fully rounded styles must be intentional, not decorative

---

# 7. Design Philosophy

Border radius should:

- support hierarchy
- improve readability
- create soft visual grouping
- avoid harsh geometric rigidity

The system should feel balanced between:

- structure (sharpness)
- softness (modern UI feel)

---

# 8. Prohibited Practices

The following are not allowed:

- arbitrary radius values outside defined tokens
- mixing multiple radius styles in one component group
- using full radius unnecessarily for non-pill elements
- overriding radius per component without system justification

---

# 9. Final Rule

Border radius is a structural design system token.

It must always reinforce:

- consistency
- hierarchy
- usability
- visual clarity

Every radius decision must map back to a defined token.