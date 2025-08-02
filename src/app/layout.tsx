import './globals.css';
import { Noto_Sans_JP } from 'next/font/google';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    template: '%s | Auth Test',
    default: 'Auth Test',
  },
  description: 'Auth Test',
};

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: false,
  variable: '--font-noto-sans-jp',
  display: 'swap',
  fallback: ['sans-serif'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJp.variable} data-theme="corporate">
      <body>
        <main className="px-20 py-12">{children}</main>
      </body>
    </html>
  );
}
