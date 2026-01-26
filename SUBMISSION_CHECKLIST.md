# CMU 15-113 Project 1 — Submission Checklist

## Portfolio Website Completion & Submission Guide

---

## ✅ CORE REQUIREMENTS

- [ ] **HTML-only structure** — No frameworks (React, Vue, etc.). Only HTML + CSS + vanilla JavaScript ✓
- [ ] **GitHub Pages compatible** — Relative paths, `/assets` folder, no server requirements ✓
- [ ] **Responsive design** — Works on desktop (1024px+), tablet (768px-1024px), and mobile (<768px) ✓
- [ ] **Accessibility** — Semantic HTML, alt text, keyboard navigation, ARIA attributes ✓
- [ ] **AI usage documented** — Comments throughout code explaining AI assistance and customizations ✓

---

## ✅ DESIGN & STYLE

- [ ] **Professional tone** — Clean, editorial, business-oriented; avoids generic templates ✓
- [ ] **No gimmicks** — No cartoons, bright gradients, distracting animations ✓
- [ ] **Color scheme** — Neutral background, dark text, single accent color (professional blue) ✓
- [ ] **Typography** — Professional sans-serif, readable hierarchy, good contrast ✓
- [ ] **White space** — Generous spacing, minimal card styling, professional layout ✓

---

## ✅ REQUIRED SECTIONS

- [ ] **Navigation** — Clean top nav with anchor links to all sections ✓
  - [ ] Mobile nav collapse/toggle without breaking ✓
  - [ ] Skip to content link for accessibility ✓

- [ ] **About Section** — Profile photo + bio ✓
  - [ ] Name and tagline visible ✓
  - [ ] 3–5 sentence bio included ✓
  - [ ] Skills listed as cards/bullets ✓

- [ ] **Projects Section** — 3 cards with titles, descriptions, images, links ✓
  - [ ] Personal Portfolio Website ✓
  - [ ] AI-Powered Advertising Optimization ✓
  - [ ] AR-Based EdTech App Launch ✓
  - [ ] All links labeled (even if placeholder) ✓

- [ ] **Interests & Craft** — Stone seal cutting ONLY (篆刻) ✓
  - [ ] 2–3 sentence professional description ✓
  - [ ] 4-image gallery (3 columns desktop, 2 tablet, 1 mobile) ✓
  - [ ] Meaningful alt text and captions on all images ✓

- [ ] **Meaningful Experiences** — Community impact section ✓
  - [ ] Cetacean conservation outreach (with 2 photos) ✓
  - [ ] Ocean Ambassador speech competition (with 2 photos) ✓
  - [ ] Professional descriptions, not exaggerated claims ✓

- [ ] **Connect Section** — Email, LinkedIn, Instagram ✓
  - [ ] All links clickable (email: mailto, socials: target="_blank") ✓
  - [ ] Repeated in footer ✓
  - [ ] Accessible labels on all links ✓

- [ ] **Footer** — Credits and copyright ✓
  - [ ] "All photos © Aria Wang" or similar ✓
  - [ ] Attribution for external images (if any) ✓

---

## ✅ JAVASCRIPT REQUIREMENTS

- [ ] **Lightbox modal for seal gallery** — Click to open, ESC to close ✓
  - [ ] Modal shows image + caption ✓
  - [ ] Close button visible ✓
  - [ ] Click outside (backdrop) closes modal ✓
  - [ ] ESC key closes modal ✓
  - [ ] ARIA attributes (role="dialog", aria-hidden) ✓
  - [ ] Focus management (restore on close) ✓
  - [ ] Scroll prevention when modal open ✓

- [ ] **Mobile nav toggle** — Hamburger icon collapses/expands menu ✓
  - [ ] Works on mobile and tablet ✓
  - [ ] ARIA labels on toggle button ✓
  - [ ] Menu closes when link clicked ✓

---

## ✅ ACCESSIBILITY

- [ ] **Heading hierarchy** — H1 (once, at top), H2 (sections), H3 (subsections) ✓
- [ ] **Alt text** — All images have meaningful, descriptive alt text ✓
- [ ] **Color contrast** — Text meets WCAG AA (at least 4.5:1 on normal text) ✓
- [ ] **Keyboard navigation** — Tab through all interactive elements ✓
- [ ] **ARIA attributes** — Dialog roles, aria-hidden, aria-expanded, aria-labels ✓
- [ ] **Focus indicators** — Visible outline on all focusable elements ✓
- [ ] **Skip link** — "Skip to main content" visible on focus ✓

---

## ✅ RESPONSIVE DESIGN TESTING

Test on these breakpoints:

- [ ] **Desktop (1200px+)** — Full layout, 3-column grids
- [ ] **Tablet (768px–1024px)** — 2-column grids, stacked navigation
- [ ] **Mobile (< 768px)** — 1-column layout, hamburger menu
- [ ] **Small mobile (< 480px)** — Touch-friendly, readable text

---

## ✅ FILE STRUCTURE

