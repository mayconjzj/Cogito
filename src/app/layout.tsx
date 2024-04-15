import './globals.css';
import { Metadata } from 'next';

import { Header } from '@/components/header';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: {
    default: 'F',
    template: '%s | F',
    absolute: 'F'
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
      <body>
        <Providers attribute="class" defaultTheme="light">
          <Header />
          <main className="pt-6 px-4">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
