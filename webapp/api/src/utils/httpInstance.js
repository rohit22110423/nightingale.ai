import axios from 'axios';
const baseURL = process.env.MIDDLEWARE_URL || 'http://localhost:5002/api';

const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true
});

instance.interceptors.response.use(undefined, error => {
  if (axios.isCancel(error)) {
    console.log(`request cancelled`);
  }
  return Promise.reject(error.response?.data?.error);
});

export default instance;