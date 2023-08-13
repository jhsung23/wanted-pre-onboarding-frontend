import { Heading } from '@/components/atom';
import AuthForm from '@/components/domain/auth/AuthForm';

const SignUpPage = () => {
  return (
    <>
      <Heading>Sign Up</Heading>
      <AuthForm type="signup" />
    </>
  );
};

export default SignUpPage;
