import { AxiosError } from 'axios';
import { Navigate, useRouteError } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: x-large;
`;

const NotFoundPage = () => {
  const error = useRouteError() as AxiosError;
  if (error.response?.status === 401) return <Navigate to={'/signin'} />;
  return <Container>Page Not Found!</Container>;
};

export default NotFoundPage;
