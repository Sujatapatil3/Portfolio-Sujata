# Sujata Patil — Java Backend Developer Portfolio

A premium, recruiter-focused portfolio built for a Java / Spring Boot backend developer. Designed to look
like documentation and API tooling rather than a generic design portfolio — every project is presented as a
live API resource, with architecture diagrams and endpoint tables front and center.


## ✨ Features

- **Terminal-style boot loading screen** — sets the backend tone before the hero even renders.
- **Typewriter hero** cycling through role titles (`Java Backend Developer`, `Spring Boot Engineer`, ...)
- **Ambient network-diagram background** (canvas, respects `prefers-reduced-motion`)
- **Glassmorphism UI** throughout — nav, cards, project panels
- **Dark / light mode** with persisted preference (`localStorage`)
- **Floating pill navigation** with active-section highlighting (IntersectionObserver)
- **Scroll-reveal animations** via a reusable `<Reveal>` wrapper (Framer Motion)
- **Animated skill proficiency bars**, triggered on scroll
- **Project cards with tabbed detail panels**: Architecture / API / Features — the centerpiece of the site
- **Fully responsive**, keyboard-navigable, semantic HTML, ARIA labels throughout
- **SEO-complete**: meta tags, Open Graph, Twitter Card, JSON-LD structured data, sitemap.xml, robots.txt

---

## 🗂 Project Structure

```
sujata-portfolio/
├── index.html                  # SEO meta tags, OG tags, favicon, fonts, JSON-LD
├── package.json
├── vite.config.ts              # base path config for GitHub Pages / Vercel
├── tailwind.config.js          # design tokens: colors, fonts, animations
├── tsconfig.json
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── resume/
│       └── (place Sujata_Patil_Resume.pdf here)
└── src/
    ├── main.tsx                 # React entry point
    ├── App.tsx                  # assembles all sections
    ├── index.css                # Tailwind layers + custom utility classes
    ├── data/                    # ← all resume content lives here, cleanly separated from UI
    │   ├── profile.ts           # name, contact, education, certifications, languages
    │   ├── skills.ts            # skill categories + proficiency levels + tech stack chips
    │   ├── projects.ts          # full project detail: architecture, API endpoints, DB schema
    │   └── experience.ts        # internship history
    ├── hooks/
    │   ├── useTheme.ts          # dark/light mode
    │   ├── useScrollReveal.ts   # IntersectionObserver-based reveal trigger
    │   └── useActiveSection.ts  # tracks visible section for nav highlighting
    └── components/
        ├── LoadingScreen.tsx
        ├── AnimatedBackground.tsx
        ├── Navbar.tsx
        ├── Reveal.tsx           # reusable scroll-reveal wrapper
        ├── Hero.tsx
        ├── About.tsx
        ├── Skills.tsx
        ├── Experience.tsx
        ├── Projects.tsx
        ├── ProjectCard.tsx      # the centerpiece — tabbed architecture/API/features panels
        ├── Education.tsx
        ├── Contact.tsx
        └── Footer.tsx
```

All resume content is isolated in `src/data/` — update your info there without touching any component code.

---

## 🚀 Getting Started

```bash
npm install
npm run dev       # starts local dev server, usually at http://localhost:5173
npm run build     # production build to /dist
npm run preview   # preview the production build locally
```

---


## 🛠 Tech Stack

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · Lucide Icons

Built with performance in mind: lazy-loaded images, no unnecessary re-renders (IntersectionObserver over
scroll listeners), minimal external dependencies, and a single-pass production build.
