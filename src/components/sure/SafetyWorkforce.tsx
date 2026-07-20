'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CRAFT_LABELS = [
  { label: 'Sheet Metal', x: '8%', y: '20%' },
  { label: 'Pipefitting', x: '42%', y: '15%' },
  { label: 'Welding', x: '72%', y: '25%' },
  { label: 'HVAC Service', x: '18%', y: '55%' },
  { label: 'Engineering', x: '55%', y: '50%' },
  { label: 'BIM', x: '80%', y: '60%' },
  { label: 'Project Management', x: '30%', y: '75%' },
  { label: 'Fabrication', x: '65%', y: '78%' },
];

const VALUES = [
  { title: 'Safety-First Planning', desc: 'Every project begins with comprehensive safety planning, hazard analysis and protocols that protect our team and everyone on site.' },
  { title: 'Skilled Trades', desc: 'Our workforce represents decades of combined craft expertise across sheet metal, piping, welding and HVAC service disciplines.' },
  { title: 'Apprenticeship & Workforce Development', desc: 'We invest in the next generation through structured apprenticeship programs that build lasting careers and community strength.' },
  { title: 'Inclusive Opportunity', desc: 'As a certified minority-owned enterprise, we create pathways for skilled professionals from every background to excel in the trades.' },
  { title: 'Continuous Technical Training', desc: 'Ongoing education in emerging technologies, codes and methods ensures our teams deliver at the leading edge of the industry.' },
];

export default function SafetyWorkforce() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo('.sw-title',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
      }
    );
    // Craft labels
    gsap.fromTo('.sw-craft-label',
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 0.3, stagger: 0.08, ease: 'back.out(1.3)',
        scrollTrigger: { trigger: '.sw-image-area', start: 'top 75%', toggleActions: 'play none none reverse' }
      }
    );
    // Value items
    gsap.fromTo('.sw-value',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.sw-values', start: 'top 85%', toggleActions: 'play none none reverse' }
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      id="safety"
      ref={sectionRef}
      className="relative py-24 lg:py-36 overflow-hidden"
      aria-label="Safety and workforce"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-heat-amber/15 to-transparent" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sw-title opacity-0 mb-4">
          <span className="tech-label-warm">07 — PEOPLE & SAFETY</span>
        </div>

        <h2 className="sw-title opacity-0 section-title text-blueprint-white max-w-3xl mb-16">
          <span className="hover-red">THE SYSTEM ONLY WORKS</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-heat-amber to-warm-orange">
            BECAUSE OUR PEOPLE DO.
          </span>
        </h2>

        {/* Full-width worker image with craft labels */}
        <div className="sw-image-area relative mb-16 rounded-sm overflow-hidden border border-seam-line">
          <div className="relative aspect-[21/9] lg:aspect-[3/1]">
            {/* TEMP: Uploaded project images are being used as temporary visual placeholders until final project-specific image matching is complete. */}
            <img
              src="/projects/photos/Worker_pic1.png"
              alt="SURE Mechanical skilled workforce in the field"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            {/* Dark overlay for label readability */}
            <div className="absolute inset-0 bg-mech-navy/40" />
            {/* Metallic texture overlay */}
            <div className="absolute inset-0 brushed-metal opacity-20" />

            {/* Craft labels */}
            {CRAFT_LABELS.map((cl) => (
              <div
                key={cl.label}
                className="sw-craft-label opacity-0 absolute hidden sm:block"
                style={{ left: cl.x, top: cl.y }}
              >
                <div className="px-2.5 py-1 bg-mech-navy/70 backdrop-blur-sm border border-galv-silver/15 rounded-sm transition-all duration-300 ease-out hover:scale-[1.18] hover:shadow-[0_0_18px_rgba(17,197,214,0.5),0_0_40px_rgba(17,197,214,0.15)] hover:border-cool-teal/50 hover:bg-mech-navy/95 hover:z-10 cursor-default">
                  <span className="text-[9px] font-mono tracking-[0.1em] uppercase text-galv-silver/70 transition-colors duration-300 group-hover:text-bright-cyan/90">{cl.label}</span>
                </div>
                {/* Connector dot */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-galv-silver/20" />
              </div>
            ))}
          </div>
        </div>

        {/* Values grid */}
        <div className="sw-values grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((val) => (
            <div
              key={val.title}
              className="sw-value opacity-0 group p-5 border border-seam-line rounded-sm bg-steel-blue/20 hover:border-heat-amber/15 transition-all duration-500"
            >
              <h3 className="text-sm font-semibold text-blueprint-white mb-2 group-hover:text-heat-amber/90 transition-colors duration-300">
                {val.title}
              </h3>
              <p className="text-xs text-galv-silver/50 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}