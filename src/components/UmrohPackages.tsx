"use client";

import { useState } from 'react';

const tabs = [
  {
    id: 'documents',
    label: 'Dokumen Persyaratan',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">A. Persyaratan Dokumen Umroh</h3>
        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-gray-700 text-lg">Paspor Asli 48 halaman (minimal nama 3 kata dan masa berlaku 12 bulan dari tanggal keberangkatan).</span>
        </div>
        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-gray-700 text-lg">Fotocopy KTP berukuran A4 & Kartu Keluarga.</span>
        </div>
        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-gray-700 text-lg">Fotocopy Buku Nikah (bagi pasangan suami istri).</span>
        </div>
         <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-gray-700 text-lg">Pas Photo ukuran 4x6 sebanyak 3 lembar (background foto warna putih dengan fokus wajah 80%). Dibelakang foto harap dituliskan nama lengkap sesuai Paspor.</span>
        </div>
         <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-gray-700 text-lg">Buku Kuning Suntik Meningitis (berlaku hingga tanggal kepulangan).</span>
        </div>
         <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-gray-700 text-lg">Fotocopy Akta Kelahiran (khusus untuk anak berusia ≤ 17 tahun).</span>
        </div>

        <div className="mt-8 space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed"><strong>Kapan dokumen persyaratan umroh diserahkan?</strong></p>
            <p className="text-gray-700 text-md leading-relaxed">Paling lambat 1 bulan sebelum tanggal keberangkatan.</p>

            <p className="text-gray-700 text-lg leading-relaxed"><strong>Apabila saya berada di luar jakarta, bagaimana cara pengiriman dokumennya?</strong></p>
            <p className="text-gray-700 text-md leading-relaxed">Dokumen bisa dikirimkan dengan jasa ekspedisi dengan asuransi ke alamat CH Tour Travel, harap dicantumkan nama PIC nya dan tanggal keberangkatan.</p>

            <p className="text-gray-700 text-lg leading-relaxed"><strong>Siapakah yang akan memproses visa? Dan kapan waktu untuk proses visa?</strong></p>
            <p className="text-gray-700 text-md leading-relaxed">Proses visa akan dilakukan oleh CH Tour Travel setelah kami menerima seluruh persyaratan dokumen atau paling cepat 4 minggu sebelum keberangkatan.</p>
        </div>
      </div>
    )
  },
  {
    id: 'equipment',
    label: 'Perlengkapan Umroh',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">B. PERLANGKAPAN UMROH</h3>
         <p className="text-gray-700 text-lg leading-relaxed mb-6">Perlengkapan apa saja yang diperoleh dari Dream Tour?</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 text-lg mb-2">Koper ukuran 24 inch.</h3>
            <p className="text-gray-600 text-sm">Standar untuk perjalanan umroh</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 text-lg mb-2">Tas selempang.</h3>
            <p className="text-gray-600 text-sm">Untuk barang pribadi saat di Tanah Suci</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 text-lg mb-2">Tas Sandal.</h3>
            <p className="text-gray-600 text-sm">Untuk menyimpan sandal saat di Masjid</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
             <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
            <h3 className="font-semibold text-gray-800 text-lg mb-2">Buku doa.</h3>
            <p className="text-gray-600 text-sm">Panduan ibadah</p>
          </div>
         <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center transition-transform duration-300 hover:-translate-y-2">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
             <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-800 text-lg mb-2">Baju koko, kain dan sabuk ihram, bahan batik (khusus jamaah laki-laki).</h3>
          <p className="text-gray-600 text-sm">Perlengkapan khusus laki-laki</p>
        </div>
         <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center transition-transform duration-300 hover:-translate-y-2">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
             <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4m5 3h1m-1 0l-.354-.354m-.353.354a.5.5 0 00.707 0zm0 0a.5.5 0 00-.707 0zm-2.929 0l-.353.354m.353-.354a.5.5 0 00-.707 0zm0 0a.5.5 0 00.707 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5a2 2 0 00-2 2v2a2 2 0 002 2h14a2 2 0 002-2v-2a2 2 0 00-2-2z" /></svg>
          </div>
          <h3 className="font-semibold text-gray-800 text-lg mb-2">Mukena dan batik berupa outer ( khusus jamaah perempuan).</h3>
          <p className="text-gray-600 text-sm">Perlengkapan khusus perempuan</p>
        </div>
        </div>

        <div className="mt-8 space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed"><strong>Kapan saya dapat mengambil perlengkapan ?</strong></p>
            <p className="text-gray-700 text-md leading-relaxed">Setelah melakukan pembayaran DP, Anda dapat langsung mengambil perlengkapan.</p>

            <p className="text-gray-700 text-lg leading-relaxed"><strong>Jika saya berdomisili diluar kota, Bagaimana saya dapat menerima perlengkapan umroh?</strong></p>
            <p className="text-gray-700 text-md leading-relaxed">Kami dapat mengirimkan perlengkapan ke alamat tempat tinggal Anda. (Biaya ekspedisi ditanggung Jamaah)</p>

             <p className="text-gray-700 text-md leading-relaxed">NB : lebih lengkap dapat dilihat pada katalog perlengkapan CH Tour.</p>
        </div>
      </div>
    )
  },
  {
    id: 'schedule',
    label: 'Jadwal Manasik',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">C. MANASIK</h3>
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">Kapan manasik dilaksanakan?</h3>
                <p className="text-gray-600">Manasik akan dilaksanakan 2 (dua) – 4 (empat) minggu sebelum keberangkatan</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">Berapa kali manasik dilaksanakan?</h3>
                <p className="text-gray-600">Manasik dilaksanakan 2 kali. 1 kali di Jakarta dan 1 kali di Madinah (1 hari sebelum menuju Makkah).</p>
              </div>
            </div>
             <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">Dimana manasik dilaksanakan?</h3>
                <p className="text-gray-600">Pelaksanaan Manasik di Tangerang untuk lokasinya akan di Hotel Pakon, Sedangkan pelaksanaan Manasik di Madinah, akan disampaikan ketika berada di Madinah.</p>
              </div>
            </div>
             <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                 <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.465 6.364 6 8.309 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a9.965 9.965 0 01-2.867 0M7 17a9.965 9.965 0 00-2.867 0m10.234 0a.997.997 0 00.232-.002zM7 17a.997.997 0 00.232-.002zM12 21a.997.997 0 00.232-.002z" /></svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">Kapan saya menerima undangan untuk Manasik?</h3>
                <p className="text-gray-600">Undangan Manasik akan dikirimkan melalui Whatsapp dari PIC CH Tour paling lambat H-3 sebelum pelaksanaan Manasik.</p>
              </div>
            </div>
             <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                 <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">Pakaian apa yang harus saya kenakan saat Manasik, dan apa saja yang harus dibawa ?</h3>
                <p className="text-gray-600">Pakaian bebas, rapih dan sopan. Dan tidak ada yang perlu dibawa, namun jika Anda ingin membawa buku doa dan alat tulis tidak apa-apa..</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                 <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">Apa saja yang dibahas ketika Manasik?</h3>
                <p className="text-gray-600">Pembahasan ketika Manasik, antara lain: Rukun, Wajib, dan Sunnah Umroh. Cara menggunakan kain ihrom. Informasi terkait teknis perjalanan yang didalamnya mencakup Rencana program perjalanan, Prakiraan cuaca, dan Barang bawaan yang perlu diperhatikan</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
];

export default function UmrohPackages() {
  const [activeTab, setActiveTab] = useState('documents');

  return (
    <section id="paket-umroh" className="py-24 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">PAKET UMROH</h2>
          <p className="text-xl text-gray-700">(FREQUENTLY ASKED QUESTION)</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-5xl mx-auto animate-fade-in delay-200">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-8 py-3 rounded-full font-semibold text-lg transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 transform hover:-translate-y-1 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200">
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
} 