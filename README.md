<p align="center">
  <img src="public/favicon.svg" alt="ZRQA Academic Web Logo" width="80" />
</p>

<h1 align="center">🎓 ZRQA Academic Web</h1>

<p align="center">
  <strong>Portal Akademik Interaktif — Lab Sistem Informasi, Telkom University</strong>
</p>

<p align="center">
  <em>Dibangun dengan desain neon futuristik, glassmorphism, dan animasi fluid yang memukau.</em>
</p>

<p align="center">
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 6" />
  </a>
  <a href="https://vite.dev/">
    <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 8" />
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4" />
  </a>
  <a href="https://www.framer.com/motion/">
    <img src="https://img.shields.io/badge/Framer_Motion-12-E91E8C?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion 12" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-active-00e676?style=flat-square" alt="Status" />
  <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="License" />
  <img src="https://img.shields.io/badge/platform-Web-blueviolet?style=flat-square" alt="Platform" />
</p>

---

## 📖 Deskripsi

**ZRQA Academic Web** adalah portal akademik interaktif yang dirancang khusus untuk **Lab Sistem Informasi (LSI)** di **Telkom University**. Proyek ini menampilkan informasi akademik mahasiswa dengan pengalaman visual yang _premium_ dan _immersive_.

Setelah melalui **overhaul besar-besaran pada UI/UX**, portal ini kini hadir dengan:

- 🌈 **Skema Warna Neon Vibrant** — Palet multi-hue neon (violet, cyan, hot pink, electric lime) yang dikombinasikan dengan efek glassmorphism, glow intensif, dan gradien multi-warna yang dinamis
- 🌊 **Animasi "Rigid and Smooth Flow"** — Konsep animasi unik yang memadukan cubic-bezier kustom dengan spring physics dari Framer Motion, menghasilkan interaksi yang tajam namun tetap halus dan organik
- 🏗️ **Arsitektur Modern** — Dibangun di atas React 19 dengan TypeScript untuk type-safety, Vite 8 untuk build yang sangat cepat, dan Tailwind CSS v4 untuk styling yang efisien

Portal ini dirancang agar tidak hanya fungsional, tetapi juga memberikan kesan **futuristik** dan **profesional** — sesuai dengan semangat inovasi Lab Sistem Informasi.

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|:------|:----------|
| 🎨 **Vibrant Modern UI** | Desain neon futuristik dengan glassmorphism, efek glow multi-layer, dan gradien multi-warna yang menciptakan tampilan premium dan memukau |
| ⚡ **Fluid Animations** | Konsep _"rigid and smooth flow"_ — perpaduan cubic-bezier kustom dan spring physics untuk animasi yang tajam, responsif, namun tetap halus |
| 📋 **Papan Pengumuman** | Board pengumuman interaktif dengan fitur expand/collapse, menampilkan informasi terkini Lab Sistem Informasi secara dinamis |
| 👤 **Profil Identitas** | Kartu profil mahasiswa dengan avatar animasi, menampilkan data identitas secara elegan dan informatif |
| 🔗 **Akses Cepat** | Kumpulan quick links ke repositori, modul pembelajaran, dan sumber daya akademik penting lainnya |
| 📊 **Statistik Real-time** | Counter animasi yang dipicu oleh scroll — angka-angka bergerak hidup saat pengguna menggulir ke bagian statistik |
| 💬 **Testimoni** | Carousel testimoni yang berputar otomatis dengan transisi smooth, menampilkan feedback dan pengalaman |
| ❓ **FAQ Interaktif** | Accordion FAQ dengan animasi pembukaan/penutupan yang mulus, memudahkan pencarian informasi |
| 📱 **Fully Responsive** | Tampilan yang optimal di semua perangkat — dari mobile, tablet, hingga desktop widescreen |
| ♿ **Aksesibilitas** | Mematuhi standar WCAG, mendukung `prefers-reduced-motion` untuk pengguna yang sensitif terhadap animasi |

---

## 🚀 Tech Stack

| Teknologi | Versi | Peran |
|:----------|:-----:|:------|
| **React** | 19 | Library UI berbasis komponen untuk membangun antarmuka yang reaktif dan modular |
| **TypeScript** | 6 | Superset JavaScript dengan static typing untuk keamanan tipe dan developer experience yang lebih baik |
| **Vite** | 8 | Build tool generasi baru dengan Hot Module Replacement (HMR) instan dan build production yang sangat cepat |
| **Tailwind CSS** | v4 | Framework CSS utility-first untuk styling yang cepat, konsisten, dan mudah di-maintain |
| **Framer Motion** | 12 | Library animasi deklaratif untuk React — menghadirkan spring physics, gesture, dan layout animations |
| **ESLint** | — | Linter untuk menjaga kualitas dan konsistensi kode JavaScript/TypeScript |

### Mengapa Kombinasi Ini?

> **React + TypeScript** memberikan fondasi yang solid dengan type-safety penuh. **Vite** memastikan development loop yang nyaris instan. **Tailwind CSS v4** menghilangkan bottleneck styling dengan utility classes. Dan **Framer Motion** melengkapi semuanya dengan animasi yang _production-grade_ tanpa boilerplate berlebih.

---

## 🎨 Design System

Portal ini menggunakan design token system yang konsisten untuk menjaga koherensi visual di seluruh komponen:

### Palet Warna Neon

```
Violet Primary   → #8B5CF6 / #A78BFA
Cyan Accent      → #06B6D4 / #22D3EE
Hot Pink         → #EC4899 / #F472B6
Electric Lime    → #84CC16 / #A3E635
```

### Glassmorphism

