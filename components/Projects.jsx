import { site } from '@/config/site';

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
          Project <span className="text-cyan-400">Gallery</span>
        </h2>
        <div className="w-16 h-1 bg-cyan-400 mx-auto mt-2 rounded-full" />
      </div>

      {/* 2-Column Responsive Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {site.projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-slate-900/80 border border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] flex flex-col justify-between"
          >
            <div>
              {/* Header: Project Name & Status Badge */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>
                {project.status && (
                  <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono">
                    ● {project.status}
                  </span>
                )}
              </div>

              {/* Tagline */}
              <p className="text-slate-300 font-medium text-sm mb-4">
                {project.tagline}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-2 mb-6 text-slate-400 text-xs md:text-sm leading-relaxed list-disc list-inside">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx} className="line-clamp-3">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills & Action Button */}
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full py-2.5 rounded-lg border border-cyan-500/40 text-cyan-400 font-semibold text-sm hover:bg-cyan-500 hover:text-slate-950 transition-all duration-200"
              >
                {project.repoLabel || 'View Repository'} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
