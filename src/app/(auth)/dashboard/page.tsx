'use client';

import { redirect } from 'next/navigation';
import { useTransition } from 'react';

import { authClient } from '@/shared/lib/auth-client';

import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'ダッシュボード',
//   description: 'ダッシュボード',
// };

export default function Page() {
  const [isPending, startTransition] = useTransition();

  const signOutClickHandler = () => {
    startTransition(async () => {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            redirect('/');
          },
        },
      });
    });
  };

  return (
    <div>
      <p>認証ユーザーじゃないと見れないよ！！</p>

      <button type="button" onClick={signOutClickHandler} disabled={isPending}>
        サインアウトする
      </button>
    </div>
  );
}
