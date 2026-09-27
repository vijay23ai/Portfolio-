import React from 'react';
import { Users, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Leadership() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
            COMMUNITY & INITIATIVES
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            LEADERSHIP
          </h2>
        </div>

        {/* Leadership Card */}
        <div
          tabIndex={0}
          className="hover-card bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6 group"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  AWS Student Builder Campus Leader (SBCL)
                </h3>
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 mt-0.5">
                  <ShieldCheck size={14} />
                  <span>Amazon Web Services</span>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200/60">
              <Calendar size={13} className="text-slate-500" />
              <span>Sep 2026 – Present</span>
            </div>
          </div>

          <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                Led student engagement around AWS learning opportunities and Builder Center activities through technical community outreach.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                Facilitated student participation in AWS resources, learning initiatives, and community programs.
              </span>
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}
