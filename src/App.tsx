import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// ── Import Komponen Landing Page ──
import AnnouncementBoard from './components/AnnouncementBoard';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import QuickLinks from './components/QuickLinks';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';

// ── Import Halaman Baru ──
import AuthPortal from './components/AuthPortal';

// ── Types ──
import type { Announcement } from './components/AnnouncementBoard';
import type { StudentData } from './components/ProfileCard';
import type { QuickLink } from './components/QuickLinks';

/* ── Static Data ── */

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

/* ── Komponen Halaman Utama (Landing Page) ── */
const LandingPage: React.FC = () => {
  return (
    <div className="app-root">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Features />
        <Stats />
        <Benefits />
        <Testimonials />
        <FAQ />
        
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
              <div className="dashboard-main">
                <AnnouncementBoard announcements={ANNOUNCEMENTS} />
              </div>

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
      <Footer />
    </div>
  );
};

/* ── App (Pengatur Routing Utama) ── */
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Route default akan menampilkan LandingPage */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Route /masuk akan merender UI Login yang baru */}
        <Route path="/masuk" element={<AuthPortal />} />
      </Routes>
    </Router>
  );
};

export default App;