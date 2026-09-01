'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    if (stored === 'light') {
      document.documentElement.classList.add('light');
      setIsLight(true);
    }
  }, []);

  function toggle() {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle('light', next);
    window.localStorage.setItem('theme', next ? 'light' : 'dark');
  }

  return (
    <button
      onClick={toggle}
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      className="flex h-8 w-8 items-center justify-center rounded border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]"
    >
      {isLight ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
