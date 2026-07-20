'use client';

import Image from 'next/image';

const FOOTER_NAV = [
  { heading: 'Company', links: ['About SURE Mechanical', 'Our Companies', 'Careers', 'Safety', 'News'] },
  { heading: 'Capabilities', links: ['Engineering & BIM', 'Fabrication', 'Installation', 'Commissioning', 'Service'] },
  { heading: 'Industries', links: ['Healthcare', 'Education', 'Government', 'Commercial', 'Industrial', 'Research'] },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-seam-line pb-16" role="contentinfo">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Image
              src="/brand/SURE_MECHACNIAL_Experienced-Innovative-Diverse.png"
              alt="SURE Mechanical"
              width={240}
              height={60}
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-xs text-galv-silver/40 leading-relaxed max-w-xs mb-6">
              Complete commercial mechanical systems from engineered concept to coordinated fabrication to field execution.
            </p>
            <div className="flex items-center gap-4 text-[10px] font-mono tracking-[0.08em] uppercase text-galv-silver/30">
              <span>Cincinnati, OH</span>
              <span className="w-0.5 h-0.5 bg-galv-silver/20 rounded-full" />
              <span>Tri-State Region</span>
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_NAV.map((col) => (
            <div key={col.heading}>
              <h4 className="text-[10px] font-mono tracking-[0.12em] uppercase text-galv-silver/50 mb-4">{col.heading}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-galv-silver/40 hover:text-bright-cyan/70 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-seam-line flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[10px] font-mono text-galv-silver/25 tracking-wider">
            © {new Date().getFullYear()} SURE Mechanical. All Rights Reserved.
          </span>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[10px] font-mono text-galv-silver/25 hover:text-galv-silver/50 transition-colors duration-300">Privacy</a>
            <a href="#" className="text-[10px] font-mono text-galv-silver/25 hover:text-galv-silver/50 transition-colors duration-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}