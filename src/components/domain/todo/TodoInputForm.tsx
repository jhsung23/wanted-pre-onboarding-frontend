import { useState } from 'react';
import { useFetcher } from 'react-router-dom';

import { Button, Input } from '@/components/atom';

const fetcherFormStyle = {
  display: 'flex',
  padding: '0.5rem 0',
  gap: '0.5rem',
};

const TodoInputForm = () => {
  const [input, setInput] = useState('');
  const fetcher = useFetcher();

  return (
    <fetcher.Form
      style={fetcherFormStyle}
      method="post"
      action="/todo/create"
      onSubmit={() => setInput('')}
    >
      <Input
        name="todo"
        data-testid="new-todo-input"
        value={input}
        placeholder="할 일을 입력하세요."
        onChange={(e) => setInput(e.target.value)}
        style={{ flexGrow: 1 }}
      />
      <Button data-testid="new-todo-add-button" size="small" disabled={input === ''}>
        추가
      </Button>
    </fetcher.Form>
  );
};

export default TodoInputForm;
