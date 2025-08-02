import { TextField } from '@/ui/elements/TextField';
import { AlertTextForForm } from '@/ui/widgets/AlertTextForForm';
import { LabelForForm } from '@/ui/widgets/LabelForForm';

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
      <LabelForForm htmlFor={fieldsPasswordId} required>
        パスワード
      </LabelForForm>
      <TextField {...fieldsPasswordProps} key={fieldsPasswordKey} autoComplete="off" />
      <AlertTextForForm id={fieldsPasswordErrorId} errors={fieldsPasswordErrors} />
    </div>
  );
};
