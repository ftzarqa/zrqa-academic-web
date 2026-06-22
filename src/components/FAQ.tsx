import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

interface FAQItem {
  id:       number;
  question: string;
  answer:   string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id:       1,
    question: 'Apa itu Zrqa-Acad?',
    answer:   'Zrqa-Acad adalah platform akademik digital yang dikembangkan oleh Lab Zrqa-Acad untuk mendukung kegiatan perkuliahan. Platform ini mengintegrasikan manajemen kelas, repositori kode, jadwal kuliah, pengumuman, dan informasi akademik dalam satu portal yang modern dan mudah digunakan.',
  },
  {
    id:       2,
    question: 'Siapa yang bisa menggunakan platform ini?',
    answer:   'Platform ini dirancang untuk mahasiswa dan dosen yang terdaftar di Lab Zrqa-Acad. Setiap pengguna memiliki akses yang disesuaikan dengan perannya — mahasiswa dapat mengakses jadwal, nilai, dan pengumuman; dosen dapat mengelola kelas dan mengunggah materi.',
  },
  {
    id:       3,
    question: 'Bagaimana cara mendapatkan akun?',
    answer:   'Akun diberikan oleh Administrator Kelas saat awal semester. Kamu akan menerima detail akses melalui koordinator kelas atau secara langsung dari dosen yang bersangkutan. Pastikan data NIM-mu sudah terdaftar sebelum mencoba masuk ke portal.',
  },
  {
    id:       4,
    question: 'Apakah data akademik saya aman?',
    answer:   'Keamanan data adalah prioritas kami. Seluruh data akademik disimpan dengan enkripsi dan hanya dapat diakses oleh pengguna yang memiliki izin yang sesuai. Data pribadimu tidak dibagikan kepada pihak ketiga dan selalu dijaga kerahasiaannya.',
  },
  {
    id:       5,
    question: 'Apakah platform tersedia di smartphone?',
    answer:   'Ya! Zrqa-Acad dirancang dengan pendekatan mobile-first sehingga tampilannya menyesuaikan diri dengan sempurna di semua ukuran layar — dari smartphone hingga desktop. Kamu dapat mengaksesnya langsung melalui browser tanpa perlu mengunduh aplikasi tambahan.',
  },
  {
    id:       6,
    question: 'Bagaimana jika ada pengumuman baru?',
    answer:   'Setiap pengumuman baru dari dosen atau administrator kelas akan langsung tampil di papan pengumuman portal. Kamu disarankan untuk memeriksa portal secara berkala atau mengaktifkan notifikasi browser agar tidak melewatkan informasi penting terkait deadline atau agenda kelas.',
  },
];

const FAQ: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      ref={ref}
      className={`faq reveal ${inView ? 'is-visible' : ''}`}
      aria-labelledby="faq-heading"
    >
      <div className="section-container">
        <div className="section-header-block section-header-block--center">
          <span className="section-badge">Pertanyaan Umum</span>
          <h2 className="section-heading" id="faq-heading">
            Ada yang Ingin Kamu <span className="heading-gradient">Tanyakan?</span>
          </h2>
          <p className="section-subtitle">
            Berikut jawaban atas pertanyaan yang paling sering ditanyakan tentang Zrqa-Acad.
          </p>
        </div>

        <div className="faq-list" role="list">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`faq-item ${isOpen ? 'is-open' : ''}`}
                style={{ animationDelay: `${i * 60}ms` }}
                role="listitem"
              >
                <button
                  className="faq-question"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span
                    className={`faq-chevron ${isOpen ? 'faq-chevron--open' : ''}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  className="faq-answer"
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                  aria-hidden={!isOpen}
                >
                  <p className="faq-answer-text">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
