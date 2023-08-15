import styled from 'styled-components';

import { Todo } from '@/apis/todo/types';
import { TodoItem } from '@/components/domain/todo';

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

const Empty = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #bbb;
  margin-top: 1rem;
`;

const TodoList = ({ datas }: Props) => {
  return (
    <List>
      {datas.length ? (
        datas.map((data) => <TodoItem key={data.id} item={data} />)
      ) : (
        <Empty>등록된 Todo가 없습니다.</Empty>
      )}
    </List>
  );
};

export default TodoList;
