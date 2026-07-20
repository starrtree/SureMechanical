'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    title: 'University Medical Center HVAC Renovation',
    industry: 'Healthcare',
    company: 'SURE Mechanical',
    scope: 'Complete air handling system replacement with BIM-coordinated ductwork and hydronic piping in an active hospital environment.',
    tags: ['Healthcare', 'Ductwork', 'Piping', 'BIM', 'Commissioning'],
    image: '/projects/photos/RTU_pic1.png',
    featured: true,
  },
  {
    title: 'Federal Government Office Complex',
    industry: 'Government',
    company: 'SURE Mechanical',
    scope: 'Multi-building chilled water system upgrade with new cooling towers and central plant controls integration.',
    tags: ['Government', 'Chillers', 'Controls', 'Cooling Towers'],
    image: '/projects/photos/Ceiling_Work_1.png',
    featured: false,
  },
  {
    title: 'Advanced Research Laboratory',
    industry: 'Research & Laboratory',
    company: 'Thermolinear',
    scope: 'Precision environmental rooms with tight temperature and humidity control for critical research applications.',
    tags: ['Research', 'Environmental Rooms', 'Precision Control'],
    image: '/projects/photos/Rooftop_Work_1.png',
    featured: false,
  },
  {
    title: 'Regional School District Facility Upgrade',
    industry: 'Education',
    company: 'Cincinnati Air Conditioning Company',
    scope: 'HVAC system modernization across twelve school buildings with priority on occupied-space comfort and energy efficiency.',
    tags: ['Education', 'Service', 'Retrofit', 'Energy'],
    image: '/projects/photos/Worker_pic1.png',
    featured: false,
  },
  {
    title: 'Industrial Manufacturing Plant',
    industry: 'Industrial',
    company: 'SURE Mechanical',
    scope: 'High-capacity ventilation and process cooling for a 200,000 SF manufacturing facility with clean-room zones.',
    tags: ['Industrial', 'Process Cooling', 'Ventilation'],
    image: '/projects/photos/RTU_pic1.png',
    featured: false,
  },
  {
    title: 'Commercial Office Tower Build-Out',
    industry: 'Commercial',
    company: 'SURE Mechanical',
    scope: 'Full mechanical system for a 15-story Class A office tower including VAV systems, energy recovery and building automation.',
    tags: ['Commercial', 'VAV', 'Energy Recovery', ' BAS'],
    image: '/projects/photos/Ceiling_Work_1.png',
    featured: false,
  },
];

const CATEGORIES = ['All', 'Healthcare', 'Education', 'Government', 'Commercial', 'Industrial', 'Utilities', 'Research'];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.industry === activeCategory);

  useGSAP(() => {
    gsap.fromTo('.proj-title',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-36 overflow-hidden"
      aria-label="Project experience"
    >
      <div className="absolute inset-0 blueprint-grid opacity-25" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-galv-silver/15 to-transparent" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="proj-title opacity-0 mb-4">
          <span className="tech-label">05 — PROJECT EXPERIENCE</span>
        </div>

        <h2 className="proj-title opacity-0 section-title text-blueprint-white max-w-3xl mb-6">
          <span className="hover-red">SYSTEMS BUILT FOR FACILITIES THAT</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cool-teal to-bright-cyan">
            CANNOT FAIL.
          </span>
        </h2>

        <p className="proj-title opacity-0 section-subtitle text-galv-silver/60 max-w-2xl mb-10">
          From hospitals and research laboratories to government complexes and educational institutions, SURE Mechanical delivers systems that perform under the most demanding conditions.
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-[10px] font-mono tracking-[0.08em] uppercase rounded-sm border transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'border-cool-teal/40 bg-cool-teal/10 text-bright-cyan'
                  : 'border-seam-line text-galv-silver/50 hover:border-galv-silver/30 hover:text-galv-silver/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project conveyor — varied sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => {
            const isFeatured = project.featured && i === 0;
            return (
              <div
                key={project.title}
                className={`group relative rounded-sm overflow-hidden border border-seam-line cursor-pointer transition-all duration-500 hover:border-cool-teal/25 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                onClick={() => setSelectedProject(i)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(i)}
                tabIndex={0}
                role="button"
                aria-label={`Explore project: ${project.title}`}
              >
                <div className={`relative ${isFeatured ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                  {/* TEMP: Uploaded project images are being used as temporary visual placeholders until final project-specific image matching is complete. */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                  {/* Conveyor track line at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-8 conveyor-track opacity-40" />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-mech-navy via-mech-navy/30 to-transparent" />
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[9px] font-mono tracking-[0.12em] uppercase text-cool-teal/70">{project.industry}</span>
                      <span className="w-0.5 h-0.5 bg-galv-silver/30 rounded-full" />
                      <span className="text-[9px] font-mono tracking-[0.08em] uppercase text-galv-silver/40">{project.company}</span>
                    </div>
                    <h3 className={`font-semibold text-blueprint-white mb-1.5 leading-tight ${isFeatured ? 'text-lg lg:text-xl' : 'text-sm lg:text-base'}`}>
                      {project.title}
                    </h3>
                    <p className="text-xs text-galv-silver/50 line-clamp-2">{project.scope}</p>
                  </div>
                  {/* Explore hint */}
                  <div className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center border border-galv-silver/10 rounded-sm bg-mech-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-3.5 h-3.5 text-galv-silver/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Project detail: ${filtered[selectedProject]?.title}`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-mech-navy/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />
          {/* Panel — access panel feel */}
          <div className="relative z-10 w-full max-w-4xl max-h-[100dvh] overflow-y-auto rounded-sm border border-seam-line bg-steel-blue">
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center border border-seam-line rounded-sm bg-mech-navy/80 text-galv-silver/60 hover:text-bright-cyan hover:border-cool-teal/30 transition-all duration-300 cursor-pointer"
              aria-label="Close project detail"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {(() => {
              const project = filtered[selectedProject];
              if (!project) return null;
              return (
                <>
                  {/* Access panel header */}
                  <div className="px-4 py-2 border-b border-seam-line flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cool-teal/40" />
                    <span className="text-[9px] font-mono tracking-[0.15em] uppercase text-galv-silver/40">ACCESS PANEL — PROJECT DETAIL</span>
                  </div>

                  {/* Image */}
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-steel-blue via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-10">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="tech-label">{project.industry}</span>
                      <span className="tech-label-warm">{project.company}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-blueprint-white mb-4">{project.title}</h3>
                    <p className="text-galv-silver/60 leading-relaxed">{project.scope}</p>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
}