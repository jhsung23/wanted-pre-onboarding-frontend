import { Navigate } from 'react-router-dom';

import { Heading } from '@/components/atom';
import AuthForm from '@/components/domain/auth/AuthForm';

const SignInPage = () => {
  const accessToken = localStorage.getItem('access_token');
  if (accessToken) return <Navigate to={'/todo'} />;

  return (
    <>
      <Heading>Sign In</Heading>
      <AuthForm type="signin" />
    </>
  );
};

export default SignInPage;
