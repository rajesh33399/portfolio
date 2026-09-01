import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

// ... inside your Home component ...

{/* HERO SECTION */}
<section className="min-h-[85vh] flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-16 px-6 max-w-6xl mx-auto">
  <div className="flex-1 space-y-6 text-left">
    <h3 className="text-cyan-400 text-sm md:text-base font-semibold tracking-widest uppercase">
      Hello, It&apos;s Me
    </h3>
    
    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-4">
      Rajesh Botla
    </h1>

    <div className="text-xl md:text-3xl font-semibold text-slate-200 h-10 flex items-center gap-2">
      <span>And I&apos;m a</span>
      <TypewriterEffect 
        words={[
          'Full Stack Software Engineer',
          'GenAI Developer'
        ]} 
      />
    </div>

    <p className="text-slate-400 text-base leading-relaxed max-w-xl">
      Building intelligent full-stack applications and designing intuitive user interfaces.
    </p>

    {/* SOCIAL ICONS - MATCHING FRIEND'S STYLE (LINKEDIN & GITHUB ONLY) */}
    <div className="flex items-center gap-4 pt-2">
      <a
        href={site.contact.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn Profile"
        className="w-10 h-10 rounded-full border border-cyan-400/60 text-cyan-400 flex items-center justify-center transition-all duration-300 hover:bg-cyan-400 hover:text-slate-950 hover:scale-110 shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:shadow-[0_0_15px_rgba(6,182,212,0.8)]"
      >
        <FaLinkedinIn className="text-lg" />
      </a>
      <a
        href={site.contact.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub Profile"
        className="w-10 h-10 rounded-full border border-cyan-400/60 text-cyan-400 flex items-center justify-center transition-all duration-300 hover:bg-cyan-400 hover:text-slate-950 hover:scale-110 shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:shadow-[0_0_15px_rgba(6,182,212,0.8)]"
      >
        <FaGithub className="text-lg" />
      </a>
    </div>

    {/* ACTION BUTTONS */}
    <div className="flex flex-wrap gap-4 pt-2">
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]"
      >
        Resume
      </a>
      <a
        href="#projects"
        className="px-6 py-3 rounded-full border border-cyan-500/50 hover:border-cyan-400 text-cyan-400 font-semibold transition-all hover:bg-cyan-500/10"
      >
        View My Work
      </a>
    </div>
  </div>

  <div className="relative flex justify-center items-center">
    <div className="absolute w-80 h-80 md:w-[26rem] md:h-[26rem] bg-cyan-500/20 rounded-full blur-3xl pointer-events-none -z-10" />
    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-b from-cyan-400 to-slate-800 shadow-[0_0_35px_rgba(6,182,212,0.4)] overflow-hidden flex items-center justify-center">
      <img
        src="/profile.jpg"
        alt="Rajesh Botla"
        className="rounded-full object-cover w-full h-full"
      />
    </div>
  </div>
</section>
