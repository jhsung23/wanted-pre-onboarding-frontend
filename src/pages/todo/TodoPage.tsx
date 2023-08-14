import styled from 'styled-components';

import { Heading } from '@/components/atom';
import { TodoInputForm, TodoList } from '@/components/domain/todo';

const Container = styled.section`
  width: 512px;
  padding: 0 4rem;
`;

const TodoPage = () => {
  return (
    <Container>
      <Heading>Todo List</Heading>
      <TodoInputForm />
      <TodoList
        datas={[
          { id: 1, todo: '공부하기 이력서 쓰기', isCompleted: false, userId: 1 },
          { id: 2, todo: '공부하기 이력서 쓰기', isCompleted: false, userId: 1 },
          { id: 3, todo: '공부하기 이력서 쓰기', isCompleted: false, userId: 1 },
          { id: 4, todo: '공부하기 이력서 쓰기', isCompleted: false, userId: 1 },
        ]}
      />
    </Container>
  );
};

export default TodoPage;
