'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assetPath } from '@/lib/asset-path';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Return airflow particles completing the loop
  useEffect(() => {
    if (!isVisible || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();

    const particles = Array.from({ length: 25 }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: canvas.offsetHeight * 0.3 + Math.random() * canvas.offsetHeight * 0.4,
      vx: (Math.random() - 0.5) * 0.5,
      vy: -0.3 - Math.random() * 0.5,
      size: 1 + Math.random() * 1.5,
      alpha: 0.15 + Math.random() * 0.3,
    }));

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) {
          p.y = canvas.offsetHeight + 10;
          p.x = Math.random() * canvas.offsetWidth;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = '#11C5D6';
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animId);
  }, [isVisible]);

  useGSAP(() => {
    gsap.fromTo('.cta-title',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          onEnter: () => setIsVisible(true),
        }
      }
    );
    gsap.fromTo('.cta-panel',
      { opacity: 0, y: 30, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-panel', start: 'top 85%', toggleActions: 'play none none reverse' }
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative py-24 lg:py-36 overflow-hidden"
      aria-label="Start a project with SURE Mechanical"
    >
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cool-teal/20 to-transparent" />
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cool-teal/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Airflow canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cta-title opacity-0 text-center mb-16">
          <div className="mb-4">
            <Image
              src={assetPath('/brand/SURE_symbol.png')}
              alt="SURE Symbol"
              width={40}
              height={40}
              className="mx-auto w-8 h-8 opacity-40"
            />
          </div>
          <h2 className="section-title text-blueprint-white max-w-3xl mx-auto">
            <span className="hover-red">LET&apos;S BUILD THE SYSTEM</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cool-teal via-bright-cyan to-cool-teal">
              BEHIND WHAT&apos;S NEXT.
            </span>
          </h2>
        </div>

        {/* Control Panel / Access Door */}
        <div className="cta-panel opacity-0 max-w-2xl mx-auto">
          <div className="relative rounded-sm border border-cool-teal/15 bg-steel-blue/40 backdrop-blur-sm overflow-hidden">
            {/* Panel header bar */}
            <div className="flex items-center gap-3 px-5 py-3 border-b border-seam-line bg-mech-navy/40">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-cool-teal/30" />
                <div className="w-2 h-2 rounded-full bg-heat-amber/30" />
                <div className="w-2 h-2 rounded-full bg-galv-silver/20" />
              </div>
              <span className="text-[9px] font-mono tracking-[0.15em] uppercase text-galv-silver/30">SYSTEM INTERFACE — PROJECT INITIATION</span>
            </div>

            <div className="p-8 lg:p-12 text-center">
              <p className="text-galv-silver/60 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
                Bring SURE Mechanical into your project early and turn coordination, fabrication and installation into one connected process.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button className="shine-sweep w-full sm:w-auto px-8 py-3.5 bg-cool-teal text-mech-navy font-semibold text-sm tracking-wide uppercase hover:bg-bright-cyan transition-colors duration-300 rounded-sm cursor-pointer">
                  Start a Project
                </button>
                <button className="shine-sweep w-full sm:w-auto px-8 py-3.5 border border-galv-silver/20 text-blueprint-white text-sm tracking-wide uppercase hover:border-cool-teal/30 hover:text-bright-cyan transition-all duration-300 rounded-sm cursor-pointer">
                  Request Service
                </button>
              </div>

              <div className="mt-6">
                <button className="text-galv-silver/40 text-xs font-mono tracking-[0.08em] uppercase hover:text-bright-cyan/60 transition-colors duration-300 cursor-pointer">
                  Contact SURE Mechanical →
                </button>
              </div>
            </div>

            {/* Panel screws / rivets */}
            <div className="absolute top-2 left-2 rivet-dot" />
            <div className="absolute top-2 right-2 rivet-dot" />
            <div className="absolute bottom-2 left-2 rivet-dot" />
            <div className="absolute bottom-2 right-2 rivet-dot" />
          </div>
        </div>
      </div>
    </section>
  );
}
