'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { site } from '@/config/site';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-content px-6 pb-20 pt-16 sm:pt-24">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p variants={item} className="font-mono text-sm text-[var(--text-muted)]">
          <span className="text-[var(--accent-2)]">$</span> whoami
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-3 text-4xl font-medium leading-tight text-[var(--text)] sm:text-5xl"
        >
          {site.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 max-w-xl text-xl leading-snug text-[var(--text)] sm:text-2xl"
        >
          {site.hero.tagline}
        </motion.p>

        <motion.p variants={item} className="mt-5 max-w-lg text-base text-[var(--text-muted)]">
          {site.hero.subtext}
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded bg-[var(--accent)] px-5 py-2.5 font-mono text-sm font-medium text-[var(--bg)] transition-transform hover:-translate-y-0.5"
          >
            View my work
          </a>
          <a
            href={`mailto:${site.contact.email}`}
            className="flex items-center gap-2 rounded border border-[var(--border)] px-5 py-2.5 font-mono text-sm text-[var(--text)] transition-colors hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]"
          >
            <Mail size={15} />
            Get in touch
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap gap-x-4 gap-y-2 border-t border-[var(--border)] pt-6 font-mono text-xs text-[var(--text-muted)]"
        >
          {site.hero.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
