import { useState } from 'react';
import styled from 'styled-components';

import { Todo } from '@/apis/todo/types';
import { Button, Checkbox, Label } from '@/components/atom';

interface Props {
  item: Todo;
}

const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: medium;
  padding: 0.25rem 0;
`;

const TodoItem = ({ item }: Props) => {
  const { id, todo, isCompleted, userId } = item;
  const [isDone, setIsDone] = useState(isCompleted);

  return (
    <ListItem key={id}>
      <Label style={{ flexGrow: 1 }}>
        <Checkbox checked={isDone} onChange={(e) => setIsDone(!isDone)} />
        <span>{todo}</span>
      </Label>
      <Button data-testid="modify-button" color="secondary" size="small">
        수정
      </Button>
      <Button data-testid="delete-button" color="secondary" size="small">
        삭제
      </Button>
    </ListItem>
  );
};

export default TodoItem;