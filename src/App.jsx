import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import OtherProjects from './components/OtherProjects';
import Internships from './components/Internships';
import Achievements from './components/Achievements';
import Leadership from './components/Leadership';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      
      {/* Sticky Global Navigation */}
      <Navbar />

      {/* Main Content Sections in requested sequence */}
      <main className="flex-grow">
        <Hero />
        <About />
        <TechnicalSkills />
        <OtherProjects />
        <Internships />
        <Achievements />
        <Leadership />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

    </div>
  );
}
