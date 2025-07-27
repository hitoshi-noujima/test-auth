'use client';

import { useActionState } from 'react';
import { signUpAction } from '@/action/sign-up';

export default function Page() {
  const [state, formAction, isPending] = useActionState(signUpAction, null);

  return (
    <form action={formAction}>
      {state?.error?.message && (
        <p className='text-red-500'>{state.error.message}</p>
      )}

      <h1>サインアップ</h1>

      <div>
        <label htmlFor='name'>名前</label>
        <input id='name' name='name' type='text' required />
      </div>

      <div>
        <label htmlFor='email'>メールアドレス</label>
        <input id='email' name='email' type='email' required />
      </div>

      <div>
        <label htmlFor='password'>パスワード</label>
        <input id='password' name='password' type='password' required />
      </div>

      <button type='submit' disabled={isPending}>
        送信
      </button>
    </form>
  );
}
