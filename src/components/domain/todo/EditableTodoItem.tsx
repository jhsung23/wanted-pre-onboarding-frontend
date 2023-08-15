import { useState } from 'react';
import styled from 'styled-components';

import { Button, Input } from '@/components/atom';

type Props = {
  initialTodo: string;
  updateTodo: (input: string) => void;
  quitEditing: () => void;
};

const ListItem = styled.div`
  display: flex;
  flex-grow: 1;
`;

const EditableTodoItem = ({ initialTodo, updateTodo, quitEditing }: Props) => {
  const [input, setInput] = useState(initialTodo);

  return (
    <ListItem>
      <Input
        style={{ flexGrow: 1, margin: '0 5px' }}
        data-testid="modify-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        color="primary"
        size="small"
        data-testid="submit-button"
        onClick={() => {
          updateTodo(input);
          quitEditing();
        }}
      >
        제출
      </Button>
      <Button
        color="secondary"
        size="small"
        data-testid="cancel-button"
        onClick={() => {
          quitEditing();
        }}
      >
        취소
      </Button>
    </ListItem>
  );
};

export default EditableTodoItem;
