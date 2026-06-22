import React from 'react';

export interface QuickLink {
  id:     number;
  icon:   string;
  label:  string;
  desc:   string;
  href:   string;
  accent: boolean;
}

interface QuickLinksProps {
  links: QuickLink[];
}

const QuickLinks: React.FC<QuickLinksProps> = ({ links }) => {
  return (
    <div className="quicklinks-card">
      <h2 className="quicklinks-heading">Akses Cepat</h2>
      <ul className="quicklinks-list" role="list">
        {links.map(link => (
          <li key={link.id}>
            <a
              href={link.href}
              className={`quicklink-item ${link.accent ? 'quicklink-item--accent' : ''}`}
              /* Open external links safely */
              {...(link.href !== '#'
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              <span className="quicklink-icon" aria-hidden="true">{link.icon}</span>
              <span className="quicklink-text">
                <span className="quicklink-label">{link.label}</span>
                <span className="quicklink-desc">{link.desc}</span>
              </span>
              <span className="quicklink-arrow" aria-hidden="true">→</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
