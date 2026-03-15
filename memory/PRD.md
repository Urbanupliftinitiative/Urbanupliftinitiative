# OnePermit - Product Requirements Document

## Original Problem Statement
OnePermit is a unified IVF and surrogacy care accountability and monitoring platform. The website was rebuilt from the ground up with a design paradigm inspired by `tyb.xyz` and Apple's latest neo-MacBook design language — focused on joy, comfort, and celebration for women on IVF and surrogacy journeys.

## Core User Personas
- IVF patients
- Surrogates  
- Intended parents
- Fertility clinics
- Surrogacy agencies

## Core Features
- Medication/injection management with smart reminders
- Daily health/vital tracking with clinic sync
- Clinic integration and remote monitoring
- Family/partner support portal
- Multi-role dashboards

## Design Philosophy
- **Emotional Tone:** Joyful, celebratory, warm, inviting — NOT clinical
- **Visual Style:** Apple neo-MacBook minimalism + tyb.xyz playfulness
- **Key Elements:** Liquid glass effects, floating 3D objects, massive typography, warm pastel palette
- **Font:** Sora (Google Fonts)
- **Color Palette:** Lavender (#E6E6FA), Peach (#FFDAB9), Soft Pink (#FFB7B2), Cream, Blue (#E0F7FA), Navy (#1A1A2E)

## What's Been Implemented (Feb 2026)

### Complete Homepage Redesign - DONE
All 10 sections built and tested:
1. **LandingNavbar** - Fixed, glass-morphism on scroll, mobile responsive menu
2. **HeroSection** - Gradient background, massive "your journey deserves to be celebrated" headline, 4 floating 3D elements (heart, baby bottle, pill, star), 2 CTAs
3. **MarqueeSection** - Infinite scrolling partner names
4. **AboutSection** - Massive uppercase text "TRACK CARE. SHARE MILESTONES.", floating lifestyle images
5. **TabsSection** - 3 tabs (Track/Monitor/Support) with animated content switching and app UI mockups
6. **CommunitySection** - 6 horizontally scrollable clinic/agency cards with pastel backgrounds
7. **TestimonialsSection** - 3 gradient cards with patient/surrogate quotes and portraits
8. **BenefitsSection** - 3x2 grid of feature cards (Smart Reminders, Vitals Dashboard, Clinic Integration, Family Portal, Milestone Tracker, Secure & Private)
9. **CTASection** - Liquid glass CTA card with decorative blurs
10. **FooterSection** - Logo, 4 link columns, social links, copyright

### Tech Stack
- React 19 + React Router
- TailwindCSS with custom design tokens
- Framer Motion v12 for animations
- Shadcn/UI components available
- Sora font (Google Fonts)

## Architecture
```
/app/frontend/src/
├── components/landing/     # NEW - All landing page sections
│   ├── LandingNavbar.js
│   ├── HeroSection.js
│   ├── MarqueeSection.js
│   ├── AboutSection.js
│   ├── TabsSection.js
│   ├── CommunitySection.js
│   ├── TestimonialsSection.js
│   ├── BenefitsSection.js
│   ├── CTASection.js
│   └── FooterSection.js
├── components/home/        # OLD - Previous design (deprecated)
├── pages/
│   └── HomePage.js         # Main page composing all landing sections
├── index.css               # Updated with OnePermit design system
└── App.js
```

## Testing Status
- Frontend: 100% pass rate (12/12 tests)
- All sections render correctly
- Mobile responsiveness verified (375px)
- Tab interactions work
- Anchor navigation works
- All data-testid attributes present

## Prioritized Backlog

### P0 - Next Up
- Clean up old components (/components/home/, /components/onepermit/)

### P1 - Upcoming
- Build Products page
- Build Talk to Sales page  
- Build Partners page
- Implement sub-page navigation

### P2 - Future
- Backend development (FastAPI + MongoDB)
- User authentication system
- Data models and CRUD APIs
- Core platform features:
  - Medication Management module
  - Vitals Tracking module
  - Multi-role dashboards (patient, surrogate, parent, clinic, agency)
  - Clinic integration APIs

## All Content is MOCKED
No backend functionality exists. All data on the landing page is hardcoded placeholder content.
