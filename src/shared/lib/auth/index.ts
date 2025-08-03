import 'server-only';

import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { nextCookies } from 'better-auth/next-js';

import { database } from '@/database';

export const auth = betterAuth({
  /*
   * TODO: 実査のプロダクトではメール認証機能を追加
   * https://www.better-auth.com/docs/reference/options#emailandpassword
   * https://www.better-auth.com/docs/reference/options#emailverification
   *
   */
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  database: drizzleAdapter(database, {
    provider: 'sqlite',
  }),
  // レート制限設定（ブルートフォース攻撃対策）
  rateLimit: {
    enabled: true,
    window: 900, // 15分間（秒単位）
    max: 5, // 15分間で最大5回の試行
    customRules: {
      // サインインエンドポイントの制限をより厳しく
      '/sign-in/email': {
        window: 900, // 15分間
        max: 5, // 最大5回
      },
      // サインアップエンドポイントも制限
      '/sign-up/email': {
        window: 3600, // 1時間
        max: 3, // 最大3回
      },
    },
    storage: 'database', // データベースに保存
  },
  plugins: [nextCookies()],
});
