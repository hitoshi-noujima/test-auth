import { Dashboard } from '@/ui/pages/Dashboard';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ダッシュボード',
  description: 'ダッシュボード',
};

export default function Page() {
  return <Dashboard />;
}
