import React from 'react';
import { useInView } from '../hooks/useInView';

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
        <div className="features-grid" role="list">
          {FEATURES.map((feat, i) => (
            <article
              key={feat.id}
              className={`feature-card feature-card--${feat.color}`}
              style={{ animationDelay: `${i * 80}ms` }}
              role="listitem"
            >
              <div className={`feature-icon-wrap feature-icon-wrap--${feat.color}`} aria-hidden="true">
                <span className="feature-icon">{feat.icon}</span>
              </div>
              <h3 className="feature-title">{feat.title}</h3>
              <p className="feature-desc">{feat.desc}</p>
              <span className="feature-arrow" aria-hidden="true">→</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
