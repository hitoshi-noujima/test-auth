import { TextField } from '@/ui/elements/TextField';
import { AlertTextForForm } from '@/ui/widgets/AlertTextForForm';
import { LabelForForm } from '@/ui/widgets/LabelForForm';

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
      <LabelForForm htmlFor={fieldsUserNameId} required>
        名前
      </LabelForForm>
      <TextField
        {...fieldsUserNameProps}
        key={fieldsUserNameKey}
        placeholder="山田太郎"
        autoComplete="username"
        autoCorrect="off"
        autoCapitalize="off"
      />
      <AlertTextForForm id={fieldsUserNameErrorId} errors={fieldsUserNameErrors} />
    </div>
  );
};
