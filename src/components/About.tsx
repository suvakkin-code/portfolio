import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  const principles = [
    {
      icon: Zap,
      title: "Performance First",
      desc: "Zero-bloat dependencies, sub-second load times, and lean bundle architectures."
    },
    {
      icon: Layers,
      title: "Modular Simplicity",
      desc: "Composable components, clear separation of concerns, and clean APIs."
    },
    {
      icon: ShieldCheck,
      title: "Resilient & Typed",
      desc: "Strict TypeScript, automated testing, and comprehensive error boundaries."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs font-semibold tracking-wider text-zinc-500 uppercase">
            01 / About Me
          </span>
          <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-grow" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Crafting software where elegance meets technical rigor.
            </h2>
            
            {personal.aboutParagraphs.map((para, index) => (
              <p
                key={index}
                className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed"
              >
                {para}
              </p>
            ))}

            {/* Quick Principles */}
            <div className="pt-6 space-y-4">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500">
                Core Engineering Tenets
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {principles.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/40 text-left"
                    >
                      <Icon className="w-5 h-5 text-zinc-700 dark:text-zinc-300 mb-2" />
                      <div className="font-medium text-sm text-zinc-900 dark:text-zinc-100 mb-1">
                        {item.title}
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                        {item.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Stats & Highlights Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {personal.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xs text-left"
                >
                  <div className="font-mono text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Philosophy quote card */}
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/50">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-3">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Working Philosophy</span>
              </div>
              <blockquote className="text-sm italic text-zinc-700 dark:text-zinc-300 leading-relaxed">
                "Simplicity is not a lack of clutter, that's a consequence of simplicity. Simplicity somehow essentially describes the purpose and place of an object and product."
              </blockquote>
              <div className="mt-3 text-xs font-mono text-zinc-500">
                — Jonathan Ive
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
