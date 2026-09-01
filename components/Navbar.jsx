'use client';

import ThemeToggle from './ThemeToggle';
import StatusDot from './StatusDot';

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm text-[var(--text)]">
          rajesh<span className="text-[var(--accent)]">.</span>botla
        </a>

        <nav className="hidden gap-6 font-mono text-sm text-[var(--text-muted)] md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[var(--text)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1 font-mono text-xs text-[var(--text-muted)] sm:flex">
            <StatusDot />
            open to opportunities
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
