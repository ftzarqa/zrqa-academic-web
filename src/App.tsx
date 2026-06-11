import React, { useState } from 'react';

// TypeScript Interface: Menentukan struktur data dengan ketat
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
}

const App: React.FC = () => {
  // Data statis menggunakan TypeScript tipe StudentData
  const adminProfile: StudentData = {
    id: 1,
    name: "Lalu Muhammad Iffat Zarqaa",
    nim: "102022500174",
    role: "Administrator Kelas"
  };

  // State menggunakan React Hooks
  const [announcements] = useState<Announcement[]>([
    {
      id: 1,
      title: "Pengumpulan Tugas Sistem Informasi",
      date: "2026-06-15",
      content: "Harap mengumpulkan progres mock-up UI/UX sebelum tenggat waktu."
    }
  ]);

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      {/* Header Section */}
      <header className="bg-white shadow-sm rounded-xl p-6 mb-6 border-l-4 border-indigo-600 flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Portal Kelas SI-49-10</h1>
          <p className="text-slate-500 mt-1 text-sm md:text-base">Pusat informasi dan manajemen repositori kelas.</p>
        </div>
        <div className="hidden md:block">
          <span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg font-medium">
            Tahun Ajaran 2025/2026
          </span>
        </div>
      </header>

      {/* Main Layout Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Kolom Kiri: Papan Pengumuman */}
        <section className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4 text-slate-700 border-b pb-2">Papan Pengumuman</h2>
          
          <div className="space-y-4">
            {announcements.map((item) => (
              <div key={item.id} className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-800">{item.title}</h3>
                  <span className="text-xs bg-white px-2 py-1 rounded shadow-sm text-slate-500">{item.date}</span>
                </div>
                <p className="text-sm text-slate-600">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Kolom Kanan: Profil Admin & Quick Links */}
        <aside className="space-y-6">
          {/* Card Profil */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center">
            <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-md">
              {adminProfile.name.charAt(0)}
            </div>
            <h3 className="font-bold text-lg text-slate-800 text-center">{adminProfile.name}</h3>
            <p className="text-sm text-slate-500 font-mono mt-1">{adminProfile.nim}</p>
            <span className="mt-3 px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
              {adminProfile.role}
            </span>
          </div>

          {/* Card Menu Tambahan */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-3 text-slate-700">Akses Cepat</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="block px-3 py-2 text-sm text-indigo-600 bg-indigo-50 rounded hover:bg-indigo-100 transition">
                  📁 Repositori GitHub
                </a>
              </li>
              <li>
                <a href="#" className="block px-3 py-2 text-sm text-slate-600 bg-slate-50 rounded hover:bg-slate-100 transition">
                  📚 Modul Pembelajaran
                </a>
              </li>
            </ul>
          </div>
        </aside>

      </main>
    </div>
  );
};

export default App;