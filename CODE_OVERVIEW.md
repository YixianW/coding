# CODE OVERVIEW & STRUCTURE

## index.html Structure

```
<!DOCTYPE html>
<html>
  <head>
    - Meta tags (charset, viewport, description)
    - Title & CSS link
  </head>
  <body>
    - Skip to content link (a11y)
    
    <header class="header">
      - Navigation with mobile toggle
      - Logo / Home link
      - Nav menu (About, Projects, Interests, Community, Connect)
    </header>
    
    <main id="main-content">
      
      <section id="about" class="section-about">
        - Profile photo (left, responsive)
        - Name, tagline, bio (right)
        - Skills section (grid of badges)
      </section>
      
      <section id="projects" class="section-projects">
        - 3 project cards (grid layout, responsive)
        - Each card: image, title, description, link button
      </section>
      
      <section id="interests" class="section-interests">
        - Stone seal cutting intro (centered, ~3 sentences)
        - 4-image gallery (3 col desktop, 2 tablet, 1 mobile)
        - Each image: clickable button for lightbox
        - Caption under each image
      </section>
      
      <div id="seal-lightbox" class="lightbox" role="dialog">
        - Modal backdrop (click to close)
        - Close button (top right)
        - Large image display
        - Caption text
      </div>
      
      <section id="experiences" class="section-experiences">
        - 2 experience cards (side by side on desktop, stacked mobile)
        - Each card: 2 images (side by side), title, role, description
      </section>
      
      <section id="connect" class="section-connect">
        - Intro paragraph
        - 3 contact cards (email, LinkedIn, Instagram)
        - Each card clickable with icon, label, value
      </section>
      
    </main>
    
    <footer class="footer">
      - Name & tagline
      - Contact links
      - Credits / attribution
      - Copyright notice
    </footer>
    
    <script src="script.js"></script>
  </body>
</html>
```

## styles.css Structure

```
:root
  - Color variables (background, text, accent)
  - Typography (fonts, sizes, line heights)
  - Spacing scale (xs, sm, md, lg, xl, 2xl, 3xl)
  - Shadows
  - Border radius
  - Transitions

Global Styles
  - * { box-sizing: border-box }
  - html { scroll-behavior: smooth }
  - body { font-family, color, background }
  - Links { color, hover, focus }

Layout
  - .container { max-width, padding, centered }
  - .section { padding, background }

Typography
  - h1, h2, h3, h4, h5, h6 { hierarchy }
  - p, a, lists { professional styling }

Header & Navigation
  - .header { sticky, border-bottom }
  - .navbar, .nav-menu, .nav-link
  - .mobile-nav-toggle (hidden on desktop)
  - .hamburger animation

Main Sections
  - About (2-col grid → 1-col mobile)
  - Projects (3-col grid → 2-col → 1-col)
  - Interests & Craft
  - Seal Gallery (responsive grid)
  - Lightbox Modal (fixed, centered, animated)
  - Experiences (2-col grid → 1-col)
  - Connect (3 contact cards → 2-col → 1-col)

Footer
  - Dark background
  - 3-column footer content grid (responsive)
  - Links & credits

Responsive Breakpoints
  - @media (max-width: 1024px) - Tablet
  - @media (max-width: 768px) - Mobile
    * Nav menu becomes vertical (hidden by default)
    * All grids become 1-column
  - @media (max-width: 480px) - Small mobile
    * Font sizes reduced
    * Padding reduced

Print Styles
  - Hide header, footer, nav
  - Black text on white
```

## script.js Structure

