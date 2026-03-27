# MyeongSub Portfolio

Multilingual (EN/KO/JA) personal portfolio site for MyeongSub Kim, Full-Stack AI Developer.
Used to showcase skills and MVPs to potential clients.

## Tech Stack

- **Framework**: Next.js 14 (App Router, SSG)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 3.4, custom design tokens in `tailwind.config.ts`
- **Fonts**: `next/font/google` (Outfit, JetBrains Mono, Noto Sans JP/KR)
- **Linting**: ESLint 8 + `eslint-config-next@14`
- **Git Hooks**: Husky (pre-commit runs content validation)

## Commands

```bash
npm run dev        # Start dev server
npm run build      # Production build (SSG)
npm run lint       # ESLint check
npm run validate   # Content security validation
```

## Project Structure

```
src/
├── app/[locale]/           # Locale routes (en, ja, ko)
│   ├── layout.tsx          # Main layout (fonts, nav, footer, metadata)
│   ├── page.tsx            # Home — composes section components
│   └── showcase/page.tsx   # Showcase page — MVP project gallery
├── components/             # Section components (Hero, About, Projects, etc.)
│   └── showcase/           # Showcase-specific components (Card, Grid, Hero, CTA)
├── data/                   # Non-i18n structured data (showcase project URLs, prices)
├── i18n/                   # Translations (en.json, ko.json, ja.json) + types
└── styles/globals.css      # Global styles, animations, scrollbar
```

## i18n Architecture

- 3 locales: `en`, `ja`, `ko` — defined in `src/i18n/config.ts`
- JSON dictionaries in `src/i18n/{locale}.json`
- `Dictionary` type in `src/i18n/types.ts` — **update this when adding new i18n keys**
- Middleware (`src/middleware.ts`) redirects `/` to `/{defaultLocale}`
- All 3 JSON files must have identical key structures

## Coding Conventions

- Components use `Dictionary` type from `@/i18n/types`, never `any`
- Server Components by default; `"use client"` only when needed (Navigation, ScrollReveal, ShowcaseCard)
- Tailwind classes only — no inline styles except global 404 page (outside layout tree)
- Design tokens: `surface`, `accent` (#c8f542), `muted` — see `tailwind.config.ts`
- Nav anchor links use full path format: `/${locale}#section` (not just `#section`)

## Content Security

Pre-commit hook (`scripts/validate-content.js`) blocks commits that contain:
- **Blocklisted words** (EN/KO/JA vulgar terms) in i18n JSON and components
- **Unauthorized tech items** in `TechStack.tsx` (allowlist: `ALLOWED_TECH_ITEMS`)
- **Unknown URLs** in content (allowlist: `ALLOWED_DOMAINS`)

When adding new tech stack items, URLs, or showcase projects, update the allowlists in `scripts/validate-content.js`.

## Gotchas

- `tailwind.config.ts` content paths must include `src/data/**/*.ts` — gradient classes in data files get purged otherwise
- `.next` cache can cause stale module errors after big changes — delete `.next/` and restart dev server
- `ScrollReveal.tsx` depends on `usePathname` to re-observe `.reveal` elements on page navigation
- The `locale` prop must be passed to components that render external links (for locale-aware URLs)
- Company name: **MOVA Tech Co.,Ltd.** (EN), **주식회사 모바테크** (KO)
