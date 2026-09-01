import StatusDot from './StatusDot';

export default function SectionHeader({ moduleId, title }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-muted)]">
        <StatusDot />
        <span>{moduleId}</span>
      </div>
      <h2 className="mt-2 text-2xl font-medium text-[var(--text)] sm:text-3xl">{title}</h2>
    </div>
  );
}
