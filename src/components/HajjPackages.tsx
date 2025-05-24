"use client";

import { useState } from 'react';

const faqItems = [
  {
    question: "A. Apa Bedanya Haji Khusus dan Haji Reguler ?",
    answer: "Haji Khusus (ONH Plus) diselenggarakan oleh travel haji resmi (swasta) dengan fasilitas eksklusif hotel bintang 5, dengan masa tunggu 5 hingga 8 tahun. Haji Reguler diselenggarakan oleh pemerintah dengan cara mendaftar ke bank syariah, fasilitas ekonomis, waktu tunggu biasanya lebih dari 15 tahun."
  },
  {
    question: "B. Bagaimana Alur Pendaftaran Haji Khusus ?",
    answer: "1. Menyerahkan dokumen yang disebutkan pada syarat pendaftaran diatas\n2. Melunasi Uang muka (DP) sebesar USD4.500\n3. Jamaah Mendapat Bukti Kwitansi dari Cing Haji Travel\n4. Proses Input data ke sistem Siskohat Departemen Agama RI.\n5. Alhijaz setor uang pangkal ke Rekening Menteri Agama RI.\n6. Kurang Lebih 2 pekan Calon Jamaah Haji mendapat lembar BPIH (Bukti Pembayaran Ibadah Haji) yg diterbikan oleh Bank Syariah.\n7. Di lembar surat BPIH tercantum Nomor Porsi / thaun keberangkatan serrta nomor SPPH (Surat Pendaftaran Pergi Haji."
  },
  {
    question: "C. Apa yang dimaksud dengan Haji Tamattu ?",
    answer: "Hampir semua travel haji Indonesia melaksanakan haji dengan niat haji tamattu. Haji Tamattu adalah mendahulukan pelaksanaan Umroh lalu kemudian Haji"
  },
  {
    question: "D. Apakah Saya bisa berangkat Haji Plus tahun depan ?",
    answer: "Kemungkinan kecil bisa langsung berangkat, karena pada umumnya masa tunggu haji khusus adalah 5 – 8 tahun. Itu sudah jauh lebih cepat dibanding haji reguler (pemerintah)"
  },
  {
    question: "E. Berapa tahun masa tunggu Haji Khusus CingHaji ?",
    answer: "Masa tunggu sekitar 5 hingga 8 Tahun. Masa tunggu juga dapat di cek melalui website Kementerian Agama Republik Indonesia."
  }
];

export default function HajjPackages() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="haji-khusus" className="py-24 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Haji Khusus
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Pertanyaan Umum</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">Informasi lengkap seputar program haji khusus kami</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-3xl mx-auto animate-fade-in delay-200">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="mb-4 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover-lift"
            >
              <button
                className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center focus:outline-none focus:bg-gray-50 group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">{String.fromCharCode(65 + index)}</span>
                  </div>
                  <span className="font-semibold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
                    {item.question}
                  </span>
                </div>
                <svg
                  className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <div className="px-8 py-6 bg-gray-50 text-gray-700 leading-relaxed border-t border-gray-100">
                  <p className="whitespace-pre-line">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in delay-300">
          <a href="#kontak" className="group inline-block">
            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 transform hover:-translate-y-1 group-hover:shadow-2xl">
              Konsultasi Haji Khusus
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
} 