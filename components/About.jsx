import SectionHeader from './SectionHeader';
import { site } from '@/config/site';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-16">
      <SectionHeader moduleId="about.service" title="About" />
      <div className="max-w-2xl space-y-4 text-[15px] leading-relaxed text-[var(--text)]">
        {site.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
