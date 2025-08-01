'use client';

import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { useActionState } from 'react';

import { signInSchema } from '@/features/auth/schemas';
import { signInAction } from '@/features/auth/sign-in/actions';
import { AlertText } from '@/ui/elements/AlertText';
import { Heading } from '@/ui/elements/Heading';
import { TextField } from '@/ui/elements/TextField';
import { ButtonWithLoading } from '@/ui/widgets/ButtonWithLoading';
import { LabelWithBadge } from '@/ui/widgets/LabelWithBadge';

export const SignIn: React.FC = () => {
  const [state, formAction, isPending] = useActionState(signInAction, undefined);

  const [form, fields] = useForm({
    lastResult: state,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: signInSchema });
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

      <div className="grid grid-cols-1 gap-4">
        <Heading level={1}>サインイン</Heading>

        <div className="grid grid-cols-1 gap-2">
          <div>
            <LabelWithBadge htmlFor={fields.email.id} required>
              メールアドレス
            </LabelWithBadge>
          </div>
          <TextField
            {...getInputProps(fields.email, { type: 'email' })}
            key={fields.email.key}
            placeholder="email@example.com"
          />
          <AlertText id={fields.email.errorId}>{fields.email.errors}</AlertText>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <div>
            <LabelWithBadge htmlFor={fields.password.id} required>
              パスワード
            </LabelWithBadge>
          </div>
          <TextField
            {...getInputProps(fields.password, { type: 'password' })}
            key={fields.password.key}
          />
          <AlertText id={fields.password.errorId}>{fields.password.errors}</AlertText>
        </div>

        <div>
          <ButtonWithLoading type="submit" disabled={isPending} loading={isPending}>
            サインイン
          </ButtonWithLoading>
        </div>
      </div>
    </form>
  );
};
