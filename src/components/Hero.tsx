import React, { useState, useEffect } from 'react';
import heroImg from '../assets/hero.png';
import { useInView } from '../hooks/useInView';

interface HeroChip {
  dot: 'green' | 'amber' | 'violet';
  label: string;
}

const CHIPS: HeroChip[] = [
  { dot: 'green',  label: '3 Pengumuman Aktif'   },
  { dot: 'amber',  label: 'Semester Genap'        },
  { dot: 'violet', label: 'Tahun Ajaran 2025/2026' },
];

const Hero: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.05 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const visible = mounted && inView;

  return (
    <section
      id="beranda"
      ref={ref}
      className={`hero ${visible ? 'is-visible' : ''}`}
      aria-label="Beranda Zrqa-Acad"
    >
      {/* Ambient background orbs */}
      <div className="hero-orb hero-orb--violet" aria-hidden="true" />
      <div className="hero-orb hero-orb--cyan"   aria-hidden="true" />

      {/* Subtle grid overlay */}
      <div className="hero-grid-overlay" aria-hidden="true" />

      {/* ── Content ── */}
      <div className="hero-inner">
        <div className="hero-content">
          {/* Eyebrow badge */}
          <div className="hero-badge">
            <span className="badge-dot" aria-hidden="true" />
            <span>Platform Akademik Digital · Lab Zrqa-Acad</span>
          </div>

          {/* Headline */}
          <h1 className="hero-headline">
            <span className="hero-headline-line">Portal Akademik</span>
            <span className="hero-headline-line hero-headline-gradient">
              Modern &amp; Terintegrasi
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="hero-subtitle">
            Pusat informasi, repositori kode, manajemen kelas, dan jadwal kuliah
            — semua dalam satu platform yang elegan dan mudah digunakan.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#pengumuman" className="btn btn-primary btn-lg" id="hero-cta-primary">
              Mulai Sekarang
              <span className="btn-icon" aria-hidden="true">→</span>
            </a>
            <a href="#fitur" className="btn btn-ghost btn-lg" id="hero-cta-secondary">
              Pelajari Fitur
            </a>
          </div>

          {/* Status chips */}
          <div className="hero-chips" role="list" aria-label="Status platform">
            {CHIPS.map((chip, i) => (
              <span key={i} className="hero-chip" role="listitem">
                <span className={`chip-dot chip-dot--${chip.dot}`} aria-hidden="true" />
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        {/* ── Visual ── */}
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-img-wrap">
            <div className="hero-img-glow" />
            <img
              src={heroImg}
              alt="Ilustrasi platform akademik Zrqa-Acad"
              className="hero-img"
              width="520"
              height="420"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <span className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
