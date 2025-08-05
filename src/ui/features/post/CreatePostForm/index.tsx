'use client';

import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { useActionState } from 'react';

import { createPostAction } from '@/features/post/actions/create';
import { createPostSchema } from '@/features/post/schemas';

import { CreatePostFormUI } from './ui';

export const CreatePostForm: React.FC = () => {
  const [state, formAction] = useActionState(createPostAction, undefined);

  const [form, fields] = useForm({
    lastResult: state && 'status' in state ? state : undefined,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: createPostSchema });
    },
  });

  return (
    <CreatePostFormUI
      formAction={formAction}
      formProps={getFormProps(form)}
      fieldsTitleKey={fields.title.key}
      fieldsTitleErrorId={fields.title.errorId}
      fieldsTitleErrors={fields.title.errors}
      fieldsTitleProps={getInputProps(fields.title, { type: 'text' })}
    />
  );
};
