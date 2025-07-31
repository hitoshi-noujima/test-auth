import { SignIn } from '@/ui/pages/SignIn';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign In',
};

export default function Page() {
  return <SignIn />;
}
