'use client';

import { useActionState } from 'react';
import { signInAction } from '@/action/sign-in';

export default function Home() {
  const [state, formAction, isPending] = useActionState(signInAction, null);

  return (
    <form action={formAction}>
      {state?.error?.message && <p>{state.error.message}</p>}

      <h1>サインイン</h1>
      <div>
        <label htmlFor='email'>メールアドレス</label>
        <input id='email' type='email' name='email' required />
      </div>

      <div>
        <label htmlFor='password'>パスワード</label>
        <input id='password' type='password' name='password' required />
      </div>

      <button type='submit' disabled={isPending}>
        送信
      </button>
    </form>
  );
}
