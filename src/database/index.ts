import { drizzle } from 'drizzle-orm/libsql';

import { env } from '@/config/env';

import * as schema from './schema';

export const database = drizzle({
  connection: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  },
  schema,
});
