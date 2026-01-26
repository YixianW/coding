# Yixian (Aria) Wang — Personal Portfolio Website

## Project Overview

This is a professional, fully responsive portfolio website built for CMU 15-113 Project 1. The site is designed for job applications (Product, PMM, Tech Strategy roles) and deployed via GitHub Pages.

**Live Site:** [Deploy to GitHub Pages](https://pages.github.com/)

### Key Features

- **Professional Design:** Clean, editorial-style layout focused on credibility and business-readiness
- **Fully Responsive:** Desktop, tablet, and mobile optimizations using CSS Grid and Flexbox
- **Accessible:** WCAG-compliant with semantic HTML, proper heading hierarchy, alt text, keyboard navigation
- **GitHub Pages Friendly:** No frameworks, no server requirements, relative paths throughout
- **Meaningful Interactions:** Lightbox gallery with keyboard support (ESC to close), mobile navigation toggle
- **AI Usage Documented:** Clear comments throughout code explaining AI assistance and customizations

---

## File Structure

```
portfolio-website/
├── index.html              # Main HTML file with semantic structure
├── styles.css              # Responsive stylesheet with CSS variables
├── script.js               # Vanilla JavaScript (lightbox + mobile nav)
├── README.md               # This file
└── assets/                 # Image directory (create and populate)
    ├── profile.jpg
    ├── project-portfolio.png
    ├── project-ai-ads.png
    ├── project-edtech-ar.png
    ├── seal-01.jpg
    ├── seal-02.jpg
    ├── seal-03.jpg
    ├── seal-04.jpg
    ├── cetacean-talk-01.jpg
    ├── cetacean-talk-02.jpg
    ├── ocean-speech-01.jpg
    └── ocean-speech-02.jpg
```

---

## Setup Instructions

### 1. Create Assets Folder

```bash
mkdir assets
```

### 2. Add Images

Place your images in the `assets/` folder with the filenames specified above.

### 3. Deploy to GitHub Pages

1. Push code to your GitHub repository
2. Go to **Settings > Pages**
3. Select **Source: Deploy from a branch**
4. Choose **Branch: main**
5. Click **Save**

---

## AI Usage Documentation

### HTML (index.html)
- **AI-Assisted:** Semantic structure, accessibility markup
- **Customized:** All content, sections, and styling hooks

### CSS (styles.css)
- **AI-Assisted:** Responsive grid/flex layouts, breakpoints
- **Customized:** Color palette, typography, professional aesthetics

### JavaScript (script.js)
- **AI-Assisted:** Lightbox modal, mobile nav toggle
- **Customized:** ESC key to close, ARIA attributes, focus management

---

## Accessibility Features

✅ Semantic HTML with proper heading hierarchy  
✅ Alt text on all images  
✅ Keyboard navigation (Tab, ESC in lightbox)  
✅ ARIA labels and roles  
✅ Skip to content link  
✅ Focus indicators  
✅ Responsive design for all devices  

---

## Responsive Breakpoints

- **Desktop:** 1024px and up
- **Tablet:** 768px to 1024px
- **Mobile:** Below 768px
- **Small Mobile:** Below 480px

---

## Credits

**All photos and artworks © Yixian (Aria) Wang.**

Website built with HTML, CSS, and vanilla JavaScript. No frameworks or external dependencies.

---

**Last Updated:** January 2026  
**Project:** CMU 15-113 — Personal Portfolio Website