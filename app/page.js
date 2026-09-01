'use client';

import React from 'react';
import { site } from '@/config/site';

export default function Home() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="min-h-[85vh] flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-16 px-6 max-w-6xl mx-auto">
        <div className="flex-1 space-y-6 text-left">
          <h3 className="text-cyan-400 text-sm md:text-base font-mono tracking-widest uppercase">
            Hello, I&apos;m Rajesh Botla
          </h3>
          
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            Software Engineer <br />
            <span className="text-cyan-400">&</span> GenAI Developer
          </h1>

          <p className="text-slate-300 text-lg font-medium leading-relaxed max-w-xl">
            I build scalable full-stack applications and intelligent AI platforms.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              View Resume ↗
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-cyan-500/50 hover:border-cyan-400 text-cyan-400 font-semibold transition-all hover:bg-cyan-500/10"
            >
              Get In Touch
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
    </main>
  );
}
