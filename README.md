# The Kinetic Architect

<p align="center">
  <img src="public/image/profile.png" alt="Amen Allah Youssef" width="260" />
</p>

<p align="center">
  A minimalist personal portfolio for <strong>Amen Allah Youssef</strong>, an AI / ML Research Engineer based in Sousse, Tunisia.
</p>

<p align="center">
  <a href="https://github.com/Youssefamenallah23">GitHub</a> ·
  <a href="https://www.linkedin.com/in/amen-allah-youssef-8685012bb/">LinkedIn</a> ·
  <a href="mailto:youssefamenallah.contact@gmail.com">Email</a>
</p>

<p align="center">
  <img src="public/image/portfolio-hero.png" alt="The Kinetic Architect portfolio hero section" width="900" />
</p>

## Overview

The Kinetic Architect is a single-page portfolio built around a simple idea: technical work should be explained with the same care used to build it. It presents research systems, applied ML work, experience, education, and current GitHub projects in an editorial, low-distraction interface.

The visual system deliberately avoids heavy shadows, glass effects, and blue-purple gradients. It uses warm paper tones, restrained green accents, serif-led typography, fine rules, and small purposeful interactions.

## Architecture

```text
App.tsx
├── Navigation          Sticky navigation and responsive menu
├── Hero                Positioning, résumé link, and primary calls to action
├── TechTicker          One-line animated technical-stack rail
├── About               Research focus and core capabilities
├── Experience          Applied engineering and freelance work timeline
├── ArchiveGrid         Curated featured work + live GitHub repository feed
├── Education           Academic background
├── Testimonials        Research-practice statement
├── Blog                GitHub-first public-notes link
├── Contact             EmailJS contact form and availability statement
└── Footer              Social links
```

### Project data and GitHub feed

- `constants.ts` contains the hand-curated featured projects and résumé-backed experience data.
- `ArchiveGrid.tsx` fetches public repositories from the GitHub API in the browser.
- The feed is intentionally restricted to the strongest relevant repositories, showing six initially and an **Open all projects** control for the remainder.
- If GitHub is unavailable or rate-limited, the page keeps working and directs visitors to the GitHub profile.

## Tech stack

- React 19
- TypeScript
- Vite
- Framer Motion
- Lucide React
- EmailJS
- Tailwind CDN utilities with a custom editorial CSS layer

## Run locally

Prerequisite: Node.js 20+.

```bash
git clone https://github.com/Youssefamenallah23/kinetic-architect.git
cd kinetic-architect
npm install
npm run dev
```

Open `http://localhost:5173`.

## Environment variables

The site works without email configuration, but the contact form needs these values in `.env.local`:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Build

```bash
npm run build
```

## Profile

Amen focuses on reliable LLM systems, hybrid retrieval, evaluation-first RAG, and applied model research. He is open to internships, software-engineering and AI/ML roles, freelance work, and research collaboration.

---

Built and maintained by [Amen Allah Youssef](https://github.com/Youssefamenallah23).
