import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

interface StatItem {
  id:          number;
  value:       number;
  suffix:      string;
  label:       string;
  description: string;
  color:       'violet' | 'cyan' | 'emerald' | 'amber';
}

const STATS: StatItem[] = [
  {
    id: 1,
    value: 150,
    suffix: '+',
    label: 'Mahasiswa',
    description: 'Mahasiswa aktif terdaftar',
    color: 'violet',
  },
  {
    id: 2,
    value: 12,
    suffix: '',
    label: 'Dosen',
    description: 'Tenaga pengajar berpengalaman',
    color: 'cyan',
  },
  {
    id: 3,
    value: 24,
    suffix: '',
    label: 'Mata Kuliah',
    description: 'Mata kuliah aktif semester ini',
    color: 'emerald',
  },
  {
    id: 4,
    value: 6,
    suffix: '',
    label: 'Semester',
    description: 'Semester berjalan saat ini',
    color: 'amber',
  },
];

interface AnimatedCounterProps {
  target: number;
  suffix: string;
  inView: boolean;
}

function AnimatedCounter({ target, suffix, inView }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1800;
    const startTime = Date.now();

    const tick = () => {
      const elapsed  = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      /* Ease-out quartic */
      const eased    = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span>{count}{suffix}</span>
  );
}

const Stats: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="statistik"
      ref={ref}
      className={`stats reveal ${inView ? 'is-visible' : ''}`}
      aria-labelledby="stats-heading"
    >
      <div className="stats-bg-line" aria-hidden="true" />

      <div className="section-container">
        <div className="section-header-block section-header-block--center">
          <span className="section-badge">Angka Nyata</span>
          <h2 className="section-heading" id="stats-heading">
            Platform yang <span className="heading-gradient">Terpercaya</span>
          </h2>
          <p className="section-subtitle">
            Dipercaya oleh mahasiswa dan dosen aktif di Lab Zrqa-Acad.
          </p>
        </div>

        <div className="stats-grid" role="list">
          {STATS.map((stat, i) => (
            <div
              key={stat.id}
              className={`stat-card stat-card--${stat.color}`}
              style={{ animationDelay: `${i * 100}ms` }}
              role="listitem"
            >
              <div className={`stat-number stat-number--${stat.color}`}>
                {inView
                  ? <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
                  : <span>0{stat.suffix}</span>
                }
              </div>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
