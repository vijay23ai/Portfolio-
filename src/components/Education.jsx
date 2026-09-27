import React from 'react';
import { GraduationCap, Calendar, Building2 } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech — Computer Science and Engineering',
    institution: 'DRK College of Engineering and Technology',
    board: 'JNTUH',
    year: '2027',
    scoreLabel: 'CGPA',
    score: '8.14 / 10'
  },
  {
    degree: 'Intermediate — MPC',
    institution: 'Sri Chaitanya Junior Kalasala',
    board: 'Telangana State Board of Intermediate Education',
    year: '2023',
    scoreLabel: 'Score',
    score: '9.24 / 10'
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Eves High School',
    board: 'Telangana Board of Secondary Education',
    year: '2021',
    scoreLabel: 'CGPA',
    score: '9.0 / 10'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50 border-t border-slate-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
            ACADEMIC BACKGROUND
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            EDUCATION
          </h2>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((item) => (
            <div
              key={item.degree}
              tabIndex={0}
              className="hover-card bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <GraduationCap size={20} />
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    <Calendar size={12} className="text-slate-400" />
                    {item.year}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-blue-600 transition-colors">
                    {item.degree}
                  </h3>
                  <div className="flex items-start gap-1.5 text-xs font-semibold text-blue-600 mt-1">
                    <Building2 size={14} className="shrink-0 mt-0.5" />
                    <span>{item.institution}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    {item.board}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">{item.scoreLabel}</span>
                <span className="text-sm font-extrabold text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200/60 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200 transition-colors">
                  {item.score}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
