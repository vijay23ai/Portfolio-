import React, { useState } from 'react';
import { ExternalLink, Github, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import AgriPathCaseStudyModal from './AgriPathCaseStudyModal';

export default function FeaturedProject() {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);

  return (
    <div className="mb-16">
      {/* Container with premium visual treatment */}
      <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
        
        {/* Subtle accent border top */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500" />

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Graphic Image */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative group overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                <img
                  src="/agripath.jpg"
                  alt="AgriPath AI — AI-Powered Smart Farming Platform"
                  className="w-full h-64 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 text-white backdrop-blur-md text-xs font-bold uppercase tracking-wider border border-slate-700/80 shadow-md">
                    <Sparkles size={13} className="text-blue-400" />
                    FEATURED PROJECT
                  </span>
                </div>
              </div>
            </div>

            {/* Right Details Column */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    AgriPath AI
                  </h3>
                  <p className="text-base font-semibold text-blue-600 mt-0.5">
                    AI-Powered Smart Farming Platform
                  </p>
                </div>

                <div className="space-y-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Built an AI-powered smart farming platform supporting crop recommendation, plant disease detection, fertilizer guidance, weather information, market information, and AI-assisted agricultural support.
                  </p>
                  <p className="text-slate-500 text-xs sm:text-sm">
                    Integrated machine learning models, computer vision, LLM services, APIs, and database services to deliver practical smart-farming capabilities.
                  </p>
                </div>
              </div>

              {/* Technologies chips */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Technologies</div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Python', 'Scikit-learn', 'YOLO', 'OpenCV', 'TensorFlow', 'PyTorch', 'Supabase', 'LLMs', 'APIs', 'Ollama'
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://farm-to-field-hub.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs sm:text-sm shadow-md hover:bg-blue-700 transition-colors"
                >
                  Live Demo
                  <ArrowRight size={15} />
                </a>

                <a
                  href="https://github.com/katam-viijay/farm-to-field-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50 hover:border-slate-400 transition-colors"
                >
                  GitHub
                  <Github size={15} />
                </a>

                <button
                  onClick={() => setCaseStudyOpen(true)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-semibold text-xs sm:text-sm transition-colors border border-transparent hover:border-blue-100"
                >
                  <BookOpen size={15} className="text-blue-600" />
                  Read Case Study →
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Case Study Modal Trigger */}
      <AgriPathCaseStudyModal
        isOpen={caseStudyOpen}
        onClose={() => setCaseStudyOpen(false)}
      />
    </div>
  );
}
