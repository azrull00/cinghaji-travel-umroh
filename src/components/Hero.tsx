import Image from 'next/image';

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden pt-28 md:pt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gallery/cinghaji1.jpg"
          alt="Kaaba"
          fill
          className="object-cover object-center scale-105 animate-ken-burns"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-800/80 to-blue-700/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center lg:text-left">
        <div className="max-w-5xl mx-auto lg:mx-0 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            <p className="text-blue-100 text-sm font-medium">Biro Perjalanan Umroh & Haji Terpercaya</p>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">
            CING HAJI TOUR & TRAVEL
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 font-light drop-shadow-sm max-w-3xl mx-auto lg:mx-0">
            Melayani Perjalanan Ibadah Anda dengan Sepenuh Hati
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <a href="#paket-umroh" className="group">
              <button className="bg-white text-blue-800 px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:bg-blue-100 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 group-hover:shadow-2xl">
                Lihat Paket Umroh
                <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </a>
            <a href="#kontak" className="group">
              <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 group-hover:shadow-2xl">
                Konsultasi Gratis
                <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Subtle Islamic Pattern Overlay (Optional) */}
      {/* Could add a div with a subtle background image or SVG pattern here */}

    </section>
  );
} 