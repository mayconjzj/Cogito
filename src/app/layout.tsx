import type { Metadata } from 'next';

import { Analytics } from '@vercel/analytics/react';

import { Header } from '@/components/header';

import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: {
    default: 'Cogito',
    template: '%s | Cogito',
    absolute: 'Cogito'
  },
  description: 'Cogito'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="max-w-[1000px] mx-auto px-2">
        <Providers attribute="class" defaultTheme="light">
          <Header />
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
