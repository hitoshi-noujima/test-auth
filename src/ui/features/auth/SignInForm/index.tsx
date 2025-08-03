'use client';

import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { useActionState } from 'react';

import { signInSchema } from '@/features/auth/schemas/signInUp';
import { signInAction } from '@/features/auth/sign-in/actions';

import { SignInFormUI } from './ui';

type Props = {
  labelledbyId?: string;
};

export const SignInForm: React.FC<Props> = ({ labelledbyId }) => {
  const [state, formAction, isPending] = useActionState(signInAction, undefined);

  const [form, fields] = useForm({
    lastResult: state,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: signInSchema });
    },
  });

  return (
    <SignInFormUI
      labelledbyId={labelledbyId}
      formAction={formAction}
      formProps={getFormProps(form)}
      fieldsEmailId={fields.email.id}
      fieldsEmailKey={fields.email.key}
      fieldsEmailErrorId={fields.email.errorId}
      fieldsEmailErrors={fields.email.errors}
      fieldsEmailProps={getInputProps(fields.email, { type: 'email' })}
      fieldsPasswordId={fields.password.id}
      fieldsPasswordKey={fields.password.key}
      fieldsPasswordErrorId={fields.password.errorId}
      fieldsPasswordErrors={fields.password.errors}
      fieldsPasswordProps={getInputProps(fields.password, { type: 'password' })}
      isPending={isPending}
      formErrors={form.errors}
    />
  );
};
