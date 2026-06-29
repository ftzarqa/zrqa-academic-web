import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const SPRING_SNAPPY = { type: "spring" as const, stiffness: 400, damping: 25 };
const SPRING_HOVER = { type: "spring" as const, stiffness: 500, damping: 30 };

interface Testimonial {
  id:      number;
  name:    string;
  nim:     string;
  role:    string;
  quote:   string;
  rating:  number;
  initials: string;
  color:   string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id:       1,
    name:     'Ahmad Fauzil Hakim',
    nim:      '102022500101',
    role:     'Mahasiswa Semester 5',
    quote:    'Zrqa-Acad benar-benar membantu saya memantau jadwal kuliah dan pengumpulan tugas. Tidak ada lagi deadline yang terlewat sejak saya menggunakan platform ini.',
    rating:   5,
    initials: 'AF',
    color:    'violet',
  },
  {
    id:       2,
    name:     'Siti Rahma Dewi',
    nim:      '102022500118',
    role:     'Mahasiswa Semester 5',
    quote:    'Dashboard yang bersih dan sangat informatif. Semua informasi akademik tersedia di satu tempat. Desainnya premium dan nyaman digunakan setiap hari.',
    rating:   5,
    initials: 'SR',
    color:    'cyan',
  },
  {
    id:       3,
    name:     'Rizky Pratama',
    nim:      '102022500089',
    role:     'Mahasiswa Semester 5',
    quote:    'Fitur repositori kelas sangat membantu kolaborasi tim. Integrasi dengan GitHub membuat alur kerja proyek akhir jauh lebih efisien dari sebelumnya.',
    rating:   5,
    initials: 'RP',
    color:    'emerald',
  },
  {
    id:       4,
    name:     'Nurul Aini',
    nim:      '102022500142',
    role:     'Mahasiswa Semester 5',
    quote:    'Pengumuman yang real-time membuat saya tidak pernah melewatkan informasi penting dari dosen. Tampilan mobile-nya juga sangat nyaman digunakan.',
    rating:   5,
    initials: 'NA',
    color:    'amber',
  },
];

const INTERVAL_MS = 4500;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="star-rating" aria-label={`Rating ${rating} dari 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`star ${i < rating ? 'star--filled' : ''}`} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

const Testimonials: React.FC = () => {
  const { ref, inView }   = useInView({ threshold: 0.1 });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goToNext = useCallback(() => {
    setActive(prev => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const goTo = (index: number) => setActive(index);

  useEffect(() => {
    if (paused || !inView) return;
    const timer = setInterval(goToNext, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused, inView, goToNext]);

  return (
    <section
      id="testimoni"
      ref={ref}
      className={`testimonials reveal ${inView ? 'is-visible' : ''}`}
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="section-container">
        <div className="section-header-block section-header-block--center">
          <span className="section-badge">Dari Mahasiswa</span>
          <h2 className="section-heading" id="testimonials-heading">
            Dipercaya oleh <span className="heading-gradient">Rekan Kelas</span>
          </h2>
          <p className="section-subtitle">
            Dengarkan langsung dari mahasiswa yang sudah merasakan manfaat Zrqa-Acad.
          </p>
        </div>

        {/* Carousel */}
        <div className="testimonial-carousel" aria-live="polite" aria-atomic="true">
          <AnimatePresence mode="wait">
            {TESTIMONIALS.filter((_, i) => i === active).map((t) => (
              <motion.article
                key={t.id}
                className={`testimonial-card testimonial-card--${t.color} is-active`}
                aria-label={`Testimoni dari ${t.name}`}
                initial={{ opacity: 0, x: 30, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30, scale: 0.97 }}
                transition={SPRING_SNAPPY}
              >
                <StarRating rating={t.rating} />
                <blockquote className="testimonial-quote">
                  <p>"{t.quote}"</p>
                </blockquote>
                <footer className="testimonial-author">
                  <div
                    className={`testimonial-avatar testimonial-avatar--${t.color}`}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div className="testimonial-meta">
                    <p className="testimonial-name">{t.name}</p>
                    <p className="testimonial-detail">
                      <span className="testimonial-nim">{t.nim}</span>
                      <span className="testimonial-sep" aria-hidden="true">·</span>
                      <span>{t.role}</span>
                    </p>
                  </div>
                </footer>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Dots navigation */}
        <div className="testimonial-dots" role="tablist" aria-label="Pilih testimoni">
          {TESTIMONIALS.map((t, i) => (
            <motion.button
              key={t.id}
              className={`testimonial-dot ${i === active ? 'is-active' : ''}`}
              onClick={() => goTo(i)}
              role="tab"
              aria-selected={i === active}
              aria-label={`Testimoni ${i + 1}: ${t.name}`}
              animate={{ scale: i === active ? 1.1 : 1 }}
              transition={SPRING_HOVER}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="testimonial-nav" aria-label="Navigasi testimoni">
          <motion.button
            className="testimonial-nav-btn"
            onClick={() => setActive(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            aria-label="Testimoni sebelumnya"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={SPRING_HOVER}
          >
            ←
          </motion.button>
          <motion.button
            className="testimonial-nav-btn"
            onClick={goToNext}
            aria-label="Testimoni berikutnya"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={SPRING_HOVER}
          >
            →
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
