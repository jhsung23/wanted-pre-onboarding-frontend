import { axiosInstance } from '@/apis';
import { AuthPostRequest } from '@/apis/auth/types';

export const signUp = async ({ email, password }: AuthPostRequest) => {
  return await axiosInstance().post('/auth/signup', { email, password });
};

export const signIn = async ({ email, password }: AuthPostRequest) => {
  return await axiosInstance().post('/auth/signin', { email, password });
};
