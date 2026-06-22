import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

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

      <div className="ann-list" role="list">
        {announcements.map((item, i) => {
          const isOpen = activeId === item.id;
          return (
            <article
              key={item.id}
              className={`ann-card ${isOpen ? 'is-open' : ''}`}
              style={{ animationDelay: `${i * 80}ms` }}
              role="listitem"
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

              <div
                id={`ann-body-${item.id}`}
                className="ann-body"
                role="region"
                aria-labelledby={`ann-btn-${item.id}`}
                aria-hidden={!isOpen}
              >
                <p className="ann-content">{item.content}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default AnnouncementBoard;
