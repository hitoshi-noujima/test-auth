import { Heading } from '@/ui/elements/Heading';
import { SignUpForm } from '@/ui/features/auth/SignUpForm';

export const SignUp: React.FC = () => {
  return (
    <>
      <Heading id="sign-up-form-title" level={1}>
        サインアップ
      </Heading>
      <div className="mt-8">
        <SignUpForm labelledbyId="sign-up-form-title" />
      </div>
    </>
  );
};
