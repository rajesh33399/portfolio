import Image from 'next/image';
import { site } from '@/config/site';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-12 px-6 max-w-6xl mx-auto">
      {/* Left Column: Bio & Intro */}
      <div className="flex-1 space-y-6 text-left">
        <h3 className="text-cyan-400 text-lg font-mono tracking-wide">Hello, It&apos;s Me</h3>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          {site.name}
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-slate-300">
          I build <span className="text-cyan-400">scalable backend systems</span> & <span className="text-cyan-400">applied AI pipelines</span>.
        </h2>
        <p className="text-slate-400 text-base leading-relaxed max-w-xl">
          {site.hero.subtext}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href={site.contact.resume}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-cyan-500/50 hover:border-cyan-400 text-cyan-400 font-semibold transition-all hover:bg-cyan-500/10"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Right Column: Profile Picture with Glow Effect */}
      <div className="relative flex justify-center items-center">
        {/* Neon Cyan Radial Glow Behind Image */}
        <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Circular Profile Image Container */}
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-b from-cyan-400 to-slate-800 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
          <Image
            src="/profile.jpg"
            alt={site.name}
            width={300}
            height={300}
            priority
            className="rounded-full object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
