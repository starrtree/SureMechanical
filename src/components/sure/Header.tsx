'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { assetPath } from '@/lib/asset-path';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'Capabilities', href: '#engineering' },
  { label: 'Industries', href: '#projects' },
  { label: 'Companies', href: '#sure-system' },
  { label: 'Careers', href: '#safety' },
  { label: 'Contact', href: '#cta' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? window.scrollY / docHeight : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = useCallback((href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useGSAP(() => {
    gsap.from('.header-nav-item', {
      y: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.06,
      ease: 'power3.out',
      delay: 2.5,
    });
  }, { scope: undefined });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-mech-navy/95 backdrop-blur-md border-b border-seam-line'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      {/* Scroll progress — airflow pressure gauge */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cool-teal via-bright-cyan to-cool-teal transition-all duration-150"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* SURE Symbol only — with shine hover */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
            className="relative flex-shrink-0 z-10 logo-shine rounded-lg"
            aria-label="SURE Mechanical — Return to top"
          >
            <Image
              src={assetPath('/brand/SURE_symbol.png')}
              alt="SURE Symbol"
              width={48}
              height={48}
              priority
              className="h-10 w-10 lg:h-14 lg:w-14 object-contain"
              style={{ imageRendering: 'auto' }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="header-nav-item shine-sweep px-3 py-2 text-xs font-mono tracking-[0.12em] uppercase text-galv-silver/70 hover:text-bright-cyan transition-colors duration-300 cursor-pointer rounded-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => scrollTo('#cta')}
              className="header-nav-item shine-sweep px-5 py-2.5 bg-cool-teal/10 border border-cool-teal/30 text-bright-cyan text-xs font-mono tracking-[0.12em] uppercase hover:bg-cool-teal/20 transition-all duration-300 rounded-sm cursor-pointer"
            >
              Start a Project
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className={`block w-6 h-[1.5px] bg-blueprint-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-blueprint-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-blueprint-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      <div
        className={`lg:hidden fixed inset-0 bg-mech-navy/98 backdrop-blur-lg transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4">
          {/* Mobile: SURE symbol */}
          <div className="mb-8 logo-shine rounded-lg">
            <Image
              src={assetPath('/brand/SURE_symbol.png')}
              alt="SURE Symbol"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
            />
          </div>
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-2xl font-light tracking-[0.1em] uppercase text-galv-silver/80 hover:text-bright-cyan transition-colors duration-300 cursor-pointer"
              style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms' }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#cta')}
            className="mt-6 shine-sweep px-8 py-3 bg-cool-teal/10 border border-cool-teal/30 text-bright-cyan font-mono text-sm tracking-[0.12em] uppercase hover:bg-cool-teal/20 transition-all duration-300 rounded-sm cursor-pointer"
          >
            Start a Project
          </button>
        </div>
      </div>
    </header>
  );
}