```
Mobile Navigation Toggle
  - Get elements: toggle button, menu, links
  - Click toggle → toggle 'active' class on menu/button
  - Click nav link → close menu
  - Update aria-expanded attribute

Seal Gallery Lightbox
  - Data: array of seal objects (src, alt, caption)
  - Get elements: lightbox, image, caption, close button, backdrop
  - Click image button → openLightbox(index)
  - closeLightbox() function:
    * Hide modal
    * Restore scroll
    * Restore focus
  - Event listeners:
    * Close button click
    * Backdrop click
    * ESC key press
    * Stop propagation on image click

Smooth Scroll
  - Adjust scroll offset for sticky header height
  - Smooth behavior on all anchor clicks

Accessibility
  - Skip link focus → scroll to main
  - Initialize ARIA attributes on page load
  - Console logging of accessibility features

Initialization
  - DOMContentLoaded → set initial states
  - aria-expanded="false" on toggle
  - aria-hidden="true" on lightbox
```

## Responsive Behavior

### Desktop (1024px+)
- Navigation: Horizontal menu
- About: 2-column grid (image left, content right)
- Projects: 3-column grid
- Seal Gallery: 3-column grid
- Experiences: 2-column grid
- Contact: 3-column grid

### Tablet (768-1024px)
- Navigation: Horizontal menu (still visible)
- About: 1 column (image on top)
- Projects: 2-column grid
- Seal Gallery: 2-column grid
- Experiences: 1 column
- Contact: 2-column grid

### Mobile (<768px)
- Navigation: Hamburger menu (hidden by default)
- All sections: 1-column layout
- Mobile toggle button visible
- Larger touch targets
- Reduced padding and font sizes

### Small Mobile (<480px)
- Extra-reduced padding
- Smaller font sizes
- All interactions remain touch-friendly
- Single column everything

## Accessibility Features by Component

### Navigation
- Semantic <nav> with role="navigation"
- Anchor links with href="#section-id"
- Skip to content link (visible on focus)
- ARIA label on mobile toggle (aria-expanded)
- Keyboard navigation with Tab/Shift+Tab

### Images
- Meaningful alt text on all images
- Alt text describes content (not just "image")
- Captions for seal gallery

### Lightbox Modal
- role="dialog" on modal container
- aria-hidden="true" when closed, "false" when open
- aria-label="Stone seal artwork viewer"
- ESC key to close
- Focus trapped in modal
- Focus restored on close
- Scroll prevented while open

### Contact Cards
- <a> elements (not divs)
- Hover and focus states
- aria-label on links (for screen readers)
- target="_blank" for external links
- rel="noopener noreferrer" for security

### Colors & Contrast
- All text: 4.5:1 contrast ratio (WCAG AA)
- Focus outlines: 2px solid accent color
- No color-only information (always paired with text)

## AI Usage Documentation

Each major section includes comments explaining:
1. What was AI-assisted (e.g., "drafted semantic sections")
2. What was customized (e.g., "I adjusted spacing and hierarchy")

Examples:
- HTML: `<!-- AI-assisted: semantic sections; customized content and layout -->`
- CSS: `/* AI-assisted: responsive breakpoints; customized spacing and hierarchy */`
- JS: `// AI-assisted: lightbox modal; customized for accessibility`

## Performance Notes

- No external dependencies (no CDN, no frameworks)
- No heavy JavaScript libraries
- CSS variables allow easy theming
- Lightbox images loaded on-demand (only when modal opens)
- Smooth scroll and transitions use GPU-accelerated properties
- Mobile-first responsive design (queries add features, not remove)

## Browser Compatibility

- Chrome/Edge (latest) ✅
- Firefox (latest) ✅
- Safari (latest) ✅
- Mobile Safari (iOS 14+) ✅
- Chrome Mobile (latest) ✅

## File Sizes (Estimated)

- index.html: ~25 KB
- styles.css: ~35 KB
- script.js: ~8 KB
- Total (without images): ~68 KB

## To Customize

1. **Colors:**
   Open `styles.css`, find `:root`, modify `--color-accent: #2c5aa0`

2. **Typography:**
   Modify `--font-sans` or `--font-size-base` in `:root`

3. **Content:**
   Edit text directly in `index.html` sections

4. **Images:**
   Replace files in `assets/` folder (keep same filenames)

5. **Layout:**
   Adjust breakpoints in `styles.css` media queries

