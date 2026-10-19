import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const { timeline } = portfolioData;
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education'>('all');

  const filteredItems = activeTab === 'all'
    ? timeline
    : timeline.filter(item => item.type === activeTab);

  return (
    <section id="experience" className="py-20 md:py-28 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs font-semibold tracking-wider text-zinc-500 uppercase">
            04 / Trajectory
          </span>
          <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-grow" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Experience & Academic Journey
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
              A chronological overview of my professional engineering background, core deliverables, and educational foundations.
            </p>
          </div>

          {/* Filter Tab buttons */}
          <div className="flex gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'experience'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Roles</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'education'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Minimalist Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-zinc-200 dark:border-zinc-800 space-y-12">
          {filteredItems.map((item) => {
            const isEdu = item.type === 'education';
            return (
              <div key={item.id} className="relative group">
                {/* Node point */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-[#0a0a0a] bg-zinc-400 dark:bg-zinc-600 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100 transition-colors" />

                {/* Card Container */}
                <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/40 p-6 sm:p-7 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                  {/* Top Bar with Period & Type */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>

                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/60 uppercase">
                      {isEdu ? 'Degree' : 'Full-Time'}
                    </span>
                  </div>

                  {/* Role and Company */}
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    <span>{item.company}</span>
                    <span className="text-zinc-300 dark:text-zinc-700">•</span>
                    <span className="inline-flex items-center gap-1 text-zinc-500 dark:text-zinc-400 text-xs font-normal">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet achievements */}
                  {item.achievements && item.achievements.length > 0 && (
                    <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {item.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-zinc-400 dark:text-zinc-500 mt-0.5 flex-shrink-0" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technologies tag row */}
                  {item.technologies && (
                    <div className="mt-5 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-wrap gap-1.5">
                      {item.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
