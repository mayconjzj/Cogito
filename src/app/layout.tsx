import './globals.css';
import { Metadata } from 'next';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: {
    default: 'Gainly',
    template: '%s | Gainly',
    absolute: 'Gainly'
  },
  description:
    'Simplificando finanças. Dicas e estratégias para um futuro financeiro brilhante.',
  openGraph: {
    title: 'F',
    description:
      'Simplificando finanças. Dicas e estratégias para um futuro financeiro brilhante.'
  },
  twitter: {
    title: 'F',
    description:
      'Simplificando finanças. Dicas e estratégias para um futuro financeiro brilhante.'
  },
  authors: [{ name: 'Maycon Douglas', url: 'https://github.com/mayconjzj' }],
  category: 'Blog',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`
  },
  verification: {
    google: 'TxSfWovss5wRRrEt5OcWFHccbCtavJrUE9BnnYbOPzw'
  },
  keywords: [
    'Finanças pessoais',
    'Fundamentos financeiros',
    'Futuro financeiro',
    'Fazer investimentos',
    'Fiscalização financeira'
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3534989499820933"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <Providers attribute="class" defaultTheme="light">
          <Header />
          <main className="my-6 px-2">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
