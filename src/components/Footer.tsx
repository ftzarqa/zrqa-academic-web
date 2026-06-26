import React from 'react';
import { useInView } from '../hooks/useInView';

interface FooterLink {
  label: string;
  href:  string;
}

interface FooterColumn {
  heading: string;
  links:   FooterLink[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: 'Platform',
    links: [
      { label: 'Beranda',       href: '#'          },
      { label: 'Fitur',         href: '#fitur'     },
      { label: 'Statistik',     href: '#statistik' },
      { label: 'Pengumuman',    href: '#pengumuman'},
      { label: 'FAQ',           href: '#faq'       },
    ],
  },
  {
    heading: 'Akademik',
    links: [
      { label: 'Jadwal Kuliah', href: '#' },
      { label: 'Nilai & KHS',   href: '#' },
      { label: 'Absensi',       href: '#' },
      { label: 'Transkrip',     href: '#' },
    ],
  },
  {
    heading: 'Sumber Daya',
    links: [
      { label: 'Repositori GitHub', href: '#' },
      { label: 'Modul Pembelajaran', href: '#' },
      { label: 'Panduan Pengguna',  href: '#' },
      { label: 'Kebijakan Privasi', href: '#' },
    ],
  },
];

const Footer: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.05 });
  const year = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      className={`footer reveal ${inView ? 'is-visible' : ''}`}
      aria-label="Footer Zrqa-Acad"
    >
      <div className="footer-top-line" aria-hidden="true" />

      <div className="footer-inner">
        {/* Brand column */}
        <div className="footer-brand">
          <a href="#" className="footer-logo" aria-label="Zrqa-Acad beranda">
            <svg
              width="24"
              height="23"
              viewBox="0 0 48 46"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="48" y2="46" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <path
                fill="url(#footer-logo-grad)"
                d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"
              />
            </svg>
            <span className="footer-wordmark">
              <span>Zrqa</span>
              <span className="footer-wordmark-accent">-Acad</span>
            </span>
          </a>
          <p className="footer-tagline">
            Platform akademik digital yang modern dan terintegrasi untuk mahasiswa dan dosen.
          </p>

          {/* Social icons — uses existing SVG sprite */}
          <div className="footer-social" aria-label="Media sosial">
            <a
              href="#"
              className="social-link"
              aria-label="GitHub Lab Zrqa-Acad"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" aria-hidden="true">
                <use href="/icons.svg#github-icon" />
              </svg>
            </a>
            <a
              href="#"
              className="social-link"
              aria-label="Discord komunitas Zrqa-Acad"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" aria-hidden="true">
                <use href="/icons.svg#discord-icon" />
              </svg>
            </a>
            <a
              href="#"
              className="social-link"
              aria-label="Twitter/X Zrqa-Acad"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" aria-hidden="true">
                <use href="/icons.svg#x-icon" />
              </svg>
            </a>
            <a
              href="#"
              className="social-link"
              aria-label="Bluesky Zrqa-Acad"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" aria-hidden="true">
                <use href="/icons.svg#bluesky-icon" />
              </svg>
            </a>
          </div>
        </div>

        {/* Link columns */}
        {FOOTER_COLUMNS.map(col => (
          <nav
            key={col.heading}
            className="footer-column"
            aria-label={`Navigasi ${col.heading}`}
          >
            <h3 className="footer-col-heading">{col.heading}</h3>
            <ul role="list">
              {col.links.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copyright">
            © {year} Lab Zrqa-Acad · Zrqa Academic Web. Hak cipta dilindungi.
          </p>
          <p className="footer-credit">
            Dipersembahkan dengan{' '}
            <span className="footer-heart" aria-label="cinta">♥</span>
            {' '}oleh{' '}
            <strong>Lalu Muhammad Iffat Zarqaa</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
