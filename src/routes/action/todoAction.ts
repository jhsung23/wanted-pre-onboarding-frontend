import { ActionFunction } from 'react-router-dom';

import { createTodo, deleteTodo, updateTodo } from '@/apis/todo/todo';

export const todoCreateAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const todo = formData.get('todo') as string;
  return createTodo({ todo });
};

export const todoUpdateAction: ActionFunction = async ({ request }) => {
  return updateTodo();
};

export const todoDeleteAction: ActionFunction = async ({ request }) => {
  return deleteTodo();
};
