import { TextField } from '@/ui/elements/TextField';
import { FieldErrors } from '@/ui/widgets/FieldErrors';
import { FieldLabel } from '@/ui/widgets/FieldLabel';

import type { InputHTMLAttributes } from 'react';

export type Props = {
  fieldsPasswordId: string;
  fieldsPasswordKey: string | undefined;
  fieldsPasswordErrorId: string | undefined;
  fieldsPasswordErrors: string[] | undefined;
  fieldsPasswordProps: InputHTMLAttributes<HTMLInputElement>;
};

export const AuthFormPassword: React.FC<Props> = ({
  fieldsPasswordId,
  fieldsPasswordKey,
  fieldsPasswordErrorId,
  fieldsPasswordErrors,
  fieldsPasswordProps,
}) => {
  return (
    <div className="grid justify-items-start gap-2">
      <FieldLabel htmlFor={fieldsPasswordId} required>
        パスワード
      </FieldLabel>
      <TextField {...fieldsPasswordProps} key={fieldsPasswordKey} autoComplete="off" />
      <FieldErrors id={fieldsPasswordErrorId} errors={fieldsPasswordErrors} />
    </div>
  );
};
