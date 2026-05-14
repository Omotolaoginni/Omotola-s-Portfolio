# Validation Rules

This document defines the validation standards used throughout the Omotola Portfolio project.

Validation exists to preserve:

- design system consistency
- layout integrity
- accessibility
- responsive behavior
- token compliance
- content quality
- generation stability

These rules apply to:
- generated UI
- components
- layouts
- typography
- spacing
- interactions
- design token usage

All generated output must follow these validation standards.

---

# 1. System Philosophy

Validation is intended to maintain:

- consistency
- predictability
- readability
- scalability
- professional presentation

The portfolio system should prevent:
- visual inconsistency
- broken layouts
- inaccessible interfaces
- arbitrary styling decisions
- token misuse

Validation rules are structural, not decorative.

---

# 2. Token Validation

All UI generation must use approved design tokens from:

- `design-tokens.tokens.json`

Validation must ensure:
- no hardcoded colors
- no arbitrary spacing values
- no arbitrary border radius values
- no unsupported typography sizing

All styling decisions must map to existing tokens.

---

# 3. Color Validation

Validation must ensure:

- approved semantic color usage
- accessible contrast ratios
- correct hover state usage
- correct focus ring usage
- consistent surface hierarchy

The following are prohibited:
- raw hex values in components
- arbitrary gradient usage
- low-contrast text combinations
- inconsistent hover colors

All color usage must reference approved color variables.

---

# 4. Typography Validation

Typography validation must ensure:

- correct hierarchy usage
- readable line lengths
- responsive scaling behavior
- accessible contrast
- consistent heading structure

Typography must:
- use approved typography tokens
- avoid arbitrary font sizes
- maintain readable spacing rhythm

Display text should not become excessively large on mobile screens.

---

# 5. Spacing Validation

Spacing validation must ensure:

- all spacing uses approved spacing tokens
- consistent spacing rhythm
- predictable layout structure
- proper section separation

The following are prohibited:
- arbitrary pixel spacing
- inconsistent spacing between similar components
- overcrowded layouts
- excessive empty spacing without hierarchy purpose

Whitespace must remain intentional.

---

# 6. Radius Validation

Border radius validation must ensure:

- only approved radius tokens are used
- consistent component rounding
- predictable visual softness

The following are prohibited:
- random radius values
- inconsistent card rounding
- excessive rounded styling
- mixing unrelated radius styles

---

# 7. Layout Validation

Layouts must validate for:

- visual balance
- responsive structure
- spacing consistency
- alignment integrity
- overflow prevention

Generated layouts must:
- scale across screen sizes
- maintain hierarchy
- preserve readability
- avoid broken alignment patterns

---

# 8. Accessibility Validation

Accessibility validation must ensure:

- readable typography contrast
- visible focus states
- keyboard accessibility support
- responsive text scaling
- semantic hierarchy clarity

Critical information must never rely solely on color.

Interactive states must remain visually identifiable.

---

# 9. Responsive Validation

Responsive validation must ensure:

- layouts adapt correctly across breakpoints
- typography scales appropriately
- spacing remains proportional
- content does not overflow containers

Mobile layouts should remain:
- readable
- uncluttered
- touch-friendly

---

# 10. Component Validation

All components must validate for:

- token compliance
- consistent spacing
- proper typography hierarchy
- interaction clarity
- accessibility behavior

Components should remain:
- reusable
- predictable
- visually consistent

---

# 11. Interaction Validation

Interactive elements must validate for:

- hover state clarity
- focus visibility
- transition consistency
- clickable area sizing

Hover behavior should remain subtle and restrained.

Animations should not distract from content.

---

# 12. Content Validation

Content structure must validate for:

- readable hierarchy
- logical section flow
- balanced text density
- scannable presentation

Large text blocks should be properly separated with spacing and hierarchy.

---

# 13. Prohibited Practices

The following practices are prohibited:

- hardcoded design values
- arbitrary component styling
- inconsistent token usage
- inaccessible color combinations
- visually noisy layouts
- random spacing patterns
- excessive decorative effects
- unstructured typography hierarchy

The portfolio should maintain a calm, modern, and intentional visual system.

---

# 14. Generation Rules

AI-generated output must:

- follow design token rules
- preserve hierarchy consistency
- maintain accessibility standards
- avoid introducing unsupported styles
- respect layout structure

Generated UI should feel:
- cohesive
- scalable
- production-ready
- system-driven

---

# 15. Final Rule

Validation exists to protect the integrity of the portfolio system.

Every generated screen, layout, and component must reinforce:

- consistency
- readability
- accessibility
- hierarchy
- intentional design structure

The portfolio should always feel:
- refined
- calm
- structured
- professional
- system-driven