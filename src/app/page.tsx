'use client';

import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/sure/Header';
import Hero from '@/components/sure/Hero';
import Engineering from '@/components/sure/Engineering';
import Fabrication from '@/components/sure/Fabrication';
import HeatingCooling from '@/components/sure/HeatingCooling';
import FieldInstallation from '@/components/sure/FieldInstallation';
import Projects from '@/components/sure/Projects';
import SureSystem from '@/components/sure/SureSystem';
import SafetyWorkforce from '@/components/sure/SafetyWorkforce';
import FinalCTA from '@/components/sure/FinalCTA';
import Footer from '@/components/sure/Footer';

gsap.registerPlugin(ScrollTrigger);

/**
 * THE LIVING MECHANICAL SYSTEM
 * SURE Mechanical — Immersive Digital Experience
 */

const SYSTEM_STEPS = [
  { id: 'hero', label: 'INTAKE', stage: '01' },
  { id: 'engineering', label: 'ENGINEERING', stage: '02' },
  { id: 'fabrication', label: 'FABRICATION', stage: '03' },
  { id: 'heating-cooling', label: 'ENERGY EXCHANGE', stage: '04' },
  { id: 'installation', label: 'SUPPLY', stage: '05' },
  { id: 'projects', label: 'DISTRIBUTION', stage: '06' },
  { id: 'sure-system', label: 'INSTALLATION', stage: '07' },
  { id: 'safety', label: 'CONTROLS', stage: '08' },
  { id: 'cta', label: 'COMMISSIONING', stage: '09' },
  { id: 'footer', label: 'RETURN', stage: '10' },
];

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [passedSteps, setPassedSteps] = useState<Set<string>>(new Set());

  useGSAP(() => {
    // Track which sections have been passed
    SYSTEM_STEPS.forEach((step) => {
      const el = document.getElementById(step.id);
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: 'top 60%',
        end: 'bottom 40%',
        onEnter: () => {
          setPassedSteps((prev) => {
            const next = new Set(prev);
            next.add(step.id);
            return next;
          });
        },
        onLeaveBack: () => {
          setPassedSteps((prev) => {
            const next = new Set(prev);
            next.delete(step.id);
            return next;
          });
        },
      });
    });

    // Once all process sections passed OR about to reach them, show full visibility
    // But also keep showing if between first and last
    ScrollTrigger.create({
      trigger: '#engineering',
      start: 'top 90%',
      endTrigger: '#cta',
      end: 'top 20%',
      onEnter: () => {
        // When entering the engineering zone, ensure at least the first few are visible
      },
      onLeave: () => {
        // After passing CTA, all should glow
        setPassedSteps(new Set(SYSTEM_STEPS.map((s) => s.id)));
      },
    });

    ScrollTrigger.create({
      trigger: '#cta',
      start: 'top 60%',
      onEnter: () => {
        setPassedSteps(new Set(SYSTEM_STEPS.map((s) => s.id)));
      },
    });
  }, { scope: mainRef });

  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  // Determine which steps should show: always show all when between first and last section
  const isInSectionRange = passedSteps.size > 0;

  return (
    <>
      <Header />
      <main ref={mainRef} className="relative min-h-screen bg-mech-navy" role="main">
        {/* Page sections */}
        <Hero />
        <Engineering />
        <Fabrication />
        <HeatingCooling />
        <FieldInstallation />
        <Projects />
        <SureSystem />
        <SafetyWorkforce />
        <FinalCTA />

        {/* Horizontal Process Timeline — fixed at bottom */}
        <div
          ref={timelineRef}
          className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none"
          aria-hidden="true"
        >
          <div className="bg-gradient-to-t from-mech-navy via-mech-navy/95 to-transparent pt-8 pb-3 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1440px] mx-auto">
              <div className="flex items-center gap-0 overflow-x-auto no-scrollbar">
                {SYSTEM_STEPS.map((step, i) => {
                  const isPassed = passedSteps.has(step.id);
                  const isLast = i === SYSTEM_STEPS.length - 1;
                  return (
                    <div key={step.id} className="flex items-center flex-shrink-0">
                      <div className={`timeline-node flex items-center gap-1.5 transition-all duration-500 ${isPassed ? 'passed' : ''} ${!isInSectionRange && !isPassed ? 'opacity-20' : 'opacity-100'}`}>
                        <div className="timeline-dot w-1.5 h-1.5 rounded-full bg-galv-silver/30 transition-all duration-500 flex-shrink-0" />
                        <span className="text-[8px] lg:text-[9px] font-mono tracking-[0.1em] uppercase text-galv-silver/40 whitespace-nowrap transition-all duration-500">
                          {step.stage}
                        </span>
                        <span className="text-[8px] lg:text-[9px] font-mono tracking-[0.08em] uppercase text-galv-silver/30 whitespace-nowrap transition-all duration-500 hidden sm:inline">
                          {step.label}
                        </span>
                      </div>
                      {!isLast && (
                        <div className={`timeline-connector w-4 lg:w-8 h-px bg-galv-silver/10 mx-1 flex-shrink-0 transition-all duration-500 ${isPassed ? 'bg-cool-teal/30' : ''}`} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}