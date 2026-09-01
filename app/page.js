'use client';

import React, { useState, useEffect } from 'react';
import { site } from '@/config/site';

// Backspacing Typewriter Component
function TypewriterEffect({ words, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 1500 }) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => prev + 1);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="text-cyan-400 font-bold border-r-2 border-cyan-400 pr-1 animate-pulse">
      {text}
    </span>
  );
}

// Brand color mapping for YOUR skills
const skillColorMap = {
  Java: '#007396',
  'Spring Boot': '#6DB33F',
  Python: '#3776AB',
  React: '#61DAFB',
  'Next.js': '#FFFFFF',
  'Tailwind CSS': '#06B6D4',
  PostgreSQL: '#4169E1',
  MongoDB: '#47A248',
  Docker: '#2496ED',
  Git: '#F05032',
  'GenAI / RAG': '#A855F7',
  PyTorch: '#EE4C2C',
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  Kafka: '#231F20',
  Redis: '#DC382D',
  FastAPI: '#009688',
  OpenAI: '#10A37F',
  LangChain: '#121212',
  C: '#A8B9CC',
};

export default function Home() {
  // Pull your skills directly from site.js
  const mySkillsList = site.skills
    ? site.skills.flatMap((group) => group.items)
    : [
        'Java', 'Spring Boot', 'Python', 'React', 'Next.js', 'Tailwind CSS',
        'PostgreSQL', 'MongoDB', 'Docker', 'Git', 'GenAI / RAG', 'PyTorch',
        'Kafka', 'Redis', 'FastAPI'
      ];

  return (
    <main className="min-h-screen bg-[#070a13] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* HEADER NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#070a13]/80 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-extrabold tracking-wider text-white">
            RB<span className="text-cyan-400">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="min-h-[85vh] flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-16 px-6 max-w-6xl mx-auto">
        <div className="flex-1 space-y-6 text-left">
          <h3 className="text-cyan-400 text-sm md:text-base font-mono tracking-widest uppercase">
            Hello, It&apos;s Me
          </h3>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-4">
            Rajesh Botla
          </h1>

          {/* TYPEWRITER ROLE */}
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
            I build scalable full-stack applications and intelligent AI platforms.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
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

        {/* PROFILE IMAGE */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-b from-cyan-400 to-slate-800 shadow-[0_0_30px_rgba(6,182,212,0.4)] overflow-hidden flex items-center justify-center">
            <img
              src="/profile.jpg"
              alt="Rajesh Botla"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-2 rounded-full" />
        </div>
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-10 text-center space-y-6 text-slate-300 leading-relaxed max-w-3xl mx-auto shadow-lg">
          <h3 className="text-2xl font-bold text-white">Passionate Software Engineer</h3>
          <p className="text-slate-400 text-base leading-relaxed">
            I am a quick-minded computer science enthusiast. I am deeply interested in web development and full-stack software architecture, building beautiful, responsive user interfaces backed by scalable systems.
          </p>
          <div>
            <a
              href="#projects"
              className="inline-block px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section id="projects" className="py-16 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
            Project <span className="text-cyan-400">Gallery</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {site.projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900/80 border border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] flex flex-col justify-between"
            >
              <div>
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
                <p className="text-slate-300 font-medium text-sm mb-4">{project.tagline}</p>
                <ul className="space-y-2 mb-6 text-slate-400 text-xs md:text-sm leading-relaxed list-disc list-inside">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>

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
                  {project.repoLabel || 'View Project'} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS SECTION - EXACT UDAYA DIAMOND GRID FOR YOUR SKILLS */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-800/80">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-2 rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto items-center">
          {mySkillsList.map((skillName, index) => (
            <div
              key={index}
              className="diamond-card w-24 h-24 sm:w-28 sm:h-28 bg-[#12171f] border border-slate-700/80 flex flex-col items-center justify-center p-2 cursor-pointer relative group"
            >
              <div className="flex flex-col items-center justify-center gap-1 z-10">
                <span 
                  className="text-lg sm:text-xl font-bold transition-transform duration-300 group-hover:scale-125"
                  style={{ color: skillColorMap[skillName] || '#06B6D4' }}
                >
                  ◆
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-slate-200 group-hover:text-cyan-300 text-center tracking-tight px-1">
                  {skillName}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 px-6 max-w-4xl mx-auto border-t border-slate-800/80 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight mb-2">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-cyan-400 mx-auto mb-6 rounded-full" />
        <p className="text-slate-400 max-w-xl mx-auto mb-8">{site.contact.blurb}</p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${site.contact.email}`}
            className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            {site.contact.email}
          </a>
          <a
            href={site.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-semibold transition-all"
          >
            LinkedIn
          </a>
          <a
            href={site.contact.github}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-semibold transition-all"
          >
            GitHub
          </a>
        </div>
      </section>

    </main>
  );
}
