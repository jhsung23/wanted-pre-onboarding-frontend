import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_API_URL;

const axiosInstance = () => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default axiosInstance;
