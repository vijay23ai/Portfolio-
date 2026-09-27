import React from 'react';
import { GraduationCap, BookOpen, Target, Building2, Calendar } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white border-y border-slate-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
            ABOUT ME
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            ENGINEERING IDEAS INTO INTELLIGENCE.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Bio Content Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80 text-slate-800">
              I'm a Computer Science undergraduate at DRK College of Engineering and Technology, focused on building practical AI applications rather than only studying theory — from smart-farming systems combining machine learning, computer vision, and LLMs to full-stack applications.
            </p>
            <p className="p-5 rounded-2xl border border-slate-200/60 text-slate-700">
              My work focuses on turning models, APIs, and data into usable applications. I'm particularly interested in machine learning, Generative AI, LLM applications, computer vision, and AI-powered software development.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div tabIndex={0} className="hover-card p-4 rounded-xl bg-blue-50/50 border border-blue-100 flex items-center gap-3">
                <div className="p-2.5 bg-blue-600 text-white rounded-lg">
                  <Target size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Approach</div>
                  <div className="text-sm font-bold text-slate-900">Practical AI Builder</div>
                </div>
              </div>

              <div tabIndex={0} className="hover-card p-4 rounded-xl bg-indigo-50/50 border border-indigo-100 flex items-center gap-3">
                <div className="p-2.5 bg-indigo-600 text-white rounded-lg">
                  <BookOpen size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Domain</div>
                  <div className="text-sm font-bold text-slate-900">CS & AI Engineering</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Information Card */}
          <div className="lg:col-span-5">
            <div tabIndex={0} className="hover-card bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800 space-y-6 relative overflow-hidden">
              
              {/* Subtle background glow inside card */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h3 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                  <GraduationCap className="text-blue-400" size={22} />
                  Academic Profile
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Undergraduate
                </span>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-xs text-slate-400 font-medium mb-1">Degree</div>
                  <div className="font-semibold text-slate-100 text-base">B.Tech — Computer Science & Engineering</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-slate-400 font-medium mb-1">University</div>
                    <div className="font-semibold text-slate-200">JNTUH</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium mb-1">Graduation</div>
                    <div className="font-semibold text-slate-200 flex items-center gap-1">
                      <Calendar size={14} className="text-blue-400"/> 2027
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-400 font-medium mb-1">College</div>
                  <div className="font-semibold text-slate-200 flex items-start gap-1.5">
                    <Building2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                    <span>DRK College of Engineering and Technology</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-800">
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80">
                    <div className="text-xs text-slate-400 font-medium">CGPA</div>
                    <div className="text-xl font-extrabold text-blue-400">8.14 <span className="text-xs text-slate-400 font-normal">/ 10</span></div>
                  </div>

                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80">
                    <div className="text-xs text-slate-400 font-medium">Focus</div>
                    <div className="text-xs font-bold text-slate-100 mt-1">AI / ML · Generative AI</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
