# CLAUDE.md — Pulse Content Studio

> This file documents the architecture, conventions, and decisions made during the initial setup of the Pulse Content Studio dashboard. Keep this file up to date as the project evolves.

---

## Tech Stack

| Layer | Technology | Version | Notes |
|---|---|---|---|
| Framework | Next.js (App Router) | 15.x | Uses `app/` directory, React Server Components by default |
| Language | TypeScript | 5.x | Strict mode enabled |
| Styling | Tailwind CSS | v4 | `@import "tailwindcss"` syntax; no `tailwind.config.ts` required |
| Components | shadcn/ui (manual) | — | Radix UI primitives installed manually; shadcn CLI blocked in this env |
| Icons | Lucide React | latest | Consistent icon set across all modules |
| Fonts | Google Fonts | — | Space Mono (display/mono) + DM Sans (body) via CSS `@import` |

---

## Folder Structure

```
content-dashboard/
├── app/
│   ├── globals.css              # Global dark theme, CSS variables, animations
│   ├── layout.tsx               # Root HTML shell (no fonts injected here in v15)
│   ├── page.tsx                 # Redirects → /instagram
│   └── (dashboard)/             # Route group — shares DashboardLayout
│       ├── layout.tsx           # Sidebar + main content wrapper
│       ├── instagram/
│       │   └── page.tsx
│       ├── analytics/
│       │   └── page.tsx
│       ├── calendar/
│       │   └── page.tsx
│       ├── competitors/
│       │   └── page.tsx
│       └── news/
│           └── page.tsx
├── components/
│   ├── Sidebar.tsx              # Fixed left nav with active states and badges
│   ├── PageHeader.tsx           # Reusable section header (icon + title + actions)
│   ├── StatCard.tsx             # KPI metric card with trend indicator
│   └── PlaceholderCard.tsx      # Empty-state / coming-soon card
├── lib/
│   └── utils.ts                 # cn() utility (clsx + tailwind-merge)
├── public/
├── CLAUDE.md                    # ← you are here
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Design System

### Color Tokens (CSS Variables in `globals.css`)

All colours are defined as CSS custom properties on `:root`. Never use raw hex values in components — always reference a token.

| Token | Value | Usage |
|---|---|---|
| `--bg-base` | `#080b10` | Page background |
| `--bg-surface` | `#0d1117` | Cards, panels |
| `--bg-elevated` | `#151c25` | Hover states, dropdowns |
| `--bg-overlay` | `#1a2332` | Modals, popovers |
| `--bg-muted` | `#1e2a3a` | Tags, chips |
| `--border-subtle` | `#1e2d3d` | Default card border |
| `--border-default` | `#243447` | Hover border |
| `--border-strong` | `#2d4060` | Focus / active border |
| `--text-primary` | `#e2ecf7` | Headings, primary content |
| `--text-secondary` | `#8ba3be` | Body text |
| `--text-muted` | `#4d6478` | Labels, metadata |
| `--text-disabled` | `#2d3f50` | Inactive / placeholder |
| `--accent-primary` | `#00d4aa` | CTAs, active states, glows |
| `--accent-secondary` | `#3d9ef5` | Analytics accent |
| `--status-success` | `#00d4aa` | Positive trends |
| `--status-warning` | `#f5a623` | Caution / medium threat |
| `--status-error` | `#f5564a` | Negative trends / high threat |

### Section Accent Colours

Each module has an assigned accent colour used for its icon and primary interactive elements:

| Module | Accent |
|---|---|
| Instagram Manager | `#e1306c` |
| Analytics | `#3d9ef5` |
| Content Calendar | `#00d4aa` |
| Competitor Tracker | `#f5a623` |
| News Consolidator | `#a78bfa` |

### Typography

- **Display / Headings / Monospace values**: `Space Mono` — used for section labels, KPI numbers, page wordmark, rank indicators
- **Body / UI text**: `DM Sans` — used for all other text including nav labels, descriptions, body copy

