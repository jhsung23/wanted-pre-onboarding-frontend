import styled from 'styled-components';

import { Button, Input } from '@/components/atom';
import { useState } from 'react';

const Form = styled.form`
  display: flex;
  padding: 0.5rem 0;
  gap: 0.5rem;
`;

const TodoInputForm = () => {
  const [input, setInput] = useState('');

  return (
    <Form action="post">
      <Input
        data-testid="new-todo-input"
        value={input}
        placeholder="할 일을 입력하세요."
        onChange={(e) => setInput(e.target.value)}
        style={{ flexGrow: 1 }}
      />
      <Button data-testid="new-todo-add-button" size="small">
        추가
      </Button>
    </Form>
  );
};

export default TodoInputForm;
