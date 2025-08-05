import 'server-only';

import { headers } from 'next/headers';

import { auth } from '@/shared/lib/auth';

export async function getCurrentUser() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session?.user ?? null;
}
