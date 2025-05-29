'use client';

import Image from 'next/image';

interface MapProps {
    className?: string;
}

export default function Map({ className = '' }: MapProps) {
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0000000000005!2d106.6271283!3d-6.178986999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8e7084f875d%3A0x76b093f8896f6c3!2sCing%20Haji%20Travel!5e0!3m2!1sen!2sid!4v1678886400000!5m2!1sen!2sid";
    const mapLink = "https://maps.app.goo.gl/GKwARdCXWf81rX4q9";

    return (
        <div className={`relative group bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-2 rounded-2xl shadow-xl ${className}`}>
            {/* Map Container */}
            <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out group-hover:shadow-blue-200/50 group-hover:scale-[1.01]">
                <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="transition-opacity duration-300 group-hover:opacity-95"
                />
            </div>

            {/* Location Info Card */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] md:w-auto md:max-w-md bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-2xl transition-all duration-500 ease-in-out group-hover:bottom-8 group-hover:shadow-blue-300/60 group-hover:scale-105">
                <div className="flex items-center mb-3">
                    <Image
                        src="/images/Logo/logo-cinghaji.jpg"
                        alt="Cing Haji Travel Logo"
                        width={48}
                        height={48}
                        className="rounded-lg mr-3 shadow-md"
                    />
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">
                            Cing Haji Travel & Umroh
                        </h3>
                        <p className="text-xs text-indigo-600 font-medium">
                            Kantor Pusat Tangerang
                        </p>
                    </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    Jl. Sudirman RT. 02 RW. 01 Kel. Sepatan Kec. Sepatan Kab. Tangerang Banten
                </p>

                <a
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                    <svg
                        className="w-5 h-5 inline-block mr-2 -mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 12.586l-4.293-4.293a1 1 0 011.414-1.414L10 10.172l2.879-2.879a1 1 0 111.414 1.414L10 12.586zM10 18a8 8 0 100-16 8 8 0 000 16z" />
                    </svg>
                    Buka di Google Maps
                </a>
            </div>
        </div>
    );
} 