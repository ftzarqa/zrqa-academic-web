import React from 'react';

import Navbar            from './components/Navbar';
import Hero              from './components/Hero';
import Features          from './components/Features';
import Stats             from './components/Stats';
import Benefits          from './components/Benefits';
import Testimonials      from './components/Testimonials';
import FAQ               from './components/FAQ';
import AnnouncementBoard from './components/AnnouncementBoard';
import ProfileCard       from './components/ProfileCard';
import QuickLinks        from './components/QuickLinks';
import Footer            from './components/Footer';

import type { Announcement }  from './components/AnnouncementBoard';
import type { StudentData }   from './components/ProfileCard';
import type { QuickLink }     from './components/QuickLinks';

/* ── Static Data (preserved from original) ── */

const ADMIN_PROFILE: StudentData = {
  id:   1,
  name: 'Lalu Muhammad Iffat Zarqaa',
  nim:  '102022500174',
  role: 'Administrator Kelas',
};

const ANNOUNCEMENTS: Announcement[] = [
  {
    id:      1,
    title:   'Pengumpulan Tugas Sistem Informasi',
    date:    '15 Jun 2026',
    content: 'Harap mengumpulkan progres mock-up UI/UX sebelum tenggat waktu yang telah ditentukan. Pastikan semua aset sudah di-export dengan benar.',
    tag:     'Deadline',
  },
  {
    id:      2,
    title:   'Sesi Review Proyek Akhir',
    date:    '20 Jun 2026',
    content: 'Sesi presentasi dan review bersama dosen pembimbing akan dilaksanakan secara hybrid. Siapkan demo interaktif dari aplikasi Anda.',
    tag:     'Acara',
  },
  {
    id:      3,
    title:   'Update Repositori GitHub Kelas',
    date:    '12 Jun 2026',
    content: 'Template starter untuk tugas minggu ini sudah di-push ke branch main. Clone ulang jika Anda sudah fork sebelumnya.',
    tag:     'Info',
  },
];

const QUICK_LINKS: QuickLink[] = [
  {
    id:     1,
    icon:   '⌥',
    label:  'Repositori GitHub',
    desc:   'Source code & kolaborasi',
    href:   '#',
    accent: true,
  },
  {
    id:     2,
    icon:   '◈',
    label:  'Modul Pembelajaran',
    desc:   'Materi & referensi kelas',
    href:   '#',
    accent: false,
  },
  {
    id:     3,
    icon:   '◇',
    label:  'Zrqa Academic Web',
    desc:   'Portal utama akademik',
    href:   '#',
    accent: false,
  },
];

/* ── App ── */

const App: React.FC = () => {
  return (
    <div className="app-root">
      {/* ── Navigation ── */}
      <Navbar />

      {/* ── Main content ── */}
      <main id="main-content">

        {/* 1. Hero */}
        <Hero />

        {/* 2. Features */}
        <Features />

        {/* 3. Statistics */}
        <Stats />

        {/* 4. Benefits */}
        <Benefits />

        {/* 5. Testimonials */}
        <Testimonials />

        {/* 6. FAQ */}
        <FAQ />

        {/* 7. Dashboard section (announcements + profile + links) */}
        <section
          id="pengumuman"
          className="dashboard-section"
          aria-labelledby="dashboard-heading"
        >
          <div className="section-container">
            <div className="section-header-block">
              <span className="section-badge">Portal Kelas</span>
              <h2 className="section-heading" id="dashboard-heading">
                Dashboard <span className="heading-gradient">Kelas</span>
              </h2>
              <p className="section-subtitle">
                Pantau pengumuman terbaru, akses cepat sumber daya kelas, dan lihat profil akademikmu.
              </p>
            </div>

            <div className="dashboard-grid">
              {/* Announcement board */}
              <div className="dashboard-main">
                <AnnouncementBoard announcements={ANNOUNCEMENTS} />
              </div>

              {/* Sidebar */}
              <aside className="dashboard-sidebar" aria-label="Informasi profil dan tautan cepat">
                <ProfileCard profile={ADMIN_PROFILE} />
                <QuickLinks links={QUICK_LINKS} />
                <p className="dashboard-footer-note">
                  Dipersembahkan oleh<br />
                  <strong>Lab Zrqa Academic-Web</strong>
                </p>
              </aside>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
};

export default App;