'use client';

import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { useActionState } from 'react';

import { signUpSchema } from '@/features/auth/schemas';
import { signUpAction } from '@/features/auth/sign-up/actions';
import { AlertText } from '@/ui/elements/AlertText';
import { Heading } from '@/ui/elements/Heading';
import { Label } from '@/ui/elements/Label';
import { TextField } from '@/ui/elements/TextField';
import { ButtonWithLoading } from '@/ui/widgets/ButtonWithLoading';
import { LabelWithBadge } from '@/ui/widgets/LabelWithBadge';

export const SignUp: React.FC = () => {
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

      <div className="grid grid-cols-1 gap-4">
        <Heading level={1}>サインアップ</Heading>

        <div className="grid grid-cols-1 gap-2">
          <div>
            <LabelWithBadge htmlFor={fields.name.id} required>
              名前
            </LabelWithBadge>
          </div>
          <TextField
            {...getInputProps(fields.name, { type: 'text' })}
            key={fields.name.key}
            placeholder="山田太郎"
          />
          <AlertText id={fields.name.errorId}>{fields.name.errors}</AlertText>
        </div>

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
            サインアップ
          </ButtonWithLoading>
        </div>
      </div>
    </form>
  );
};
