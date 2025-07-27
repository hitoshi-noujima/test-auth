import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard Page',
  description: 'Dashboard Page',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/sign-in');
  }

  return (
    <div>
      <h1>ダッシュボード</h1>
      <p>ようこそ {session.user.name} さん</p>
      <hr />
      {children}
    </div>
  );
}
