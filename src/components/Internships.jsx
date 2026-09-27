import React from 'react';
import { Briefcase, Calendar, Building, CheckCircle2 } from 'lucide-react';

const internships = [
  {
    role: 'Python Programming Intern',
    company: 'Beeskilled',
    period: 'Jul 2026 – Sep 2026',
    descriptions: [
      'Completed practical Python programming assignments involving programming logic, debugging, and project-based problem solving.',
      'Applied Object-Oriented Programming and structured programming concepts to strengthen code organization and software development practices.'
    ],
    certificateUrl: null
  },
  {
    role: '1M1B Green Internship',
    company: 'AICTE & Salesforce',
    period: 'Feb 2026 – Mar 2026',
    descriptions: [
      'Completed 60 hours of learning and live project work focused on developing a sustainable mindset and practical project experience.',
      'Worked on a sustainability-focused project using Tableau and full-stack development concepts.'
    ],
    certificateUrl: 'https://drive.google.com/file/d/18FiIHt-IiDgIiuta0_POY9tORZEHIdz7/view?usp=drivesdk'
  },
  {
    role: 'AI for Sustainability Virtual Internship',
    company: '1M1B & AICTE & IBM SkillsBuild',
    period: 'Dec 2025 – Jan 2026',
    descriptions: [
      'Gained practical experience in Artificial Intelligence, Responsible AI, and key sustainability concepts aligned with the UN Sustainable Development Goals.',
      'Explored Generative AI and RAG systems for real-life problem solving and impact-driven applications.'
    ],
    certificateUrl: 'https://drive.google.com/file/d/11O-UfuS8tkrJI5XyryzRdj5v7pZHJHI7/view?usp=drivesdk'
  }
];

export default function Internships() {
  return (
    <section id="experience" className="py-20 bg-slate-50 border-t border-slate-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
            PRACTICAL EXPERIENCE
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            INTERNSHIPS
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-blue-200/70 ml-4 sm:ml-8 space-y-10">
          {internships.map((item, idx) => (
            <div key={item.role + idx} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Briefcase size={14} />
              </div>

              {/* Card Container */}
              <div
                tabIndex={0}
                className="hover-card bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 mt-0.5">
                      <Building size={14} />
                      <span>{item.company}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/60">
                    <Calendar size={13} className="text-slate-500" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {item.descriptions.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>

                {item.certificateUrl && (
                  <div className="pt-2 flex justify-start">
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200/80 hover:bg-blue-600 hover:text-white transition-all"
                    >
                      Certificate →
                    </a>
                  </div>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
