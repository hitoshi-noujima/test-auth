import { TextField } from '@/ui/elements/TextField';
import { AlertTextForForm } from '@/ui/widgets/AlertTextForForm';
import { LabelForForm } from '@/ui/widgets/LabelForForm';

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
      <LabelForForm htmlFor={fieldsEmailId} required>
        メールアドレス
      </LabelForForm>
      <TextField
        {...fieldsEmailProps}
        key={fieldsEmailKey}
        placeholder="email@example.com"
        autoComplete="email"
      />
      <AlertTextForForm id={fieldsEmailErrorId} errors={fieldsEmailErrors} />
    </div>
  );
};
