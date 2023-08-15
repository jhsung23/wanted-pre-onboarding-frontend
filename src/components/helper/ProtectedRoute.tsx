import { Navigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const accessToken = localStorage.getItem('access_token');

  if (accessToken) return <>{children}</>;
  return <Navigate to={'/signin'} replace />;
};

export default ProtectedRoute;
