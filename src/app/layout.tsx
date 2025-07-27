import './globals.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Auth Test',
  description: 'Auth Test',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
