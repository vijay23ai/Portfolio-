import React from 'react';
import { Mail, Phone, Linkedin, Github, Globe, ArrowRight, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-radial-gradient opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-10">
        
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase">
          <MessageSquare size={14} />
          GET IN TOUCH
        </div>

        {/* Heading */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            LET'S BUILD SOMETHING <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-300">INTELLIGENT</span>.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Open to entry-level AI Engineer and AI/ML opportunities.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {/* Let's Talk Working Mailto Button */}
          <a
            href="mailto:katamvijay01@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-lg hover:bg-blue-500 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label="Send Email to Katam Vijay"
          >
            Let's Talk
            <ArrowRight size={16} />
          </a>

          <a
            href="https://www.linkedin.com/in/vijay-katam-14853a3a0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 text-slate-100 font-semibold text-sm border border-slate-700 hover:bg-slate-700 hover:text-white transition-all"
          >
            <Linkedin size={16} className="text-blue-400" />
            LinkedIn →
          </a>

          <a
            href="https://github.com/vijay23ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 text-slate-100 font-semibold text-sm border border-slate-700 hover:bg-slate-700 hover:text-white transition-all"
          >
            <Github size={16} />
            GitHub →
          </a>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-8 max-w-4xl mx-auto text-left">
          
          {/* Email Info Card */}
          <a
            href="mailto:katamvijay01@gmail.com"
            className="p-5 rounded-2xl bg-slate-800/60 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800 transition-all flex items-center gap-4 group"
          >
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Mail size={20} />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Email</div>
              <div className="text-sm font-semibold text-slate-200 group-hover:text-white truncate">katamvijay01@gmail.com</div>
            </div>
          </a>

          {/* Phone Info Card */}
          <a
            href="tel:9154521135"
            className="p-5 rounded-2xl bg-slate-800/60 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800 transition-all flex items-center gap-4 group"
          >
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Phone size={20} />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Phone</div>
              <div className="text-sm font-semibold text-slate-200 group-hover:text-white">+91 9154521135</div>
            </div>
          </a>

          {/* Portfolio Link Card */}
          <a
            href="https://katamvijay-portfolio.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-slate-800/60 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800 transition-all flex items-center gap-4 group sm:col-span-2 lg:col-span-1"
          >
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Globe size={20} />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Portfolio</div>
              <div className="text-sm font-semibold text-slate-200 group-hover:text-white truncate">katamvijay-portfolio.lovable.app</div>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}
