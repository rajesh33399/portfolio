import SectionHeader from './SectionHeader';
import { site } from '@/config/site';

export default function Skills() {
  // Mapping specific string names to their correct icons or high-res images
  const iconOverrideMap = {
    // Custom High-Res Image Asset for LangChain
    'LangChain': {
      type: 'image',
      url: 'https://githubusercontent.com',
      glow: '#1C3C3A'
    },
    
    // Explicit Devicon name configurations to prevent string-matching errors
    'Java 17': { type: 'devicon', class: 'devicon-java-plain colored' },
    'SQL': { type: 'devicon', class: 'devicon-sqldeveloper-plain colored' },
    'HTML5 / CSS3': { type: 'devicon', class: 'devicon-html5-plain colored' },
    'HTML/CSS': { type: 'devicon', class: 'devicon-css3-plain colored' },
    'Vanilla JavaScript': { type: 'devicon', class: 'devicon-javascript-plain colored' },
    'HLS.js': { type: 'devicon', class: 'devicon-html5-line colored' },
    'Apache Kafka': { type: 'devicon', class: 'devicon-apachekafka-original colored' },
    'Event-Driven Architecture': { type: 'devicon', class: 'devicon-apachekafka-original colored' },
    'AWS S3': { type: 'devicon', class: 'devicon-amazonwebservices-plain-wordmark colored' },
    'Docker / Docker Compose': { type: 'devicon', class: 'devicon-docker-plain colored' },
    'Git / GitHub': { type: 'devicon', class: 'devicon-github-original colored' }
  };

  return (
    <section id="skills" className="mx-auto max-w-content px-6 py-16">
      <SectionHeader moduleId="skills.deps" title="Skills" />
      
      {/* 2-Column Responsive Section Grid matching your overall design layout */}
      <div className="grid gap-12 sm:grid-cols-2 mt-8">
        {site.skills.map((group) => (
          <div key={group.category} className="flex flex-col gap-4">
            {/* Category Subheadings */}
            <h3 className="font-mono text-xs text-[var(--text-muted)] tracking-wider uppercase">
              {group.category}
            </h3>
            
            {/* Flexible container grid keeping hexagons in proper horizontal alignment rows */}
            <div className="flex flex-wrap gap-x-4 gap-y-6 justify-start">
              {group.items.map((item) => {
                const override = iconOverrideMap[item];
                
                // Fallback auto-generation logic for clean text keys
                const automaticClass = `devicon-${item.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}-plain colored`;

                return (
                  <div 
                    key={item} 
                    className="hexagon-card w-[110px] h-[125px] sm:w-[120px] sm:h-[135px] bg-[var(--surface)] border border-white/5 flex flex-col justify-center items-center p-2 cursor-pointer"
                  >
                    {/* Render Image (LangChain logo setup) */}
                    {override && override.type === 'image' ? (
                      <img 
                        src={override.url} 
                        alt={item} 
                        className="w-8 h-8 sm:w-9 sm:h-9 mb-2 object-contain" 
                        style={{ filter: `drop-shadow(0px 0px 6px ${override.glow})` }}
                      />
                    ) : (
                      /* Render font icon structures */
                      <i className={`${override ? override.class : automaticClass} text-2xl sm:text-3xl mb-2`}></i>
                    )}
                    
                    {/* Skill Text Labels */}
                    <span className="text-[var(--text)] text-[9px] sm:text-[10px] font-semibold text-center break-words max-w-[85%] leading-tight">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
