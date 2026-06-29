import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const SPRING_SNAPPY = { type: "spring" as const, stiffness: 400, damping: 25 };
const SPRING_HOVER = { type: "spring" as const, stiffness: 500, damping: 30 };

interface Feature {
  id:    number;
  icon:  string;
  title: string;
  desc:  string;
  color: string;
}

const FEATURES: Feature[] = [
  {
    id: 1,
    icon: '👥',
    title: 'Manajemen Mahasiswa',
    desc:  'Kelola data mahasiswa, profil, dan riwayat akademik secara terstruktur dan mudah diakses.',
    color: 'violet',
  },
  {
    id: 2,
    icon: '📅',
    title: 'Jadwal Kuliah',
    desc:  'Pantau jadwal perkuliahan, ujian, dan agenda kelas secara real-time dari satu tampilan.',
    color: 'cyan',
  },
  {
    id: 3,
    icon: '📊',
    title: 'Nilai & Transkrip',
    desc:  'Akses nilai mata kuliah dan transkrip akademik kapan saja, di mana saja dengan mudah.',
    color: 'emerald',
  },
  {
    id: 4,
    icon: '✅',
    title: 'Absensi Digital',
    desc:  'Sistem absensi paperless yang efisien — rekam kehadiran dan pantau progres kehadiran.',
    color: 'amber',
  },
  {
    id: 5,
    icon: '⌥',
    title: 'Repositori Kelas',
    desc:  'Kolaborasi kode dan dokumen bersama tim kelas melalui integrasi GitHub yang terintegrasi.',
    color: 'violet',
  },
  {
    id: 6,
    icon: '📢',
    title: 'Portal Informasi',
    desc:  'Pusat pengumuman, deadline tugas, dan agenda kelas agar tidak ada yang terlewat.',
    color: 'cyan',
  },
];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: SPRING_SNAPPY,
  },
};

const Features: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="fitur"
      ref={ref}
      className={`features reveal ${inView ? 'is-visible' : ''}`}
      aria-labelledby="features-heading"
    >
      <div className="section-container">
        {/* Section header */}
        <div className="section-header-block">
          <span className="section-badge">Fitur Unggulan</span>
          <h2 className="section-heading" id="features-heading">
            Semua yang Kamu Butuhkan
            <br />
            <span className="heading-gradient">dalam Satu Platform</span>
          </h2>
          <p className="section-subtitle">
            Dari manajemen mahasiswa hingga repositori kode —
            Zrqa-Acad menghadirkan ekosistem akademik yang lengkap dan terintegrasi.
          </p>
        </div>

        {/* Feature grid */}
        <motion.div
          className="features-grid"
          role="list"
          variants={gridVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {FEATURES.map((feat) => (
            <motion.article
              key={feat.id}
              className={`feature-card feature-card--${feat.color}`}
              role="listitem"
              variants={cardVariants}
              whileHover={{ y: -8, transition: SPRING_HOVER }}
            >
              <div className={`feature-icon-wrap feature-icon-wrap--${feat.color}`} aria-hidden="true">
                <span className="feature-icon">{feat.icon}</span>
              </div>
              <h3 className="feature-title">{feat.title}</h3>
              <p className="feature-desc">{feat.desc}</p>
              <span className="feature-arrow" aria-hidden="true">→</span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