- [ ] `index.html` — Complete, semantic HTML with all sections ✓
- [ ] `styles.css` — Responsive, CSS variables, professional design ✓
- [ ] `script.js` — Lightbox + mobile nav toggle ✓
- [ ] `README.md` — Project documentation ✓
- [ ] `assets/` folder created with placeholder filenames:
  - [ ] `profile.jpg` — Profile photo
  - [ ] `project-portfolio.png` — Portfolio project
  - [ ] `project-ai-ads.png` — AI ads project
  - [ ] `project-edtech-ar.png` — EdTech AR project
  - [ ] `seal-01.jpg` through `seal-04.jpg` — Seal gallery (4 images)
  - [ ] `cetacean-talk-01.jpg`, `cetacean-talk-02.jpg` — Conservation photos
  - [ ] `ocean-speech-01.jpg`, `ocean-speech-02.jpg` — Speech event photos

---

## ✅ CODE QUALITY

- [ ] **AI usage comments** — Comments explain AI assistance + customizations ✓
  - [ ] HTML comments on major sections ✓
  - [ ] CSS comments on responsive breakpoints ✓
  - [ ] JavaScript comments on lightbox & nav toggle ✓

- [ ] **No external dependencies** — Only HTML, CSS, vanilla JavaScript ✓
- [ ] **Relative paths** — All image paths use `assets/filename` (no leading `/`) ✓
- [ ] **Proper indentation** — Code is readable and well-formatted ✓

---

## ✅ DEPLOYMENT (Before Submission)

- [ ] **Create GitHub repository** with project code
- [ ] **Push all files** to `main` branch
- [ ] **Enable GitHub Pages** (Settings > Pages > Deploy from a branch > main)
- [ ] **Test live site** at `https://username.github.io/repo-name/`
- [ ] **Verify images load** (check Assets folder visibility)
- [ ] **Test lightbox** — Click seal, press ESC, verify close
- [ ] **Test mobile nav** — Toggle menu on mobile screen size
- [ ] **Test links** — Email, LinkedIn, Instagram all clickable

---

## ✅ CONTENT ACCURACY

- [ ] **Name:** Yixian (Aria) Wang ✓
- [ ] **Tagline:** MBA Candidate at CMU Tepper | Product & Marketing Leader with AI-Driven Growth Experience ✓
- [ ] **Bio:** 3–5 sentences covering Tepper, previous roles, product strategy experience ✓
- [ ] **Skills:** All 7 listed (Product Strategy, GTM, Marketing Analytics, A/B Testing, AI Ads, Python/Tableau, Tools) ✓
- [ ] **Email:** yixianwa@tepper.cmu.edu ✓
- [ ] **LinkedIn:** https://www.linkedin.com/in/yixian-wang1 ✓
- [ ] **Instagram:** https://www.instagram.com/ariaaaa_wang?igsh=eGk3ODh0N21peHZh&utm_source=qr ✓

---

## ✅ FINAL POLISH

- [ ] **Typos & grammar** — Content proofread and professional ✓
- [ ] **Consistent spacing** — Margins, padding, gaps aligned to design system ✓
- [ ] **Consistent colors** — Accent color used consistently ✓
- [ ] **Button/link styling** — Hover states, focus states work ✓
- [ ] **Mobile performance** — No horizontal scroll, touch-friendly buttons ✓

---

## 📋 SUBMISSION CHECKLIST (Before Submitting)

1. [ ] All 12 placeholder images are ready (or are you submitting with placeholders?)
2. [ ] README.md explains how to add images and deploy
3. [ ] At least one meaningful JavaScript interaction (lightbox + nav toggle) ✓
4. [ ] Website is deployable to GitHub Pages ✓
5. [ ] All links work (email, socials) ✓
6. [ ] Mobile menu functions correctly ✓
7. [ ] Lightbox modal works (click to open, ESC to close) ✓
8. [ ] No console errors (F12 → Console) ✓
9. [ ] Passes basic accessibility audit (Tab through site, check contrast) ✓
10. [ ] AI usage is documented in code comments ✓

---

## 🎯 SUBMISSION FORMAT

Your submission should include:

- GitHub repository URL pointing to your deployed site
- All HTML, CSS, JavaScript source code
- README.md with setup/deployment instructions
- `assets/` folder with placeholder image filenames (images can be placeholders)
- Evidence of GitHub Pages deployment (provide live URL)

---

## 🚀 LAUNCH STEPS

```bash
# 1. Initialize repo (if not already done)
git init
git add .
git commit -m "Initial portfolio commit"

# 2. Push to GitHub
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main

# 3. Enable GitHub Pages
# Go to repository Settings > Pages
# Select "Deploy from a branch"
# Choose "main" branch
# Click Save

# 4. Your site will be live at:
# https://YOUR-USERNAME.github.io/portfolio/
```

---

## ✨ Final Notes

- **Design is professional first** — Credibility matters for job applications
- **Accessibility is built-in** — Not an afterthought; every feature is keyboard/screen-reader accessible
- **Code is well-documented** — AI usage is clear, and customizations are explained
- **No dependencies** — Lightweight, fast, and GitHub Pages compatible

Good luck with your submission! 🎉

