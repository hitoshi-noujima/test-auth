import { Heading } from '@/ui/elements/Heading';
import { SignInForm } from '@/ui/features/auth/SignInForm';

export const SignIn: React.FC = () => {
  return (
    <>
      <Heading id="sign-in-form-title" level={1}>
        サインイン
      </Heading>
      <div className="mt-8">
        <SignInForm labelledbyId="sign-in-form-title" />
      </div>
    </>
  );
};
