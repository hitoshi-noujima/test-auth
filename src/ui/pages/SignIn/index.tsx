'use client';

import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { useActionState } from 'react';

import { signInSchema } from '@/features/auth/schemas';
import { signInAction } from '@/features/auth/sign-in/actions';
import { AlertText } from '@/ui/elements/AlertText';
import { Heading } from '@/ui/elements/Heading';
import { Label } from '@/ui/elements/Label';
import { TextField } from '@/ui/elements/TextField';
import { ButtonWithIcon } from '@/ui/widgets/ButtonWithIcon';

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

      <Heading level={1}>サインイン</Heading>

      <div className="fieldset">
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
        サインイン
      </ButtonWithIcon>
    </form>
  );
};
