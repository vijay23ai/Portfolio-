import React from 'react';
import { Github, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export default function ProjectCard({
  title,
  subtitle,
  description,
  technologies,
  imageSrc,
  liveDemoUrl,
  githubUrl,
  badgeText,
  onReadCaseStudy
}) {
  return (
    <div tabIndex={0} className="hover-card bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col h-full group">
      
      {/* Project Image Container */}
      <div className="relative overflow-hidden aspect-[16/10] bg-slate-100 border-b border-slate-100">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
        />
        {badgeText && (
          <div className="absolute bottom-3 right-3 z-10">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-extrabold bg-slate-900/90 text-white backdrop-blur-md border border-slate-700/80 shadow-md uppercase tracking-wider">
              <Sparkles size={11} className="text-blue-400" />
              {badgeText}
            </span>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-5">
        
        {/* Upper Content */}
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
              {title}
            </h3>
            <p className="text-xs font-semibold text-blue-600 mt-0.5">
              {subtitle}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Lower Content Pinned with mt-auto */}
        <div className="mt-auto pt-4 space-y-4 border-t border-slate-100">
          
          {/* Tech Chips */}
          <div className="flex flex-wrap gap-1.5 min-h-[56px] items-start">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200/60 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links aligned perfectly at bottom */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-100/80">
            <div className="flex items-center gap-2">
              {liveDemoUrl && (
                <a
                  href={liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition-colors shadow-xs"
                >
                  Live Demo <ArrowRight size={12} />
                </a>
              )}

              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 font-semibold text-xs hover:bg-slate-200 transition-colors border border-slate-200"
                >
                  GitHub <Github size={12} />
                </a>
              )}
            </div>

            {onReadCaseStudy && (
              <button
                onClick={onReadCaseStudy}
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors py-1"
              >
                <BookOpen size={13} />
                Case Study →
              </button>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
