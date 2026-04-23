---
name: ProCommerce System
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#44474c'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#75777c'
  outline-variant: '#c5c6cc'
  surface-tint: '#535f70'
  primary: '#0e1a28'
  on-primary: '#ffffff'
  primary-container: '#232f3e'
  on-primary-container: '#8a97a9'
  inverse-primary: '#bbc7db'
  secondary: '#845403'
  on-secondary: '#ffffff'
  secondary-container: '#febd69'
  on-secondary-container: '#774b00'
  tertiary: '#091a2b'
  on-tertiary: '#ffffff'
  tertiary-container: '#1f2f41'
  on-tertiary-container: '#8697ad'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e3f7'
  primary-fixed-dim: '#bbc7db'
  on-primary-fixed: '#101c2b'
  on-primary-fixed-variant: '#3c4858'
  secondary-fixed: '#ffddb7'
  secondary-fixed-dim: '#fbba67'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#d3e4fc'
  tertiary-fixed-dim: '#b7c8df'
  on-tertiary-fixed: '#0b1d2e'
  on-tertiary-fixed-variant: '#38485b'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 21px
    fontWeight: '700'
    lineHeight: 28px
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 22px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  container-max: 1500px
  gutter: 20px
---

## Brand & Style

This design system is built for high-velocity commerce, focusing on utility, trust, and massive information density. It adopts a **Corporate / Modern** aesthetic that prioritizes clarity over ornamentation. The visual language is designed to handle thousands of product categories while remaining intuitive.

The primary goal is to minimize friction in the "Search-to-Purchase" funnel. The design leverages high-contrast functional areas—specifically dark utility bars and vibrant action colors—to guide the user’s eye toward search and conversion. The aesthetic is clean and structured, utilizing a systematic grid to organize diverse content types into a cohesive shopping experience.

## Colors

The palette is strategically weighted to manage user attention:
- **Primary Navy (#232f3e):** Used for global navigation and the primary search header to provide a grounded, authoritative frame for the site.
- **Secondary Orange (#febd69):** Reserved exclusively for high-priority calls to action, search buttons, and "Add to Cart" functions to ensure maximum visibility.
- **Tertiary Slate (#37475a):** Employed for secondary navigation bars and utility links.
- **Backgrounds:** Use a pure white (#ffffff) for product cards and main content areas, with light gray (#f3f3f3) used as a page background to create subtle separation between content blocks.
- **Interactive:** Links use a specific teal-tinted blue to distinguish them from body text without the harshness of pure blue.

## Typography

This design system utilizes **Inter** for its exceptional readability at small sizes and high-density layouts. 

- **Headlines:** Bold weights are used for product titles and section headers to provide immediate hierarchy.
- **Body:** The default size is 14px, striking a balance between information density and legibility.
- **Links:** Always rendered in the designated link color, often paired with a hover underline to indicate interactivity.
- **Numeric Data:** Prices and ratings should use slightly tighter letter-spacing to remain compact within product cards.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop, centered within a max-width container to maintain readability on ultra-wide displays. 

- **Grid System:** A 12-column grid is used for the main content. Product listings typically span 2, 3, or 4 columns depending on the category density.
- **Product Grids:** Use a "Masonry-lite" or standard row-based flexbox grid. Consistent 20px gutters ensure that high-density image content does not feel cluttered.
- **Vertical Rhythm:** Content blocks are separated by 40px (xl) margins, while internal card padding is kept at a tight 16px (md) to maximize visible content.
- **Header:** The search bar is fluid within the navigation container, expanding to fill all available space between the logo and user account links.

## Elevation & Depth

Hierarchy is established primarily through **Tonal Layers** rather than heavy shadows. 

- **Surface Levels:** The base page layer is Light Gray. Product cards and content containers are White, creating a natural lift without needing shadows.
- **Soft Shadows:** A very subtle, low-opacity shadow (0px 2px 4px rgba(0,0,0,0.08)) is applied only to floating elements like dropdown menus, tooltips, and "Add to Cart" sticky sidebars.
- **Borders:** Low-contrast 1px solid borders (#ddd) are used to define boundaries for input fields and card edges, maintaining a flat, professional appearance.

## Shapes

The design system uses a **Soft** shape language to feel modern yet efficient. 

- **Standard Elements:** Buttons, input fields, and cards utilize a 4px (0.25rem) corner radius. This provides a subtle hint of approachability while maintaining a clean, structured "grid" feel.
- **Interactive Elements:** Primary action buttons use the standard radius. Search inputs should have a slightly higher radius on the container (8px) if they are treated as a global centerpiece.
- **Images:** Product photography should remain sharp (0px radius) to maintain the integrity of the product assets provided by vendors.

## Components

- **Buttons:** 
    - *Primary:* Orange (#febd69) background with black text. High-contrast and bold.
    - *Secondary:* Light gray or white with a distinct 1px border. 
- **Product Cards:** Must include a white background, 16px internal padding, a clear product image, title (max 2 lines), star rating, and price.
- **Search Header:** A dark navy container (#232f3e). The search input itself should be white with the orange search button integrated into the right-hand side.
- **Badges/Chips:** Used for "Best Seller," "Prime," or "Limited Time Deal." These use high-contrast background colors (e.g., dark orange or maroon) with small, bold, uppercase labels.
- **Input Fields:** Standardized height (32px - 40px) with subtle 1px borders. Focus states should use a thin orange glow or border to match the primary brand color.
- **Navigation Rails:** The "All" menu (hamburger) and horizontal category links should use white text on the Navy or Slate backgrounds with a 1px white border on hover.