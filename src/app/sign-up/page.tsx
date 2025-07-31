import { SignUp } from '@/ui/pages/SignUp';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Sign Up',
};

export default function Page() {
  return <SignUp />;
}
