import React from 'react';
import { Trophy, Award, Medal } from 'lucide-react';

const achievements = [
  {
    title: 'Winner',
    subtitle: 'SummerSaaS AI Hackathon 2026',
    organization: 'Centle Group, BITS Pilani Hyderabad Campus',
    badgeColor: 'bg-amber-500/10 text-amber-700 border-amber-200',
    icon: Trophy,
    iconColor: 'text-amber-500',
    certificateUrl: null
  },
  {
    title: 'Top 20 Finalist',
    subtitle: 'UNLEASH LLM Innovation Challenge 2026',
    organization: 'Global Innovation Program',
    badgeColor: 'bg-blue-500/10 text-blue-700 border-blue-200',
    icon: Award,
    iconColor: 'text-blue-600',
    certificateUrl: 'https://drive.google.com/file/d/1AkNtk08n8cNql_aN2-Fq37Dq3xQZMRCR/view?usp=drivesdk'
  },
  {
    title: 'Semi-Finalist',
    subtitle: 'ET-AI Hackathon 2026',
    organization: 'The Economic Times',
    badgeColor: 'bg-indigo-500/10 text-indigo-700 border-indigo-200',
    icon: Medal,
    iconColor: 'text-indigo-600',
    certificateUrl: null
  }
];

export default function Achievements() {
  return (
    <section className="py-20 bg-white border-t border-slate-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
            RECOGNITION
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            ACHIEVEMENTS
          </h2>
        </div>

        {/* Minimal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.subtitle}
                tabIndex={0}
                className="hover-card bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${item.badgeColor}`}>
                      {item.title}
                    </span>
                    <IconComp size={22} className={item.iconColor} />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {item.subtitle}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 font-medium">
                      {item.organization}
                    </p>
                  </div>
                </div>

                {item.certificateUrl && (
                  <div className="pt-2 border-t border-slate-200/60 flex justify-start">
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Certificate →
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
