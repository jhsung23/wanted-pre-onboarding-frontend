import { Navigate } from 'react-router-dom';

import { Heading } from '@/components/atom';
import AuthForm from '@/components/domain/auth/AuthForm';

const SignUpPage = () => {
  const accessToken = localStorage.getItem('access_token');
  if (accessToken) return <Navigate to={'/todo'} />;

  return (
    <>
      <Heading>Sign Up</Heading>
      <AuthForm type="signup" />
    </>
  );
};

export default SignUpPage;
