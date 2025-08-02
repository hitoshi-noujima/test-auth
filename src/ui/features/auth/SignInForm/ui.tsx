import { ButtonWithLoading } from '@/ui/widgets/ButtonWithLoading';

import { AuthFormEmail, type Props as AuthFormEmailProps } from '../AuthFormEmail';
import { AuthFormPassword, type Props as AuthFormPasswordProps } from '../AuthFormPassword';

import type { FormHTMLAttributes } from 'react';

type Props = AuthFormEmailProps &
  AuthFormPasswordProps & {
    labelledbyId?: string;
    formAction: (payload: FormData) => void;
    formProps: FormHTMLAttributes<HTMLFormElement>;
    isPending: boolean;
    formErrors?: string[];
  };

export const SignInFormUI: React.FC<Props> = ({
  labelledbyId,
  formAction,
  formProps,
  fieldsEmailId,
  fieldsEmailKey,
  fieldsEmailErrorId,
  fieldsEmailErrors,
  fieldsEmailProps,
  fieldsPasswordId,
  fieldsPasswordKey,
  fieldsPasswordErrorId,
  fieldsPasswordErrors,
  fieldsPasswordProps,
  isPending,
  formErrors,
}) => {
  return (
    <form action={formAction} aria-labelledby={labelledbyId} {...formProps}>
      {formErrors && (
        <ul className="text-error">
          {formErrors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <div className="grid gap-4">
        <AuthFormEmail
          fieldsEmailId={fieldsEmailId}
          fieldsEmailKey={fieldsEmailKey}
          fieldsEmailErrorId={fieldsEmailErrorId}
          fieldsEmailErrors={fieldsEmailErrors}
          fieldsEmailProps={fieldsEmailProps}
        />
        <AuthFormPassword
          fieldsPasswordId={fieldsPasswordId}
          fieldsPasswordKey={fieldsPasswordKey}
          fieldsPasswordErrorId={fieldsPasswordErrorId}
          fieldsPasswordErrors={fieldsPasswordErrors}
          fieldsPasswordProps={fieldsPasswordProps}
        />
        <div>
          <ButtonWithLoading type="submit" disabled={isPending} loading={isPending}>
            サインイン
          </ButtonWithLoading>
        </div>
      </div>
    </form>
  );
};
