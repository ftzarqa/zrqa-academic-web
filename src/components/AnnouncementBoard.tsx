import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const SPRING_SNAPPY = { type: "spring" as const, stiffness: 400, damping: 25 };
const SPRING_HOVER = { type: "spring" as const, stiffness: 500, damping: 30 };
const SPRING_GENTLE = { type: "spring" as const, stiffness: 300, damping: 28 };

export interface Announcement {
  id:      number;
  title:   string;
  date:    string;
  content: string;
  tag:     string;
}

interface AnnouncementBoardProps {
  announcements: Announcement[];
}

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: SPRING_SNAPPY,
  },
};

const AnnouncementBoard: React.FC<AnnouncementBoardProps> = ({ announcements }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <section
      ref={ref}
      className={`ann-board reveal ${inView ? 'is-visible' : ''}`}
      aria-labelledby="ann-board-heading"
    >
      <div className="ann-board-header">
        <h2 className="ann-board-title" id="ann-board-heading">
          Papan Pengumuman
        </h2>
        <span className="ann-count-badge" aria-label={`${announcements.length} pengumuman aktif`}>
          {announcements.length}
        </span>
      </div>

      <motion.div
        className="ann-list"
        role="list"
        variants={listVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {announcements.map((item) => {
          const isOpen = activeId === item.id;
          return (
            <motion.article
              key={item.id}
              className={`ann-card ${isOpen ? 'is-open' : ''}`}
              role="listitem"
              variants={cardVariants}
              whileHover={{ scale: 1.01, transition: SPRING_HOVER }}
            >
              <button
                className="ann-card-toggle"
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
                aria-controls={`ann-body-${item.id}`}
                id={`ann-btn-${item.id}`}
              >
                <div className="ann-card-left">
                  <span className={`ann-tag ann-tag--${item.tag.toLowerCase()}`}>
                    {item.tag}
                  </span>
                  <h3 className="ann-title">{item.title}</h3>
                </div>
                <div className="ann-card-right">
                  <time className="ann-date" dateTime={item.date}>{item.date}</time>
                  <span
                    className={`ann-chevron ${isOpen ? 'ann-chevron--open' : ''}`}
                    aria-hidden="true"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`ann-body-${item.id}`}
                    className="ann-body"
                    role="region"
                    aria-labelledby={`ann-btn-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1, transition: SPRING_GENTLE }}
                    exit={{ height: 0, opacity: 0, transition: { duration: 0.2 } }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="ann-content">{item.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
};

export default AnnouncementBoard;
