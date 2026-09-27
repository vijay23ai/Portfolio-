import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, ArrowDown, Cpu, Sprout, ShieldAlert, CloudSun, TrendingUp, Bot, Database } from 'lucide-react';

export default function AgriPathCaseStudyModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-md transition-opacity">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
              CASE STUDY
            </span>
            <h2 className="text-lg font-bold text-white tracking-tight">AgriPath AI — Architectural Case Study</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-10 overflow-y-auto text-slate-700">
          
          {/* Top Banner & Overview */}
          <div className="space-y-4">
            <img
              src="/agripath.jpg"
              alt="AgriPath AI Platform Preview"
              className="w-full h-56 sm:h-72 object-cover rounded-2xl border border-slate-200 shadow-sm"
            />
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div>
                <h1 className="text-2xl font-extrabold text-slate-900">AgriPath AI</h1>
                <p className="text-blue-600 font-medium text-sm">AI-Powered Smart Farming Platform</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://farm-to-field-hub.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
                >
                  Live Demo <ExternalLink size={14} />
                </a>
                <a
                  href="https://github.com/katam-viijay/farm-to-field-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold hover:bg-slate-200 transition-colors border border-slate-200"
                >
                  GitHub <Github size={14} />
                </a>
              </div>
            </div>
          </div>

          <hr className="border-slate-200" />

          {/* 01 — Problem */}
          <div className="space-y-3">
            <div className="text-xs font-extrabold text-blue-600 tracking-wider">01 — PROBLEM</div>
            <h3 className="text-lg font-bold text-slate-900">Agricultural Information & Decision Challenges</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Modern agriculture requires data-driven decision making regarding crop suitability, timely disease detection, proper fertilizer usage, weather tracking, and market prices. Without integrated, accessible AI tools, agricultural decisions are often hindered by fragmented data and delayed guidance.
            </p>
          </div>

          {/* 02 — Solution */}
          <div className="space-y-3">
            <div className="text-xs font-extrabold text-blue-600 tracking-wider">02 — SOLUTION</div>
            <h3 className="text-lg font-bold text-slate-900">Comprehensive AI-Powered Smart Farming Hub</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              AgriPath AI provides a practical unified web platform combining machine learning models, computer vision image analysis, LLM query assistance, live weather integration, market data, and database services to deliver actionable farming guidance directly to users.
            </p>
          </div>

          {/* 03 — AI Approach */}
          <div className="space-y-4">
            <div className="text-xs font-extrabold text-blue-600 tracking-wider">03 — AI APPROACH</div>
            <h3 className="text-lg font-bold text-slate-900">Machine Learning, Computer Vision & LLMs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Sprout size={16} className="text-blue-600" />
                  Crop Recommendation
                </div>
                <p className="text-xs text-slate-600">Machine learning algorithms evaluate soil and environmental inputs to recommend optimal crops.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <ShieldAlert size={16} className="text-blue-600" />
                  Plant Disease Detection
                </div>
                <p className="text-xs text-slate-600">Computer vision models (YOLO & OpenCV) analyze plant leaf imagery to identify diseases promptly.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Cpu size={16} className="text-blue-600" />
                  Fertilizer Guidance
                </div>
                <p className="text-xs text-slate-600">Predictive models calculate customized nutrient recommendations based on soil health parameters.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Bot size={16} className="text-blue-600" />
                  LLM-Assisted Agricultural Support
                </div>
                <p className="text-xs text-slate-600">LLMs and local Ollama integrations deliver interactive agricultural query assistance and context-aware responses.</p>
              </div>
            </div>
          </div>

          {/* 04 — Features */}
          <div className="space-y-4">
            <div className="text-xs font-extrabold text-blue-600 tracking-wider">04 — FEATURES</div>
            <h3 className="text-lg font-bold text-slate-900">Key Capabilities Delivered</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { name: 'Crop Recommendation', icon: Sprout },
                { name: 'Disease Detection', icon: ShieldAlert },
                { name: 'Fertilizer Guidance', icon: Cpu },
                { name: 'Weather Information', icon: CloudSun },
                { name: 'Market Information', icon: TrendingUp },
                { name: 'AI-assisted Support', icon: Bot },
              ].map((feat) => (
                <div key={feat.name} className="p-3 bg-white border border-slate-200 rounded-xl flex items-center gap-2 text-xs font-semibold text-slate-800 shadow-xs">
                  <feat.icon size={16} className="text-blue-600 shrink-0" />
                  <span>{feat.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 05 — Technology Stack */}
          <div className="space-y-4">
            <div className="text-xs font-extrabold text-blue-600 tracking-wider">05 — TECHNOLOGY STACK</div>
            <h3 className="text-lg font-bold text-slate-900">Core Technologies Utilized</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Python', 'Scikit-learn', 'YOLO', 'OpenCV', 'TensorFlow', 'PyTorch', 'Supabase', 'LLMs', 'APIs', 'Ollama'
              ].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-blue-50 text-blue-800 border border-blue-200 rounded-lg text-xs font-bold">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 06 — How It Works (Visual Architectural Flow) */}
          <div className="space-y-4">
            <div className="text-xs font-extrabold text-blue-600 tracking-wider">06 — HOW IT WORKS</div>
            <h3 className="text-lg font-bold text-slate-900">System Flow Diagram</h3>
            
            <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-center">
                
                <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700 flex flex-col items-center justify-center">
                  <span className="text-xs text-blue-400 font-mono mb-1">Step 01</span>
                  <span className="font-bold text-xs">User</span>
                </div>

                <div className="hidden md:flex items-center justify-center text-slate-500">→</div>

                <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700 flex flex-col items-center justify-center">
                  <span className="text-xs text-blue-400 font-mono mb-1">Step 02</span>
                  <span className="font-bold text-xs">Web Application</span>
                </div>

                <div className="hidden md:flex items-center justify-center text-slate-500">→</div>

                <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700 flex flex-col items-center justify-center">
                  <span className="text-xs text-blue-400 font-mono mb-1">Step 03</span>
                  <span className="font-bold text-xs">AI / Application Layer</span>
                </div>

              </div>

              <div className="flex justify-center text-slate-500 py-1">↓</div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3.5 bg-slate-800/90 rounded-xl border border-slate-700 text-center">
                  <span className="text-xs text-blue-400 font-mono block mb-1">Intelligence Layer</span>
                  <span className="font-bold text-xs">Agricultural Intelligence (ML & Vision Models)</span>
                </div>

                <div className="p-3.5 bg-slate-800/90 rounded-xl border border-slate-700 text-center">
                  <span className="text-xs text-blue-400 font-mono block mb-1">Services Layer</span>
                  <span className="font-bold text-xs">Information / API / Database Services (Supabase & LLMs)</span>
                </div>
              </div>
            </div>
          </div>

          {/* 07 — Challenges */}
          <div className="space-y-3">
            <div className="text-xs font-extrabold text-blue-600 tracking-wider">07 — CHALLENGES</div>
            <h3 className="text-lg font-bold text-slate-900">Implementation Experience</h3>
            <p className="text-slate-600 leading-relaxed text-sm bg-slate-50 p-4 rounded-xl border border-slate-200">
              Project challenges and implementation details are documented through the project development process.
            </p>
          </div>

          {/* 08 — What I Learned */}
          <div className="space-y-3">
            <div className="text-xs font-extrabold text-blue-600 tracking-wider">08 — WHAT I LEARNED</div>
            <h3 className="text-lg font-bold text-slate-900">Key Takeaways</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                <span>Integrating machine learning pipelines and computer vision models with real-time web services.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                <span>Managing database integrations with Supabase alongside local and cloud-hosted LLM endpoints.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                <span>Building practical, end-to-end user workflows for multi-capability agricultural AI applications.</span>
              </li>
            </ul>
          </div>

          {/* 09 — Links */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <div className="text-xs font-extrabold text-blue-600 tracking-wider">09 — LINKS</div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://farm-to-field-hub.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-md hover:bg-blue-700 transition-colors"
              >
                Live Demo <ExternalLink size={16} />
              </a>
              <a
                href="https://github.com/katam-viijay/farm-to-field-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm shadow-md hover:bg-slate-800 transition-colors"
              >
                GitHub Repository <Github size={16} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
