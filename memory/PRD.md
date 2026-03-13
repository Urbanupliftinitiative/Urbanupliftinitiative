# OnePermit - Product Requirements Document

## Original Problem Statement
Build a pixel-perfect landing page for "OnePermit," a unified IVF and surrogacy care platform. The design is a hybrid of door.com's interactive layout and kaigohealth.ai's clean typography aesthetic.

## Core User Personas
- IVF patients, surrogates, intended parents, clinics, and agencies

## Core Features (Landing Page - Current Phase)
- Hero section with full-viewport gradient
- Healthcare intelligence dashboard mockup
- Advisors section (4 healthcare veterans)
- **Scroll-driven stacking feature cards** (door.com style overlap effect)
  - Patient-Centered Care (purple gradient)
  - Unified Care Platform (blue gradient)
  - Enterprise-Grade Security (dark gradient)
  - Desktop: scroll-driven overlap with sticky positioning
  - Mobile: swipeable slideshow with auto-play
- FAQ accordion section
- CTA section
- Clean modern footer

## Architecture
```
/app/frontend/src/
├── components/
│   ├── home/
│   │   ├── HeroSection.js
│   │   ├── IntelligenceSection.js
│   │   ├── AdvisorsSection.js
│   │   ├── FeaturesSection.js  ← Scroll-driven stacking cards
│   │   ├── FAQSection.js
│   │   └── CTASection.js
│   ├── Navbar.js
│   └── ui/ (shadcn components)
├── pages/
│   └── HomePage.js
├── App.js
└── App.css
```

## What's Been Implemented
- [x] door.com clone → OnePermit rebrand
- [x] kaigohealth.ai typography/aesthetic
- [x] Full-width layout with proper font sizes
- [x] Transparent navbar blending into hero
- [x] Compact hero section (min-h-screen)
- [x] Removed unused sections (Products Carousel, Stats, Benefits, etc.)
- [x] Advisors section (4 healthcare veterans)
- [x] Redesigned footer (white background, clean modern)
- [x] Bold clean wordmark logo
- [x] **Scroll-driven stacking feature cards** (door.com overlap effect)
  - All 3 cards overlap correctly on desktop
  - Mobile slideshow with swipe + auto-play
  - Enterprise-Grade Security (dark card) fully scrolls to top

## Pending / In Progress
- [ ] Mobile responsiveness for all sections (P0)
- [ ] Products page (P1)
- [ ] Talk to Sales / Request a Demo page (P1)

## Future / Backlog
- [ ] Backend development (FastAPI + MongoDB)
- [ ] Authentication with RBAC
- [ ] Core platform features (Medication Mgmt, Vitals Tracking, Document Vault)
- [ ] Multi-role dashboards

## Tech Stack
- Frontend: React, TailwindCSS, Shadcn/UI, React Router
- Backend: FastAPI + MongoDB (planned)
