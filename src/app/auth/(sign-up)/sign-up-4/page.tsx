import AuthWrapperFour from '@/app/shared/auth-layout/auth-wrapper-four';
import SignUpForm from './sign-up-form';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Sign Up 4'),
};

export default function SignUpPage() {
  return (
    <AuthWrapperFour
      title=""
      isSocialLoginActive={false}
    >
      <SignUpForm />
    </AuthWrapperFour>
  );
}
