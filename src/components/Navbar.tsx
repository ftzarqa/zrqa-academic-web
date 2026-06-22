import React, { useState, useEffect } from 'react';

interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { href: '#fitur',        label: 'Fitur'        },
  { href: '#statistik',    label: 'Statistik'    },
  { href: '#pengumuman',   label: 'Pengumuman'   },
  { href: '#faq',          label: 'FAQ'          },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleMobileLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      role="banner"
    >
      <div className="navbar-inner">
        {/* ── Logo ── */}
        <a href="#" className="nav-logo" aria-label="Zrqa-Acad — kembali ke beranda">
          <svg
            className="nav-logo-icon"
            width="26"
            height="25"
            viewBox="0 0 48 46"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="nav-logo-grad" x1="0" y1="0" x2="48" y2="46" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <path
              fill="url(#nav-logo-grad)"
              d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"
            />
          </svg>
          <span className="nav-wordmark">
            <span className="nav-wordmark-bold">Zrqa</span>
            <span className="nav-wordmark-accent">-Acad</span>
          </span>
        </a>

        {/* ── Desktop Nav Links ── */}
        <nav aria-label="Menu utama">
          <ul className="nav-links" role="list">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Desktop CTA + Hamburger ── */}
        <div className="nav-actions">
          <a href="#pengumuman" className="btn btn-primary btn-sm" id="nav-cta">
            Masuk Portal
            <span className="btn-icon" aria-hidden="true">→</span>
          </a>

          <button
            className={`hamburger ${menuOpen ? 'is-open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Menu mobile">
          <ul role="list">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={handleMobileLinkClick}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#pengumuman"
                className="btn btn-primary"
                style={{ display: 'flex', width: '100%', justifyContent: 'center' }}
                onClick={handleMobileLinkClick}
                tabIndex={menuOpen ? 0 : -1}
              >
                Masuk Portal →
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
