import { TextField } from '@/ui/elements/TextField';
import { FieldErrors } from '@/ui/widgets/FieldErrors';
import { FieldLabel } from '@/ui/widgets/FieldLabel';

import type { InputHTMLAttributes } from 'react';

export type Props = {
  fieldsEmailId: string;
  fieldsEmailKey: string | undefined;
  fieldsEmailErrorId: string | undefined;
  fieldsEmailErrors: string[] | undefined;
  fieldsEmailProps: InputHTMLAttributes<HTMLInputElement>;
};

export const AuthFormEmail: React.FC<Props> = ({
  fieldsEmailId,
  fieldsEmailKey,
  fieldsEmailErrorId,
  fieldsEmailErrors,
  fieldsEmailProps,
}) => {
  return (
    <div className="grid justify-items-start gap-2">
      <FieldLabel htmlFor={fieldsEmailId} required>
        メールアドレス
      </FieldLabel>
      <TextField
        {...fieldsEmailProps}
        key={fieldsEmailKey}
        placeholder="email@example.com"
        autoComplete="email"
      />
      <FieldErrors id={fieldsEmailErrorId} errors={fieldsEmailErrors} />
    </div>
  );
};
