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

// YOUR EXACT SKILLS WITH COLOR ACCENTS AND LOGO URLS
const mySkills = [
  { name: 'Java 17', color: '#007396', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring Boot', color: '#6DB33F', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'Python', color: '#3776AB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', color: '#F7DF1E', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'HTML/CSS', color: '#E34F26', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'PostgreSQL', color: '#4169E1', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', color: '#47A248', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', color: '#00758F', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'OpenCV', color: '#5C3EE8', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
  { name: 'C', color: '#A8B9CC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'Docker', color: '#2496ED', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Redis', color: '#DC382D', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Kafka', color: '#00D2FF', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
  { name: 'LangChain', color: '#A855F7', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'GenAI / RAG', color: '#EC4899', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'Git/GitHub', color: '#F05032', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

export default function Home() {
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
          {/* MATCHED FONT FOR HELLO IT'S ME */}
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

          {/* UPDATED SUBTITLE LINE */}
          <p className="text-slate-400 text-base leading-relaxed max-w-xl">
            Building intelligent full-stack applications and designing intuitive user interfaces.
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

        {/* LARGER PROFILE IMAGE CONTAINER */}
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
          <p className="text-slate-300 text-base leading-relaxed">
            I am a dedicated Full Stack Software Engineer focused on building robust backend microservices, high-performance web applications, and intelligent GenAI integrations. I strive to build clean, intuitive user experiences backed by scalable systems architecture.
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            By combining modern frontend designs with resilient systems, I bridge the gap between core software development and advanced AI pipelines to deliver complete, production-ready solutions as a GenAI Developer.
          </p>
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
              className="group bg-slate-900/80 border border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:border-cyan-500/50 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 mb-2">
                  {project.name}
                </h3>
                <p className="text-slate-300 font-medium text-sm mb-4">{project.tagline}</p>
                <ul className="space-y-2 mb-6 text-slate-400 text-sm list-disc list-inside">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 rounded-lg border border-cyan-500/40 text-cyan-400 text-center font-semibold text-sm hover:bg-cyan-500 hover:text-slate-950 transition-all"
              >
                View Repository →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS SECTION - HONEYCOMB HEXAGON LAYOUT WITH BRAND ICONS */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-800/80">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-2 rounded-full" />
        </div>

        {/* HONEYCOMB FLEX GRID */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 max-w-3xl mx-auto">
          {mySkills.map((skill, index) => (
            <div
              key={index}
              className="hexagon-card w-28 h-32 md:w-32 md:h-36 bg-[#0e131f] border border-slate-700/60 flex flex-col items-center justify-center p-3 cursor-pointer relative group"
              style={{ '--glow-color': skill.color }}
            >
              <div className="flex flex-col items-center justify-center gap-2 z-10">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-8 h-8 md:w-10 md:h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 text-center tracking-tight">
                  {skill.name}
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
