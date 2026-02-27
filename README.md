# SSacred — Dress Like You Mean It 🐆

> A Gen Z multi-brand fast fashion e-commerce platform curating bold, niche Indian independent brands.

[![Built with Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite)](https://vitejs.dev)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TailwindCSS 4](https://img.shields.io/badge/Tailwind-4.x-06B6D4?logo=tailwindcss)](https://tailwindcss.com)

---

## 🖤 About SSacred

SSacred is the middleman between bold emerging Indian fashion brands and personality-first Gen Z customers. We curate, not mass-produce. Every brand on SSacred is hand-vetted for quality, story, and attitude.

**Tagline:** *Dress Like You Mean It.*

---

## ✨ Features

- **Leopard-print branded SSacred logo** with standardised CSS pattern across all pages
- **Interactive hero section** with background video + animated text
- **Horizontal scrolling product strips** — "Hot Right Now" & "Personalised For You"
- **Editorial split layout** — Wardrobes & Accessories sections
- **Featured Brands grid** — gold wipe-hover effect over leopard-print brand names
- **Compact Shop page** — 5-column dense product grid
- **Support page** — SSacred as trust guarantor between brands and customers
- **Gold navbar hover effects** on all nav links
- **Loading screen** with animated progress bar
- **Responsive across all devices**

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 6 |
| Styling | TailwindCSS 4 (Vanilla CSS + custom utilities) |
| Animation | Framer Motion (via `motion/react`) |
| Routing | React Router DOM v7 |
| Icons | Lucide React |
| Language | TypeScript |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Local development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

The app will be running at `http://localhost:3000`.

### Production build

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Footer.tsx          # Site footer with leopard branding
│   ├── InteractiveText.tsx # Word-level hover effects (gold, leopard)
│   ├── LoadingScreen.tsx   # Brand loading screen with progress bar
│   ├── Navbar.tsx          # Dynamic navbar (transparent → solid)
│   └── ThreeLogo.tsx       # 3D logo component
├── pages/
│   ├── Home.tsx            # Homepage — hero, strips, editorial, brands
│   ├── Shop.tsx            # Full product catalogue (5-column grid)
│   ├── Brands.tsx          # Brand partners gallery
│   ├── BrandStory.tsx      # Individual brand story page
│   ├── Wardrobes.tsx       # Styled lookbook with interactive hotspots
│   ├── Accessories.tsx     # Accessories editorial grid
│   ├── About.tsx           # About / manifesto page
│   ├── Support.tsx         # Trust & support page
│   ├── Cart.tsx            # Shopping cart
│   ├── Checkout.tsx        # Checkout flow
│   ├── Account.tsx         # User account & order history
│   ├── Auth.tsx            # Login / Sign up
│   └── Help.tsx            # FAQ / Help center
└── index.css               # Global styles + leopard-permanent pattern
```

---

## 🎨 Design System

### Brand Colours
| Name | Hex | Usage |
|---|---|---|
| Leopard Gold | `#C8A84B` | Primary accent, hover states |
| Leopard Dark | `#8B6914` | Buttons, links, gold hover |
| Chocolate | `#2C1810` | Footer background |
| Off-White | `#F5F2ED` | Text on dark backgrounds |

### Typography
- **`font-branding`** — Display font for the SSacred logo
- **`font-display`** — Section headings
- **`font-mono`** — UI labels, prices, tags (monospaced)

### Key CSS Classes
- `.leopard-permanent` — The standardised leopard SVG pattern, applied to every "SSacred" text instance
- `.logo-hover-effect` — Golden glow on hover
- `.noise-grain` — Subtle film grain texture overlay
- `.sacred-glow` — Gold glow on text

---

## 🌐 Deployment

This project is ready to deploy to **Vercel**, **Netlify**, or any static host.

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
Set build command: `npm run build`  
Set publish directory: `dist`

### Environment Variables
Copy `.env.example` to `.env` and fill in the required values before deployment.

---

## 🐆 Brand Identity

The SSacred leopard print is a CSS-only SVG background pattern defined in `index.css` under `.leopard-permanent`. It ensures pixel-perfect consistency across all instances of the brand name — from the hero, to the navbar, footer, marquee, and every page.

---

*© 2026 SSacred Ltd. Rights are Sacred.*
