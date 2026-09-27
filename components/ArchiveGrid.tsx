import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Github, LoaderCircle } from 'lucide-react';
import { PROJECTS } from '../constants';
import { NavigationSection, Project } from '../types';

interface ArchiveGridProps { onVaultOpen: () => void; onVaultClose: () => void; }

type GitHubRepository = {
  id: number; name: string; html_url: string; description: string | null;
  language: string | null; updated_at: string; stargazers_count: number; fork: boolean; archived: boolean;
};

const githubUrl = 'https://api.github.com/users/Youssefamenallah23/repos?per_page=100&sort=updated';
const curatedRepositories = new Set(['Grade-Advisor', 'Arxiv-search', 'TacticalGPT', 'sentinel', 'titanflow', 'MindCare-AI', 'CarePulse']);

export const ArchiveGrid: React.FC<ArchiveGridProps> = () => {
  const [repositories, setRepositories] = useState<GitHubRepository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(githubUrl, { signal: controller.signal, headers: { Accept: 'application/vnd.github+json' } })
      .then(response => response.ok ? response.json() : Promise.reject(new Error('GitHub unavailable')))
      .then((data: GitHubRepository[]) => setRepositories(data.filter(repo => !repo.fork && !repo.archived && curatedRepositories.has(repo.name))))
      .catch(() => setRepositories([]))
      .finally(() => setIsLoading(false));
    return () => controller.abort();
  }, []);

  return (
    <section id={NavigationSection.WORK} className="section-shell border-t border-[var(--color-rule)]">
      <div className="page-width">
        <header className="section-heading">
          <p className="eyebrow">Selected work / 01</p>
          <h2>Research systems, <em>built to be measured.</em></h2>
          <p>Current work in retrieval, evaluation, and applied machine learning.</p>
        </header>

        <div className="featured-grid">
          {PROJECTS.map(project => <FeaturedProject key={project.id} project={project} />)}
        </div>

        <div className="repo-ledger" aria-live="polite">
          <div className="repo-ledger__heading">
            <div>
              <p className="eyebrow">Live repository ledger</p>
              <h3>Selected GitHub projects</h3>
            </div>
            <a href="https://github.com/Youssefamenallah23?tab=repositories" target="_blank" rel="noreferrer" className="text-link">View profile <ArrowUpRight size={16} /></a>
          </div>
          {isLoading ? <p className="repo-state"><LoaderCircle size={15} className="spin" /> Loading public repositories…</p> : repositories.length > 0 ? (
            <div className="repo-list">
              {repositories.slice(0, showAllProjects ? 7 : 6).map(repo => <RepositoryRow key={repo.id} repo={repo} />)}
            </div>
          ) : <p className="repo-state">GitHub is temporarily unavailable. Visit the profile to see the latest work.</p>}
          {!isLoading && repositories.length > 6 && <button className="button-solid repo-toggle" onClick={() => setShowAllProjects(value => !value)}>{showAllProjects ? 'Show fewer projects' : 'Open all projects'} <ArrowUpRight size={16} /></button>}
        </div>
      </div>
    </section>
  );
};

const FeaturedProject = ({ project }: { project: Project }) => (
  <article className="project-entry">
    <div className="project-entry__meta"><span>{project.year}</span><span>{project.category}</span></div>
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div className="project-entry__footer">
      <span>{project.metrics}</span>
      <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}><ArrowUpRight size={19} /></a>
    </div>
  </article>
);

const RepositoryRow = ({ repo }: { repo: GitHubRepository }) => (
  <a className="repo-row" href={repo.html_url} target="_blank" rel="noreferrer">
    <Github size={17} aria-hidden="true" />
    <div><strong>{repo.name}</strong><span>{repo.description || 'Public repository'}</span></div>
    <span className="repo-row__language">{repo.language || 'Code'}</span>
    <span className="repo-row__date">Updated {new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(new Date(repo.updated_at))}</span>
    <ArrowUpRight size={16} aria-hidden="true" />
  </a>
);
