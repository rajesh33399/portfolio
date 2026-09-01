'use client';

import React from 'react';
import { site } from '@/config/site';

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

      {/* HERO SECTION WITH TYPEWRITER */}
      <section className="min-h-[85vh] flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-16 px-6 max-w-6xl mx-auto">
        <div className="flex-1 space-y-6 text-left">
          <h3 className="text-cyan-400 text-sm md:text-base font-mono tracking-widest uppercase">
            Hello, It&apos;s Me
          </h3>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Rajesh Botla
          </h1>

          {/* DYNAMIC TYPEWRITER TEXT FROM CSS */}
          <div className="text-xl md:text-2xl font-semibold text-slate-200">
            <span>And I&apos;m a </span>
            <span className="typewriter-text text-cyan-400 font-bold">
              Software Engineer & GenAI Developer
            </span>
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

        {/* PROFILE IMAGE WITH GLOW */}
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

      {/* ABOUT SECTION (Clean focus without college/location) */}
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
            I am a dedicated software engineer focused on building robust backend microservices, high-performance web applications, and intelligent GenAI integrations. I strive to build clean, intuitive user experiences backed by scalable systems architecture.
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

      {/* SKILLS SECTION (Glowing skill cards) */}
      <section id="skills" className="py-16 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            'Java', 'Spring Boot', 'Python', 'React', 'Next.js', 'Tailwind CSS',
            'PostgreSQL', 'MongoDB', 'Docker', 'Git', 'GenAI / RAG', 'PyTorch'
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 flex flex-col items-center justify-center gap-2 group cursor-default"
            >
              <span className="text-cyan-400 font-bold group-hover:scale-125 transition-transform duration-300">
                ◆
              </span>
              <span className="text-sm font-semibold text-slate-200 group-hover:text-white">
                {skill}
              </span>
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
