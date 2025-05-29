import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Script from 'next/script';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cinghaji.com'),
  title: {
    template: '%s | Cing Haji Travel dan Umroh',
    default: 'Cing Haji Travel dan Umroh - Travel Umroh & Haji Terpercaya di Tangerang',
  },
  description: "Cing Haji Travel menyediakan paket umroh reguler, plus, dan haji dengan pelayanan profesional. Dapatkan pengalaman ibadah yang nyaman dengan bimbingan ustadz berpengalaman. Berizin resmi Kemenag RI.",
  keywords: [
    "travel umroh tangerang",
    "paket umroh sepatan",
    "travel haji tangerang",
    "paket haji khusus",
    "umroh murah tangerang",
    "umroh terpercaya sepatan",
    "travel umroh sepatan",
    "cing haji travel",
    "paket umroh plus",
    "paket umroh reguler",
    "biro haji umroh resmi",
    "travel umroh berizin"
  ],
  authors: [{ name: "Cing Haji Travel", url: "https://www.cinghaji.com" }],
  creator: "Cing Haji Travel",
  publisher: "Cing Haji Travel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.png',
    apple: '/icons/icon-192x192.png',
  },
  manifest: '/manifest.json',
  applicationName: "Cing Haji Travel dan Umroh",
  referrer: "origin-when-cross-origin",
  category: "travel",
  classification: "Travel Agency",
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://www.cinghaji.com',
    title: 'Cing Haji Travel dan Umroh - Travel Umroh & Haji Terpercaya di Tangerang',
    description: 'Cing Haji Travel menyediakan paket umroh reguler, plus, dan haji dengan pelayanan profesional. Dapatkan pengalaman ibadah yang nyaman dengan bimbingan ustadz berpengalaman.',
    siteName: 'Cing Haji Travel dan Umroh',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Cing Haji Travel dan Umroh - Paket Umroh Terpercaya',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cing Haji Travel dan Umroh - Travel Umroh & Haji Terpercaya di Tangerang',
    description: 'Cing Haji Travel menyediakan paket umroh reguler, plus, dan haji dengan pelayanan profesional.',
    images: ['/og-image.jpg'],
    creator: '@cinghaji',
    site: '@cinghaji',
  },
  alternates: {
    canonical: 'https://www.cinghaji.com',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
  other: {
    'facebook-domain-verification': 'your-facebook-domain-verification',
    'google-site-verification': 'your-google-site-verification',
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Cing Haji Travel dan Umroh",
  "image": "https://www.cinghaji.com/logo-cinghaji.jpg",
  "@id": "https://www.cinghaji.com",
  "url": "https://www.cinghaji.com",
  "telephone": "+62-21-5574-6715",
  "priceRange": "Rp25.000.000 - Rp100.000.000",
  "description": "Biro perjalanan umroh dan haji terpercaya dengan legalitas lengkap dan pelayanan profesional. Menyediakan paket umroh reguler, plus, dan haji dengan harga terbaik.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Sudirman RT. 02 RW. 01",
    "addressLocality": "Sepatan",
    "addressRegion": "Tangerang",
    "postalCode": "15520",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -6.1221316,
    "longitude": 106.5772916
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "17:00"
  },
  "sameAs": [
    "https://www.facebook.com/cinghaji",
    "https://www.instagram.com/cinghaji",
    "https://www.youtube.com/cinghaji"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Paket Umroh dan Haji",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "TravelAction",
          "name": "Paket Umroh Reguler"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "TravelAction",
          "name": "Paket Umroh Plus"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "TravelAction",
          "name": "Paket Haji Khusus"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable}`}>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Cing Haji" />
      </head>
      <body className="font-poppins antialiased">
        <Navbar />
        <main className="min-h-screen bg-white pt-32 md:pt-0">
          {children}
        </main>
      </body>
    </html>
  );
}
