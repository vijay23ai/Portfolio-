import React from 'react';

const skillCategories = [
  {
    title: 'Programming',
    imageSrc: '/skills/programming_icon.png',
    skills: ['Python', 'Java', 'OOP', 'Data Structures & Algorithms']
  },
  {
    title: 'AI & Machine Learning',
    imageSrc: '/skills/aiml_icon.jpg',
    skills: ['Machine Learning', 'Deep Learning', 'Generative AI', 'LLMs', 'NLP', 'Computer Vision']
  },
  {
    title: 'LLM & GenAI',
    imageSrc: '/skills/genai_icon.jpg',
    skills: ['RAG', 'Prompt Engineering', 'LLM APIs', 'Ollama']
  },
  {
    title: 'Libraries',
    imageSrc: '/skills/libraries_icon.jpg',
    skills: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'OpenCV', 'Ultralytics YOLO']
  },
  {
    title: 'AI Development',
    imageSrc: '/skills/programming_icon.png',
    skills: ['FastAPI', 'REST APIs', 'API Integration']
  },
  {
    title: 'Tools & Cloud',
    imageSrc: '/skills/tools_icon.jpg',
    skills: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code', 'Postman', 'AWS']
  }
];

export default function TechnicalSkills() {
  return (
    <section id="skills" className="py-20 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
            CORE COMPETENCIES
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            TECHNICAL SKILLS
          </h2>
        </div>

        {/* 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              tabIndex={0}
              className="hover-card bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-xl overflow-hidden border border-slate-200/90 shadow-xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform bg-white">
                    <img
                      src={category.imageSrc}
                      alt={`${category.title} Icon`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg tracking-tight group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100/90 text-slate-700 border border-slate-200/60 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
