# AcadFlow — Academic Management Platform

> A high-performance, monochromatic SaaS landing page for modern academic management. Built with **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and a centralized **Design Token Architecture** 

🌐 **Live Demo:** [https://landing-zeta-drab-90.vercel.app/](https://landing-zeta-drab-90.vercel.app/)

---

## 📸 Screenshots

<!-- Drop your screenshot paths or URLs below -->

---

## ⚡ Quickstart (Run Locally)

### Prerequisites
- Node.js (v18+) & npm

### Setup Steps
```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
# App will run at http://localhost:5173/ or http://localhost:5174/

# 3. Build for production
npm run build
```

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + Vanilla CSS Custom Properties (Design Tokens)
- **Animation:** Framer Motion (scroll reveals, stagger effects, springs)
- **Theme Transition:** Native View Transitions API (circular ripple reveal)
- **Icons:** Lucide React

---

## 🎨 Key Design Choices

1. **Monochromatic Editorial Aesthetic:**
   - Deep background (`#050505`), crisp contrast levels, slate/zinc secondary text, and hairline borders (`rgba(255,255,255,0.08)`) for distraction-free academic workflows.

2. **Centralized Global Design Tokens:**
   - **Zero hardcoded colors** in UI components. 20+ semantic token categories (surfaces, text, borders, inputs, cards, charts) defined once in `src/theme/` and exposed via CSS variables.
   - Future themes can be added with a single configuration file without touching components.

3. **Pure HTML/CSS Product Mockups:**
   - Instead of static lossy images, all 9 dashboard previews (Hero, Assignments, Attendance, AI Assistant, Study Hub, Roles, Workflow) are interactive, responsive React components that adapt dynamically to the active theme.

---

## 🧩 Challenges Solved

- **Circular Theme Transition:**
  - *Challenge:* Traditional theme toggles either flash abruptly or require solid color overlays that hide screen elements before switching.
  - *Solution:* Used the browser's native **View Transitions API** (`document.startViewTransition`) with dynamic `@keyframes` pinned to the clicked button's coordinates. The previous page remains static while the new theme expands via `clip-path: circle()` in **360ms** (`cubic-bezier(0.16, 1, 0.3, 1)`), cleanly revealing the new theme's UI elements with zero solid-color masking or flicker.

- **Dynamic Theme Contrast with `color-mix()`:**
  - *Challenge:* Static opacity values break legibility when flipping between dark and light themes.
  - *Solution:* Used CSS `color-mix(in srgb, var(--color-*) 12%, transparent)` for status badges (success, warning, error, info), ensuring accessible contrast across both themes.

- **Tailwind v4 Variable Synchronization:**
  - *Challenge:* Decoupling component styles while maintaining rapid utility DX.
  - *Solution:* Mapped semantic tokens into Tailwind's `@theme` directive, allowing components to consume clean utility classes or CSS variables interchangeably.

---

## 📜 Available Scripts

- `npm run dev` — Run development server with HMR
- `npm run build` — TypeScript check (`tsc -b`) & production build
- `npm run preview` — Preview production build locally
- `npm run lint` — Lint codebase with ESLint
