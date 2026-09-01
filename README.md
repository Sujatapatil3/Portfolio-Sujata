# Sujata Patil — Java Backend Developer Portfolio

A premium, recruiter-focused portfolio built for a Java / Spring Boot backend developer. Designed to look
like documentation and API tooling rather than a generic design portfolio — every project is presented as a
live API resource, with architecture diagrams and endpoint tables front and center.

**Live design language:** deep slate surfaces, glassmorphism panels, a signal-teal accent (`#5EEAD4`), and
JetBrains Mono typography throughout — built to evoke a terminal / API console, not a template.

---

## ✨ Features

- **Terminal-style boot loading screen** — sets the backend tone before the hero even renders
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

### Before you deploy, do these three things

1. **Add your real resume PDF** to `public/resume/Sujata_Patil_Resume.pdf` (see `src/data/profile.ts` →
   `resumeFile` if you rename it).
2. **Update placeholder links** in `src/data/profile.ts`:
   - `github` and `linkedin` — currently placeholders (`github.com/sujatapatil`, etc.) since the resume
     only listed a LinkedIn name, not a URL/handle.

---

## 🌐 Deployment

### Option A — Vercel (recommended, zero-config)

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite. Framework preset: **Vite**. Build command: `npm run build`. Output dir: `dist`.
4. Before deploying, open `vite.config.ts` and set:
   ```ts
   base: '/'
   ```
   (Vercel serves from the domain root, unlike GitHub Pages project sites.)
5. Click **Deploy**. Done — you get a `*.vercel.app` URL, with custom domain support in project settings.

### Option B — GitHub Pages

1. Push this project to a GitHub repository, e.g. `github.com/yourname/sujata-portfolio`.
2. In `vite.config.ts`, confirm the `base` matches your repo name:
   ```ts
   base: '/sujata-portfolio/'
   ```
3. Install the deploy helper (already in `devDependencies`):
   ```bash
   npm install
   ```
4. Add a deploy script is already included — just run:
   ```bash
   npm run build
   npx gh-pages -d dist
   ```
5. In your GitHub repo settings → **Pages**, set the source to the `gh-pages` branch.
6. Your site will be live at `https://yourname.github.io/sujata-portfolio/`.

> If you later attach a custom domain to GitHub Pages, switch `base` back to `'/'`.

---

## 📋 Resume Improvement Suggestions (reflected in this portfolio)

A few gaps were noticed while building this — worth fixing on the resume itself too:

1. **No GitHub or LinkedIn URL listed** — only "LinkedIn-sujata patil" as text. Add clickable links; recruiters
   click through far more than you'd expect. Placeholders are used here — replace them.
2. **No LeetCode/CodeChef/competitive programming profile.** For Java backend roles, this is often screened
   before the resume is even read closely. A modest, honestly-labeled profile beats no profile.
3. **No live demo links for either project.** Consider deploying at least the To-Do List Manager (Spring
   Boot + a free-tier host like Render or Railway) — a working link is worth more than any amount of resume
   text.
4. **"Objective" section reads generic.** This portfolio's About section replaces it with something more
   specific to your actual project experience — consider mirroring that tone on the resume itself.
5. **Certifications are course-completion certificates, not skill-tested credentials.** Worth supplementing
   with something evaluative (e.g. Oracle Java certification, or a solid LeetCode/HackerRank score) before
   applying broadly — it's a stronger signal to automated and human screens alike.

---

## 🛠 Tech Stack

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · Lucide Icons

Built with performance in mind: lazy-loaded images, no unnecessary re-renders (IntersectionObserver over
scroll listeners), minimal external dependencies, and a single-pass production build.
