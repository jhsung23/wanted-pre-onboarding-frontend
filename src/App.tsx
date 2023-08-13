import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';

const Main = styled.main`
  width: 100vw;
  height: 100vh;
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
