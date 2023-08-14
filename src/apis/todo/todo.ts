import { axiosInstance } from '@/apis';
import { Todo, TodoPostRequest } from './types';

export const getTodos = () => {
  return axiosInstance().get<Todo>('/todos', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });
};

export const createTodo = (todo: TodoPostRequest) => {
  return axiosInstance().post('/todos', todo, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      'Content-Type': 'application/json',
    },
  });
};

export const updateTodo = () => {
  return axiosInstance().put('');
};

export const deleteTodo = () => {
  return axiosInstance().delete('');
};
