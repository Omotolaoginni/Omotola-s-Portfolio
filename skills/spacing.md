# Spacing System Rules

This document defines how spacing is used across the Omotola Portfolio project.

It does not define layout decisions or component-specific spacing.

All spacing values are defined in the design tokens system and must be used consistently across all layouts, components, and interaction states.

---

# 1. Source of Truth

The single source of truth for spacing is:

-  `design-tokens.tokens.json` 

All spacing values must be referenced using predefined spacing tokens.

Direct numeric values should not be hardcoded in components.

---

# 2. Spacing Philosophy

The spacing system is designed to create:

- visual rhythm
- consistent hierarchy
- breathable layouts
- predictable UI structure
- editorial clarity

The interface should feel:

- calm
- structured
- spacious
- intentional

Spacing is a primary design system tool, equal in importance to typography and color.

---

# 3. Spacing Scale

The spacing system follows a progressive scale that increases gradually for layout flexibility.

## Defined Spacing Tokens

| Token | Value |
|------|------|
| spacing-0 | 0 |
| spacing-1 | 2 |
| spacing-2 | 4 |
| spacing-3 | 8 |
| spacing-4 | 12 |
| spacing-5 | 14 |
| spacing-6 | 16 |
| spacing-7 | 20 |
| spacing-8 | 24 |
| spacing-9 | 32 |
| spacing-10 | 36 |
| spacing-11 | 40 |
| spacing-12 | 44 |
| spacing-13 | 48 |
| spacing-14 | 52 |
| spacing-15 | 56 |
| spacing-16 | 60 |
| spacing-17 | 64 |
| spacing-18 | 72 |
| spacing-19 | 80 |
| spacing-20 | 96 |
| spacing-21 | 126 |

---

# 4. Spacing Usage Principles

Spacing must always follow consistent relational logic:

## 4.1 Micro spacing (1–4)
Used for:
- icon gaps
- inline text spacing
- tight UI elements
- small padding adjustments

---

## 4.2 UI spacing (5–9)
Used for:
- buttons
- form fields
- small cards
- navigation elements
- grouped content

---

## 4.3 Layout spacing (10–15)
Used for:
- section grouping
- card padding
- content blocks
- dashboard sections

---

## 4.4 Page spacing (16–21)
Used for:
- page layout structure
- section separation
- hero spacing
- large layout breathing room

These values define the overall rhythm of the portfolio experience.

---

# 5. Layout Rules

## Section spacing

All major sections must use consistent vertical spacing:

- Desktop sections should use spacing-16 to spacing-21 depending on hierarchy

---

## Card spacing

Cards should maintain internal padding consistency:

- default: spacing-6 or spacing-7
- large cards: spacing-8 or spacing-9

---

## Button spacing

Buttons must follow predictable padding:

- vertical padding: spacing-3 or spacing-4
- horizontal padding: spacing-5 or spacing-6

---

# 6. Consistency Rules

- Do not introduce spacing values outside this scale
- Do not use arbitrary pixel spacing in components
- Always map spacing to defined tokens
- Avoid mixing similar values inconsistently (e.g. spacing-14 vs spacing-15 randomly)

Consistency is more important than variety.

---

# 7. Layout Philosophy

Spacing is the foundation of the visual system.

The portfolio should feel:

- spacious rather than dense
- structured rather than chaotic
- editorial rather than dashboard-heavy

Whitespace is an intentional design element, not empty space.

---

# 8. Prohibited Practices

The following are not allowed:

- arbitrary spacing values outside defined tokens
- hardcoded pixel spacing in components
- inconsistent spacing between similar components
- using spacing for decorative purposes only
- mixing unrelated spacing levels within the same component group

---

# 9. Final Rule

Spacing defines the rhythm of the entire portfolio system.

Every layout decision must respect:

- hierarchy
- readability
- consistency
- spatial balance

A strong spacing system is what gives the portfolio its premium and intentional feel.