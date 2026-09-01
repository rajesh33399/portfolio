import SectionHeader from './SectionHeader';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';
import { site } from '@/config/site';

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-content px-6 py-20">
      <SectionHeader moduleId="contact.endpoint" title="Get in touch" />
      <p className="max-w-lg text-[var(--text)]">{site.contact.blurb}</p>

      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href={`mailto:${site.contact.email}`}
          className="flex items-center gap-2 rounded bg-[var(--accent)] px-5 py-2.5 font-mono text-sm font-medium text-[var(--bg)] transition-transform hover:-translate-y-0.5"
        >
          <Mail size={15} />
          {site.contact.email}
        </a>
        <a
          href={site.contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded border border-[var(--border)] px-5 py-2.5 font-mono text-sm text-[var(--text)] transition-colors hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]"
        >
          <Linkedin size={15} />
          LinkedIn
        </a>
        <a
          href={site.contact.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded border border-[var(--border)] px-5 py-2.5 font-mono text-sm text-[var(--text)] transition-colors hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]"
        >
          <Github size={15} />
          GitHub
        </a>
        {site.contact.resume && (
          <a
            href={site.contact.resume}
            download
            className="flex items-center gap-2 rounded border border-[var(--border)] px-5 py-2.5 font-mono text-sm text-[var(--text)] transition-colors hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]"
          >
            <FileText size={15} />
            Resume
          </a>
        )}
      </div>
    </section>
  );
}
