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
import { ButtonWithIcon } from '@/ui/widgets/ButtonWithIcon';

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

      <Heading level={1}>サインアップ</Heading>

      <div className="fieldset">
        <Label htmlFor={fields.name.id}>名前</Label>
        <TextField
          {...getInputProps(fields.name, { type: 'text' })}
          key={fields.name.key}
          placeholder="山田太郎"
        />
        <AlertText id={fields.name.errorId}>{fields.name.errors}</AlertText>

        <Label htmlFor={fields.email.id}>メールアドレス</Label>
        <TextField
          {...getInputProps(fields.email, { type: 'email' })}
          key={fields.email.key}
          placeholder="email@example.com"
        />
        <AlertText id={fields.email.errorId}>{fields.email.errors}</AlertText>

        <Label htmlFor={fields.password.id}>パスワード</Label>
        <TextField
          {...getInputProps(fields.password, { type: 'password' })}
          key={fields.password.key}
        />
        <AlertText id={fields.password.errorId}>{fields.password.errors}</AlertText>
      </div>

      <ButtonWithIcon type="submit" disabled={isPending} loading={isPending}>
        サインアップ
      </ButtonWithIcon>
    </form>
  );
};
