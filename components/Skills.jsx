import SectionHeader from './SectionHeader';
import { site } from '@/config/site';

export default function Skills() {
  // Mapping your site.js strings to exact Devicon/FontAwesome identifiers
  const iconMap = {
    // Languages
    'Java 17': { type: 'devicon', class: 'devicon-java-plain colored' },
    'Python': { type: 'devicon', class: 'devicon-python-plain colored' },
    'JavaScript': { type: 'devicon', class: 'devicon-javascript-plain colored' },
    'SQL': { type: 'devicon', class: 'devicon-sqldeveloper-plain colored' },
    'HTML5 / CSS3': { type: 'devicon', class: 'devicon-html5-plain colored' },

    // Backend & Architecture
    'Spring Boot': { type: 'devicon', class: 'devicon-spring-plain colored' },
    'Microservices': { type: 'emoji', icon: '🏗️' },
    'Event-Driven Architecture': { type: 'devicon', class: 'devicon-apachekafka-original colored' },
    'REST APIs': { type: 'emoji', icon: '🔌' },
    'System Design': { type: 'emoji', icon: '📐' },
    'OOP': { type: 'devicon', class: 'devicon-cplusplus-plain colored' },
    'SOLID': { type: 'emoji', icon: '💎' },
    'DSA': { type: 'emoji', icon: '📊' },

    // Frontend & Media
    'HTML/CSS': { type: 'devicon', class: 'devicon-css3-plain colored' },
    'Vanilla JavaScript': { type: 'devicon', class: 'devicon-javascript-plain colored' },
    'HLS.js': { type: 'devicon', class: 'devicon-html5-line colored' },
    'Adaptive Streaming': { type: 'emoji', icon: '🎬' },
    'FFmpeg': { type: 'emoji', icon: '🎞️' },

    // Data & Infrastructure
    'MySQL': { type: 'devicon', class: 'devicon-mysql-plain-wordmark colored' },
    'Redis': { type: 'devicon', class: 'devicon-redis-plain colored' },
    'Apache Kafka': { type: 'devicon', class: 'devicon-apachekafka-original colored' },
    'AWS S3': { type: 'devicon', class: 'devicon-amazonwebservices-plain-wordmark colored' },
    'NoSQL': { type: 'devicon', class: 'devicon-couchdb-plain colored' },
    'Docker / Docker Compose': { type: 'devicon', class: 'devicon-docker-plain colored' },

    // AI / ML
    'LangChain': { type: 'emoji', icon: '🦜🔗' },
    'RAG': { type: 'emoji', icon: '🧠' },
    'FAISS Vector Search': { type: 'emoji', icon: '🔍' },
    'Semantic Search': { type: 'emoji', icon: '🕸️' },
    'Embeddings': { type: 'emoji', icon: '🔢' },
    'OpenCV': { type: 'devicon', class: 'devicon-opencv-plain colored' },
    'Streamlit': { type: 'emoji', icon: '🎈' },

    // Tools
    'Git / GitHub': { type: 'devicon', class: 'devicon-github-original colored' },
    'Postman': { type: 'devicon', class: 'devicon-postman-plain colored' },
    'Tesseract OCR': { type: 'emoji', icon: '👁️' },
    'JUnit': { type: 'devicon', class: 'devicon-junit-plain colored' },
    'PyTest': { type: 'devicon', class: 'devicon-pytest-plain colored' }
  };

  return (
    <section id="skills" className="mx-auto max-w-content px-6 py-16">
      <SectionHeader moduleId="skills.deps" title="Skills" />
      
      <div className="grid gap-12 sm:grid-cols-2 mt-8">
        {site.skills.map((group) => (
          <div key={group.category} className="flex flex-col gap-4">
            <h3 className="font-mono text-xs text-[var(--text-muted)] tracking-wider uppercase">
              {group.category}
            </h3>
            
            <div className="flex flex-wrap gap-x-3 gap-y-6 justify-start">
              {group.items.map((item) => {
                const config = iconMap[item] || { type: 'emoji', icon: '💻' };
                
                return (
                  <div 
                    key={item} 
                    className="hexagon-card w-[105px] h-[120px] sm:w-[115px] sm:h-[130px] bg-[var(--surface)] border border-white/5 flex flex-col justify-center items-center p-2 cursor-pointer"
                  >
                    {config.type === 'devicon' ? (
                      <i className={`${config.class} text-2xl sm:text-3xl mb-2`}></i>
                    ) : (
                      <span className="text-2xl sm:text-3xl mb-1 select-none">{config.icon}</span>
                    )}
                    
                    <span className="text-[var(--text)] text-[9px] sm:text-[10px] font-semibold text-center break-words max-w-[90%] leading-tight">
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
