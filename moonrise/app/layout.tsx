import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My App',
  description: 'Generated by Next.js',
};

const DynamicNavbar = dynamic(() => import('@/components/Navbar'), { ssr: false });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <DynamicNavbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}