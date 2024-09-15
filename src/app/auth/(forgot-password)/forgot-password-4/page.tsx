import AuthWrapperFour from '@/app/shared/auth-layout/auth-wrapper-four';
import ForgetPasswordForm from './forgot-password-form';

export default function ForgotPassword() {
  return (
    <AuthWrapperFour
      title={
        <>
          Восстановить пароль
        </>
      }
    >
      <ForgetPasswordForm />
    </AuthWrapperFour>
  );
}
