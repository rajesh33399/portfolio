import SectionHeader from './SectionHeader';
import { site } from '@/config/site';

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-content px-6 py-16">
      <SectionHeader moduleId="experience.log" title="Experience" />
      <ol className="space-y-8 border-l border-[var(--border)] pl-6">
        {site.experience.map((role) => (
          <li key={role.company} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[var(--bg)] bg-[var(--accent)]" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-medium text-[var(--text)]">
                {role.title} at {role.company}
              </h3>
              <span className="font-mono text-xs text-[var(--text-muted)]">{role.period}</span>
            </div>
            <p className="font-mono text-xs text-[var(--text-muted)]">{role.location}</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--text)]">
              {role.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-muted)]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
