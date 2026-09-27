import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-800 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Info */}
        <div className="text-center sm:text-left space-y-1">
          <div className="font-bold text-white text-base tracking-tight">
            KATAM VIJAY<span className="text-blue-500 font-extrabold">.</span>
          </div>
          <p className="text-xs text-slate-400">
            AI Engineer • Machine Learning • Generative AI
          </p>
        </div>

        {/* Social & Email Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/vijay-katam-14853a3a0"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="https://github.com/vijay23ai"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>

          <a
            href="mailto:katamvijay01@gmail.com"
            className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Send Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-500 text-center sm:text-right">
          © 2026 Katam Vijay. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
