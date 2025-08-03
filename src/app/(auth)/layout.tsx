import { requireAuth } from './_action/require-auth';

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
  await requireAuth();

  return <>{children}</>;
}
