import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code, Database, Cloud, CheckSquare } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categoryIcons: Record<string, React.ReactNode> = {
    'Frontend Architecture': <Code className="w-4 h-4" />,
    'Backend & Systems': <Database className="w-4 h-4" />,
    'Cloud, DevOps & Tooling': <Cloud className="w-4 h-4" />,
    'Engineering Principles': <CheckSquare className="w-4 h-4" />
  };

  const categories = ['All', ...skills.map(s => s.category)];

  const displayedSkills = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs font-semibold tracking-wider text-zinc-500 uppercase">
            02 / Capabilities & Stack
          </span>
          <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-grow" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Technical Stack & Tooling
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
              Modern languages, frameworks, and engineering methodologies I leverage to design robust, production-grade applications.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          {displayedSkills.map((cat) => (
            <div key={cat.category} className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {categoryIcons[cat.category] || <Code className="w-4 h-4" />}
                <span>{cat.category}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-between"
                  >
                    <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                      {item.name}
                    </span>
                    <span className="mt-2 text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
