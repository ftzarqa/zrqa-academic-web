import React, { useState, useEffect, useRef } from 'react';

interface StudentData {
  id: number;
  name: string;
  nim: string;
  role: string;
}

interface Announcement {
  id: number;
  title: string;
  date: string;
  content: string;
  tag: string;
}

interface QuickLink {
  id: number;
  icon: string;
  label: string;
  desc: string;
  href: string;
  accent: boolean;
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [activeAnn, setActiveAnn] = useState<number | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const adminProfile: StudentData = {
    id: 1,
    name: "Lalu Muhammad Iffat Zarqaa",
    nim: "102022500174",
    role: "Administrator Kelas",
  };

  const [announcements] = useState<Announcement[]>([
    {
      id: 1,
      title: "Pengumpulan Tugas Sistem Informasi",
      date: "15 Jun 2026",
      content: "Harap mengumpulkan progres mock-up UI/UX sebelum tenggat waktu yang telah ditentukan. Pastikan semua aset sudah di-export dengan benar.",
      tag: "Deadline",
    },
    {
      id: 2,
      title: "Sesi Review Proyek Akhir",
      date: "20 Jun 2026",
      content: "Sesi presentasi dan review bersama dosen pembimbing akan dilaksanakan secara hybrid. Siapkan demo interaktif dari aplikasi Anda.",
      tag: "Acara",
    },
    {
      id: 3,
      title: "Update Repositori GitHub Kelas",
      date: "12 Jun 2026",
      content: "Template starter untuk tugas minggu ini sudah di-push ke branch main. Clone ulang jika Anda sudah fork sebelumnya.",
      tag: "Info",
    },
  ]);

  const quickLinks: QuickLink[] = [
    { id: 1, icon: "⌥", label: "Repositori GitHub", desc: "Source code & kolaborasi", href: "#", accent: true },
    { id: 2, icon: "◈", label: "Modul Pembelajaran", desc: "Materi & referensi kelas", href: "#", accent: false },
    { id: 3, icon: "◇", label: "Zrqa Academic Web", desc: "Portal utama akademik", href: "#", accent: false },
  ];

  const heroSection = useInView();
  const annSection = useInView();
  const profileSection = useInView();

  const initials = adminProfile.name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('');

  return (
    <div className="zrqa-root">
      {/* Ambient background orbs */}
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />

      {/* ── HEADER ── */}
      <header
        ref={heroSection.ref}
        className={`hero-header ${mounted && heroSection.inView ? 'is-visible' : ''}`}
      >
        <div className="hero-inner">
          <div className="hero-eyebrow">
            <span className="badge-pill">Tahun Ajaran 2025/2026</span>
            <span className="dot-sep" aria-hidden="true" />
            <span className="eyebrow-text">Lab Zrqa-Acad</span>
          </div>

          <h1 className="hero-title">
            <span className="title-line">Portal</span>
            <span className="title-line accent-line">Zrqa-Acad</span>
          </h1>

          <p className="hero-sub">
            Pusat informasi, repositori, dan manajemen kelas — satu tempat untuk semua kebutuhan akademikmu.
          </p>

          <div className="hero-meta">
            <span className="meta-chip">
              <span className="chip-dot" />
              {announcements.length} Pengumuman aktif
            </span>
            <span className="meta-chip">
              <span className="chip-dot chip-dot--amber" />
              Semester Genap
            </span>
          </div>
        </div>

        <div className="hero-deco" aria-hidden="true">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="4 6" />
            <circle cx="100" cy="100" r="55" stroke="var(--accent)" strokeWidth="0.5" opacity="0.5" />
            <circle cx="100" cy="100" r="8" fill="var(--accent)" opacity="0.8" />
            <line x1="100" y1="20" x2="100" y2="45" stroke="var(--accent)" strokeWidth="0.8" />
            <line x1="100" y1="155" x2="100" y2="180" stroke="var(--accent)" strokeWidth="0.8" />
            <line x1="20" y1="100" x2="45" y2="100" stroke="var(--accent)" strokeWidth="0.8" />
            <line x1="155" y1="100" x2="180" y2="100" stroke="var(--accent)" strokeWidth="0.8" />
          </svg>
        </div>
      </header>

      {/* ── MAIN GRID ── */}
      <main className="main-grid">

        {/* ── ANNOUNCEMENTS ── */}
        <section
          ref={annSection.ref}
          className={`ann-section ${annSection.inView ? 'is-visible' : ''}`}
        >
          <div className="section-header">
            <h2 className="section-title">Papan Pengumuman</h2>
            <span className="section-count">{announcements.length}</span>
          </div>

          <div className="ann-list">
            {announcements.map((item, i) => (
              <article
                key={item.id}
                className={`ann-card ${activeAnn === item.id ? 'is-open' : ''}`}
                style={{ animationDelay: `${i * 80}ms` }}
                onClick={() => setActiveAnn(activeAnn === item.id ? null : item.id)}
              >
                <div className="ann-card-top">
                  <div className="ann-card-left">
                    <span className={`ann-tag ann-tag--${item.tag.toLowerCase()}`}>{item.tag}</span>
                    <h3 className="ann-title">{item.title}</h3>
                  </div>
                  <div className="ann-card-right">
                    <time className="ann-date">{item.date}</time>
                    <span className="ann-chevron" aria-hidden="true">{activeAnn === item.id ? '−' : '+'}</span>
                  </div>
                </div>
                <div className="ann-body">
                  <p className="ann-content">{item.content}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── SIDEBAR ── */}
        <aside
          ref={profileSection.ref}
          className={`sidebar ${profileSection.inView ? 'is-visible' : ''}`}
        >
          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-bg-line" aria-hidden="true" />
            <div className="avatar" aria-label={`Inisial ${initials}`}>
              {initials}
              <span className="avatar-ring" aria-hidden="true" />
            </div>
            <div className="profile-info">
              <p className="profile-name">{adminProfile.name}</p>
              <p className="profile-nim">{adminProfile.nim}</p>
              <span className="profile-role">{adminProfile.role}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="links-card">
            <h2 className="links-title">Akses Cepat</h2>
            <ul className="links-list" role="list">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`link-item ${link.accent ? 'link-item--accent' : ''}`}
                  >
                    <span className="link-icon" aria-hidden="true">{link.icon}</span>
                    <span className="link-text">
                      <span className="link-label">{link.label}</span>
                      <span className="link-desc">{link.desc}</span>
                    </span>
                    <span className="link-arrow" aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer tag */}
          <p className="sidebar-footer">
            Dipersembahkan oleh<br />
            <strong>Lab Zrqa Academic-Web</strong>
          </p>
        </aside>
      </main>
    </div>
  );
};

export default App;