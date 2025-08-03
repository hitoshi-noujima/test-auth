import { redirect } from 'next/navigation';

import { getCurrentUser } from '@/shared/lib/helpers';

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
  const user = await getCurrentUser();

  if (!user) {
    redirect('/sign-in');
  }

  return <>{children}</>;
}
