import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Cing Haji Travel dan Umroh",
  description: "Biro perjalanan umroh dan haji terpercaya dengan legalitas lengkap dan pelayanan profesional",
  icons: {
    icon: '/logo-cinghaji.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable}`}>
      <body className="font-poppins antialiased">
        <Navbar />
        <main className="min-h-screen bg-white pt-32 md:pt-0">
          {children}
        </main>
      </body>
    </html>
  );
}
