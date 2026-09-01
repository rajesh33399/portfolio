import SectionHeader from './SectionHeader';
import StatusDot from './StatusDot';
import { site } from '@/config/site';

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-content px-6 py-16">
      <SectionHeader moduleId="projects.registry" title="Featured work" />
      <div className="space-y-6">
        {site.projects.map((project) => (
          <article
            key={project.name}
            className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--accent-2)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-medium text-[var(--text)]">{project.name}</h3>
              <span className="flex items-center gap-2 font-mono text-xs text-[var(--text-muted)]">
                <StatusDot />
                {project.status}
              </span>
            </div>

            <p className="mt-1 text-sm text-[var(--text-muted)]">{project.tagline}</p>

            <ul className="mt-4 space-y-2 text-sm text-[var(--text)]">
              {project.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-[var(--border)] px-2 py-0.5 font-mono text-xs text-[var(--text-muted)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block font-mono text-xs text-[var(--accent-2)] hover:underline"
              >
                {project.repoLabel || 'View repository'}
              </a>
            )}
          </article>
        ))}
      </div>

      {site.achievements?.length > 0 && (
        <div className="mt-8 rounded-md border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="font-mono text-xs text-[var(--text-muted)]">achievements.log</h3>
          <ul className="mt-3 space-y-2 text-sm text-[var(--text)]">
            {site.achievements.map((line, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
