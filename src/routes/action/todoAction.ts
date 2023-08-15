import { ActionFunction } from 'react-router-dom';

import { createTodo, deleteTodo, updateTodo } from '@/apis/todo/todo';

export const todoCreateAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const todo = formData.get('todo') as string;
  if (todo === '') return null;
  return createTodo({ todo });
};

export const todoUpdateAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const idToUpdate = Number(formData.get('id'));
  const todoToUpdate = formData.get('todo') as string;
  const isCompletedToUpdate = formData.get('isCompleted') === 'true';
  if (todoToUpdate === '') return null;
  return updateTodo({
    id: idToUpdate,
    todo: todoToUpdate,
    isCompleted: isCompletedToUpdate,
  });
};

export const todoDeleteAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const idToDelete = Number(formData.get('id'));
  return deleteTodo({ id: idToDelete });
};
