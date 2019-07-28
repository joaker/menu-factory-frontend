import axios from 'axios';

export const timeout = 1 * 1000;
export const request = axios.create({
  baseURL: '/api',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default request;
