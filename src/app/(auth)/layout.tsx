import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { auth } from '@/shared/lib/auth';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    template: '%s | dashboard | Auth Test',
    default: 'dashboard',
  },
  description: 'dashboard',
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
