'use client';

import { redirect } from 'next/navigation';

import { authClient } from '@/lib/auth-client';

export default function Page() {
  return (
    <div>
      <p>認証ユーザーじゃないと見れないよ！！</p>

      <button
        type="button"
        onClick={async () => {
          await authClient.signOut();
          redirect('/');
        }}
      >
        サインアウトする
      </button>
    </div>
  );
}
