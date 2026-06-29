import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';
import { useInView } from '../hooks/useInView';

const SPRING_SNAPPY = { type: "spring" as const, stiffness: 400, damping: 25 };
const SPRING_GENTLE = { type: "spring" as const, stiffness: 300, damping: 28 };

interface HeroChip {
  dot: 'green' | 'amber' | 'violet';
  label: string;
}

const CHIPS: HeroChip[] = [
  { dot: 'green',  label: '3 Pengumuman Aktif'   },
  { dot: 'amber',  label: 'Semester Genap'        },
  { dot: 'violet', label: 'Tahun Ajaran 2025/2026' },
];

const chipsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const chipVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: SPRING_SNAPPY,
  },
};

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
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={visible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -20, scale: 0.9 }}
            transition={SPRING_SNAPPY}
          >
            <span className="badge-dot" aria-hidden="true" />
            <span>Platform Akademik Digital · Lab Zrqa-Acad</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="hero-headline"
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ ...SPRING_SNAPPY, delay: 0.1 }}
          >
            <span className="hero-headline-line">Portal Akademik</span>
            <span className="hero-headline-line hero-headline-gradient">
              Modern &amp; Terintegrasi
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ ...SPRING_SNAPPY, delay: 0.2 }}
          >
            Pusat informasi, repositori kode, manajemen kelas, dan jadwal kuliah
            — semua dalam satu platform yang elegan dan mudah digunakan.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ ...SPRING_SNAPPY, delay: 0.3 }}
          >
            <a href="#pengumuman" className="btn btn-primary btn-lg" id="hero-cta-primary">
              Mulai Sekarang
              <span className="btn-icon" aria-hidden="true">→</span>
            </a>
            <a href="#fitur" className="btn btn-ghost btn-lg" id="hero-cta-secondary">
              Pelajari Fitur
            </a>
          </motion.div>

          {/* Status chips */}
          <motion.div
            className="hero-chips"
            role="list"
            aria-label="Status platform"
            variants={chipsContainerVariants}
            initial="hidden"
            animate={visible ? 'visible' : 'hidden'}
          >
            {CHIPS.map((chip, i) => (
              <motion.span
                key={i}
                className="hero-chip"
                role="listitem"
                variants={chipVariants}
              >
                <span className={`chip-dot chip-dot--${chip.dot}`} aria-hidden="true" />
                {chip.label}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* ── Visual ── */}
        <motion.div
          className="hero-visual"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ ...SPRING_GENTLE, delay: 0.3 }}
        >
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
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <span className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
