import { Button } from '@/ui/elements/Button';
import { TextField } from '@/ui/elements/TextField';
import { FieldErrors } from '@/ui/widgets/FieldErrors';

import type { FormHTMLAttributes, InputHTMLAttributes } from 'react';

type Props = {
  formAction: (payload: FormData) => void;
  formProps: FormHTMLAttributes<HTMLFormElement>;
  fieldsTitleKey: string | undefined;
  fieldsTitleErrorId: string | undefined;
  fieldsTitleErrors: string[] | undefined;
  fieldsTitleProps: InputHTMLAttributes<HTMLInputElement>;
};

export const CreatePostFormUI: React.FC<Props> = ({
  formAction,
  formProps,
  fieldsTitleKey,
  fieldsTitleErrorId,
  fieldsTitleErrors,
  fieldsTitleProps,
}) => {
  return (
    <form action={formAction} {...formProps}>
      <div className="flex items-center gap-2">
        <TextField {...fieldsTitleProps} key={fieldsTitleKey} />
        <Button type="submit">追加</Button>
      </div>
      <FieldErrors id={fieldsTitleErrorId} errors={fieldsTitleErrors} />
    </form>
  );
};
