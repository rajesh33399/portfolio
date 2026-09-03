import SectionHeader from './SectionHeader';
import { site } from '@/config/site';

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-content px-6 py-16">
      <SectionHeader moduleId="skills.deps" title="Skills" />
      <div className="grid gap-6 sm:grid-cols-2">
        {site.skills.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-xs text-[var(--text-muted)]">{group.category}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-sm text-[var(--text)] transition-colors hover:border-[var(--accent)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
