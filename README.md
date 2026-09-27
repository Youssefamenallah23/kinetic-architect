<p align="center">
  <a href="https://portfolio-youssef-amen-allah.vercel.app/">
    <img src="public/image/portfolio-hero.png" alt="The Kinetic Architect" width="100%" />
  </a>
</p>

<h1 align="center">The Kinetic Architect</h1>

<p align="center">
  A focused, editorial portfolio for <a href="https://github.com/Youssefamenallah23">Amen Allah Youssef</a> — AI / ML Research Engineer.
</p>

<p align="center">
  <a href="#architecture">Architecture</a> ·
  <a href="#project-system">Project system</a> ·
  <a href="#run-locally">Run locally</a> ·
  <a href="https://portfolio-youssef-amen-allah.vercel.app/">Live portfolio</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React_19-1d3326?style=flat-square&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-1d3326?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-1d3326?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Framer_Motion-1d3326?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
</p>

---

## The idea

Most engineering portfolios focus on visual noise. This one puts the work first.

The Kinetic Architect is an editorial single-page portfolio for research systems, applied ML work, experience, and public repositories. Its visual system is intentionally spare: warm paper and near-black ink, a restrained green accent, serif typography, fine rules, and interactions that clarify rather than compete for attention.

<p align="center">
  <img src="public/image/profile.png" alt="Amen Allah Youssef" width="220" />
</p>

> **Making language systems earn their answers.**
>
> The portfolio frames work around reliable RAG, hybrid retrieval, evaluation-first ML, and the engineering choices behind each system.

## What visitors can explore

| Area | What it communicates |
| --- | --- |
| **Hero** | Research-engineering positioning, résumé, and a direct path to selected work. |
| **Research focus** | Retrieval, model evaluation, and the current technical working set. |
| **Experience** | AI engineering, voice automation, and digital-design freelance work. |
| **Selected work** | Curated systems such as Grade Advisor, Arxiv Research Assistant, TacticsGPT, and Sentinel. |
| **GitHub ledger** | A live browser-side repository feed, curated to the strongest seven projects. |
| **Contact** | Availability for internships, SWE and AI/ML roles, freelance work, and research collaboration. |

## Architecture

```text
src root
│
├── App.tsx                     Application composition + reveal observer
├── constants.ts                Résumé-backed content and featured projects
├── index.html                  Editorial design tokens + global motion system
│
└── components/
    ├── Navigation.tsx          Responsive section navigation
    ├── Hero.tsx                Large-format positioning and primary actions
    ├── TechTicker.tsx          One-line, pause-on-hover technology rail
    ├── About.tsx               Research focus and skill vocabulary
    ├── Experience.tsx          Career and freelance-work timeline
    ├── ArchiveGrid.tsx         Featured projects + curated GitHub feed
    ├── Education.tsx           Academic background
    ├── Testimonials.tsx        Research-practice statement
    ├── Blog.tsx                Link to technical notes and repositories
    ├── Contact.tsx             EmailJS-backed contact form
    └── Footer.tsx              Social links
```

## Project system

There are two layers of project content:

1. **Featured projects** in `constants.ts` are deliberately written and curated. They give the portfolio a clear narrative rather than treating every experiment as equally important.
2. **The GitHub ledger** in `ArchiveGrid.tsx` fetches public repositories directly from the GitHub API. It filters out forks, archived repositories, and projects outside the selected set. Six repositories appear initially, with an **Open all projects** control for the final item.

This keeps the site current without turning the portfolio into an unfiltered repository dump.

## Motion and interaction

- Sections reveal as they enter the viewport.
- Project entries, timeline rows, and repository rows stage into view.
- Technology skills scroll continuously and pause on hover.
- Cards, tags, links, and calls to action use subtle transform and color feedback.
- `prefers-reduced-motion` disables nonessential movement.

## Run locally

Requires Node.js 20 or newer.

```bash
git clone https://github.com/Youssefamenallah23/kinetic-architect.git
cd kinetic-architect
npm install
npm run dev
```

Open `http://localhost:5173`.

## Environment

The portfolio works without environment variables. Add the following to `.env.local` only when enabling the contact form:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Production build

```bash
npm run build
```

## Contact

For opportunities or collaboration, reach Amen at [youssefamenallah.contact@gmail.com](mailto:youssefamenallah.contact@gmail.com) or [LinkedIn](https://www.linkedin.com/in/amen-allah-youssef-8685012bb/).

---

<p align="center">
  Designed and built by <a href="https://github.com/Youssefamenallah23">Amen Allah Youssef</a>.
</p>
