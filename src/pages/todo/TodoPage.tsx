import { AxiosResponse } from 'axios';
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';

import { Todo } from '@/apis/todo/types';
import { Heading } from '@/components/atom';
import { TodoInputForm, TodoList } from '@/components/domain/todo';

const Container = styled.section`
  width: 512px;
  padding: 0 4rem;
`;

const TodoPage = () => {
  const { data } = useLoaderData() as AxiosResponse<Todo[]>;

  return (
    <Container>
      <Heading>Todo List</Heading>
      <TodoInputForm />
      <TodoList datas={data} />
    </Container>
  );
};

export default TodoPage;
