import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';

const Main = styled.main`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Main>
      <Outlet />
    </Main>
  );
}

export default App;
