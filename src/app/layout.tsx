import type { Metadata } from 'next';

import { Analytics } from '@vercel/analytics/react';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import './globals.css';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: {
    default: 'Cogito',
    template: '%s | Cogito',
    absolute: 'Cogito'
  },
  description:
    'Cogito: Explorando o Conhecimento Geral. Artigos envolventes e curiosidades para expandir sua mente. Descubra mais conosco!',
  openGraph: {
    title: 'Cogito',
    description:
      'Cogito: Explorando o Conhecimento Geral. Artigos envolventes e curiosidades para expandir sua mente. Descubra mais conosco!'
  },
  twitter: {
    title: 'Cogito',
    description:
      'Cogito: Explorando o Conhecimento Geral. Artigos envolventes e curiosidades para expandir sua mente. Descubra mais conosco!'
  },
  authors: [{ name: 'Maycon Douglas', url: 'https://github.com/mayconjzj' }],
  category: 'Blog',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`
  },
  keywords: ['Cogito', 'Conhecimento Geral', 'Artigos', 'Curiosidades']
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="max-w-[1000px] mx-auto px-2">
        <Providers attribute="class" defaultTheme="dark">
          <Header />
          {children}
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
