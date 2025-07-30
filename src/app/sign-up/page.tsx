'use client';

import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { useActionState } from 'react';

import { signUpSchema } from '@/features/auth/schemas';
import { signUpAction } from '@/features/auth/sign-up/actions';

import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Sign Up',
//   description: 'Sign Up',
// };

export default function Page() {
  const [state, formAction, isPending] = useActionState(signUpAction, undefined);

  const [form, fields] = useForm({
    lastResult: state,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: signUpSchema });
    },
  });

  return (
    <form action={formAction} {...getFormProps(form)}>
      {form.errors && (
        <ul className="text-red-500">
          {form.errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}

      <h1>サインアップ</h1>

      <div>
        <label htmlFor={fields.name.id}>名前</label>
        <input {...getInputProps(fields.name, { type: 'text' })} key={fields.name.key} />
        <p id={fields.name.errorId} className="text-red-500">
          {fields.name.errors}
        </p>
      </div>

      <div>
        <label htmlFor={fields.email.id}>メールアドレス</label>
        <input {...getInputProps(fields.email, { type: 'email' })} key={fields.email.key} />
        <p id={fields.email.errorId} className="text-red-500">
          {fields.email.errors}
        </p>
      </div>

      <div>
        <label htmlFor={fields.password.id}>パスワード</label>
        <input
          {...getInputProps(fields.password, { type: 'password' })}
          key={fields.password.key}
        />
        <p id={fields.password.errorId} className="text-red-500">
          {fields.password.errors}
        </p>
      </div>

      <button type="submit" disabled={isPending}>
        送信
      </button>
    </form>
  );
}
