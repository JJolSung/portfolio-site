# MyeongSub Kim — Portfolio

Personal portfolio website for **MyeongSub Kim**, Full-Stack AI Developer and founder of MOVA Tech Co.,Ltd.

Built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Features

- **Multilingual** — Korean, Japanese, English (i18n via JSON dictionaries)
- **Responsive** — Mobile-first design with hamburger menu, optimized section spacing
- **Dark theme** — Custom design system with accent colors and gradient effects
- **Scroll animations** — IntersectionObserver-based reveal effects
- **Active navigation** — Scroll position-based nav highlighting per section
- **Showcase** — MVP project gallery with gradient glow cards, live demo & GitHub links
  - Desktop: hover-triggered glow effect
  - Mobile: centered-card-only glow with IntersectionObserver
  - iOS Safari compositing layer fix for smooth blur transitions
- **Optimized fonts** — Self-hosted via `next/font/google` (Outfit, JetBrains Mono, Noto Sans JP/KR)
- **Content protection** — Pre-commit hook + CI pipeline to block inappropriate content

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 14 (App Router, SSG) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Fonts | next/font/google |
| Linting | ESLint (next/core-web-vitals) |
| Git Hooks | Husky (pre-commit) |
| CI | GitHub Actions |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Run content validation
npm run validate
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (globals.css import)
│   ├── not-found.tsx           # Global 404 page
│   └── [locale]/
│       ├── layout.tsx          # Locale layout (fonts, nav, footer)
│       ├── page.tsx            # Home page (composes all sections)
│       ├── not-found.tsx       # Locale 404 page
│       ├── error.tsx           # Error boundary
│       └── showcase/
│           └── page.tsx        # Showcase page (MVP project gallery)
├── components/
│   ├── Hero.tsx                # Hero section
│   ├── About.tsx               # About section
│   ├── TechStack.tsx           # Tech stack section
│   ├── Projects.tsx            # Projects section
│   ├── Services.tsx            # Services section
│   ├── Contact.tsx             # Contact section
│   ├── ShowcasePreview.tsx     # Showcase preview on main page
│   ├── Navigation.tsx          # Header navigation with active section (client)
│   ├── Footer.tsx              # Footer
│   ├── ScrollReveal.tsx        # Scroll animation observer (client)
│   └── showcase/
│       ├── ShowcaseCard.tsx    # Project card with glow effects (client)
│       ├── ShowcaseGrid.tsx    # Card grid layout
│       ├── ShowcaseHero.tsx    # Showcase page hero
│       └── ShowcaseCTA.tsx     # Showcase page CTA
├── data/
│   └── showcase-projects.ts   # Showcase project data (URLs, prices, gradients)
├── i18n/
│   ├── config.ts               # Locale config & dictionary loader
│   ├── types.ts                # Dictionary TypeScript type
│   ├── en.json                 # English translations
│   ├── ja.json                 # Japanese translations
│   └── ko.json                 # Korean translations
├── styles/
│   └── globals.css             # Global styles, animations, scrollbar
└── middleware.ts               # Locale redirect middleware
```

## Content Security

This project includes automated content validation to prevent unauthorized or inappropriate modifications.

### How it works

- **Pre-commit hook** — Runs `scripts/validate-content.js` before every commit. Blocks commits containing inappropriate content.
- **GitHub Actions CI** — Runs validation, lint, and build on every push/PR to `main`.

### What is validated

| Check | Description |
|-------|-------------|
| Blocklist | Scans i18n JSON and components for vulgar/inappropriate words (EN/KO/JA) |
| Tech stack allowlist | Only pre-approved tech items are allowed in `TechStack.tsx` |
| URL allowlist | Only known domains (movatech.org, lohas-resorts.com, github.com) are permitted in content |

### Adding a new tech item or URL

Edit the allowlists in `scripts/validate-content.js`:

```js
// Add to ALLOWED_TECH_ITEMS
const ALLOWED_TECH_ITEMS = new Set([
  "Next.js", "React", /* ... */ "NewTech",
]);

// Add to ALLOWED_DOMAINS
const ALLOWED_DOMAINS = [
  "movatech.org", /* ... */ "newdomain.com",
];
```

## License

All rights reserved. &copy; MyeongSub Kim / MOVA Tech Co.,Ltd.
