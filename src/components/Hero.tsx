import React from 'react';
import { ArrowDown, Mail, Terminal, FileText, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Subtle top indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 mb-6">
          <Terminal className="w-3.5 h-3.5 text-zinc-500" />
          <span>{personal.role} • {personal.location}</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1] max-w-3xl">
          {personal.headline}
        </h1>

        {/* Bio summary */}
        <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl font-normal leading-relaxed">
          {personal.shortBio}
        </p>

        {/* CTA Buttons & Resume */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm group"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border border-zinc-300 dark:border-zinc-700 bg-white/60 dark:bg-zinc-900/60 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <span>Get in Touch</span>
          </a>

          <a
            href="#about"
            className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <FileText className="w-4 h-4 text-zinc-400" />
            <span>Read Bio</span>
          </a>
        </div>

        {/* Social Links Row */}
        <div className="mt-12 pt-8 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-wrap items-center justify-between gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-5">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group"
            >
              <GithubIcon size={16} className="text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
              <span className="font-mono text-xs">GitHub</span>
            </a>

            <span className="text-zinc-300 dark:text-zinc-700">•</span>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group"
            >
              <LinkedinIcon size={16} className="text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
              <span className="font-mono text-xs">LinkedIn</span>
            </a>

            <span className="text-zinc-300 dark:text-zinc-700">•</span>

            <a
              href={personal.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group"
            >
              <TwitterIcon size={16} className="text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
              <span className="font-mono text-xs">X / Twitter</span>
            </a>

            <span className="text-zinc-300 dark:text-zinc-700">•</span>

            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group"
            >
              <Mail className="w-4 h-4 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
              <span className="font-mono text-xs">{personal.email}</span>
            </a>
          </div>

          <a
            href="#about"
            aria-label="Scroll down"
            className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
          >
            <span>Scroll</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
