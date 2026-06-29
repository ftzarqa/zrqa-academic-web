import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const SPRING_SNAPPY = { type: "spring" as const, stiffness: 400, damping: 25 };

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

const pointsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const pointVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: SPRING_SNAPPY,
  },
};

interface BenefitRowProps {
  benefit: Benefit;
  index:   number;
}

function BenefitRow({ benefit, index }: BenefitRowProps) {
  const { ref, inView } = useInView({ threshold: 0.15, delay: 50 });

  const contentX = benefit.reverse ? 40 : -40;
  const visualX = benefit.reverse ? -40 : 40;

  return (
    <div
      ref={ref}
      className={`benefit-row ${benefit.reverse ? 'benefit-row--reverse' : ''} reveal ${inView ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Text Side */}
      <motion.div
        className="benefit-content"
        initial={{ opacity: 0, x: contentX }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: contentX }}
        transition={{ ...SPRING_SNAPPY, delay: 0.05 }}
      >
        <span className="section-badge">{benefit.badge}</span>
        <h3 className="benefit-title">{benefit.title}</h3>
        <p className="benefit-subtitle">{benefit.subtitle}</p>
        <motion.ul
          className="benefit-points"
          role="list"
          variants={pointsContainerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {benefit.points.map((pt, i) => (
            <motion.li key={i} className="benefit-point" variants={pointVariants}>
              <span className="benefit-check" aria-hidden="true">✓</span>
              <span>{pt}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Visual Side */}
      <motion.div
        className="benefit-visual"
        aria-hidden="true"
        initial={{ opacity: 0, x: visualX }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: visualX }}
        transition={{ ...SPRING_SNAPPY, delay: 0.15 }}
      >
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
      </motion.div>
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
