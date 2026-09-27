import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-slate-50 via-blue-50/20 to-white">
      {/* Very faint background grid for subtle texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center">
          
          {/* Left Column Content (~58% desktop width) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* 1. Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block shrink-0" />
              Available for opportunities
            </div>

            {/* 2. Role Line */}
            <div className="text-sm sm:text-base font-semibold text-blue-600 tracking-wide">
              AI Engineer &nbsp;•&nbsp; Machine Learning &nbsp;•&nbsp; Generative AI
            </div>

            {/* 3. Main Headline (Sentence case reference style) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              I build <span className="text-blue-600">AI</span> systems that solve <span className="text-blue-600">real problems</span>.
            </h1>

            {/* 4. Role Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium shadow-xs">
                AI Engineer
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium shadow-xs">
                Machine Learning Engineer
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium shadow-xs">
                Generative AI Engineer
              </span>
            </div>

            {/* 5. Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Computer Science undergraduate building practical AI applications with Python, machine learning, Generative AI, LLMs, computer vision, and APIs.
            </p>

            {/* 6. Three Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {/* Primary Button */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-md hover:bg-blue-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                View Projects
                <ArrowRight size={16} />
              </a>

              {/* Secondary Button */}
              <a
                href="/Katam_Vijay_AI_Engineer_Resume.pdf"
                download="Katam_Vijay_AI_Engineer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-white border border-slate-300 text-slate-700 font-semibold text-sm shadow-xs hover:bg-slate-50 hover:border-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Download Resume
                <ArrowDown size={16} className="text-slate-500" />
              </a>

              {/* Third Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm shadow-xs hover:bg-slate-100 transition-all"
              >
                Contact Me
                <ArrowRight size={16} className="text-slate-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Clean Circular Real Profile Photo (~42% desktop width) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end pt-6 lg:pt-0">
            <div className="relative">
              
              {/* Soft subtle background gradient glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200/40 via-indigo-100/30 to-sky-100/40 rounded-full blur-2xl opacity-60 pointer-events-none" />

              {/* Clean Circular Frame Container */}
              <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 bg-white border border-slate-200/80 shadow-xl ring-1 ring-blue-100">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 border-2 border-slate-100">
                  <img
                    src="/profile.jpg"
                    alt="Katam Vijay — AI Engineer"
                    className="w-full h-full object-cover object-top scale-[1.18]"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
