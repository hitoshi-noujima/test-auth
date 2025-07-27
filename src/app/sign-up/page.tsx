'use client';

import { useActionState } from 'react';
import { signUpAction } from '@/action/sign-up';

export default function Home() {
  const [state, formAction, isPending] = useActionState(signUpAction, null);

  return (
    <form action={formAction}>
      {state?.error?.message && <p>{state.error.message}</p>}

      <h1>サインアップ</h1>
      <div>
        <label htmlFor='email'>メールアドレス</label>
        <input id='email' type='email' name='email' required />
      </div>

      <div>
        <label htmlFor='name'>名前</label>
        <input id='name' type='text' name='name' required />
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
