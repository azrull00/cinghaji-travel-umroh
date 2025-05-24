import Image from 'next/image';

export default function About() {
  return (
    <section id="tentang" className="py-24 bg-gradient-to-b from-gray-100 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Tentang Kami
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Mengapa Memilih Kami?</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">Berbekal pengalaman yang mumpuni dalam melayani jamaah umroh dan haji</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in delay-200">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover-lift">
              <p className="text-gray-700 text-lg leading-relaxed">
                Berbekal pengalaman yang mumpuni di bidang umroh dan haji, dengan pelayanan yang memenuhi standar operasional, serta legalitas yang lengkap, membuat kami dapat melaksanakan niat untuk menjadi biro perjalanan yang amanah dan penuh tanggung jawab.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover-lift">
              <p className="text-gray-700 text-lg leading-relaxed">
                Semua pelayanan jasa yang dimiliki Cing Haji Travel adalah bukti komitmen kami untuk mengakomodir segala kebutuhan jamaah yang ingin memenuhi panggilan ke Baitullah sebagai tamu Allah SWT.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover-lift">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-blue-700 text-4xl font-bold">10+</div>
                </div>
                <div className="text-gray-800 font-semibold text-lg">Tahun Pengalaman</div>
                <p className="text-gray-600 text-sm">Melayani jamaah dengan sepenuh hati</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover-lift">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-blue-700 text-4xl font-bold">5000+</div>
                </div>
                <div className="text-gray-800 font-semibold text-lg">Jamaah Terlayani</div>
                <p className="text-gray-600 text-sm">Ribu jamaah telah berangkat bersama kami</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in delay-300">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/gallery/cinghaji4.jpg"
                alt="Tim Cing Haji"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover-lift">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-lg">Legalitas Lengkap</div>
                  <div className="text-sm text-gray-600">Terdaftar Resmi Kemenag RI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 