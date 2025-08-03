import { TextField } from '@/ui/elements/TextField';
import { FieldErrors } from '@/ui/widgets/FieldErrors';
import { FieldLabel } from '@/ui/widgets/FieldLabel';

import type { InputHTMLAttributes } from 'react';

export type Props = {
  fieldsUserNameId: string;
  fieldsUserNameKey: string | undefined;
  fieldsUserNameErrorId: string | undefined;
  fieldsUserNameErrors: string[] | undefined;
  fieldsUserNameProps: InputHTMLAttributes<HTMLInputElement>;
};

export const AuthFormUserName: React.FC<Props> = ({
  fieldsUserNameId,
  fieldsUserNameKey,
  fieldsUserNameErrorId,
  fieldsUserNameErrors,
  fieldsUserNameProps,
}) => {
  return (
    <div className="grid justify-items-start gap-2">
      <FieldLabel htmlFor={fieldsUserNameId} required>
        名前
      </FieldLabel>
      <TextField
        {...fieldsUserNameProps}
        key={fieldsUserNameKey}
        placeholder="山田太郎"
        autoComplete="username"
        autoCorrect="off"
        autoCapitalize="off"
      />
      <FieldErrors id={fieldsUserNameErrorId} errors={fieldsUserNameErrors} />
    </div>
  );
};