```css
/* Contoh efek glassmorphism yang digunakan */
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(16px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

### Animasi — "Rigid and Smooth Flow"

Konsep animasi ini memadukan dua filosofi:

- **Rigid** — Easing tajam dengan cubic-bezier kustom untuk memberikan kesan presisi dan _snappy_
- **Smooth Flow** — Spring physics (`stiffness`, `damping`, `mass`) dari Framer Motion untuk transisi yang organik dan hidup

```ts
// Contoh konfigurasi spring
const smoothSpring = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 0.8,
};
```

---

## 🛠️ Cara Menjalankan

### Prasyarat

Pastikan sistem Anda telah terinstal:

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (atau **yarn** / **pnpm**)
- **Git**

### Langkah-langkah

**1. Clone repositori**

```bash
git clone https://github.com/ftzarqa/zrqa-academic-web.git
cd zrqa-academic-web
```

**2. Install dependensi**

```bash
npm install
```

**3. Jalankan development server**

```bash
npm run dev
```

Buka browser dan akses `http://localhost:5173` — perubahan kode akan langsung ter-reflect berkat Vite HMR.

**4. Build untuk production**

```bash
npm run build
```

**5. Preview hasil build**

```bash
npm run preview
```

### Perintah Tambahan

| Perintah | Deskripsi |
|:---------|:----------|
| `npm run dev` | Menjalankan development server dengan HMR |
| `npm run build` | Membuat bundle production yang teroptimasi |
| `npm run preview` | Preview hasil build secara lokal |
| `npm run lint` | Menjalankan ESLint untuk pengecekan kualitas kode |

---

## 📁 Struktur Proyek

```
zrqa-academic-web/
│
├── public/                     # Aset statis publik
│   ├── favicon.svg             # Ikon favicon
│   └── icons.svg               # Sprite ikon SVG
│
├── src/                        # Source code utama
│   ├── assets/                 # Aset gambar & media
│   │   ├── hero.png            # Gambar hero section
│   │   ├── react.svg           # Logo React
│   │   └── vite.svg            # Logo Vite
│   │
│   ├── components/             # Komponen React
│   │   ├── AnnouncementBoard.tsx   # 📋 Papan pengumuman interaktif
│   │   ├── Benefits.tsx            # 💎 Section keunggulan/manfaat
│   │   ├── FAQ.tsx                 # ❓ FAQ accordion interaktif
│   │   ├── Features.tsx            # ⭐ Showcase fitur utama
│   │   ├── Footer.tsx              # 🦶 Footer dengan links & info
│   │   ├── Hero.tsx                # 🦸 Hero section dengan CTA
│   │   ├── Navbar.tsx              # 🧭 Navigasi responsif
│   │   ├── ProfileCard.tsx         # 👤 Kartu profil mahasiswa
│   │   ├── QuickLinks.tsx          # 🔗 Akses cepat ke resources
│   │   ├── Stats.tsx               # 📊 Statistik dengan counter animasi
│   │   └── Testimonials.tsx        # 💬 Carousel testimoni
│   │
│   ├── hooks/                  # Custom React hooks
│   │   └── useInView.ts        # Hook untuk deteksi elemen dalam viewport
│   │
│   ├── App.css                 # Styling khusus App
│   ├── App.tsx                 # Komponen root aplikasi
│   ├── index.css               # Global styles & design tokens
│   └── main.tsx                # Entry point aplikasi
│
├── index.html                  # Template HTML utama
├── package.json                # Dependensi & scripts
├── vite.config.ts              # Konfigurasi Vite
├── tsconfig.json               # Konfigurasi TypeScript (base)
├── tsconfig.app.json           # Konfigurasi TypeScript (app)
├── tsconfig.node.json          # Konfigurasi TypeScript (node)
└── eslint.config.js            # Konfigurasi ESLint
```

---

## 🤝 Kontribusi

Kontribusi sangat diapresiasi! Ikuti langkah-langkah berikut untuk berkontribusi:

1. **Fork** repositori ini
2. Buat **branch** baru untuk fitur Anda:
   ```bash
   git checkout -b fitur/fitur-baru-anda
   ```
3. **Commit** perubahan Anda:
   ```bash
   git commit -m "feat: tambah fitur baru yang keren"
   ```
4. **Push** ke branch Anda:
   ```bash
   git push origin fitur/fitur-baru-anda
   ```
5. Buat **Pull Request** dan jelaskan perubahan yang dilakukan

### Panduan Kontribusi

- Gunakan **TypeScript** dengan tipe yang jelas — hindari `any`
- Ikuti konvensi penamaan komponen yang sudah ada
- Pastikan kode lolos `npm run lint` sebelum membuat PR
- Tulis commit message yang deskriptif menggunakan format [Conventional Commits](https://www.conventionalcommits.org/)

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah **MIT License** — lihat file [LICENSE](LICENSE) untuk detail lengkap.

```
MIT License

Copyright (c) 2026 Lalu Muhammad Iffat Zarqaa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 💜 Credits

<table>
  <tr>
    <td align="center">
      <strong>Lalu Muhammad Iffat Zarqaa</strong><br />
      NIM: 102022500174<br />
      Lab Sistem Informasi — Telkom University<br /><br />
      <a href="https://github.com/ftzarqa">
        <img src="https://img.shields.io/badge/GitHub-ftzarqa-181717?style=for-the-badge&logo=github" alt="GitHub" />
      </a>
    </td>
  </tr>
</table>

---

<p align="center">
  Dibuat dengan 💜 dan ☕ oleh <strong>ZRQA</strong> — Lab Sistem Informasi, Telkom University
</p>

<p align="center">
  <sub>⚡ Powered by React 19 · TypeScript 6 · Vite 8 · Tailwind CSS v4 · Framer Motion 12</sub>
</p>
