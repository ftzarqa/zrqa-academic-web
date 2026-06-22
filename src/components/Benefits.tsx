import React from 'react';
import { useInView } from '../hooks/useInView';

interface Benefit {
  id:       number;
  badge:    string;
  title:    string;
  subtitle: string;
  points:   string[];
  icon:     string;
  reverse:  boolean;
}

const BENEFITS: Benefit[] = [
  {
    id:       1,
    badge:    'Satu Ekosistem',
    title:    'Semua Kebutuhan Akademik dalam Satu Tempat',
    subtitle: 'Tidak perlu berpindah antar aplikasi. Zrqa-Acad mengintegrasikan seluruh alur akademikmu.',
    points: [
      'Pengumuman & deadline otomatis tersinkron',
      'Repositori kelas terhubung langsung ke GitHub',
      'Nilai dan jadwal dalam satu dashboard',
    ],
    icon:    '◈',
    reverse: false,
  },
  {
    id:       2,
    badge:    'Desain Responsif',
    title:    'Akses Mudah dari Perangkat Apa Pun',
    subtitle: 'Tampilan yang menyesuaikan diri dengan sempurna di desktop, tablet, maupun smartphone.',
    points: [
      'Antarmuka yang responsif dan mobile-friendly',
      'Performa cepat dengan loading minimal',
      'Dark mode yang nyaman di malam hari',
    ],
    icon:    '◇',
    reverse: true,
  },
  {
    id:       3,
    badge:    'Privasi & Keamanan',
    title:    'Data Akademikmu Terlindungi',
    subtitle: 'Keamanan data adalah prioritas utama kami. Informasi akademikmu dijaga dengan standar tertinggi.',
    points: [
      'Akses berbasis peran (mahasiswa & dosen)',
      'Data pribadi tidak dibagikan ke pihak ketiga',
      'Enkripsi end-to-end untuk semua data sensitif',
    ],
    icon:    '⊕',
    reverse: false,
  },
];

interface BenefitRowProps {
  benefit: Benefit;
  index:   number;
}

function BenefitRow({ benefit, index }: BenefitRowProps) {
  const { ref, inView } = useInView({ threshold: 0.15, delay: 50 });

  return (
    <div
      ref={ref}
      className={`benefit-row ${benefit.reverse ? 'benefit-row--reverse' : ''} reveal ${inView ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Text Side */}
      <div className="benefit-content">
        <span className="section-badge">{benefit.badge}</span>
        <h3 className="benefit-title">{benefit.title}</h3>
        <p className="benefit-subtitle">{benefit.subtitle}</p>
        <ul className="benefit-points" role="list">
          {benefit.points.map((pt, i) => (
            <li key={i} className="benefit-point">
              <span className="benefit-check" aria-hidden="true">✓</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Visual Side */}
      <div className="benefit-visual" aria-hidden="true">
        <div className="benefit-card-demo">
          <div className="benefit-icon-display">
            <span className="benefit-big-icon">{benefit.icon}</span>
          </div>
          <div className="benefit-demo-lines">
            <span className="demo-line demo-line--long" />
            <span className="demo-line demo-line--medium" />
            <span className="demo-line demo-line--short" />
          </div>
        </div>
      </div>
    </div>
  );
}

const Benefits: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <section
      id="manfaat"
      ref={ref}
      className={`benefits reveal ${inView ? 'is-visible' : ''}`}
      aria-labelledby="benefits-heading"
    >
      <div className="section-container">
        <div className="section-header-block section-header-block--center">
          <span className="section-badge">Mengapa Zrqa-Acad?</span>
          <h2 className="section-heading" id="benefits-heading">
            Dirancang untuk <span className="heading-gradient">Pengalaman Terbaik</span>
          </h2>
        </div>

        <div className="benefits-list">
          {BENEFITS.map((benefit, i) => (
            <BenefitRow key={benefit.id} benefit={benefit} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
