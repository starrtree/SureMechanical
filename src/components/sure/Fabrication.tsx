'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Fabrication() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo('.fab-title',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
      }
    );
    // Sheet metal fold sequence
    gsap.fromTo('.fab-sheet',
      { opacity: 0, rotateX: -90, transformOrigin: 'top center' },
      { opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.fab-visual-area', start: 'top 75%', toggleActions: 'play none none reverse' }
      }
    );
    // Weld sparks
    gsap.fromTo('.fab-spark',
      { opacity: 0, y: 0 },
      { opacity: 1, y: -20, duration: 0.3, repeat: -1, yoyo: true, ease: 'power1.in', stagger: { each: 0.2, from: 'random' } }
    );
  }, { scope: sectionRef });

  return (
    <section
      id="fabrication"
      ref={sectionRef}
      className="relative py-24 lg:py-36 overflow-hidden"
      aria-label="Fabrication capabilities"
    >
      {/* Dark fabrication shop atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-mech-navy via-duct-dark to-mech-navy" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-heat-amber/20 to-transparent" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="fab-title opacity-0 mb-4">
          <span className="tech-label-warm">02 — FABRICATION</span>
        </div>

        <h2 className="fab-title opacity-0 section-title text-blueprint-white max-w-3xl mb-6">
          <span className="hover-red">FROM DIGITAL MODEL TO</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-heat-amber to-warm-orange">
            FORMED METAL.
          </span>
        </h2>

        <p className="fab-title opacity-0 section-subtitle text-galv-silver/60 max-w-2xl mb-16">
          Precision in the shop creates speed, quality and predictability in the field. Every piece that leaves our fabrication facility has been coordinated, cut and formed to exact specifications.
        </p>

        {/* Fabrication visual — Sheet metal folding sequence */}
        <div className="fab-visual-area relative mb-16">
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-3">
            {['Flat Sheet', 'Plasma Cut', 'Brake Fold', 'Seam Lock', 'Assembly'].map((stage, i) => (
              <div
                key={stage}
                className="fab-sheet opacity-0 relative aspect-[3/4] rounded-sm overflow-hidden border border-seam-line group"
                style={{ perspective: '800px' }}
              >
                {/* TEMP: Uploaded project images are being used as temporary visual placeholders until final project-specific image matching is complete. */}
                <img
                  src="/projects/photos/Ceiling_Work_1.png"
                  alt={`${stage} fabrication stage`}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  loading="lazy"
                  style={{ filter: `saturate(${0.3 + i * 0.15}) brightness(${0.6 + i * 0.1})` }}
                />
                {/* Metallic overlay */}
                <div className="absolute inset-0 brushed-metal opacity-60" />
                {/* Stage number */}
                <div className="absolute top-3 left-3 w-6 h-6 flex items-center justify-center border border-galv-silver/20 rounded-sm bg-mech-navy/60 backdrop-blur-sm">
                  <span className="text-[10px] font-mono text-galv-silver/60">{String(i + 1).padStart(2, '0')}</span>
                </div>
                {/* Stage label */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-mech-navy/90 to-transparent">
                  <div className="text-xs font-mono tracking-[0.08em] uppercase text-galv-silver/80">{stage}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Animated weld sparks */}
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-heat-amber rounded-full fab-spark opacity-0" />
          <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-warm-orange rounded-full fab-spark opacity-0" style={{ animationDelay: '0.3s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-heat-amber rounded-full fab-spark opacity-0" style={{ animationDelay: '0.7s' }} />
        </div>

      </div>
    </section>
  );
}