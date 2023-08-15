import { useState } from 'react';
import { useFetcher } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { Todo } from '@/apis/todo/types';
import { Button, Checkbox, Label } from '@/components/atom';
import { EditableTodoItem } from '@/components/domain/todo';

interface Props {
  item: Todo;
}

const ListItem = styled.li<{ isEditing: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 38px;
  font-size: medium;

  & span {
    width: 220px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${({ isEditing }) => {
    if (isEditing) {
      return css`
        & span {
          display: none;
        }
      `;
    }
  }}
`;

const TodoItem = ({ item }: Props) => {
  const { id, todo, isCompleted } = item;
  const [isEditing, setIsEditing] = useState(false);

  const fetcher = useFetcher();

  let status = fetcher.formData?.get('isCompleted') === 'true' || isCompleted;

  const deleteTodo = () => {
    fetcher.submit({ id }, { method: 'delete', action: '/todo/delete' });
  };

  const updateTodo = (input = todo) => {
    fetcher.submit(
      { id, todo: input, isCompleted: status },
      { method: 'put', action: '/todo/update' }
    );
  };

  return (
    <ListItem key={id} isEditing={isEditing}>
      <Label>
        <Checkbox
          name="isCompleted"
          checked={status}
          onChange={(e) => {
            status = e.target.checked;
            updateTodo();
          }}
        />
        <span>{todo}</span>
      </Label>
      {isEditing ? (
        <EditableTodoItem
          initialTodo={todo}
          updateTodo={updateTodo}
          quitEditing={() => setIsEditing(false)}
        />
      ) : (
        <div style={{ display: 'flex' }}>
          <Button
            data-testid="modify-button"
            color="secondary"
            size="small"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            수정
          </Button>
          <Button data-testid="delete-button" color="secondary" size="small" onClick={deleteTodo}>
            삭제
          </Button>
        </div>
      )}
    </ListItem>
  );
};

export default TodoItem;
