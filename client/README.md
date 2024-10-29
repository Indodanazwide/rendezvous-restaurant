# Restaurant Color Palette Classification

## Primary Colors
These colors serve as the main visual anchors for your restaurant's brand identity:

- `$ebony: #0F152C` - Deep navy, perfect for main headers and primary elements
- `$mirage: #1D1F33` - Rich dark blue, ideal for secondary headers and accents
- `$judge-gray: #594136` - Warm brown, great for grounding elements

## Secondary Colors
These colors complement the primary palette and add visual interest:

- `$roti: #B2A43B` - Warm gold, excellent for highlighting important elements
- `$martini: #B5A4A9` - Soft mauve, adds sophistication and warmth
- `$trendy-pink: #9A669B` - Elegant purple, perfect for accent elements

## Tertiary Colors
These colors provide additional accent options and balance:

- `$mantis: #7DB95B` - Fresh green, ideal for highlighting fresh/organic sections
- `$hippie-green: #638849` - Deep green, complements the mantis shade

## Recommended Usage

### Headers and Navigation
- Primary: `$ebony`
- Background: `$mirage`

### Content Areas
- Text: `$judge-gray`
- Accents: `$trendy-pink`, `$roti`
- Highlights: `$martini`

### Special Sections (e.g., Organic/Fresh Menu Items)
- Primary: `$mantis`
- Secondary: `$hippie-green`

---

# Restaurant Website Typography System

## Primary Headings & Logo
```css
/* Elegant, upscale choice for main headers */
font-family: 'Playfair Display', 'Cormorant Garamond', Georgia, serif;
```
Best for:
- Restaurant name
- Main headlines
- Special menu items
- Featured section titles

## Secondary Headings
```css
/* Modern yet classic feel */
font-family: 'Cinzel', 'Libre Baskerville', 'Times New Roman', serif;
```
Best for:
- Section headers
- Menu categories
- Special announcements
- Price displays

## Body Text
```css
/* Clean and highly readable */
font-family: 'Source Sans Pro', 'Open Sans', 'Helvetica Neue', sans-serif;
```
Best for:
- Menu descriptions
- General content
- Operating hours
- Contact information

## Accent Text
```css
/* Adds personality while maintaining professionalism */
font-family: 'Lora', 'Merriweather', Georgia, serif;
```
Best for:
- Quotes
- Reviews
- Special notes
- Featured item descriptions

## Alternative Body Text
```css
/* Modern and sophisticated */
font-family: 'Montserrat', 'Raleway', Arial, sans-serif;
```
Best for:
- Navigation menu
- Buttons
- Call-to-action elements
- Footer content

## Implementation Guide

### CSS Variables Setup
```css
:root {
  --font-primary: 'Playfair Display', 'Cormorant Garamond', Georgia, serif;
  --font-secondary: 'Cinzel', 'Libre Baskerville', 'Times New Roman', serif;
  --font-body: 'Source Sans Pro', 'Open Sans', 'Helvetica Neue', sans-serif;
  --font-accent: 'Lora', 'Merriweather', Georgia, serif;
  --font-alternative: 'Montserrat', 'Raleway', Arial, sans-serif;
}
```

### Google Fonts Import
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Cinzel:wght@400;700&family=Source+Sans+Pro:wght@400;600&family=Lora:wght@400;500&family=Montserrat:wght@400;500&display=swap" rel="stylesheet">
```

### Font Weight Guidelines
- Headers: 700 (bold)
- Subheaders: 600 (semibold)
- Body text: 400 (regular)
- Accent text: 500 (medium)

### Recommended Font Sizes
```css
/* Desktop */
h1 { font-size: 3rem; }    /* 48px */
h2 { font-size: 2.5rem; }  /* 40px */
h3 { font-size: 2rem; }    /* 32px */
body { font-size: 1rem; }  /* 16px */

/* Mobile */
@media (max-width: 768px) {
  h1 { font-size: 2.5rem; }  /* 40px */
  h2 { font-size: 2rem; }    /* 32px */
  h3 { font-size: 1.5rem; }  /* 24px */
  body { font-size: 1rem; }  /* 16px */
}
```