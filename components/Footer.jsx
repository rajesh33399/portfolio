export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-8">
      <div className="mx-auto flex max-w-content flex-col gap-2 font-mono text-xs text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Rajesh Botla</span>
        <span>Built with Next.js and Tailwind CSS</span>
      </div>
    </footer>
  );
}
