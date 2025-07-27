import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'Not Found',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <Link href='/'>Topへ戻る</Link>
    </div>
  );
}
