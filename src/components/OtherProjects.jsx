import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import AgriPathCaseStudyModal from './AgriPathCaseStudyModal';

export default function OtherProjects() {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);

  const projects = [
    {
      title: 'AgriPath AI',
      subtitle: 'AI-Powered Smart Farming Platform',
      description: 'Built an AI-powered smart farming platform supporting crop recommendation, plant disease detection, fertilizer guidance, weather information, market information, and AI-assisted agricultural support.',
      technologies: ['Python', 'Scikit-learn', 'YOLO', 'OpenCV', 'TensorFlow', 'PyTorch', 'Supabase', 'LLMs', 'APIs', 'Ollama'],
      imageSrc: '/agripath.jpg',
      liveDemoUrl: 'https://farm-to-field-hub.lovable.app/',
      githubUrl: 'https://github.com/katam-viijay/farm-to-field-hub',
      badgeText: 'FEATURED PROJECT',
      onReadCaseStudy: () => setCaseStudyOpen(true)
    },
    {
      title: 'Eventify',
      subtitle: 'Event Management & Ticket Booking Platform',
      description: 'Engineered a full-stack event management platform supporting event creation, publishing, discovery, organizer management, and online ticket booking.',
      technologies: ['Python', 'Django', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      imageSrc: '/eventify.jpg',
      liveDemoUrl: 'https://vmp-event-management.infinityfree.me/index.php',
      githubUrl: 'https://github.com/vijay23ai/event-management'
    },
    {
      title: 'QuickFixr',
      subtitle: 'On-Demand Skilled Worker Platform',
      description: 'Built a service platform connecting users with skilled workers for local services including borewell repairs, home maintenance, and other repair requirements.',
      technologies: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      imageSrc: '/quickfixr.jpg',
      liveDemoUrl: 'https://quickfixr.infinityfreeapp.com/?i=1',
      githubUrl: 'https://github.com/vijay23ai/quickfixr'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white border-t border-slate-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
            PORTFOLIO HIGHLIGHTS
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            SELECTED PROJECTS
          </h2>
        </div>

        {/* 3-Column Desktop Grid (1 Col Mobile, 2 Col Tablet, 3 Col Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

      </div>

      {/* Case Study Modal for AgriPath AI */}
      <AgriPathCaseStudyModal
        isOpen={caseStudyOpen}
        onClose={() => setCaseStudyOpen(false)}
      />
    </section>
  );
}
