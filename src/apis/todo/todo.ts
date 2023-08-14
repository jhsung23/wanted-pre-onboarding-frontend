import { axiosInstance } from '@/apis';
import { Todo } from './types';

export const getTodos = () => {
  return axiosInstance().get<Todo>('/todos', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });
};

export const createTodo = () => {
  return axiosInstance().post('');
};

export const updateTodo = () => {
  return axiosInstance().put('');
};

export const deleteTodo = () => {
  return axiosInstance().delete('');
};
