import { Heading } from '@/components/atom';
import AuthForm from '@/components/domain/auth/AuthForm';

const SignInPage = () => {
  return (
    <>
      <Heading>Sign In</Heading>
      <AuthForm type="signin" />
    </>
  );
};

export default SignInPage;
