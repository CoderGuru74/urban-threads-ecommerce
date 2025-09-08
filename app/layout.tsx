// app/layout.tsx

import type { Metadata } from 'next';
import { Montserrat, Lato } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer'; // We will create this next

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['700'],
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Urban Threads | Style Redefined',
  description: 'Discover the latest trends in urban fashion with Urban Threads. Premium quality clothing and accessories for the modern lifestyle.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${lato.variable} font-sans`}
      >
        <div className="flex min-h-screen flex-col bg-white text-charcoal">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}