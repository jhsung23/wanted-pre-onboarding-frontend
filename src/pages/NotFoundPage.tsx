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
  return <Container>Page Not Found!</Container>;
};

export default NotFoundPage;
