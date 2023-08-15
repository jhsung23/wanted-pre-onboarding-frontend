import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '@/components/atom';

const Container = styled.div`
  display: flex;
  gap: 2rem;
`;

const MainPage = () => {
  const accessToken = localStorage.getItem('access_token');

  return (
    <Container>
      {accessToken ? (
        <Link to={'/todo'} style={{ textDecoration: 'none' }}>
          <Button>Todo List</Button>
        </Link>
      ) : (
        <>
          <Link to={'/signup'} style={{ textDecoration: 'none' }}>
            <Button>회원가입</Button>
          </Link>
          <Link to={'/signin'} style={{ textDecoration: 'none' }}>
            <Button>로그인</Button>
          </Link>
        </>
      )}
    </Container>
  );
};

export default MainPage;
