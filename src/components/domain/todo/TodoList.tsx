import { Todo } from '@/apis/todo/types';
import styled from 'styled-components';
import TodoItem from './TodoItem';

type Props = {
  datas: Todo[];
};

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  padding: 1rem 0;
`;

const TodoList = ({ datas }: Props) => {
  return (
    <List>
      {datas.map((data) => (
        <TodoItem key={data.id} item={data} />
      ))}
    </List>
  );
};

export default TodoList;
