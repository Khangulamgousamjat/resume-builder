# Design System Specification: The Kinetic Blueprint

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Kinetic Blueprint."** 

In an industry saturated with generic, flat templates, this system seeks to treat the resume-building process as high-end digital engineering. We are moving away from "static documents" toward "dynamic professional identities." The aesthetic is rooted in the precision of a dark-mode IDE combined with the high-gloss finish of premium automotive interfaces.

By leveraging aggressive typography scales, intentional asymmetry, and "light-emitting" accents, we transform the mundane task of data entry into a high-stakes, futuristic experience. We don't just organize information; we energize it.

---

## 2. Color Strategy: Chromatic Energy
The color palette is built on a foundation of absolute darkness, utilizing `surface` tokens to create a sense of infinite depth.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning or layout containment. To separate content, designers must use **Tonal Transitions**.
*   **Primary Sectioning:** Use a shift from `surface` (#0e0e0e) to `surface_container_low` (#131313).
*   **Inner Grouping:** Use `surface_container_high` (#201f1f) to define internal logic.
*   **The Result:** A seamless, liquid flow that feels carved from a single block rather than a collection of boxes.

### Surface Hierarchy & Nesting
This design system treats the screen as a series of stacked, physical layers. 
1.  **Base Layer:** `surface_dim` or `surface`.
2.  **Interactive Layer:** `surface_container_lowest` (Recessed inputs).
3.  **Floating Layer:** `surface_bright` with a 12px `backdrop-blur` for modals or floating navigation.

### The "Glass & Gradient" Rule
To achieve a "glossy" high-tech feel, all primary actions must utilize a radial gradient transitioning from `primary` (#afffd1) at the top-left to `primary_container` (#00ffaa) at the bottom-right. This creates a "glow from within" effect that flat colors cannot replicate.

---

## 3. Typography: Editorial Authority
We utilize a dual-font approach to balance technical precision with high-end editorial flair.

*   **The Technical Voice (Space Grotesk):** Used for `display` and `headline` scales. This wide, geometric typeface commands attention and mimics the headers found in architectural blueprints.
*   **The Functional Voice (Inter):** Used for `title`, `body`, and `label` scales. Inter provides neutral, high-readability support, ensuring that even dense resume data remains legible.

**Scale Philosophy:**
*   **Display LG (3.5rem):** Reserved for hero impact—large name entries or section headers.
*   **Label SM (0.6875rem):** Always set in uppercase with a 5% letter-spacing increase for a "data-stream" aesthetic.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "dirty" for this design system. Instead, we use light to define presence.

*   **The Layering Principle:** Depth is achieved by placing a darker surface (`surface_container_lowest`) inside a lighter one (`surface_container_high`). This creates a "recessed" look, ideal for input fields.
*   **Ambient Shadows:** For floating cards, use a 40px blur with a 6% opacity shadow, tinted with the `secondary` (#7799ff) token. This simulates a blue neon glow reflecting off a dark surface.
*   **The "Ghost Border" Fallback:** If a boundary is required for accessibility, use the `outline_variant` token at 15% opacity. It should be felt, not seen.
*   **Glassmorphism:** Navigation bars and tooltips must use `surface_variant` at 60% opacity with a `backdrop-filter: blur(20px)`.

---

## 5. Component Blueprint

### Buttons
*   **Primary:** High-contrast, glossy finish. Uses the `primary` to `primary_container` radial gradient. 
    *   *Hover:* Increase outer glow using `surface_tint`.
    *   *Shape:* `md` (0.375rem) roundedness.
*   **Secondary:** Ghost style. `outline` token at 20% opacity with `primary` text.
*   **Tertiary:** No background. `label-md` type with a subtle `secondary` underline on hover.

### Recessed Inputs
Inputs should look like they are etched into the UI.
*   **Base State:** `surface_container_lowest` background with a subtle inner shadow (0px 2px 4px rgba(0,0,0,0.5)).
*   **Focus State:** Border transforms into a 1px `primary` glow with a matching 4px outer blur.

### Neon Checkboxes
*   **Unchecked:** A simple `outline` square.
*   **Checked:** A solid `primary_fixed` fill.
*   **The Signature:** Upon checking, trigger a "particle explosion" effect—4-6 small `primary` colored dots that radiate outward and fade (0.4s duration).

### Cards & Resume Sections
*   **Style:** No borders. Use `surface_container_low`.
*   **Interaction:** On hover, the card scales to `1.02x` and the `secondary` ambient shadow increases in intensity.
*   **Separation:** Forbid the use of divider lines. Use `1.5rem` to `2rem` of vertical white space (using the Spacing Scale) to separate list items.

### Floating Resume Preview (Unique Component)
A fixed-position component on the right side of the screen.
*   **Background:** `surface_container_highest` at 80% opacity with `backdrop-blur`.
*   **Edge:** A "light-leak" top border using a linear gradient of `primary` to `secondary`.

---

## 6. Do's and Don'ts

### Do
*   **Do** use extreme contrast in typography; pair a `display-lg` header with a `label-sm` sub-header.
*   **Do** use `primary_container` (#00ffaa) sparingly for high-value conversion points (e.g., "Download PDF").
*   **Do** lean into the "recessed" input look to make the user feel like they are "inputting data into a machine."

### Don't
*   **Don't** use 100% opaque white for body text. Use `on_surface_variant` (#adaaaa) for secondary text to maintain the dark-mode aesthetic.
*   **Don't** use standard 90-degree corners. Use the `md` (0.375rem) or `lg` (0.5rem) tokens to soften the "tech" vibe into a "premium" vibe.
*   **Don't** use solid gray shadows. Always tint shadows with the `secondary` or `primary` colors at very low opacities.
