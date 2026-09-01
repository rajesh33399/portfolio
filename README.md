# Rajesh Botla — Portfolio

A personal portfolio site for Rajesh Botla, a Computer Science graduate and
backend-leaning software engineer (Java / Spring Boot, distributed systems)
with applied AI/ML experience (Python, RAG, computer vision).

**Role classification:** Software Engineer, junior / entry-level (new grad
with one internship and two substantial independent projects). Primary
strengths are backend architecture and distributed systems (microservices,
Kafka, Redis, Docker) with a secondary, genuinely hands-on AI/ML skill set
(RAG pipelines, computer vision). The design and copy lean into that —
structured, systems-flavored, and light on decoration.

## Design concept

Each section of the site is framed as a "service" in Rajesh's own
architecture — a small status indicator and a module-style id
(`about.service`, `projects.registry`, `skills.deps` …) next to each
heading — a nod to the microservices platform that's one of his flagship
projects. The hero opens with a literal `$ whoami` prompt as the one
deliberate signature moment; everything else stays quiet. Dark theme
(near-black ink background, amber + teal accents) is the default, with a
light theme available via the toggle in the nav.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/) (CSS-variable-based theming, class-based dark mode)
- [Framer Motion](https://www.framer.com/motion/) for the hero's entrance sequence
- [Lucide](https://lucide.dev/) icons
- No backend, no database, no environment variables required

## Project structure

```
.
├── app/
│   ├── globals.css      # theme tokens (CSS variables) + base styles
│   ├── layout.js        # fonts, metadata, root HTML shell
│   └── page.js          # composes all sections
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── SectionHeader.jsx
│   ├── StatusDot.jsx
│   └── ThemeToggle.jsx
├── config/
│   └── site.js           # ALL page content lives here (single source of truth)
└── public/
    └── resume.pdf         # linked from the Resume button in Contact
```

## Local setup

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

## Customizing

Almost everything on the page — name, tagline, about copy, experience,
projects, skills, and contact links — comes from **`config/site.js`**.
Edit that file to update content without touching any component.

Two placeholders need updating before this goes live:

- `config/site.js` → `contact.github` and each project's `repo` field
  currently point to `https://github.com/your-username/...`. Replace
  `your-username` with the real GitHub handle and repo names.
- `public/resume.pdf` is included so the "Resume" button works out of the
  box — swap it out whenever the résumé is updated.

Colors and fonts live in `app/globals.css` (the `:root` and `.light` CSS
variable blocks) and `tailwind.config.js`.
