'use client';

import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { useActionState } from 'react';

import { signUpSchema } from '@/features/auth/schemas';
import { signUpAction } from '@/features/auth/sign-up/actions';

import { SignUpFormUI } from './ui';

type Props = {
  labelledbyId?: string;
};

export const SignUpForm: React.FC<Props> = ({ labelledbyId }) => {
  const [state, formAction, isPending] = useActionState(signUpAction, undefined);

  const [form, fields] = useForm({
    lastResult: state,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: signUpSchema });
    },
  });

  return (
    <SignUpFormUI
      labelledbyId={labelledbyId}
      formAction={formAction}
      formProps={getFormProps(form)}
      fieldsUserNameId={fields.name.id}
      fieldsUserNameKey={fields.name.key}
      fieldsUserNameErrorId={fields.name.errorId}
      fieldsUserNameErrors={fields.name.errors}
      fieldsUserNameProps={getInputProps(fields.name, { type: 'text' })}
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