### Layout

- Sidebar width: `240px` (defined as `--sidebar-width` CSS variable)
- Main content offset: `margin-left: var(--sidebar-width)`
- Page padding: `32px 40px`
- Grid gap standard: `16px` (stat cards), `24px` (content sections)

---

## Component Conventions

### Styling Approach

Components use **inline `style` props** for design-token-dependent values, and **Tailwind utility classes** (via `className`) for interactive states like hover and transitions that can't be expressed cleanly with CSS variables alone.

```tsx
// ✅ Correct pattern
<div
  style={{ background: "var(--bg-surface)", borderRadius: "var(--radius-lg)" }}
  className="hover:bg-[var(--bg-elevated)] transition-colors"
>
```

This hybrid approach keeps tokens centralised while leveraging Tailwind's JIT for stateful classes.

### Animation

All page-level content animates in using the `fadeUp` keyframe defined in `globals.css`:

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

- Wrap pages in `<div className="animate-fade-up">` for the whole-page entrance.
- For lists of cards, use `className="stagger"` on the container — CSS applies staggered `animation-delay` to the first 6 children automatically.
- For manually staggered items (e.g. table rows), use `opacity: 0` + inline `animation` with an `index * 0.07s` delay.

### `cn()` Utility

Use `cn()` from `@/lib/utils` to conditionally merge class names:

```ts
import { cn } from "@/lib/utils";
cn("base-class", isActive && "active-class", someCondition ? "a" : "b")
```

---

## Key Architecture Decisions

### 1. Route Group `(dashboard)`
The `(dashboard)` route group applies a shared layout (sidebar + main wrapper) to all section pages without affecting the URL. The root `/` redirects to `/instagram` so the dashboard always opens with a meaningful view.

### 2. No `tailwind.config.ts`
Tailwind v4 uses the new `@import "tailwindcss"` CSS-first API. There is no config file — all theme extensions and overrides should be done inside `globals.css` using `@theme inline {}`.

### 3. shadcn/ui — Manual Install
The shadcn CLI required network access to `ui.shadcn.com` which was blocked. All Radix UI primitives are installed directly via npm. Add new components by installing the specific `@radix-ui/react-*` package and writing the component wrapper manually in `components/ui/`.

### 4. Fonts via CSS `@import`
Google Fonts are loaded via `@import` in `globals.css` rather than `next/font`. This avoids build-time font fetching. For production, switch to `next/font/google` for better performance (font is inlined and self-hosted automatically).

### 5. Inline Styles + Tailwind Hybrid
Design tokens (CSS variables) can't be consumed by Tailwind utility classes directly without theme registration. The chosen approach uses `style={}` for token-based values and `className` only for states Tailwind handles better (transitions, pseudo-classes). This keeps the design system as a single source of truth in `globals.css`.

---

## Adding a New Section

1. Create `app/(dashboard)/<section-name>/page.tsx`
2. Add a nav entry in `components/Sidebar.tsx` (`navItems` array) with `label`, `href`, `icon`, and `color`
3. Use `<PageHeader>` at the top of the new page
4. Use `<StatCard>` for KPIs and `<PlaceholderCard>` for unbuilt sub-sections
5. Follow the accent colour system — pick a distinct colour and use it for the module's icon, badges, and primary accents

---

## Scripts

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

---

## Future Improvements

- [ ] Replace CSS `@import` fonts with `next/font/google` for production perf
- [ ] Add `components/ui/` directory with shadcn-compatible Button, Badge, Tooltip wrappers
- [ ] Implement real data fetching per section (React Query or SWR recommended)
- [ ] Add collapsible sidebar state with `localStorage` persistence
- [ ] Add keyboard navigation and ARIA roles to Sidebar
- [ ] Set up Storybook for component documentation
- [ ] Add E2E tests with Playwright for critical navigation flows
