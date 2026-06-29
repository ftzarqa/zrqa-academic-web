import React from 'react';
import { motion } from 'framer-motion';

const SPRING_SNAPPY = { type: "spring" as const, stiffness: 400, damping: 25 };
const SPRING_HOVER = { type: "spring" as const, stiffness: 500, damping: 30 };

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

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: SPRING_SNAPPY,
  },
};

const QuickLinks: React.FC<QuickLinksProps> = ({ links }) => {
  return (
    <div className="quicklinks-card">
      <h2 className="quicklinks-heading">Akses Cepat</h2>
      <motion.ul
        className="quicklinks-list"
        role="list"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {links.map(link => (
          <motion.li
            key={link.id}
            variants={itemVariants}
            whileHover={{ x: 6, transition: SPRING_HOVER }}
          >
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
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default QuickLinks;
