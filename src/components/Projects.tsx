import React, { useState } from 'react';
import { portfolioData, type Project } from '../data/portfolioData';
import { ExternalLink, ArrowRight, Sparkles, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Systems / Cloud', 'Frontend', 'AI & Tools', 'Full-Stack'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs font-semibold tracking-wider text-zinc-500 uppercase">
            03 / Selected Works
          </span>
          <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-grow" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Featured Engineering Projects
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
              Production-focused applications emphasizing low latency, clean system architecture, and delightful user ergonomics.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xs p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 shadow-xs"
            >
              <div>
                {/* Header meta */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-medium">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                      <Sparkles className="w-3 h-3 text-amber-500" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Metric Callout */}
                <div className="mt-4 p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/60 dark:border-zinc-800/60 flex items-center gap-2 text-xs font-mono text-zinc-700 dark:text-zinc-300">
                  <Cpu className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" />
                  <span className="truncate">{project.metrics}</span>
                </div>

                {/* Tech tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="px-1.5 py-0.5 text-[11px] font-mono text-zinc-400">
                      +{project.tags.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-5 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-800 dark:text-zinc-200 hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <GithubIcon size={16} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit live deployment for ${project.title}`}
                    className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
