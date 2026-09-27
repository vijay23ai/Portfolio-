import React from 'react';
import { Award, Building, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Agentic AI Bootcamp: Build with ADK, Deploy on Google Cloud',
    issuer: 'JNTUH',
    certificateUrl: null
  }
];

export default function Certifications() {
  return (
    <section className="py-20 bg-white border-t border-slate-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
            VERIFIED CREDENTIALS
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            CERTIFICATIONS
          </h2>
        </div>

        {/* Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              tabIndex={0}
              className="hover-card bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 shadow-sm flex items-start gap-4 group"
            >
              <div className="p-3 bg-blue-600 text-white rounded-xl shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                <Award size={22} />
              </div>

              <div className="space-y-2 flex-grow">
                <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors leading-snug">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <Building size={14} className="text-slate-400" />
                  <span>{cert.issuer}</span>
                </div>

                {cert.certificateUrl && (
                  <div className="pt-2">
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline"
                    >
                      View Certificate <ExternalLink size={12} />
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
