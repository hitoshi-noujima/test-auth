import { createAuthClient } from 'better-auth/client';

import { env } from '@/shared/config/env';

export const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_APP_URL,
});
