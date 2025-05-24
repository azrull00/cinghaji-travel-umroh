import Image from 'next/image';

const galleryImages = [
  {
    src: '/images/gallery/cinghaji1.jpg',
    alt: 'Jamaah Umroh',
    title: 'Momen Perjalanan 1'
  },
  {
    src: '/images/gallery/cinghaji2.jpg',
    alt: 'Jamaah Umroh',
    title: 'Momen Perjalanan 2'
  },
  {
    src: '/images/gallery/cinghaji3.jpg',
    alt: 'Jamaah Umroh',
    title: 'Momen Perjalanan 3'
  },
  {
    src: '/images/gallery/cinghaji4.jpg',
    alt: 'Jamaah Umroh',
    title: 'Momen Perjalanan 4'
  },
  {
    src: '/images/gallery/cinghaji5.jpg',
    alt: 'Jamaah Umroh',
    title: 'Momen Perjalanan 5'
  },
  {
    src: '/images/gallery/cinghaji6.jpg',
    alt: 'Jamaah Umroh',
    title: 'Momen Perjalanan 6'
  }
];

export default function Gallery() {
  return (
    <section id="galeri" className="py-24 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Galeri Perjalanan</h2>
          <p className="text-xl text-gray-700">Momen indah perjalanan spiritual bersama kami</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in delay-200">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-video rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/40 transition-colors duration-300 z-10" />
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 bg-gradient-to-t from-black/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-1">{image.title}</h3>
                <p className="text-sm text-blue-100">Lihat Foto</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in delay-300">
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 transform hover:-translate-y-1">
            Lihat Galeri Lengkap
          </button>
        </div>
      </div>
    </section>
  );
} 